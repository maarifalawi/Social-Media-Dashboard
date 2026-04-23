# DOKUMEN PENGUJIAN SISTEM
## Platform Analitik Media Sosial untuk UMKM (Analytics Sosmed)

---

## 1. Pendahuluan

Dokumen ini berisi instrumen pengujian sistem Analytics Sosmed yang terdiri atas dua jenis pengujian, yaitu pengujian *black-box* untuk memvalidasi fungsionalitas perangkat lunak terhadap spesifikasi kebutuhan, dan pengujian penerimaan pengguna (*User Acceptance Testing*/UAT) menggunakan instrumen *System Usability Scale* (SUS) untuk mengukur tingkat kebergunaan sistem dari sudut pandang pengguna.

### 1.1 Tujuan Pengujian

1. Memastikan setiap fitur sistem berjalan sesuai dengan spesifikasi kebutuhan fungsional yang telah ditetapkan pada Bab 3.
2. Mengidentifikasi cacat (*defect*) yang masih tersisa sebelum sistem diserahkan kepada pengguna akhir.
3. Mengukur tingkat kebergunaan sistem berdasarkan persepsi pengguna riil (UMKM dan kalangan akademik).

### 1.2 Lingkungan Pengujian

| Aspek | Spesifikasi |
|---|---|
| URL aplikasi | `https://[domain-aplikasi]` (lingkungan produksi) |
| Browser | Google Chrome 124+, Mozilla Firefox 125+, Safari 17+ |
| Resolusi layar | Desktop 1920×1080, Tablet 768×1024, Mobile 360×800 |
| Koneksi | Broadband ≥ 5 Mbps |
| Akun uji | `tester@analytics.test` (peran: pemilik proyek) |
| Periode pengujian | 1 Mei 2026 – 15 Mei 2026 |

### 1.3 Tim Penguji

| Peran | Nama | Tanggung Jawab |
|---|---|---|
| Penguji black-box | (Peneliti) | Eksekusi seluruh kasus uji black-box |
| Responden UAT | 30 orang | Mengisi kuesioner SUS setelah mencoba sistem |

---

## 2. Pengujian Black-Box

Pengujian black-box dilakukan dengan pendekatan *equivalence partitioning* dan *boundary value analysis*. Penguji tidak melihat struktur kode internal melainkan hanya memverifikasi pasangan input dan output sistem.

### 2.1 Format Tabel Kasus Uji

Setiap kasus uji direkam dengan kolom sebagai berikut.

- **ID Kasus Uji**: kode unik (TC-MOD-NN).
- **Deskripsi**: ringkasan tujuan kasus uji.
- **Prasyarat**: kondisi yang harus terpenuhi sebelum eksekusi.
- **Langkah Pengujian**: urutan tindakan yang dilakukan penguji.
- **Hasil yang Diharapkan**: output sistem yang seharusnya muncul.
- **Hasil Aktual**: output sistem yang benar-benar muncul saat pengujian.
- **Status**: *Pass* jika hasil aktual sesuai harapan, *Fail* jika tidak.

### 2.2 Modul Autentikasi

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-AUTH-01 | Registrasi akun baru dengan data valid | Buka halaman daftar; isi email valid + password ≥ 8 karakter; klik Daftar | Akun terbuat, sistem mengarahkan ke halaman dashboard, profil tersimpan di basis data |  |  |
| TC-AUTH-02 | Registrasi dengan email tidak valid | Isi email "abc@" lalu klik Daftar | Sistem menolak, menampilkan pesan validasi format email |  |  |
| TC-AUTH-03 | Registrasi dengan password kurang dari 8 karakter | Isi password "123" lalu klik Daftar | Sistem menolak, menampilkan pesan validasi panjang minimum |  |  |
| TC-AUTH-04 | Login dengan kredensial benar | Buka halaman masuk; isi email + password terdaftar; klik Masuk | Sistem mengarahkan ke dashboard, sesi pengguna aktif |  |  |
| TC-AUTH-05 | Login dengan password salah | Isi password yang berbeda dari yang terdaftar | Sistem menolak, menampilkan pesan kredensial tidak valid |  |  |
| TC-AUTH-06 | Login dengan email tidak terdaftar | Isi email yang belum pernah didaftarkan | Sistem menolak, menampilkan pesan kredensial tidak valid |  |  |
| TC-AUTH-07 | Permintaan reset password | Klik *Lupa Password*; isi email terdaftar; klik Kirim | Sistem mengirim tautan reset ke email yang dimaksud, menampilkan notifikasi sukses |  |  |
| TC-AUTH-08 | Logout | Klik menu profil → Keluar | Sesi pengguna berakhir, sistem mengarahkan ke halaman masuk |  |  |
| TC-AUTH-09 | Akses halaman dashboard tanpa login | Buka URL `/dashboard` di tab baru tanpa sesi aktif | Sistem mengalihkan otomatis ke halaman masuk |  |  |

