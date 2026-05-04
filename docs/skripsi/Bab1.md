# 1. PENDAHULUAN

## 1.1 Latar Belakang

Era digital telah mendorong pergeseran besar dalam cara masyarakat mengakses informasi, berinteraksi, dan melakukan transaksi. Seiring dengan meningkatnya penetrasi internet dan penggunaan perangkat bergerak, media sosial berkembang menjadi bagian yang tidak terpisahkan dari kehidupan sehari-hari sekaligus mengubah lanskap pemasaran secara fundamental. Platform-platform media sosial seperti Instagram, Facebook, dan TikTok kini tidak hanya berfungsi sebagai sarana komunikasi, melainkan juga sebagai kanal pemasaran digital yang memungkinkan pelaku usaha menjangkau audiens secara luas dengan biaya operasional yang relatif rendah. Instagram secara khusus telah menjadi salah satu platform media sosial dengan jumlah pengguna aktif terbesar di Indonesia dan menjadi saluran pemasaran utama bagi banyak pelaku usaha karena karakteristiknya yang berfokus pada konten visual. Keberhasilan pemanfaatan media sosial sebagai saluran pemasaran, bagaimanapun, tidak hanya bergantung pada keberlanjutan unggahan konten, melainkan juga pada kemampuan dalam memahami kinerja konten yang telah diunggah agar strategi unggahan berikutnya dapat disusun secara lebih tepat sasaran.

Kebutuhan untuk memahami kinerja konten media sosial secara sistematis melahirkan bidang yang dikenal sebagai analitik media sosial. Dwivedi *et al.* (2021) menyatakan bahwa transformasi digital pada bidang pemasaran menuntut pelaku usaha untuk tidak hanya hadir di kanal digital, tetapi juga mampu memanfaatkan data yang dihasilkan oleh aktivitas digital tersebut sebagai dasar pengambilan keputusan. Saura (2021) memperkuat hal tersebut dengan menyusun kerangka kerja pemanfaatan ilmu data pada pemasaran digital yang mencakup empat jenis pola analisis utama beserta metrik kinerja yang relevan. Kedua penelitian tersebut menunjukkan bahwa analitik media sosial telah menjadi bidang yang krusial dalam pengambilan keputusan pemasaran modern.

Meskipun urgensi analitik media sosial telah diakui secara luas, penerapannya oleh pelaku usaha berskala kecil masih menghadapi sejumlah hambatan. White (2022) dalam penelitiannya mengenai penggunaan analitik media sosial oleh pemilik usaha berskala kecil menemukan bahwa walaupun pelaku usaha menganggap analitik media sosial bermanfaat dan papan analitiknya mudah digunakan, pemanfaatan analitik tersebut memakan waktu yang cukup banyak dan terdapat kurva belajar dalam menafsirkan hasilnya, sehingga analitik kinerja konten sering kali tidak digunakan secara berkelanjutan. Sejalan dengan temuan tersebut, Jeheskiel, Aras dan Mani (2024) menyimpulkan bahwa keterbatasan sumber daya manusia dan kebutuhan akan perkakas yang lebih mudah digunakan menjadi tantangan utama dalam penerapan analitik media sosial pada konteks pelaku usaha.

Di sisi lain, kemajuan teknologi kecerdasan buatan generatif dalam beberapa tahun terakhir membuka peluang baru bagi penyederhanaan proses analisis dan penyusunan konten pemasaran. Dwivedi *et al.* (2023) menyoroti bahwa kecerdasan buatan generatif dapat berperan sebagai pendamping kreatif yang membantu pelaku usaha menyusun ringkasan wawasan, menggali pola perilaku audiens, dan menghasilkan teks pendukung konten dengan biaya yang jauh lebih rendah dibandingkan menyewa jasa profesional. Peluang tersebut membuka kemungkinan untuk membangun platform analitik media sosial yang tidak hanya menyajikan data metrik, tetapi juga mampu memberikan ringkasan wawasan dan membantu penyusunan konten secara otomatis.

Permasalahan di atas menjadi semakin relevan ketika dikaitkan dengan konteks usaha mikro, kecil, dan menengah di Indonesia. Usaha mikro, kecil, dan menengah merupakan salah satu pilar utama perekonomian Indonesia dengan kontribusi terhadap produk domestik bruto sebesar enam puluh satu persen serta menyerap sekitar sembilan puluh tujuh persen dari total tenaga kerja nasional. Besarnya peran tersebut menjadikan kelangsungan dan pertumbuhan usaha mikro, kecil, dan menengah sebagai isu strategis. Sayangnya, sebagian besar pelaku usaha mikro, kecil, dan menengah belum memiliki kapasitas yang memadai untuk melakukan analisis terhadap data kinerja konten media sosial yang dihasilkan dari aktivitas pemasaran digital, padahal data tersebut telah tersedia melalui fitur bawaan platform seperti Instagram Insights.

