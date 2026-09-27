/* eslint-disable quotes */
export const cassandra = {
  talk1: [
    "...", // cassandra
    "Apa yang kamu lihat?", // cassandra
    "Apakah ini penjara?", // ann
    "...", // cassandra
    "Ya.", // cassandra
    "Apakah kamu melakukan kesalahan?", // ann
    "Ya.", // cassandra
    "Aku tak boleh keluar lagi.", // cassandra
    "Yah itu...", // ann
    "Ini penjara tanpa kunci dari benang Aragnier.", // cassandra
    "Benang yang ditenunnya tak bisa dipotong kecuali ia dibunuh.", // cassandra
    "Aragnier?", // ann
    "Aragnier adalah monster laba-laba raksasa.", // cassandra
    "Ia menghilang setelah membangun penjara ini.", // cassandra
    "Sekarang tak ada yang bisa menemukannya.", // cassandra
    "Kurasa ia bosan di sini dan pergi." // cassandra
  ],
  talk2: [
    "Kamu ingin bicara denganku?", // cassandra
    "Hei bisakah membawakanku anggur jika ada waktu?", // cassandra
    "Aku tahu membeli minuman keras ilegal, tetapi aku tahu di mana menemukannya.", // cassandra
    "Akan kukatakan di mana mendapatkannya.", // cassandra
    ["OK", "Tidak terima kasih"],
    "Jadi...", // cassandra
    "Ada gudang anggur di ujung lorong bawah tanah ini.", // cassandra
    "Ada anggur di lorong?", // ann
    "Ya.", // cassandra
    "Tetapi pintunya terkunci.", // ann
    "Perhatikan baik-baik tempat lilin di samping pintu.", // cassandra
    "Kunci pasti disembunyikan di sana.", // cassandra
    "Siapa yang menyembunyikan kunci di sana?", // ann
    "Kakakku sering keluar masuk sana.", // cassandra
    "Ia mencari tempat persembunyian Aragnier agar bisa mengeluarkanku dari sini.", // cassandra
    "Begitu.", // ann
    "Jadi apakah bermasalah jika aku mengambil kunci?", // ann
    "Jangan khawatir, Aragnier toh tak bisa ditemukan.", // cassandra
    "Kakakku tampaknya menyadarinya dan belakangan tidak datang ke sini..", // cassandra
    "Tetapi kamu pasti menemukan anggur. Tolong bawakan kepadaku." // cassandra
  ],
  util: {
    door: ["Periksa", "Biarkan saja"],
    key: `Mendapatkan "Kunci lorong bawah tanah"`,
    unlock: "Lorong terbuka",
    locked: "Terkunci.", // ann
    wine: `Mendapatkan "Anggur"`
  },
  progress: [
    "Apakah kamu menemukan kunci?", // cassandra
    "Perhatikan baik-baik dasar tempat lilin di samping pintu.", // cassandra
    "Apakah kamu sudah menemukan anggur?" // cassandra
  ],
  solve: [
    "Apakah anggur ada di sana?", // cassandra
    "Ya, banyak sekali.", // ann
    "Bagus!", // cassandra
    "Terima kasih, sungguh menyegarkan.", // cassandra
    "Terjebak di sini sungguh mengerikan, anggur ini benar-benar penghibur.  |Aku tak bisa cukup berterima kasih.", // cassandra
    "Tidak apa. Memberitahuku di mana kunci sudah lebih dari cukup.", // ann
    "Tetapi mengapa begitu banyak anggur disimpan di sini?", // ann
    "Penyelundup sopi memakai lorong ini untuk menyelundupkan minuman keras.", // cassandra
    "Orang-orang di istana membeli minuman keras. Larangan ini konyol.", // cassandra
    "Begitukah?", // ann
    "Ya. Baru saja kudengar penyelundup masuk.", // cassandra
    "Terima kasih telah menolongku." // cassandra
  ],
  solved: "Terima kasih atas anggurnya.",
  tweet: [
    "Apakah ini anggurnya?", // ann
    "Dua lagi.", // ann
    "Perlu menemukan satu lagi", // francisca
    "Sepertinya semuanya terkumpul" // jaquelyn
  ]
}
export const princess = {
  talk1: [
    "Hei!", // loretta
    "Siapa?", // mary
    "Bagaimana kamu masuk ke sini?", // loretta
    "Um, yah...", // ann
    "Siapa kalian berdua?", // ann
    "Ini tempat berbahaya bagi anak-anak.", // ann
    "Permisi! Kami baik-baik saja!", // loretta
    "Rumah ini milikku dan Mary.", // loretta
    "Rumahmu? Apa maksudmu?", // ann
    "Apakah kamu orang asing?", // loretta
    "Kamu belum pernah mendengar Putri Mary?", // loretta
    "Oh?", // ann
    "Mereka pasti bukan dari sini.", // mary
    "Ini Loretta. Putri Adipati Troia.", // mary
    "Mengapa kamu di sini!?", // ann
    "Berbahaya, ada monster.", // ann
    "Tinggalkan kami.", // loretta
    "Mary, siapa mereka?", // loretta
    "Laporkkan mereka kepada ayahmu.", // loretta
    "Tak perlu begitu.", // mary
    "Sekalipun mereka menemukan lorong ini, mereka takkan pernah melewati Orthrus.", // mary
    "Dan kami bertemu di sini diam-diam, kami pun tak seharusnya di sini.", // mary
    "Benar.", // loretta
    "Jadi rahasiakan bahwa kita pernah di sini.", // mary
    "Eh, ya. Tentu.", // ann
    "Ayahmu bangsawan, kan?", // ann
    "Apa yang kamu lakukan di sini?", // ann
    "Aku tak mungkin mengatakannya.", // mary
    "Ya, penelitian dan percobaan rahasia yang tak bisa kuberitahu kepada ayahku.", // loretta
    "Jangan ganggu kami.", // loretta
    "Oke...", // ann
    "Kamu masuk melalui lorong bawah tanah, kan?", // mary
    "Benar.", // ann
    "Lalu apakah kamu bertemu Cassandra di jalan?", // mary
    "Wanita yang terjebak di penjara benang Aragnier.", // mary
    "Kami bertemu dengannya.", // ann
    "Bagaimana keadaannya?", // mary
    "Dalam arti apa?", // ann
    "Apakah ia marah, atau sedih?", // mary
    "Eh, hmmm...", // ann
    "Terjebak di sana tampaknya tidak menyenangkan...", // ann
    "Begitu...", // mary
    "Kamu mengenalnya?", // ann
    "Ya. ia dipenjara karenaku.", // mary
    "Ini bukan salahmu, Mary!", // loretta
    "Ya, memang...", // mary
    "Hei, jangan percaya itu Mary.", // loretta
    "Sungguh bukan salahmu.", // loretta
    "Kuras mengerti.", // ann
    "Bolehkah aku bertanya apa yang terjadi?", // ann
    "Tidak apa.", // mary
    "Cassandra dulu pengasuhku.", // mary
    "Aku sangat bangga padanya.", // mary
    "Cassandra adalah adik seorang ksatria, dan ia juga pendekar pedang yang hebat.", // mary
    "Aku ingin sepertinya.", // mary
    "Aku selalu mendesaknya mengajakku berburu.", // mary
    "Aku memintanya hari demi hari, dan akhirnya suatu hari ia mengajakku ke hutan.", // mary
    "Ia menemukan area aman,", // mary
    "Tetapi entah bagaimana monster kuat menemukan kami. Biasanya tak pernah di area itu.", // mary
    "Ia membunuhnya sambil melindungiku.", // mary
    "Tetapi aku terluka.", // mary
    "Sungguh malang.", // ann
    "Ya, mata ini.", // mary
    "Ayahku murka dan mengurungnya.  |Ia sangat marah sampai tak bisa kubujuk untuk bersikap lunak.", // mary
    "Aku tak menyimpan dendam soal lukaku.", // mary
    "Ia tetap pahlawanku.", // mary
    "Jadi semua salahku ia terjebak di sana.", // mary
    "Sungguh mengerikan.", // ann
    "Hei, ini bukan salah Mary kan?", // loretta
    "Benar. Kamu tak boleh menyalahkan diri sendiri.", // ann
    "Sekalipun kamu berkata begitu, tak mengubah fakta ia terkunci.", // mary
    "Jadi itulah mengapa kamu khawatir tentang keadaannya.", // ann
    "Mary membuat hadiah untuk Cassandra", // loretta
    "Hei, jangan beri tahu mereka!", // mary
    "Dan toh bukan hadiah istimewa.", // mary
    "Tidak apa, mungkin mereka bisa membantumu.", // loretta
    "Tentu... aku memang butuh bantuan...", // mary
    "Kami bisa membantu!", // ann
    "Bisakah membawakanku #{MAGIC_STONES} batu karbunkel?", // mary
    "Tolong!", // loretta
    "Putri Mary memerintahkan!", // loretta
    ["Aku mengerti", "Aku khawatir tidak"],
    "Terima kasih.", // mary
    "Tak perlu. Mereka tak berhak menolak.", // loretta
    "Baiklah, pergi." // loretta
  ],
  door: [
    "Kami sedang bereksperimen.", // loretta
    "Jangan ganggu.", // loretta
    "Oh, jangan masuk!", // loretta
    "Kami sibuk di sini..." // loretta ?????
  ],
  progress: [
    "#{MAGIC_STONES} batu karbunkel.", // mary
    "Bawa cepat." // loretta
  ],
  solve: [
    "Cahaya itu! Mereka membawa batunya!", // mary
    "Mereka berhasil!", // loretta
    "Terima kasih!", // mary
    "Sama-sama.", // ann
    "Bagus karena itu hadiah untuk Cassandra.", // ann
    "Apa yang kamu buat?", // ann
    "Ini rahasia.", // mary
    "Baiklah, terima kasih." // mary
  ],
  solved: [
    "Terima kasih, kamu menyelamatkan hadiahku. Aku khawatir tak bisa menyelesaikannya.", // mary
    "Bantuanmu tak lagi dibutuhkan, kamu boleh pergi." // loretta
  ]
}
export const moonshine = {
  talk1: [
    "Wah! Siapa kamu?", // dionysus
    "Mengapa kamu di sini?", // dionysus
    "Dan siapa kamu?", // ann
    "Kudengar ada orang mencurigakan yang membawa sopi, apakah itu kamu?", // ann
    "Tidak, tentu saja bukan.", // dionysus
    "Lalu apa isi tong itu?", // ann
    "...", // dionysus
    "Oh benar, ini anggur.", // dionysus
    "Mmmm hmmm.", // ann
    "Apakah kamu mencoba menjebloskanku ke penjara bawah tanah?", // dionysus
    "Apakah itu yang kamu harapkan?", // dionysus
    "Bukan begitu...", // ann
    "Bisakah menceritakan tentang tempat ini?", // ann
    "Aku ingin tahu tentang lorong ini, dan istana.", // ann
    "Tentu, aku tahu semuanya.", // dionysus
    "Seperti kamu tahu, lorong bawah tanah ini menuju istana.", // dionysus
    "Di balik lorong ini ada pintu menuju gudang istana.", // dionysus
    "Dan kamu mengantar sopimu ke sana?", // ann
    "Ya. Sehari satu tong.", // dionysus
    "Aku membawanya ke ujung lorong bawah tanah.", // dionysus
    "Saat 20 tong terkumpul, itu dibawa ke istana.", // dionysus
    "Apakah itu berarti,", // francisca
    "Pintu ke istana hanya terbuka dari dalam?", // francisca
    "Ya.", // dionysus
    "Mengapa kamu mencoba menyusup ke istana?", // dionysus
    "Kamu toh tak bisa melewati ruangan ini untuk mencapai pintu.", // dionysus
    "Mengapa tidak?", // ann
    "Orthrus menjaga ruangan berikutnya.", // dionysus
    "Kamu tak bisa membuka pintu jika telah dimakan.", // dionysus
    "Orthrus?", // ann
    "Oh benar. Orthrus adalah anjing penjaga berkepala dua milik istana.", // dionysus
    "Aku selalu menunggu ia tidur lalu menyelinap lewat, |Tetapi kalian bertiga tak mungkin menyelinap darinya.", // dionysus
    "Karena sudah tahu, sebaiknya kalian kembali." // dionysus
  ],
  talk2: [
    "Orthrus adalah anjing penjaga berkepala dua milik istana. Kamu takkan melewatinya.", // dionysus
    "Karena sudah tahu, sebaiknya kalian kembali." // dionysus
  ],
  talk3: [
    "Apakah kamu serius masuk ke sana?", // dionysus
    "Hentikan.", // dionysus
    "Apakah kamu ingin mati?", // dionysus
    "Itu satu-satunya jalan.", // ann
    "Aku tak ingin melihat mayat tiga gadis muda.", // dionysus
    "Lalu apa yang harus kami lakukan?", // ann
    "Hmm...", // dionysus
    "Oke, berbahaya tetapi aku punya rencana.", // dionysus
    "Mari bekerja sama.", // dionysus
    "Hmm?", // ann
    "Oke.", // dionysus
    "Akan kubuat Orthrus lebih mudah kamu kalahkan.", // dionysus
    "Bagaimana?", // ann
    "Serahkan saja padaku.", // dionysus
    "Tetapi pastikan kamu mengalahkannya, aku pun mempertaruhkan nyawa.", // dionysus
    "Tunggu sebentar.", // dionysus
    "Ia benar-benar masuk ke sana.", // jaquelyn
    "Dengan tong anggur, apa rencananya?", // ann
    "Oke! Selesai!", // dionysus
    "Berjalan lancar.", // dionysus
    "Apa yang kamu lakukan di sana?", // ann
    "Memberinya setong anggur.", // dionysus
    "Setelah selesai, ia akan lebih mudah dikalahkan.", // dionysus
    "Aku kehilangan hasil hari ini, tetapi akan sepadan dalam jangka panjang.", // dionysus
    "Ayolah, masuk!" // dionysus
  ],
  talk4: [
    "Orthrus mabuk.", // dionysus
    "Ayolah, sekarang kesempatanmu." // dionysus
  ],
  talk5: [
    "Kamu selamat!", // dionysus
    "Apakah kamu mengalahkannya?", // dionysus
    "Sudah selesai?", // dionysus
    "Sekarang aku tak perlu takut padanya lagi.", // dionysus
    "Terima kasih telah memberikan tong anggurmu.", // ann
    "Haha! Bahkan naga di Kuil Grefalde bisa dikalahkan jika cukup mabuk!", // dionysus
    "Aku senang bertemu denganmu.", // dionysus
    "Pertukaran yang menguntungkan.", // dionysus
    "Terima kasih!", // ann
    "Baiklah, semoga berhasil menyelinap ke istana." // dionysus
  ],
  solved: [
    "Baiklah, berhati-hatilah." // dionysus
  ],
  orthrus1: [
    "Wah, anjing besar!", // ann
    "Ya, ia tampak sangat ganas.", // jaquelyn
    "Mari kembali untuk saat ini." // francisca
  ],
  orthrus2: [
    "Baiklah Orthrus.", // ann
    "Semuanya, ayo!", // ann
    "Kita berhasil mengalahkannya.", // ann
    "Mari beri tahu penyelundup itu." // jaquelyn
  ]
}
export const aragnie = {
  jack: [
    "Hei, kamu!", // ann
    "Kalian bertiga, dari taman...", // jack
    "Apa yang kamu lakukan di sini?", // jack
    "Kamu sudah kelewatan!", // ann
    "Apa yang kamu lakukan kali ini?", // ann
    "Aku tak menjawabmu.", // jack
    "Aku sungguh tak punya waktu untuk ini.", // jack
    "Ambil.", // jack
    "Hei, tunggu!", // ann
    "Mengapa Jack si Pembunuh Raja di sini?", // ann
    "Apakah ia ksatria, Hector, ternyata?", // jaquelyn
    "Hmmm.", // ann
    "Aku tak tahu, tetapi ayo cari tahu." // ann
  ],
  hector1: [
    "Siapa kamu!?", // hector
    "Eh...", // ann
    "Dan apa yang kamu lakukan dengan kunciku?", // hector
    "Kami hanya meminjam ini.", // ann
    "Apakah kamu kakak Cassandra?", // ann
    "Begitu. Adikku memberitahumu di mana disembunyikan.", // hector
    "Ya. Aku kakak Cassandra.", // hector
    "Apa yang kamu lakukan di sini?", // hector
    "Cassandra menceritakan semuanya kepada kami.", // ann
    "Kamu mencari Aragnier untuk mengeluarkan Cassandra dari penjara, kan?", // ann
    "Aku memburu laba-laba itu bertahun-tahun.", // hector
    "Tetapi aku menyerah beberapa waktu lalu.", // hector
    "Lalu mengapa kamu di sini?", // ann
    "Ini...", // hector
    "Aku...", // hector
    "Aku punya pengakuan.", // hector
    "Aku punya dendam yang harus diselesaikan dengan raja.", // hector
    "Aku ingin balas dendam.", // hector
    "Balas dendam?", // ann
    "Tidak selalu begini!", // hector
    "Aku pernah bersumpah setia kepada raja, aku ksatria setianya.", // hector
    "Aku mulai membencinya setelah ia mengusirku.", // hector
    "Bahkan saat itu, aku hanya berpikir mengalahkan Aragnier dan membebaskan adikku.", // hector
    "Tetapi aku mencari bertahun-tahun, dan tak menemukan apa pun!", // hector
    "Lalu setelah aku menyerah, dan di titik terendahku, seorang pria datang kepadaku.", // hector
    "Ya, pria berjubah hitam itu. Kamu pasti melihatnya di jalan masuk.", // hector
    "Hei!", // ann
    "Apa yang kamu bicarakan dengannya?", // ann
    "Ia ular.", // hector
    "Ia memupuk amarahku kepada raja, membuatnya membesar.", // hector
    "Ia memberitahuku tentang penyelundup itu.", // hector
    "Menjelaskan pintu akan terbuka begitu dua puluh tong terkumpul.", // hector
    "Ia menuntunku ke sini.", // hector
    "Aku sudah kehilangan akal.", // hector
    "Ia... memanfaatkan kerentanan orang.", // ann
    "Hei, jika kamu bisa mengalahkan Aragnier dan membebaskan Cassandra, maukah mengurungkan balas dendam?", // ann
    "...Aku tak tahu.", // hector
    "Mungkin.", // hector
    "Bantu kami menemukan laba-laba itu.", // ann
    "Aku tak bisa. Aku tak bisa menemukan Aragnier. Bertahun-tahun mencari.", // hector
    "Tinggalkan aku." // hector
  ],
  hector2: [
    "Kita bisa menemukan Aragnier sekarang!", // mary
    "Hector sudah lama!", // mary
    "Putri Mary!", // hector
    "Nona Loretta!", // hector
    "Tak ada kehormatan membunuh Raja Edgar.", // loretta
    "Hector, tolong jangan dendam kepada ayahku.", // mary
    "Penjara Cassandra dan pemecatanmu semua salahku.", // mary
    "Aku menyebabkan banyak duka.", // mary
    "...", // hector
    "Tolong, beri aku kesempatan.", // mary
    "Kesempatan?", // hector
    "Ya, lihat ini.", // mary
    "Lentera?", // hector
    "Ini lentera batu karbunkel.", // mary
    "Cahaya ini menerangi jejak Aragnier.", // mary
    "Itu...", // hector
    "Mary dan aku belajar bertahun-tahun dan menemukan ini.", // loretta
    "Ketiganya membantu kami menemukan batu karbunkel.", // loretta
    "Kamu membutuhkannya untuk membuat cahaya ajaib.", // ann
    "Apakah ini akan menyelamatkan adikku?", // hector
    "Ya!", // loretta
    "Urungkan rencanamu membalas dendam.", // loretta
    "Mari pergi bebaskan Cassandra.", // mary
    "Kalian bertiga, ayo!", // mary
    "Hah?", // ann
    "Kamu tak bisa menolak putri!", // loretta
    "Aku khawatir kami tak punya kekuatan mengalahkan Aragnier setelah membuat lentera.", // loretta
    "Begitu, kalahkan Aragnier, serahkan kepada kami!", // ann
    "Tunggu.", // hector
    "Tidak, jangan tunggu.", // mary
    "...", // hector
    "...Benar.", // hector
    "Tak ada alasan ragu.", // hector
    "Mari pergi bebaskan adikku." // hector
  ],
  cassandra1: [
    "Cassandra.", // hector
    "Hector, siapa yang kamu bawa?", // cassandra
    "Cassandra, sudah lama.", // mary
    "Ah!", // cassandra
    "Mengapa... Mengapa kamu di sini?", // cassandra
    "Aku perlu meminta maaf kepadamu.", // mary
    "Hah?", // cassandra
    "Aku perlu mengeluarkanmu dari sini.", // mary
    "Aku tak bisa pergi.", // cassandra
    "Dan kamu tak perlu meminta maaf.", // cassandra
    "Aku yang perlu meminta maaf kepadamu.", // cassandra
    "Dengar, Cassandra.", // hector
    "Putri membuat lentera ajaib untuk menemukan Aragnier.", // hector
    "Apa?", // cassandra
    "Benarkah?", // cassandra
    "Ya. Untukmu.", // hector
    "Hanya untukku?", // cassandra
    "Tak ada alasan mengabaikan perasaan putri.", // hector
    "...", // cassandra
    "Sekarang mari nyalakan batu ajaib.", // loretta
    "Wah!", // ann
    "Aku bisa melihat benang Aragnier!", // ann
    "Sekarang kita bisa memburunya." // ann
  ],
  cassandra2: "...",
  lamp: ["Cari", "Tunggu"],
  aragnie_hector: [
    "Aku tak pernah tahu ada tempat seperti ini!", // hector
    "Aragnier pasti bersembunyi di sini!", // hector
    "Mari lanjutkan.", // ann
    "Wah!!", // hector
    "Ini tidak bagus...", // hector
    "Serius?" // francisca
  ],
  boss: [
    "Itu dia! Aragnier!", // mary
    "Tampak kuat...", // mary
    "Ayolah, kalahkan!", // loretta
    "Tunggu jantungku melambat.", // ann
    "Kita mengalahkannya...", // ann
    "Bagus!", // loretta
    "Aku malu.", // hector
    "Pertarungan yang luar biasa.", // hector
    "Mari kembali kepada Cassandra!" // mary
  ],
  last1: [
    "Kita benar-benar bisa memotong benang!", // loretta
    "Luar biasa!", // mary
    "Cassandra, akhirnya kamu bebas.", // mary
    "...", // cassandra
    "Sepertinya aku tetap tidak bebas.", // cassandra
    "Apa, mengapa tidak?", // mary
    "Matamu.", // cassandra
    "Setiap kali melihat mata itu hatiku terluka.", // cassandra
    "Kamu sedang dihukum di penjaramu sendiri.", // cassandra
    "Bagaimana aku bisa menatap wajahmu?", // cassandra
    "Cassandra, hentikan.", // mary
    "Ya, jangan takut keluar dari sini.", // loretta
    "Tidakkah kamu sadar mengapa Mary melalui semua ini?", // loretta
    "Mary merasakan hal sama saat melihatmu di penjara.", // loretta
    "Nona Loretta...", // cassandra
    "Cassandra, keluarlah.", // hector
    "Mari pergi ke tempat jauh dan mulai lagi.", // hector
    "...Aku mengerti.", // cassandra
    "Bagaimana aku bisa berterima kasih?", // cassandra
    "Cassandra, kamu tujuh tahun di penjara ini karena kesalahanku.", // mary
    "Aku melakukan ini bukan karena kasihan, ini penebusanku.", // mary
    "Ayolah, jangan menoleh. Keluarlah!", // mary
    "Oke... Oke, ayo pergi!" // cassandra
  ],
  last2: [
    "Mereka pergi.", // loretta
    "Ya...", // mary
    "Cassandra...", // mary
    "Adikku...", // mary
    "Gembirakan Mary." // loretta
  ],
  last3: [
    "Hector telah mengurungkan rencananya membalas dendam kepada raja.", // ann
    "Benar. Kita berusaha terbaik Ann.", // jaquelyn
    "Mari kembali dan periksa buku sejarah." // francisca
  ]
}