### 2.3 Modul Manajemen Proyek dan Dataset

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-PROJ-01 | Membuat proyek baru | Klik tombol *Tambah Proyek*; isi nama proyek; klik Simpan | Proyek baru tersimpan dan muncul di daftar proyek pengguna |  |  |
| TC-PROJ-02 | Membuat proyek dengan nama kosong | Kosongkan nama proyek; klik Simpan | Sistem menolak, menampilkan pesan nama wajib diisi |  |  |
| TC-PROJ-03 | Mengganti proyek aktif | Pilih proyek lain dari pemilih proyek di header | Konteks aplikasi berpindah ke proyek terpilih, dashboard memuat data proyek tersebut |  |  |
| TC-PROJ-04 | Menghapus proyek | Klik aksi hapus pada proyek; konfirmasi penghapusan | Proyek dan seluruh dataset di dalamnya terhapus, daftar diperbarui |  |  |
| TC-DS-01 | Membuat dataset baru pada proyek aktif | Buka halaman Dataset; klik Tambah; isi nama dataset; klik Simpan | Dataset baru tersimpan dan otomatis menjadi dataset aktif |  |  |
| TC-DS-02 | Menjadikan dataset lain sebagai aktif | Klik tombol *Aktifkan* pada dataset non-aktif | Dataset terpilih ditandai aktif, dashboard mengambil data dari dataset tersebut |  |  |

### 2.4 Modul Impor Data

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-IMP-01 | Impor CSV valid sesuai template | Buka halaman Impor; unggah CSV 50 baris dengan header yang lengkap; klik Impor | Data tersimpan ke dataset aktif, sistem menampilkan ringkasan jumlah baris berhasil diimpor |  |  |
| TC-IMP-02 | Impor file dengan format selain CSV (mis. .xlsx) | Unggah file `data.xlsx` | Sistem menolak, menampilkan pesan format tidak didukung |  |  |
| TC-IMP-03 | Impor CSV dengan header tidak lengkap | Hapus kolom `engagement_rate_persen` lalu unggah | Sistem menampilkan pesan validasi kolom wajib hilang dan menolak impor |  |  |
| TC-IMP-04 | Impor CSV dengan tipe data tidak sesuai | Isi kolom `jumlah_likes` dengan teks "abc" | Sistem menampilkan pesan validasi tipe data per baris dan menolak baris bersangkutan |  |  |
| TC-IMP-05 | Impor CSV berukuran besar (1000 baris) | Unggah CSV 1000 baris valid | Sistem menyelesaikan impor tanpa *freeze*, indikator kemajuan berjalan, total baris sesuai |  |  |
| TC-IMP-06 | Impor saat tidak ada dataset aktif | Pilih proyek tanpa dataset aktif; coba impor | Sistem menolak dan meminta pengguna membuat/memilih dataset terlebih dahulu |  |  |

### 2.5 Modul Dashboard

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-DSH-01 | Menampilkan KPI ringkas | Buka Dashboard pada dataset berisi data | Enam kartu KPI tampil: Total Postingan, Rata-rata ER, Pengikut, Median Jangkauan, Rasio Simpan, Rasio Bagikan, dengan nilai sesuai data |  |  |
| TC-DSH-02 | Menampilkan tren engagement rate mingguan | Buka Dashboard | Grafik garis tren ER per minggu tampil, sumbu X tanggal mingguan, sumbu Y persentase |  |  |
| TC-DSH-03 | Menampilkan distribusi platform | Buka Dashboard | Grafik batang horizontal distribusi platform tampil, label dan persentase terbaca |  |  |
| TC-DSH-04 | Menampilkan distribusi tipe konten | Buka Dashboard | Grafik batang horizontal distribusi tipe konten tampil, label dan persentase terbaca |  |  |
| TC-DSH-05 | Menampilkan kartu insight otomatis | Buka Dashboard | Tiga kartu narasi insight (tren ER, platform, tipe konten) tampil dengan kalimat yang konsisten dengan nilai grafik |  |  |
| TC-DSH-06 | Kustomisasi widget | Klik *Kustomisasi*; nonaktifkan widget Insight; tutup dialog | Widget Insight disembunyikan dari dashboard, preferensi tersimpan dan tetap berlaku setelah *reload* |  |  |
| TC-DSH-07 | Dashboard pada dataset kosong | Pilih dataset tanpa postingan | Sistem menampilkan *empty state* dengan ajakan impor data, kartu KPI tidak ditampilkan |  |  |

