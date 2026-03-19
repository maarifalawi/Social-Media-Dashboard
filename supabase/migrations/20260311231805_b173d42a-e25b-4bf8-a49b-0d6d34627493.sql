
-- =====================================================
-- FIX 1: kompetitor - Replace platform_kompetitor TEXT with id_platform UUID FK
-- =====================================================
ALTER TABLE public.kompetitor ADD COLUMN id_platform uuid REFERENCES public.platform(id_platform);

-- Migrate existing text data to FK (match by kode_platform)
UPDATE public.kompetitor k
SET id_platform = p.id_platform
FROM public.platform p
WHERE LOWER(p.kode_platform) = LOWER(k.platform_kompetitor);

-- Drop old text column
ALTER TABLE public.kompetitor DROP COLUMN platform_kompetitor;

-- =====================================================
-- FIX 2: jadwal_konten - Rename id → id_jadwal_konten, Replace platform TEXT with id_platform UUID FK
-- =====================================================
ALTER TABLE public.jadwal_konten RENAME COLUMN id TO id_jadwal_konten;

ALTER TABLE public.jadwal_konten ADD COLUMN id_platform uuid REFERENCES public.platform(id_platform);

-- Migrate existing text data to FK
UPDATE public.jadwal_konten jk
SET id_platform = p.id_platform
FROM public.platform p
WHERE LOWER(p.kode_platform) = LOWER(jk.platform);

-- Drop old text column
ALTER TABLE public.jadwal_konten DROP COLUMN platform;

-- =====================================================
-- FIX 3: pertanyaan.dijawab_oleh - FK should reference profil(id_profil) not auth.users
-- =====================================================
ALTER TABLE public.pertanyaan DROP CONSTRAINT IF EXISTS pertanyaan_dijawab_oleh_fkey;
ALTER TABLE public.pertanyaan ADD CONSTRAINT pertanyaan_dijawab_oleh_profil_fkey 
  FOREIGN KEY (dijawab_oleh) REFERENCES public.profil(id_profil);

-- =====================================================
-- FIX 4: target_kpi - Add UNIQUE constraint to prevent duplicate periods
-- =====================================================
ALTER TABLE public.target_kpi ADD CONSTRAINT uq_target_kpi_proyek_periode 
  UNIQUE (id_proyek, jenis_periode, tanggal_mulai_periode);

-- =====================================================
-- FIX 5: Consistency triggers for denormalized id_proyek
-- =====================================================
-- Postingan: auto-sync id_proyek from dataset
CREATE OR REPLACE FUNCTION public.sync_postingan_proyek()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
DECLARE
  v_proyek_id uuid;
BEGIN
  SELECT id_proyek INTO v_proyek_id FROM public.dataset WHERE id_dataset = NEW.id_dataset;
  IF v_proyek_id IS NOT NULL THEN
    NEW.id_proyek := v_proyek_id;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_sync_postingan_proyek
  BEFORE INSERT OR UPDATE ON public.postingan
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_postingan_proyek();

-- Catatan: auto-sync id_proyek from dataset (when id_dataset is provided)
CREATE OR REPLACE FUNCTION public.sync_catatan_proyek()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
DECLARE
  v_proyek_id uuid;
BEGIN
  IF NEW.id_dataset IS NOT NULL THEN
    SELECT id_proyek INTO v_proyek_id FROM public.dataset WHERE id_dataset = NEW.id_dataset;
    IF v_proyek_id IS NOT NULL THEN
      NEW.id_proyek := v_proyek_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_sync_catatan_proyek
  BEFORE INSERT OR UPDATE ON public.catatan
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_catatan_proyek();
