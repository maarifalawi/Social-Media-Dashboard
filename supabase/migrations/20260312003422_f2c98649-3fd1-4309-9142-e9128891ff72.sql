
-- Seed data untuk tabel platform (jika belum ada)
INSERT INTO public.platform (kode_platform, nama_platform, warna_platform, platform_aktif)
VALUES 
  ('instagram', 'Instagram', '#E1306C', true),
  ('tiktok', 'TikTok', '#000000', true),
  ('facebook', 'Facebook', '#1877F2', true),
  ('twitter', 'Twitter/X', '#1DA1F2', true),
  ('youtube', 'YouTube', '#FF0000', true)
ON CONFLICT (kode_platform) DO NOTHING;

-- Seed data untuk tabel jenis_konten (jika belum ada)
INSERT INTO public.jenis_konten (kode_jenis_konten, nama_jenis_konten, jenis_konten_aktif)
VALUES 
  ('image', 'Image Post', true),
  ('video', 'Video', true),
  ('carousel', 'Carousel', true),
  ('reels', 'Reels', true),
  ('story', 'Story', true),
  ('text', 'Text Post', true)
ON CONFLICT (kode_jenis_konten) DO NOTHING;