### 2.6 Modul Performa Konten

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-PRF-01 | Menampilkan tabel postingan | Buka halaman Performa | Tabel daftar postingan tampil dengan paginasi default 10 baris, kolom lengkap |  |  |
| TC-PRF-02 | Filter rentang tanggal | Isi *Dari Tanggal* = awal bulan, *Sampai Tanggal* = akhir bulan | Tabel hanya menampilkan postingan dalam rentang yang dipilih |  |  |
| TC-PRF-03 | Filter platform | Centang hanya platform Instagram | Tabel hanya menampilkan postingan platform Instagram |  |  |
| TC-PRF-04 | Filter tipe konten | Centang hanya tipe Reels | Tabel hanya menampilkan postingan tipe Reels |  |  |
| TC-PRF-05 | Filter kombinasi | Atur tanggal + platform + minimum jangkauan + kata kunci caption | Tabel menampilkan baris yang memenuhi seluruh kriteria |  |  |
| TC-PRF-06 | Pengurutan berdasarkan ER | Pilih *Urutkan: ER* | Tabel terurut menurun berdasarkan engagement rate |  |  |
| TC-PRF-07 | Pengurutan berdasarkan jangkauan | Pilih *Urutkan: Jangkauan* | Tabel terurut menurun berdasarkan jangkauan |  |  |
| TC-PRF-08 | Insight otomatis berubah saat sortir | Ganti pilihan sortir dari ER ke Jangkauan | Teks insight di bagian bawah memperbarui narasinya sesuai perspektif sortir |  |  |
| TC-PRF-09 | Ekspor CSV | Klik tombol Ekspor pada filter aktif | Berkas CSV terunduh berisi data sesuai hasil filter |  |  |
| TC-PRF-10 | Tampilan tabel pada layar mobile | Buka halaman Performa pada lebar 360 px | Tabel berubah menjadi tata letak kartu vertikal, seluruh kolom utama tetap terbaca |  |  |
| TC-PRF-11 | Filter menghasilkan nol baris | Atur jangkauan minimum sangat tinggi | Tabel kosong, sistem menampilkan *empty state* dengan saran melonggarkan filter |  |  |
| TC-PRF-12 | Simpan preset filter | Atur filter; klik *Simpan Filter*; isi nama; konfirmasi | Preset tersimpan dan dapat dipanggil kembali pada kunjungan berikutnya |  |  |

### 2.7 Modul Ringkasan Insight

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-INS-01 | Menampilkan lima kategori insight | Buka halaman Ringkasan Insight pada rentang default | Lima kartu insight tampil: tren ER, distribusi platform, tipe konten, waktu terbaik, pertumbuhan audiens |  |  |
| TC-INS-02 | Mengubah rentang tanggal | Atur rentang ke 7 hari terakhir | Insight diperbarui menggunakan data 7 hari terakhir |  |  |
| TC-INS-03 | Insight pada periode tanpa data | Pilih rentang tanggal di luar data tersedia | Sistem menampilkan *empty state* dengan saran memilih rentang lain |  |  |

### 2.8 Modul Laporan

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-RPT-01 | Membuat laporan periode tertentu | Pilih tanggal mulai + selesai; klik *Buat Laporan* | Laporan tampil dengan KPI, top 5, worst 5, waktu terbaik, dan tipe konten terbaik |  |  |
| TC-RPT-02 | Membuat laporan tanpa memilih tanggal | Klik *Buat Laporan* dengan tanggal kosong | Sistem menampilkan pesan validasi tanggal wajib diisi |  |  |
| TC-RPT-03 | Membuat laporan periode tanpa data | Pilih rentang tanggal di luar data | Sistem menampilkan pesan tidak ada data pada rentang tersebut |  |  |
| TC-RPT-04 | Mencetak laporan ke PDF | Klik *Cetak PDF* setelah laporan tampil | Dialog cetak peramban terbuka, pratinjau halaman bersih tanpa elemen non-laporan |  |  |

