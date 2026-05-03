# 1. PENDAHULUAN

## 1.1 Latar Belakang

Usaha mikro, kecil, dan menengah merupakan salah satu pilar utama perekonomian Indonesia. Berdasarkan data Kementerian Koperasi dan Usaha Kecil dan Menengah Republik Indonesia, jumlah pelaku usaha mikro, kecil, dan menengah mencapai lebih dari enam puluh empat juta unit usaha dengan kontribusi terhadap produk domestik bruto sebesar enam puluh satu persen serta menyerap sekitar sembilan puluh tujuh persen dari total tenaga kerja nasional. Besarnya peran tersebut menjadikan kelangsungan dan pertumbuhan usaha mikro, kecil, dan menengah sebagai isu strategis yang membutuhkan dukungan dari berbagai sisi, termasuk dari sisi pemanfaatan teknologi pemasaran digital.

Perkembangan media sosial dalam satu dekade terakhir telah mengubah lanskap pemasaran secara fundamental, baik bagi perusahaan berskala besar maupun bagi pelaku usaha berskala kecil. Instagram, sebagai salah satu platform media sosial dengan jumlah pengguna aktif terbesar di Indonesia, telah menjadi saluran utama pemasaran bagi banyak pelaku usaha mikro, kecil, dan menengah karena karakteristiknya yang berfokus pada konten visual dan biaya operasional yang relatif rendah. Akan tetapi, keberhasilan pemanfaatan media sosial tidak hanya bergantung pada keberlanjutan unggahan konten, melainkan juga pada kemampuan pelaku usaha dalam memahami kinerja konten yang telah diunggah agar strategi unggahan berikutnya dapat disusun secara lebih tepat sasaran.

Pemanfaatan ilmu data pada pemasaran digital telah berkembang menjadi bidang yang krusial dalam pengambilan keputusan pemasaran modern. Dwivedi *et al.* (2021) menyatakan bahwa transformasi digital pada bidang pemasaran menuntut pelaku usaha untuk tidak hanya hadir di kanal digital, tetapi juga mampu memanfaatkan data yang dihasilkan oleh aktivitas digital tersebut sebagai dasar pengambilan keputusan. Sayangnya, sebagian besar pelaku usaha mikro, kecil, dan menengah belum memiliki kapasitas yang memadai untuk melakukan analisis terhadap data kinerja konten yang mereka miliki. White (2022) dalam penelitiannya mengenai penggunaan analitik media sosial oleh pemilik usaha berskala kecil menemukan bahwa walaupun pelaku usaha menganggap analitik media sosial bermanfaat dan papan analitiknya mudah digunakan, pemanfaatan analitik tersebut memakan waktu yang cukup banyak dan terdapat kurva belajar dalam menafsirkan hasilnya, sehingga analitik kinerja konten sering kali tidak digunakan secara berkelanjutan.

Sementara itu, kemajuan teknologi kecerdasan buatan generatif dalam beberapa tahun terakhir membuka peluang baru bagi penyederhanaan proses analisis dan penyusunan konten pemasaran. Dwivedi *et al.* (2023) menyoroti bahwa kecerdasan buatan generatif dapat berperan sebagai pendamping kreatif yang membantu pelaku usaha menyusun ringkasan wawasan, menggali pola perilaku audiens, dan menghasilkan teks pendukung konten dengan biaya yang jauh lebih rendah dibandingkan menyewa jasa profesional. Akan tetapi, pemanfaatan kecerdasan buatan generatif untuk konteks pelaku usaha mikro, kecil, dan menengah di Indonesia masih terbatas pada layanan-layanan umum yang belum disesuaikan dengan karakteristik data dan kebutuhan analitik pelaku usaha skala kecil.

Berdasarkan kondisi tersebut, dibutuhkan sebuah platform analitik media sosial yang dirancang secara khusus untuk pelaku usaha mikro, kecil, dan menengah dengan karakteristik mudah digunakan, terjangkau, dan dilengkapi dengan dukungan kecerdasan buatan untuk meringkas wawasan kinerja konten dan membantu penyusunan keterangan unggahan. Penelitian ini bermaksud untuk menjawab kebutuhan tersebut dengan merancang dan membangun platform analitik media sosial berbasis web yang mengintegrasikan fitur visualisasi metrik kinerja konten, ringkasan wawasan otomatis, penyusun keterangan unggahan otomatis, serta penyusun laporan periodik. Platform yang dibangun diharapkan dapat membantu pelaku usaha mikro, kecil, dan menengah dalam menyusun strategi konten yang lebih berbasis data dan pada akhirnya meningkatkan efektivitas pemasaran melalui media sosial.

## 1.2 Ruang Lingkup

Agar pembahasan pada penelitian ini menjadi terarah dan tidak melebar, penulis menetapkan ruang lingkup sebagai berikut:

1. Platform yang dibangun merupakan aplikasi berbasis web yang dapat diakses melalui peramban modern pada perangkat komputer maupun perangkat bergerak.
2. Sumber data yang dianalisis berasal dari unggahan konten pada platform media sosial Instagram dan diunggah ke sistem dalam bentuk berkas berformat *comma separated values*.
3. Studi kasus penelitian dilakukan pada satu akun Instagram milik pelaku usaha mikro, kecil, dan menengah yang bergerak di bidang produk digital.
4. Metrik kinerja yang dianalisis meliputi jangkauan, jumlah suka, jumlah komentar, jumlah bagikan, jumlah simpan, jumlah tayangan, dan tingkat keterlibatan.
5. Fitur utama yang dibangun meliputi unggah data, papan informasi ringkasan kinerja, analisis performa per konten, ringkasan wawasan berbantu kecerdasan buatan, penyusun keterangan unggahan berbantu kecerdasan buatan, dan penyusun laporan periodik dalam format *Portable Document Format*.
6. Layanan kecerdasan buatan yang digunakan untuk fitur ringkasan wawasan dan penyusun keterangan unggahan adalah model bahasa Gemini yang diakses melalui antarmuka pemrograman aplikasi resmi.
7. Pengujian sistem dilakukan dalam dua bentuk, yaitu pengujian kotak hitam untuk memverifikasi pemenuhan kebutuhan fungsional dan pengujian penerimaan pengguna menggunakan instrumen *System Usability Scale* untuk mengukur tingkat penerimaan sistem.

## 1.3 Tujuan Penelitian

Tujuan utama dari penelitian ini adalah merancang dan membangun sebuah platform analitik media sosial berbasis web yang dilengkapi dengan dukungan kecerdasan buatan untuk membantu pelaku usaha mikro, kecil, dan menengah dalam menganalisis kinerja konten media sosial dan menyusun strategi konten yang lebih berbasis data. Tujuan utama tersebut dijabarkan ke dalam beberapa tujuan khusus sebagai berikut:

1. Mengidentifikasi kebutuhan fungsional dan kebutuhan non-fungsional dari sebuah platform analitik media sosial yang sesuai dengan karakteristik pelaku usaha mikro, kecil, dan menengah.
2. Merancang arsitektur sistem, basis data, struktur navigasi, dan antarmuka pengguna platform analitik media sosial yang mudah digunakan oleh pengguna tanpa latar belakang teknis.
3. Mengimplementasikan platform analitik media sosial menggunakan kerangka kerja React, layanan terkelola Supabase, dan model bahasa Gemini sebagai komponen utama sistem.
4. Menerapkan platform yang telah dibangun ke lingkungan produksi sehingga dapat diakses secara daring oleh pengguna.
5. Memverifikasi pemenuhan kebutuhan fungsional sistem melalui pengujian kotak hitam dan mengukur tingkat penerimaan sistem oleh pengguna melalui pengujian menggunakan instrumen *System Usability Scale*.

## 1.4 Sistematika Penulisan

Penulisan penelitian ini disusun ke dalam lima bagian utama yang saling berkaitan satu sama lain. Sistematika penulisan dijabarkan sebagai berikut.

**Pendahuluan** memuat latar belakang penelitian, ruang lingkup yang membatasi pembahasan, tujuan yang ingin dicapai melalui penelitian, dan sistematika penulisan secara keseluruhan.

**Landasan Teori** memuat tinjauan pustaka yang berisi konsep dan teori yang melandasi penelitian, antara lain konsep usaha mikro, kecil, dan menengah, konsep media sosial dan pemasaran digital, konsep analitik media sosial, konsep kecerdasan buatan generatif, dan konsep teknologi yang digunakan dalam pengembangan sistem. Bagian ini juga memuat tinjauan terhadap penelitian terdahulu yang relevan dengan topik penelitian.

**Metode Penelitian** memuat tahapan penelitian yang dilaksanakan, mulai dari tahap studi literatur, pengumpulan data, analisis sistem, perancangan sistem, pengembangan sistem, *deployment* sistem, hingga pengujian sistem. Setiap tahap dijelaskan secara rinci beserta sub-tahap dan keluarannya.

**Hasil dan Pembahasan** memuat hasil pelaksanaan setiap tahap penelitian, mulai dari hasil pengumpulan data, hasil analisis kebutuhan sistem, hasil perancangan sistem, hasil pengembangan sistem, hasil *deployment* sistem, hingga hasil pengujian sistem. Bagian ini juga memuat pembahasan terhadap temuan-temuan yang diperoleh selama pelaksanaan penelitian.

**Penutup** memuat kesimpulan yang menjawab tujuan penelitian dan saran yang dapat dijadikan acuan bagi pengembangan penelitian selanjutnya.
