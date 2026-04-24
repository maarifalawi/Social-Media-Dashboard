# 3. METODOLOGI PENELITIAN

> Catatan: Bagian ini hanya berisi naskah sub-bagian 3.3 hingga 3.8 sesuai revisi terbaru. Sub-bagian 3.1 (Objek Penelitian) dan 3.2 (Metode Pengembangan Sistem) yang telah disetujui sebelumnya tetap dipertahankan.

---

## 3.3 Tahap Observasi

Tahap observasi merupakan tahap awal dari rangkaian penelitian yang bertujuan untuk mengumpulkan data primer dan data sekunder yang akan menjadi dasar bagi tahap analisis kebutuhan sistem. Pengumpulan data dilakukan melalui dua pendekatan, yaitu studi lapangan dan studi pustaka, agar data yang diperoleh memiliki landasan empiris dari kondisi nyata di lapangan sekaligus landasan ilmiah dari penelitian-penelitian terdahulu.

### 3.3.1 Studi Lapangan

Studi lapangan dilakukan untuk memperoleh data primer melalui pengamatan langsung terhadap aktivitas pengelolaan konten media sosial pada akun yang dijadikan studi kasus. Tahap ini menjadi penting karena data yang diperoleh akan digunakan sebagai bahan utama dalam pengujian sistem yang dibangun, sehingga sistem dapat divalidasi pada kondisi data yang sesungguhnya.

#### 3.3.1.1 Identifikasi Akun Studi Kasus

Pemilihan akun studi kasus dilakukan dengan mempertimbangkan tiga kriteria utama, yaitu akun yang dimiliki oleh pelaku UMKM, akun yang aktif melakukan unggahan konten dalam periode pengamatan, dan akun yang pemiliknya bersedia memberikan akses data unggahan untuk keperluan penelitian. Berdasarkan kriteria tersebut, penulis memilih satu akun Instagram milik UMKM yang bergerak di bidang produk digital sebagai studi kasus utama.

#### 3.3.1.2 Pengumpulan Data Unggahan Konten

Pengumpulan data unggahan konten dilakukan dengan melakukan ekstraksi metrik kinerja dari setiap unggahan akun studi kasus dalam periode pengamatan yang telah ditentukan. Metrik yang dikumpulkan meliputi pengidentifikasi unggahan, jenis konten, waktu unggah, jumlah jangkauan, jumlah suka, jumlah komentar, jumlah bagikan, jumlah simpan, jumlah tayangan, jumlah pengikut saat unggah, dan teks keterangan unggahan. Data yang telah dikumpulkan kemudian disusun ke dalam berkas berformat *comma separated values* yang akan digunakan sebagai masukan pada saat pengujian sistem.

### 3.3.2 Studi Pustaka

Studi pustaka dilakukan untuk memperoleh data sekunder berupa landasan teori dan referensi penelitian terdahulu yang relevan dengan topik penelitian. Sumber pustaka yang digunakan meliputi jurnal ilmiah internasional dan nasional yang diterbitkan dalam rentang waktu lima tahun terakhir, buku teks rekayasa perangkat lunak, serta dokumentasi resmi dari pustaka dan layanan yang digunakan dalam pengembangan sistem. Hasil studi pustaka digunakan untuk menyusun latar belakang masalah, tinjauan pustaka, dan justifikasi pemilihan metode dan metrik analisis pada penelitian ini.

---

## 3.4 Tahap Analisis Kebutuhan Sistem

Tahap analisis kebutuhan sistem dilakukan untuk menerjemahkan hasil observasi menjadi spesifikasi kebutuhan yang akan menjadi acuan pada tahap perancangan. Tahap ini dibagi menjadi lima bagian, yaitu analisis masalah, analisis kebutuhan fungsional, analisis kebutuhan non-fungsional, analisis kebutuhan pengguna, dan analisis kebutuhan data. Pembagian ini bertujuan agar setiap aspek kebutuhan sistem dapat dianalisis secara terstruktur dan tidak ada kebutuhan yang terlewat.

### 3.4.1 Analisis Masalah

Analisis masalah dilakukan untuk mengidentifikasi akar permasalahan yang ingin dipecahkan oleh sistem yang dibangun. Identifikasi dilakukan melalui dua jalur, yaitu identifikasi permasalahan yang dialami langsung oleh pengguna di lapangan, dan identifikasi celah penelitian dari kajian pustaka.

#### 3.4.1.1 Identifikasi Permasalahan Pengguna

Identifikasi permasalahan pengguna dilakukan dengan menelaah kendala yang dihadapi pelaku UMKM dalam memantau dan menganalisis kinerja konten media sosial mereka. Hasil telaah disusun ke dalam daftar permasalahan yang menjadi titik tolak penyusunan kebutuhan fungsional sistem.