### 2.9 Modul Catatan dan Ekspor

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-NOTE-01 | Menambah catatan global | Klik ikon Catatan; tulis catatan; klik Simpan | Catatan tersimpan dan muncul pada daftar catatan |  |  |
| TC-NOTE-02 | Mengedit catatan | Klik aksi *Ubah*; modifikasi isi; klik Simpan | Catatan diperbarui sesuai isi baru |  |  |
| TC-NOTE-03 | Menghapus catatan | Klik aksi *Hapus*; konfirmasi | Catatan terhapus dari daftar |  |  |
| TC-EXP-01 | Ekspor dashboard ke PDF | Klik tombol Ekspor pada dashboard | Berkas PDF terunduh berisi grafik dan KPI yang ditampilkan |  |  |
| TC-EXP-02 | Ekspor performa ke Excel | Klik tombol Ekspor → Excel | Berkas .xlsx terunduh berisi data performa sesuai filter |  |  |

### 2.10 Modul Otorisasi (Row Level Security)

| ID | Deskripsi | Langkah | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| TC-SEC-01 | Pengguna hanya melihat proyek miliknya | Login sebagai pengguna A; periksa daftar proyek | Daftar proyek hanya berisi proyek milik pengguna A; proyek pengguna lain tidak tampil |  |  |
| TC-SEC-02 | Pengguna tidak dapat mengakses proyek pengguna lain melalui URL | Login sebagai pengguna A; akses URL proyek milik pengguna B | Sistem menolak akses, mengarahkan ke halaman tidak ditemukan/ditolak |  |  |

### 2.11 Rekapitulasi Hasil Black-Box

| Modul | Jumlah Kasus Uji | Pass | Fail | Persentase Lulus |
|---|---|---|---|---|
| Autentikasi | 9 |  |  |  |
| Manajemen Proyek & Dataset | 6 |  |  |  |
| Impor Data | 6 |  |  |  |
| Dashboard | 7 |  |  |  |
| Performa Konten | 12 |  |  |  |
| Ringkasan Insight | 3 |  |  |  |
| Laporan | 4 |  |  |  |
| Catatan & Ekspor | 5 |  |  |  |
| Otorisasi | 2 |  |  |  |
| **Total** | **54** |  |  |  |

---

## 3. Pengujian Penerimaan Pengguna (UAT) dengan System Usability Scale

### 3.1 Profil Responden

UAT dilakukan kepada 30 responden dengan komposisi sebagai berikut.

| Kelompok | Jumlah | Kriteria |
|---|---|---|
| Pelaku UMKM | 20 orang | Pemilik atau pengelola akun media sosial UMKM dengan minimal pengalaman enam bulan |
| Akademik | 10 orang | Mahasiswa atau dosen rumpun ilmu komputer/sistem informasi |
| **Total** | **30 orang** | |

### 3.2 Prosedur Pelaksanaan

1. Responden diberikan akun uji dan akses aplikasi.
2. Responden diberikan skenario tugas standar selama lima belas hingga dua puluh menit, mencakup: masuk ke sistem, membuat proyek, mengimpor data CSV, membaca dashboard, menggunakan filter di halaman Performa, dan menghasilkan laporan.
3. Setelah seluruh skenario dijalankan, responden mengisi kuesioner SUS dalam Bahasa Indonesia.
4. Hasil kuesioner direkap dan dihitung skor SUS-nya.

### 3.3 Skenario Tugas Responden

| No | Tugas |
|---|---|
| T1 | Masuk ke sistem menggunakan akun uji yang diberikan |
| T2 | Membuat sebuah proyek baru dengan nama bebas |
| T3 | Membuat dataset di dalam proyek tersebut |
| T4 | Mengunggah berkas CSV contoh yang telah disediakan |
| T5 | Membuka dashboard dan menyebutkan satu temuan menarik |
| T6 | Membuka halaman Performa dan memfilter postingan platform tertentu |
| T7 | Menyimpan kombinasi filter sebagai preset |
| T8 | Membuat laporan satu bulan terakhir dan mengunduhnya sebagai PDF |
| T9 | Menambahkan satu catatan global dan menghapusnya kembali |
| T10 | Keluar dari sistem |

### 3.4 Instrumen Kuesioner SUS

