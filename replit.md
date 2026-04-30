# Analytics Sosmed

Platform analitik media sosial untuk UMKM. React + TypeScript + Vite + Tailwind + shadcn/ui di frontend, Supabase (Postgres + Auth + RLS) di backend.

## Stack
- Vite 5 + React 18 + TypeScript
- React Router v6 (future flags `v7_startTransition` & `v7_relativeSplatPath` aktif)
- Supabase JS client
- Tailwind + shadcn/ui + Recharts
- PapaParse untuk parsing CSV
- date-fns untuk formatting tanggal

## Struktur penting
- `src/App.tsx` — root, dibungkus `ErrorBoundary` + `BrowserRouter` dengan future flags.
- `src/pages/` — halaman utama (Dashboard, Performa, Import, Laporan, RingkasanInsight, dll).
- `src/components/ErrorBoundary.tsx` — global error boundary.
- `src/components/EmptyState.tsx` — komponen empty-state reusable.
- `src/components/charts/` — wrapper chart Recharts (sudah ber-ARIA label).
- `src/lib/csv.ts` — wrapper PapaParse (`parseCsvText`, `parseCSV`, `getCellValue`); error fatal mencakup delimiter, quote mismatch, dan field mismatch.
- `src/lib/analytics.ts` — utilitas KPI/tren mingguan/distribusi platform/best posting time.
- `src/lib/errors.ts` — `getErrorMessage` + `logAndToast` untuk catch yang konsisten.
- `supabase/migrations/` — skema + RLS. Migration `20260417120000_dashboard_kpi_rpc_and_rls_audit.sql` mengaktifkan RLS pada tabel kritikal dan menambah RPC `dashboard_kpi` + `dashboard_platform_distribution` (`SECURITY INVOKER`).

## Konvensi
- Skema database memakai nama kolom Bahasa Indonesia (`id_proyek`, `id_dataset`, `engagement_rate_persen`, dst). Hormati ini di kode baru.
- Cleanup setelah gagal import harus selalu pakai ID spesifik (`id_dataset` + `id_proyek`), jangan pakai filter berbasis nama saja.
- Semua catch sebaiknya pakai `logAndToast` agar pesan ke user konsisten.
- `Dashboard.tsx` memanggil RPC `dashboard_kpi` paralel dengan `SELECT postingan`; jika RPC gagal (mis. migration belum di-apply), otomatis fallback ke `computeKpi()` client-side. SQL `dashboard_kpi` di-COALESCE NULL-engagement-rate ke 0 supaya hasil identik dengan fallback.

## Workflow
- `Start application`: `npm run dev` (Vite di port 5000).