#### 3.4.1.2 Identifikasi Celah Penelitian

Identifikasi celah penelitian dilakukan dengan menelaah penelitian terdahulu yang relevan dan mencermati keterbatasan serta saran penelitian lanjutan yang dikemukakan oleh peneliti sebelumnya. Celah penelitian yang ditemukan menjadi alasan akademis bagi penyusunan tujuan dan kontribusi penelitian ini.

### 3.4.2 Analisis Kebutuhan Fungsional

Analisis kebutuhan fungsional dilakukan untuk merumuskan daftar fitur yang harus disediakan oleh sistem agar dapat menjawab permasalahan yang telah diidentifikasi. Setiap kebutuhan fungsional dirumuskan dalam bentuk pernyataan kebutuhan yang spesifik, dapat diukur, dan dapat diuji, kemudian diberi kode unik untuk memudahkan penelusuran pada tahap implementasi dan pengujian.

### 3.4.3 Analisis Kebutuhan Non-Fungsional

Analisis kebutuhan non-fungsional dilakukan untuk merumuskan aspek kualitas yang harus dipenuhi oleh sistem di luar kebutuhan fitur. Aspek yang dianalisis meliputi kinerja, keamanan, kebergunaan, portabilitas, dan kemampurawatan. Setiap aspek dirumuskan dalam bentuk pernyataan kebutuhan terukur dan diberi kode unik agar mudah dirujuk pada tahap perancangan dan pengujian.

### 3.4.4 Analisis Kebutuhan Pengguna

Analisis kebutuhan pengguna dilakukan untuk mengidentifikasi peran-peran yang akan berinteraksi dengan sistem beserta kewenangan dan karakteristik masing-masing peran. Identifikasi peran ini menjadi dasar penyusunan diagram kasus penggunaan dan pengaturan kewenangan akses pada tahap perancangan dan implementasi.

### 3.4.5 Analisis Kebutuhan Data

Analisis kebutuhan data dilakukan untuk mengidentifikasi entitas-entitas utama yang harus disimpan oleh sistem beserta atribut-atribut penyusunnya. Penentuan atribut metrik kinerja konten dalam penelitian ini mengacu pada kerangka kerja yang disusun oleh Saura (2021), yang menyatakan bahwa pemanfaatan ilmu data pada pemasaran digital harus didasarkan pada pemilihan metrik kinerja yang relevan dengan tujuan analisis. Berdasarkan kerangka tersebut, penulis menentukan tujuh metrik utama yang dianalisis sistem, yaitu jangkauan, jumlah suka, jumlah komentar, jumlah bagikan, jumlah simpan, jumlah tayangan, dan tingkat keterlibatan. Tingkat keterlibatan dihitung secara dinamis pada lapisan logika aplikasi menggunakan formula jumlah interaksi dibagi jumlah pengikut dikalikan seratus persen.

---

## 3.5 Tahap Perancangan Sistem

Tahap perancangan sistem dilakukan untuk menerjemahkan hasil analisis kebutuhan menjadi rancangan yang siap diimplementasikan. Perancangan dibagi menjadi lima bagian, yaitu perancangan arsitektur sistem, perancangan proses bisnis, perancangan basis data, perancangan struktur navigasi, dan perancangan antarmuka pengguna. Pembagian ini mengikuti praktik standar dalam pengembangan perangkat lunak yang memisahkan rancangan struktural, rancangan perilaku, dan rancangan visual agar setiap aspek dapat dirancang secara fokus.

### 3.5.1 Perancangan Arsitektur Sistem

Perancangan arsitektur sistem dilakukan menggunakan pendekatan tiga lapis yang memisahkan lapisan antarmuka pengguna, lapisan logika aplikasi, dan lapisan layanan basis data. Pendekatan ini dipilih karena memberikan pemisahan tanggung jawab yang jelas antar lapisan, sehingga sistem mudah dipelihara dan dikembangkan lebih lanjut. Hasil perancangan arsitektur dituangkan dalam bentuk diagram arsitektur yang menggambarkan komponen sistem beserta protokol komunikasi antar komponen.

### 3.5.2 Perancangan Proses Bisnis

Perancangan proses bisnis dilakukan menggunakan notasi *Unified Modeling Language* (UML) dalam bentuk diagram kasus penggunaan dan diagram aktivitas. Diagram kasus penggunaan digunakan untuk menggambarkan interaksi antara aktor dengan sistem secara umum, sedangkan diagram aktivitas digunakan untuk menggambarkan alur kerja setiap kasus penggunaan secara rinci. Notasi UML dipilih karena merupakan notasi standar yang banyak digunakan dalam dokumentasi pengembangan perangkat lunak.