Berdasarkan kondisi tersebut, dibutuhkan sebuah platform analitik media sosial yang dirancang secara khusus untuk pelaku usaha mikro, kecil, dan menengah dengan karakteristik mudah digunakan, terjangkau, dan dilengkapi dengan dukungan kecerdasan buatan untuk meringkas wawasan kinerja konten dan membantu penyusunan keterangan unggahan. Penelitian ini merancang dan membangun platform analitik media sosial berbasis web yang mengintegrasikan fitur visualisasi metrik kinerja konten, ringkasan wawasan otomatis, penyusun keterangan unggahan otomatis, serta penyusun laporan periodik. Platform yang dibangun diharapkan dapat membantu pelaku usaha mikro, kecil, dan menengah dalam menyusun strategi konten yang lebih berbasis data dan pada akhirnya meningkatkan efektivitas pemasaran melalui media sosial.

## 1.2 Ruang Lingkup

Pembahasan pada penelitian ini dibatasi oleh ruang lingkup sebagai berikut:

1. Platform yang dibangun merupakan aplikasi berbasis web yang dapat diakses melalui peramban modern pada perangkat komputer maupun perangkat bergerak, dengan sumber data berupa unggahan konten Instagram yang diunggah ke sistem dalam bentuk berkas berformat *comma separated values* (CSV).
2. Metrik kinerja yang dianalisis meliputi jangkauan, jumlah suka, jumlah komentar, jumlah bagikan, jumlah simpan, jumlah tayangan, dan tingkat keterlibatan, yang disajikan melalui fitur papan informasi ringkasan kinerja, analisis performa per konten, ringkasan wawasan berbantu kecerdasan buatan menggunakan model bahasa Gemini, penyusun keterangan unggahan berbantu kecerdasan buatan, dan penyusun laporan periodik dalam format *Portable Document Format* (PDF).
3. Studi kasus penelitian dilakukan pada satu akun Instagram pelaku usaha mikro, kecil, dan menengah yang bergerak di bidang produk digital.
4. Pengujian sistem dilakukan melalui pengujian kotak hitam (*black box testing*) untuk memverifikasi pemenuhan kebutuhan fungsional dan pengujian penerimaan menggunakan instrumen *System Usability Scale* (SUS) untuk mengukur tingkat kebergunaan sistem.

## 1.3 Tujuan Penelitian

Tujuan dari penelitian ini adalah merancang dan membangun sebuah platform analitik media sosial berbasis web yang dilengkapi dengan dukungan kecerdasan buatan untuk membantu pelaku usaha mikro, kecil, dan menengah dalam menganalisis kinerja konten media sosial dan menyusun strategi konten yang lebih berbasis data. Tujuan tersebut dijabarkan ke dalam beberapa tujuan khusus sebagai berikut:

1. Mengidentifikasi kebutuhan fungsional dan kebutuhan non-fungsional dari sebuah platform analitik media sosial yang sesuai dengan karakteristik pelaku usaha mikro, kecil, dan menengah.
2. Merancang arsitektur sistem, basis data, struktur navigasi, dan antarmuka pengguna platform analitik media sosial yang mudah digunakan tanpa memerlukan latar belakang teknis.
3. Mengimplementasikan rancangan tersebut ke dalam platform analitik media sosial menggunakan kerangka kerja React, layanan terkelola Supabase, dan model bahasa Gemini, serta menerapkan platform yang telah dibangun ke lingkungan produksi sehingga dapat diakses secara daring.

## 1.4 Sistematika Penulisan

Penelitian ini disusun ke dalam lima bagian utama yang saling berkaitan satu sama lain. Sistematika penulisan dijabarkan sebagai berikut.

**Pendahuluan** memuat latar belakang penelitian, ruang lingkup yang membatasi pembahasan, tujuan yang ingin dicapai melalui penelitian, dan sistematika penulisan secara keseluruhan.

**Landasan Teori** memuat tinjauan pustaka yang berisi konsep dan teori yang melandasi penelitian, antara lain konsep usaha mikro, kecil, dan menengah, konsep media sosial dan pemasaran digital, konsep analitik media sosial, konsep kecerdasan buatan generatif, dan konsep teknologi yang digunakan dalam pengembangan sistem. Bagian ini juga memuat tinjauan terhadap penelitian terdahulu yang relevan dengan topik penelitian.

**Metode Penelitian** memuat tahapan penelitian yang dilaksanakan, mulai dari tahap studi literatur, pengumpulan data, analisis sistem, perancangan sistem, pengembangan sistem, penerapan sistem ke lingkungan produksi, hingga pengujian sistem. Setiap tahap dijelaskan secara rinci beserta sub-tahap dan keluarannya.

**Hasil dan Pembahasan** memuat hasil pelaksanaan setiap tahap penelitian, mulai dari hasil pengumpulan data, hasil analisis kebutuhan sistem, hasil perancangan sistem, hasil pengembangan sistem, hasil penerapan sistem, hingga hasil pengujian sistem. Bagian ini juga memuat pembahasan terhadap temuan-temuan yang diperoleh selama pelaksanaan penelitian.

**Penutup** memuat kesimpulan yang menjawab tujuan penelitian dan saran yang dapat dijadikan acuan bagi pengembangan penelitian selanjutnya.