Kuesioner menggunakan sepuluh pernyataan baku SUS dengan skala Likert lima titik (1 = Sangat Tidak Setuju, 5 = Sangat Setuju). Pernyataan ganjil bermuatan positif, pernyataan genap bermuatan negatif.

| No | Pernyataan | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| P1 | Saya berpikir akan sering menggunakan sistem ini. |  |  |  |  |  |
| P2 | Saya merasa sistem ini terlalu rumit. |  |  |  |  |  |
| P3 | Saya merasa sistem ini mudah digunakan. |  |  |  |  |  |
| P4 | Saya merasa membutuhkan bantuan teknisi untuk dapat menggunakan sistem ini. |  |  |  |  |  |
| P5 | Saya merasa fitur-fitur sistem ini berjalan dengan semestinya. |  |  |  |  |  |
| P6 | Saya merasa banyak hal tidak konsisten pada sistem ini. |  |  |  |  |  |
| P7 | Saya merasa orang lain akan cepat memahami cara menggunakan sistem ini. |  |  |  |  |  |
| P8 | Saya merasa sistem ini membingungkan untuk digunakan. |  |  |  |  |  |
| P9 | Saya merasa percaya diri saat menggunakan sistem ini. |  |  |  |  |  |
| P10 | Saya perlu mempelajari banyak hal terlebih dahulu sebelum dapat menggunakan sistem ini. |  |  |  |  |  |

### 3.5 Cara Penghitungan Skor SUS

1. Untuk pernyataan ganjil (P1, P3, P5, P7, P9): skor kontribusi = nilai jawaban − 1.
2. Untuk pernyataan genap (P2, P4, P6, P8, P10): skor kontribusi = 5 − nilai jawaban.
3. Jumlahkan seluruh skor kontribusi (rentang 0 – 40).
4. Kalikan total dengan 2,5 untuk memperoleh skor SUS akhir per responden (rentang 0 – 100).
5. Skor SUS keseluruhan sistem dihitung sebagai rata-rata aritmetik skor seluruh responden.

### 3.6 Interpretasi Skor SUS

| Rentang Skor | Predikat | Tingkat Penerimaan |
|---|---|---|
| 0 – 50 | Buruk | Tidak diterima |
| 51 – 67 | Kurang | Marginal |
| 68 | Rata-rata industri | Marginal |
| 69 – 80 | Baik | Diterima |
| 81 – 100 | Sangat Baik | Diterima dengan sangat baik |

### 3.7 Lembar Rekap Skor SUS Responden

| ID Responden | Kelompok | P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | Total Kontribusi | Skor SUS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R01 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R02 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R03 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R04 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R05 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R06 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R07 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R08 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R09 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R10 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R11 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R12 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R13 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R14 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R15 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R16 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R17 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R18 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R19 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R20 | UMKM |  |  |  |  |  |  |  |  |  |  |  |  |
| R21 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R22 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R23 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R24 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R25 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R26 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R27 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R28 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R29 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| R30 | Akademik |  |  |  |  |  |  |  |  |  |  |  |  |
| **Rata-rata** | | | | | | | | | | | | | |

### 3.8 Ringkasan Hasil UAT

| Aspek | Nilai |
|---|---|
| Jumlah responden total | 30 |
| Skor SUS rata-rata UMKM |  |
| Skor SUS rata-rata Akademik |  |
| Skor SUS rata-rata keseluruhan |  |
| Predikat |  |
| Tingkat penerimaan |  |

### 3.9 Catatan Kualitatif Responden

Bagian ini diisi dengan kutipan komentar bebas yang disampaikan responden setelah mengisi kuesioner, dikelompokkan menurut tema (mis. kemudahan navigasi, kejelasan grafik, kebermanfaatan insight).

| ID Responden | Komentar | Tema |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

---

## 4. Pernyataan Pengujian

Dokumen pengujian ini disusun sebagai bagian dari penyelesaian Tugas Akhir/Skripsi. Seluruh hasil pengujian black-box dan UAT yang tercatat pada dokumen ini merupakan hasil pengujian aktual yang dilakukan terhadap sistem Analytics Sosmed pada periode pengujian yang ditetapkan.

| | |
|---|---|
| Tanggal pengujian dimulai | …………………………… |
| Tanggal pengujian selesai | …………………………… |
| Disusun oleh | …………………………… |
| Tanda tangan | …………………………… |