### 3.5.3 Perancangan Basis Data

Perancangan basis data dilakukan menggunakan pendekatan diagram entitas relasi dengan notasi *Crow's Foot* untuk menggambarkan kardinalitas relasi antar entitas. Perancangan dimulai dengan mengidentifikasi entitas utama dari hasil analisis kebutuhan data, dilanjutkan dengan menentukan atribut, kunci primer, kunci asing, serta relasi antar entitas. Sistem manajemen basis data yang digunakan adalah PostgreSQL melalui layanan terkelola Supabase yang mendukung kebijakan keamanan baris untuk pengaturan kewenangan akses data.

### 3.5.4 Perancangan Struktur Navigasi

Perancangan struktur navigasi dilakukan menggunakan pola hirarkis dengan halaman *dashboard* sebagai titik pusat navigasi setelah pengguna berhasil masuk ke sistem. Pola ini dipilih agar pengguna dapat selalu kembali ke titik pusat dengan satu kali sentuhan dari halaman manapun, sehingga mengurangi kebingungan dalam menentukan langkah berikutnya. Hasil perancangan struktur navigasi dituangkan dalam bentuk diagram struktur navigasi yang menggambarkan hubungan antar halaman.

### 3.5.5 Perancangan Antarmuka Pengguna

Perancangan antarmuka pengguna dilakukan dengan pendekatan *mobile first* agar tata letak tetap optimal pada layar berukuran kecil dan kemudian diadaptasi untuk layar berukuran besar. Skema warna utama yang digunakan adalah kombinasi warna biru dan putih yang memberikan kesan profesional dan tenang, sedangkan tipografi yang digunakan adalah keluarga huruf *sans-serif* yang memberikan keterbacaan optimal pada layar. Hasil perancangan antarmuka dituangkan dalam bentuk *wireframe* untuk setiap halaman utama sistem.

---

## 3.6 Tahap Implementasi Sistem

Tahap implementasi sistem dilakukan untuk menerjemahkan hasil perancangan menjadi kode program yang dapat dieksekusi. Implementasi dibagi menjadi lima bagian, yaitu penyiapan lingkungan pengembangan, pengkodean antarmuka pengguna, pengkodean logika aplikasi, pengkodean layanan basis data, dan pengkodean layanan kecerdasan buatan. Pembagian ini bertujuan agar setiap modul sistem dikembangkan secara terstruktur dan mudah ditelusuri pada tahap pengujian.

### 3.6.1 Penyiapan Lingkungan Pengembangan

Penyiapan lingkungan pengembangan dilakukan dengan memasang seluruh perangkat lunak dan pustaka yang dibutuhkan untuk membangun sistem. Lingkungan pengembangan utama yang digunakan adalah Node.js versi terkini sebagai *runtime* JavaScript, npm sebagai pengelola paket, dan Visual Studio Code sebagai editor kode. Pustaka inti yang dipasang meliputi React sebagai kerangka kerja antarmuka pengguna, Vite sebagai *bundler*, Tailwind CSS sebagai kerangka pemformatan, dan *client* resmi Supabase sebagai jembatan ke layanan basis data.

### 3.6.2 Pengkodean Antarmuka Pengguna

Pengkodean antarmuka pengguna dilakukan menggunakan kerangka kerja React dengan bahasa pemrograman TypeScript untuk memastikan keamanan tipe data pada saat kompilasi. Pustaka komponen *shadcn-ui* digunakan untuk menyediakan komponen antarmuka yang konsisten secara visual, sedangkan Tailwind CSS digunakan untuk pemformatan secara utilitas. Setiap halaman sistem dikodekan sebagai komponen React mandiri yang dapat dipelihara dan dikembangkan secara terpisah.

### 3.6.3 Pengkodean Logika Aplikasi

Pengkodean logika aplikasi dilakukan untuk mengimplementasikan aturan bisnis sistem, antara lain perhitungan tingkat keterlibatan, validasi data masukan, transformasi data dari format mentah menjadi format yang siap ditampilkan, dan pengaturan navigasi antar halaman. Logika aplikasi diorganisasi ke dalam modul-modul terpisah berdasarkan tanggung jawabnya untuk menjaga prinsip pemisahan tugas.

### 3.6.4 Pengkodean Layanan Basis Data

Pengkodean layanan basis data dilakukan dengan menyusun berkas migrasi yang berisi perintah pembuatan tabel, kunci primer, kunci asing, indeks, dan kebijakan keamanan baris. Berkas migrasi disusun menggunakan bahasa SQL dan dijalankan secara berurutan agar struktur basis data dapat direkonstruksi pada lingkungan pengembangan, lingkungan pengujian, maupun lingkungan produksi.

