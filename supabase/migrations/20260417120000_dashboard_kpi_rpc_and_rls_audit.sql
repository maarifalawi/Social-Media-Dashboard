-- Ensure RLS is enabled on critical tables (idempotent)
DO $$
DECLARE
  tbl text;
BEGIN
  FOREACH tbl IN ARRAY ARRAY['proyek', 'dataset', 'postingan', 'log_impor', 'profil']
  LOOP
    IF EXISTS (
      SELECT 1 FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = tbl
    ) THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', tbl);
    END IF;
  END LOOP;
END $$;

-- Aggregated dashboard KPI RPC. Returns a single JSON row computed in the database
-- so the client doesn't fetch every row just to compute averages/medians.
CREATE OR REPLACE FUNCTION public.dashboard_kpi(
  p_id_proyek uuid,
  p_id_dataset uuid
)
RETURNS TABLE (
  total_posts bigint,
  avg_er numeric,
  median_reach numeric,
  followers_now bigint,
  total_reach bigint,
  total_saves bigint,
  total_shares bigint
)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  WITH base AS (
    SELECT
      p.engagement_rate_persen,
      p.jumlah_reach,
      p.jumlah_saved,
      p.jumlah_shares,
      p.jumlah_followers,
      p.waktu_diposting
    FROM public.postingan p
    WHERE p.id_proyek = p_id_proyek
      AND p.id_dataset = p_id_dataset
  ),
  latest AS (
    SELECT jumlah_followers
    FROM base
    ORDER BY waktu_diposting DESC
    LIMIT 1
  )
  SELECT
    COUNT(*)::bigint AS total_posts,
    -- Treat NULL engagement rates as 0 to match the client-side fallback (computeKpi)
    -- so KPI cards show identical values whether the RPC is used or not.
    COALESCE(ROUND(AVG(COALESCE(engagement_rate_persen, 0))::numeric, 2), 0) AS avg_er,
    COALESCE(
      PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY jumlah_reach)::numeric,
      0
    ) AS median_reach,
    COALESCE((SELECT jumlah_followers FROM latest), 0)::bigint AS followers_now,
    COALESCE(SUM(GREATEST(jumlah_reach, 1)), 0)::bigint AS total_reach,
    COALESCE(SUM(jumlah_saved), 0)::bigint AS total_saves,
    COALESCE(SUM(jumlah_shares), 0)::bigint AS total_shares
  FROM base;
$$;

GRANT EXECUTE ON FUNCTION public.dashboard_kpi(uuid, uuid) TO authenticated;

-- Platform distribution RPC
CREATE OR REPLACE FUNCTION public.dashboard_platform_distribution(
  p_id_proyek uuid,
  p_id_dataset uuid
)
RETURNS TABLE (name text, count bigint)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT
    COALESCE(pl.nama_platform, 'Tidak Diketahui') AS name,
    COUNT(*)::bigint AS count
  FROM public.postingan p
  LEFT JOIN public.platform pl ON pl.id_platform = p.id_platform
  WHERE p.id_proyek = p_id_proyek
    AND p.id_dataset = p_id_dataset
  GROUP BY pl.nama_platform
  ORDER BY count DESC;
$$;

GRANT EXECUTE ON FUNCTION public.dashboard_platform_distribution(uuid, uuid) TO authenticated;
