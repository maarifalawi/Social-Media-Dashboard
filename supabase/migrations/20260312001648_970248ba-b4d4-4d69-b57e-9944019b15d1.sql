
-- =====================================================
-- DROP UNUSED COLUMNS
-- =====================================================

-- 1. profil: foto_profil_url (tidak ada UI upload/tampil foto)
ALTER TABLE public.profil DROP COLUMN IF EXISTS foto_profil_url;

-- 2. profil: bahasa (tidak ada UI pilih bahasa)
ALTER TABLE public.profil DROP COLUMN IF EXISTS bahasa;

-- 3. log_impor: kolom_hilang (tidak pernah di-insert/read di code)
ALTER TABLE public.log_impor DROP COLUMN IF EXISTS kolom_hilang;

-- 4. riwayat_export: filter_export (tidak pernah di-insert/read di code)
ALTER TABLE public.riwayat_export DROP COLUMN IF EXISTS filter_export;

-- 5. jadwal_konten: custom_reminder_menit (tidak ada halaman UI)
ALTER TABLE public.jadwal_konten DROP COLUMN IF EXISTS custom_reminder_menit;

-- 6. jadwal_konten: email_sent (tidak ada halaman UI)
ALTER TABLE public.jadwal_konten DROP COLUMN IF EXISTS email_sent;

-- 7. jadwal_konten: reminder_waktu (tidak ada halaman UI)
ALTER TABLE public.jadwal_konten DROP COLUMN IF EXISTS reminder_waktu;

-- 8. jadwal_konten: deskripsi (tidak ada halaman UI)
ALTER TABLE public.jadwal_konten DROP COLUMN IF EXISTS deskripsi;