### 3.6.5 Pengkodean Layanan Kecerdasan Buatan

Pengkodean layanan kecerdasan buatan dilakukan untuk mengintegrasikan model bahasa Gemini ke dalam sistem sebagai mesin penghasil ringkasan *insight*. Integrasi dilakukan melalui *Edge Function* yang berjalan pada lingkungan Deno di sisi peladen Supabase. *Edge Function* berfungsi sebagai perantara yang menerima permintaan dari antarmuka pengguna, menyusun *prompt* yang sesuai dengan konteks data pengguna, mengirimkan permintaan ke layanan Gemini, dan mengembalikan hasilnya kepada antarmuka pengguna dalam format yang dapat langsung ditampilkan.

---

## 3.7 Tahap Penerapan Sistem

Tahap penerapan sistem dilakukan untuk memindahkan sistem dari lingkungan pengembangan ke lingkungan produksi yang dapat diakses oleh pengguna akhir. Penerapan dibagi menjadi dua bagian, yaitu penyiapan lingkungan produksi dan penerapan sistem ke lingkungan produksi.

### 3.7.1 Penyiapan Lingkungan Produksi

Penyiapan lingkungan produksi dilakukan dengan menyiapkan layanan *hosting* untuk antarmuka pengguna, menyiapkan proyek Supabase untuk lingkungan produksi, mengonfigurasi variabel lingkungan, mengonfigurasi nama domain, dan mengonfigurasi sertifikat *Hypertext Transfer Protocol Secure*. Variabel lingkungan yang dikonfigurasi meliputi alamat layanan Supabase, kunci anonim Supabase, kunci API model bahasa Gemini, dan kunci API layanan pengiriman surel.

### 3.7.2 Penerapan Sistem ke Lingkungan Produksi

Penerapan sistem ke lingkungan produksi dilakukan dengan membangun antarmuka pengguna ke dalam berkas statis melalui proses *build*, mengunggah berkas hasil *build* ke layanan *hosting*, menjalankan migrasi basis data ke proyek Supabase produksi, dan menerapkan *Edge Function* ke lingkungan produksi. Setelah seluruh komponen siap, sistem diuji secara cepat untuk memastikan dapat diakses dengan baik melalui nama domain yang telah dikonfigurasi.

---

## 3.8 Tahap Pengujian Sistem

Tahap pengujian sistem dilakukan untuk memverifikasi bahwa sistem yang dibangun telah memenuhi seluruh kebutuhan fungsional dan non-fungsional yang telah dirumuskan pada tahap analisis. Pengujian dibagi menjadi dua bagian, yaitu pengujian kotak hitam dan pengujian penerimaan pengguna.

### 3.8.1 Pengujian Kotak Hitam

Pengujian kotak hitam (*black box testing*) dilakukan untuk memverifikasi fungsionalitas sistem dari sudut pandang pengguna tanpa memperhatikan struktur kode internal. Pengujian ini berfokus pada masukan dan keluaran setiap modul sistem.

#### 3.8.1.1 Penyusunan Skenario Pengujian

Penyusunan skenario pengujian dilakukan dengan menjabarkan setiap kebutuhan fungsional menjadi satu atau lebih skenario pengujian. Setiap skenario memuat informasi modul yang diuji, langkah-langkah pengujian, masukan yang diberikan, dan keluaran yang diharapkan. Hasil penyusunan dituangkan dalam dokumen pengujian yang disusun secara terpisah dari naskah penelitian ini.

#### 3.8.1.2 Pelaksanaan Pengujian Modul

Pelaksanaan pengujian modul dilakukan dengan mengeksekusi setiap skenario pengujian secara berurutan dan mencatat hasilnya. Hasil pengujian dibandingkan dengan keluaran yang diharapkan, kemudian status pengujian ditetapkan sebagai berhasil apabila keluaran yang dihasilkan sesuai, atau gagal apabila terdapat ketidaksesuaian. Skenario yang gagal akan ditelusuri penyebabnya dan diperbaiki, kemudian diuji ulang sampai berstatus berhasil.

### 3.8.2 Pengujian Penerimaan Pengguna

Pengujian penerimaan pengguna (*user acceptance test*) dilakukan untuk mengukur tingkat penerimaan sistem oleh calon pengguna akhir. Pengujian dilakukan dengan melibatkan responden yang merupakan pelaku UMKM. Responden diminta untuk menggunakan sistem dengan menjalankan beberapa skenario penggunaan, kemudian mengisi kuesioner yang disusun mengacu pada instrumen *System Usability Scale*. Hasil pengisian kuesioner kemudian dihitung skor akhirnya, dan diinterpretasikan menggunakan skala penerimaan baku untuk menentukan tingkat penerimaan sistem.
