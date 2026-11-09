/* eslint-disable quotes */
export const templeCharacters = {
  soldier1: [
    "Tepat seperti kata Paduka.", // soldier1
    "Putri menyelinap lewat penjaga di istana,", // soldier1
    "Dan ia mengikuti Paduka ke sini.", // soldier1
    "Tetapi kami tak boleh membiarkanmu masuk." // soldier1
  ],
  soldier2: [
    "Berapa kali pun kamu meminta, aku tak bisa membiarkanmu lewat.", // soldier2
    "Kamu tak bisa membantahku, akan kukatakan kepada ayahku!", // mary
    "Perintahku langsung dari Paduka.", // soldier2
    "Mohon maafkan aku." // soldier2
  ],
  mary: [
    "Oh hei, orang mencurigakan yang kutemui di lorong bawah tanah.", // mary
    "Hehe, senang bertemu lagi.", // ann
    "Apa yang kamu lakukan di sini?", // ann
    "Berbahaya.", // ann
    "Ayah dan pamanku bertarung melawan naga.", // mary
    "Kami tak bisa menunggu di sini!", // mary
    "Tetapi para ksatria ini tak membiarkan kami pergi lebih jauh.", // mary
    "Tolong lakukan sesuatu!", // mary
    "Hmmm, kurasa tak ada yang bisa dilakukan." // ann
  ],
  loretta: [
    "?", // loretta
    "Kalian semua tampak familier.", // loretta
    "Serius, kamu lupa?", // ann
    "Ini aku, Ann. Kita bertemu di lorong bawah tanah.", // ann // TODO: ask
    "Oh, sekarang aku ingat.", // loretta
    "Apa yang kamu lakukan di sini?", // ann
    "Paduka berencana melawan naga.", // loretta
    "Mary dan aku bergegas ke sini.", // loretta
    "Yah aku khawatir...", // ann
    "Jika sesuatu terjadi pada Paduka, maka Mary...", // loretta
    "Aku harus memberi dukungan...", // loretta
    "Aku yakin semuanya akan baik-baik saja." // ann
  ],
  dario: {
    talk1: [
      "Oh! Kamu nekromanser dari katakomba.", // ann
      "Ini kalian bertiga.", // dario
      "Bagus.", // dario
      "Aku perlu berterima kasih.", // dario
      "Terima kasih telah menenangkan arwah ratu.", // dario
      "Aku sangat menyesal atas bahaya yang menimpamu.", // dario
      "Tidak apa.", // ann
      "Tetapi apa yang kamu lakukan di sini?", // ann
      "Kudengar Pertapa Hutan dipanggil untuk membantu menaklukkan naga.", // dario
      "Aku ikut karena khawatir.", // dario
      "Jangan sungkan beri tahu aku jika perlu pulih.", // dario
      "Terima kasih!" // ann
    ],
    talk2: [
      "Apakah kamu perlu pulih?" // dario
    ],
    option: ["Tolong", "Baiklah"]
  },
  drystan: [
    "Kamu orang bijak dari Hutan Warkano!", // ann
    "Terima kasih lagi telah membuat obat.", // ann
    "Ini tiga gadis dari Hutan Warkano.", // drystan
    "Apakah kamu datang untuk menyelamatkan keluarga kerajaan lagi?", // drystan
    "Apa yang kamu lakukan di sini?", // ann
    "Aku tak suka meninggalkan hutanku,", // drystan
    "Tetapi aku harus membantu menyembuhkan para prajurit.", // drystan
    "Begitu.", // ann
    "Naga telah bertindak nekat.", // drystan
    "Banyak prajurit gugur.", // drystan
    "Apakah naga sekuat itu?", // ann
    "Mereka punya kekuatan khusus, tak dikenal manusia.", // drystan
    "Kebijaksanaan, bukan kekuatan, penting untuk melawan kekuatan naga.", // drystan
    "Dahulu kala, manusia yang membangun kuil ini bijak dalam hal itu.", // drystan
    "Tetapi itu hilang bagi kita semua.", // drystan
    "Kebijaksanaan...", // ann
    "Kurasa kali ini sebaiknya kamu tidak ikut campur.", // drystan
    "Ini tidak seperti menyingkirkan beruang." // drystan
  ],
  ray: [
    "Hei, kamu penjarah makam!", // ann
    "Hah?", // ray
    "Kamu gadis-gadis dari katakomba?", // ray
    "Apa yang kamu lakukan di sini?", // ann
    "Ini kesempatan sekali seumur hidup.", // ray
    "Aku datang untuk melihat naga.", // ray
    "Kamu ingin melihat naga?", // ann
    "Kamu pasti tahu betapa berbahayanya!", // ann
    "Mengapa itu penting?", // ray
    "Sombong sekali.", // ann
    "Yah, jaga keselamatan.", // ann
    "Hmmm." // ray
  ]
}

export const lorraine = {
  start1: [
    "Apa yang kamu lakukan?", // ann
    "Aku memperbaiki peranti arca ini.", // architect
    "Peranti?", // ann
    "Ya ada banyak peranti tersembunyi di kuil.", // architect
    "Mereka membuka dan menutup pintu.", // architect
    "Apakah kamu pemahat arca ini?", // ann
    "Tidak.", // architect
    "Kuil ini dibuat dan ditinggalkan sejak lama.", // architect
    "Aku hanya merawat perantinya.", // architect
    "Kebetulan saja aku menemukan peranti ini.", // architect
    "Benarkah? Kebetulan?", // ann
    "Sejak kunjungan pertamaku ke sini aku terpesona oleh arca-arca.", // architect
    "Aku tak pernah melupakan arca ini.", // architect
    "Aku akhirnya menjadi pemahat sendiri.", // architect
    "Suatu hari aku mempelajari arca ini begitu tekun sampai benar-benar lupa makan,", // architect
    "Saat itulah kamu menemukan peranti ini.", // ann
    "Ah ya, hari yang luar biasa.", // architect
    "Aku masih ingat kegembiraanku melihat peranti tersembunyi di alasnya.", // architect
    "Itu rusak, tetapi kuperbaiki dan membuatnya berfungsi lagi.", // architect
    "Wah.", // ann
    "Tetapi lagipula, apa yang ingin kamu ketahui?" // architect
  ],
  option: ["Tanya tentang arca", "Tanya tentang naga"],
  start2: [
    "Sayap arca tampaknya patah, tidak bisakah kamu perbaiki?", // ann
    "Aku bisa, tetapi aku tidak mau.", // architect
    "Seperti kataku, aku terpesona oleh arca ini, bahkan dalam bentuk rusaknya.", // architect
    "Terlebih lagi, aku menghormati orang yang mengukir arca ini.", // architect
    "Aku takkan pernah mengubah karya sesempurna itu.", // architect
    "Itulah mengapa aku hanya memastikan perantinya bekerja.", // architect
    "Butuh bertahun-tahun.", // architect
    "Oh kamu sudah lama di sini.", // ann
    "Oh, aku menghabiskan sebagian besar hidupku di sini." // architect
  ],
  start3: [
    "Apakah kamu tahu tentang naga?", // ann
    "Tentu saja.", // architect
    "Naga itu tidur di ruang bawah tanah kuil ini, tetapi bangun sekitar setengah bulan lalu.", // architect
    "Sejak itu, Pangeran Ethelbald sering mengunjungi naga.", // architect
    "Untuk apa?", // ann
    "Aku yakin pangeran berunding dengan naga atas nama Paduka, |Berusaha meredakan murka naga.", // architect
    "Murka naga terlalu besar, Paduka datang ke sini hari ini untuk mencoba memperbaikinya.", // architect
    "Benar.", // ann
    "Kami juga ingin melihat naga,", // ann
    "Bisakah kamu menggerakkan peranti untuk kami?", // ann
    "Sayangnya, aku tidak bisa.", // architect
    "Ini istimewa.", // architect
    "Hanya wanita bernama Lyla tahu cara mengoperasikan peranti ini, ia datang hari ini bersama para ksatria.", // architect
    "Oh...", // ann
    "Bukan pengganti, tetapi,", // architect
    "Ini.", // architect
    "Apa ini?", // ann
    "Jika kamu menggerakkan peranti lain dengan ini, kamu bisa mencapai atap.", // architect
    "Kamu harus mempelajari perantinya, tetapi aku yakin kamu akan paham.", // architect
    "Terima kasih!" // ann
  ],
  item: "Kunci Sederhana",
  started: [
    "Pikirkan cara menggerakkan peranti." // architect
  ],
  solved: [
    "Sepertinya kamu telah memecahkan peranti.", // architect
    "Jika ingin pergi ke bawah tanah, carilah Lyla." // architect
  ],
  tweet: [
    "Ini peranti.", // jaquelyn
    "Bisakah Ann memecahkannya?", // francisca
    "Semoga berhasil!", // jaquelyn
    "Aku berhasil!" // ann
  ]
}
export const allsRight = {
  start: [
    "Hmmm?", // zi
    "Pintu seharusnya tersegel...", // zi
    "Ah! Naga?", // ann
    "Apakah ini pertama kalinya bertemu naga?", // zi
    "Eh, ya.", // ann
    "Aku terkejut.", // ann
    "Aku bagian suku naga.", // zi
    "Maaf jika kamu takut.", // zi
    "Wah banyak naga di kerajaan.", // ann
    "Ada.", // zi
    "Dahulu kala, naga dan manusia hidup berdampingan di sini.", // zi
    "Perang pecah antara dua ras, dan naga yang kalah meninggalkan tanah.", // zi
    "Itu kisah lama.", // zi
    "Tetapi beberapa tetap tinggal, sepertiku.", // zi
    "Begitu.", // ann
    "Mengapa kamu tinggal?", // ann
    "Karena aku percaya pada dewa tanah ini.", // zi
    "Dewa tak membedakan naga dan manusia,", // zi
    "Dewa menjaga kita semua setara.", // zi
    "Tak banyak di sini, sangat damai.", // zi
    "Benar.", // ann
    "Apakah naga lain yang tersisa hidup menyendiri?", // ann
    "Banyak.", // zi
    "Banyak naga lebih suka tinggal di daerah tenang dan terpencil.", // zi
    "Tetapi beberapa tidak suka bersembunyi.", // zi
    "Misalnya, naga perkasa Sonberk, yang disegel rajamu di bawah tanah.", // zi
    "Apakah kamu datang menantangnya juga?", // zi
    "Ummm, yah ya.", // ann
    "Kamu tak perlu khawatir tentangku.", // zi
    "Aku mungkin naga, tetapi Sonberk ganas di mataku juga.", // zi
    "Aku tahu kamu mencari pertarungan ini dengan enggan.", // zi
    "Tetapi Sonberk naga perkasa.", // zi
    "Kamu kecil harapan mengalahkannya.", // zi
    "Bagaimana raja mengatasinya dulu?", // ann
    "Manusia ras licik.", // zi
    "Senjata dan perkakas kuat mempersempit jarak antara manusia dan naga.", // zi
    "Misalnya, pedang suci Calibrenus, yang disegel di kuil ini.", // zi
    "Pedang itu jelas ancaman bagi kami.", // zi
    "Pedang suci Calibrenus...", // ann
    "Jika kami punya pedang suci bisakah melawan Sonberk?", // ann
    "Pedang akan memberimu harapan.", // zi
    "Aku tak tahu pedang apa yang dipakai raja.", // ann
    "Tetapi kamu harus tahu,", // zi
    "Pedang itu disegel oleh suku naga Nikke.", // zi
    "Aku tak bisa mengambilnya untukmu.", // zi
    "Oh begitu.", // ann
    "Apa yang bisa kita lakukan?", // ann
    "Bisakah meminta Nikke itu meminjamkannya kepadaku?", // ann
    "Maaf.", // zi
    "Kukatakan aku memahami pertarunganmu dengan Sonberk,", // zi
    "Tetapi aku tak bisa membantumu membunuh sesama naga.", // zi
    "Begitu...", // ann
    "Kami dalam masalah...", // ann
    "...", // zi
    "Tetapi aku bisa membantu menciptakan kesempatan berbicara dengan Nikke.", // zi
    "Kesempatan?", // ann
    "Nikke penyendiri.", // zi
    "Mereka takkan menanggapi panggilan manusia.", // zi
    "Tetapi kamu bisa meninggalkan pesanku.", // zi
    "Jadi kamu akan membantu!", // ann
    "Butuh persiapan.", // zi
    "Persiapan?", // ann
    "Kumpulkan #{KELUNNE_COUNT} bulu Kelunne", // zi
    "Gunakan itu untuk membuat pesan.", // zi
    "Pesan?", // ann
    "Aku tak bisa bilang mengerti, tetapi akan kubantu menemukan!", // ann
  ],
  solve: [
    "Aku mengumpulkannya.", // ann
    "Oke.", // zi
    "Tunggu sebentar.", // zi
    "Selesai.", // zi
    "Apakah ini...? Botol?", // ann
    "Aku mengisi botol dengan asap sabda.", // zi
    "Oh... eh oke.", // ann
    "Apa asap sabda?", // ann
    "Sabda para naga bisa terlihat dalam asap.", // zi
    "Wah, benarkah...", // ann
    "Buka botol ini di dekat pedang suci.", // zi
    "Sabdaku pasti sampai kepada Nikke.", // zi
    "Oke, terima kasih!" // ann
  ],
  solved1: [
    "Di dekat pedang suci, buka botol untuk melepaskan sabda.", // zi
    "Sabdaku pasti sampai kepada Nikke." // zi
  ],
  solved2: [
    "Segala dunia tiada.", // zi
    "Rumahku di sini tiada, hanya tempat damai." // zi
  ]
}
export const calibur = {
  start: [
    "Oke, mari lepaskan sabda Zi.", // ann
    "Halo.", // nikke
    "Kamu memanggil?", // nikke
    "Um, Tuan Nikke?", // ann
    "Ya", // nikke
    "Aku mendengar pesan Zi.", // nikke
    "Siapa kamu?", // nikke
    "Aku Ann.", // ann
    "Ann, apakah kamu mencari pedang suci?", // nikke
    "Ya! Bisakah meminjamkannya kepadaku?", // ann
    "Itu pedang menakjubkan.", // nikke
    "Benda menakutkan bagi kami para naga.", // nikke
    "Butuh keberanian menyerahkannya kepada manusia.", // nikke
    "Aku akan meyakinkanmu dengan cara apa pun.", // ann
    "Cara apa pun?", // nikke
    "Cara apa pun.", // ann
    "Mengapa kamu mencari pedang suci?", // nikke
    "Yah...", // ann
    "Apakah kamu ingin membunuh naga dengannya?", // nikke
    "Eh...", // ann
    "Katakan padaku.", // nikke
    "Aku ingin mengalahkan naga, Sonberk.", // ann
    "Bunuh Sonberk.", // nikke
    "Sonberk malang.", // nikke
    "Naga ganas, tetapi tetap kawanku.", // nikke
    "Begitukah?", // ann
    "Ia telah disegel sepuluh tahun,", // nikke
    "Dan akhirnya bangun.", // nikke
    "Hanya untuk diburu.", // nikke
    "Tragis...", // ann
    "Sonberk malang.", // nikke
    "...", // ann
    "Aku tahu tak bisa dihindari.", // nikke
    "Ini kini tanah manusia.", // nikke
    "Wajar mereka ingin menindasnya.", // nikke
    "Aku tak ingin menindas kaummu.", // ann
    "Mungkinkah membujuk Sonberk agar tidak melampiaskan murka kepada kerajaan kami?", // ann
    "Kurasa tidak.", // nikke
    "Begitu...", // ann
    "Hanya pedang suci bisa meyakinkannya.", // nikke
    "Baiklah,", // nikke
    "Akan kubiarkan kamu menggunakannya.", // nikke
    "Itu toh ditempa manusia.", // nikke
    "Adil mengembalikannya kepada mereka.", // nikke
    "Kamu bebas memakainya untuk melindungi kerajaanmu.", // nikke
    "Benarkah?", // ann
    "Benar.", // nikke
    "Tetapi tak sembarang orang bisa menggunakannya.", // nikke
    "Ya...", // nikke
    "Yang menempa ini ksatria perkasa.", // nikke
    "Apakah kamu sanggup menggunakannya?", // nikke
    "Kamu harus membuktikan diri.", // nikke
    "Membuktikan diri?", // ann
    "Lawan aku.", // nikke
    "Begitu.", // ann
    "Apakah kamu sanggup? ", // nikke
    "Bersiaplah!" // nikke
  ],
  talked: [
    "Apakah kamu siap?" // nikke
  ],
  option: ["Ya", "Tidak"],
  cancel: [
    "Kalau begitu kembali saat kamu siap." // nikke
  ],
  solve: [
    "Wah.", // nikke
    "Kamu sangat kuat.", // nikke
    "Baiklah. Aku menyerah.", // nikke
    "Bagus. Aku naga kurang kuat, jangan terlalu percaya diri.", // nikke
    "Baiklah... pedangnya.", // nikke
    "Ini, ambillah.", // nikke
    "Terima kasih.", // ann
    "Ya. Tampak bagus di tanganmu.", // nikke
    "Terima kasih.", // ann
    "Ya...", // nikke
    "Yah...", // nikke
    "Karena aku tak lagi harus mengawasi pedang itu,", // nikke
    "Aku mungkin pergi berwisata.", // nikke
    "Ah,", // nikke
    "Ngomong-ngomong,", // nikke
    "Apakah kalian semua curang?", // nikke
    "Hah?", // ann
    "Rasanya waktu terdistorsi saat kamu di dekat sini.", // nikke
    "...", // ann
    "Yah,", // nikke
    "Mungkin kekuatan lain buatan kalian manusia." // nikke
  ]
}
export const lute = {
  unavailable: [
    "Ah...", // ann
    "Tidur siang." // ann
  ],
  start: [
    "Halo, nona muda.", // lyla
    "Pedang yang luar biasa.", // lyla
    "Kamu datang untuk menantang naga?", // lyla
    "Benar.", // ann
    "Tetapi aku tak menemukan jalan ke bawah tanah...", // ann
    "Oh, begitu.", // lyla
    "Yang kamu cari adalah arca dewi ini.", // lyla
    "Benarkah!?", // ann
    "Kamu pasti Lyla.", // ann
    "Benar.", // lyla
    "Apakah kamu bicara dengan pemahat?", // lyla
    "Hanya kamu bisa menggerakkan peranti ini.", // ann
    "Benar.", // lyla
    "Apakah kamu ingin kubukakan?", // lyla
    "Tentu saja! ", // ann
    "Apa yang akan kamu lakukan agar kubukakan?", // lyla
    "Yah,", // ann
    "Apa pun!", // ann
    "Apa pun?", // lyla
    "Ya.", // ann
    "Aku tak benar-benar ingin kamu berbuat sebanyak itu...", // lyla
    "Oh,", // ann
    "Lalu bisakah kamu membukakannya?", // ann
    "Tidak, kamu harus berbuat sesuatu.", // lyla
    "Eh...", // ann
    "Kalau begitu, hmmm,", // ann
    "Apakah kamu suka apel?", // ann
    "Aku suka.", // lyla
    "Jadi!", // lyla
    "Aku akan memintamu menemukan yang indah.", // lyla
    "Serahkan padaku!" // ann
  ],
  started: [
    "Apakah kamu menemukan apel indah?", // lyla
    "Aku menantikannya." // lyla
  ],
  solve1: [
    "Aku telah mengumpulkan apel!", // ann
    "Sangat bagus." // lyla
  ],
  answer: [
    ["Ya, lezat.", "Terima kasih."], // lyla
    ["Hmmm apel ini tidak begitu bagus.", "Yah, mau bagaimana lagi."] // lyla
  ],
  solve2: [
    "Yah aku sudah berjanji.", // lyla
    "Akan kubuka sekarang.", // lyla
    "Peranti seperti apa?", // ann
    "Aku harus memainkan lute-ku.", // lyla
    "Pintu terbuka menanggapi musik.", // lyla
    "Hah.", // ann
    "Dengarkan." // lyla
  ],
  solve3: [
    "Yah, seharusnya sudah terbuka.", // lyla
    "Wah!", // ann
    "Mengapa bunyi menggerakkan peranti?", // ann
    "Aku juga tidak benar-benar paham.", // lyla
    "Kurasa dewi menanggapi cinta musik.", // lyla
    "Apa maksudmu?", // ann
    "Sekalipun memainkan lagu sama, ia takkan terbuka kecuali kamu mencurahkan hati.", // lyla
    "Tetapi jika kamu mainkan sepenuh hati, ia akan terbuka.", // lyla
    "Aku yakin pembuat peranti ini juga mencintai dewi.", // lyla
    "Bagus.", // ann
    "Apel-apel ini indah.", // lyla
    "Kamu pasti sangat hati-hati memetiknya.", // lyla
    "Aku yakin pemahat arca ini pun hati-hati saat mengukir rupa dewinya.", // lyla
    "Hehe.", // ann
    "Baiklah,", // lyla
    "Berhati-hatilah.", // lyla
    "Terima kasih!" // ann
  ],
  option: ["Ambil", "Tidak perlu"],
  apple: `Mendapatkan "Apel"`,
  tweet: "Lima apel telah terkumpul."
}
export const dragonKiller = {
  soldier: [
    "Naga... jauh lebih kuat dari yang kami duga...", // soldier1
    "Bagaimana raja mengalahkan naga sepuluh tahun lalu...", // soldier2
    "Aku ingin membantu Paduka... tetapi aku tak bisa bergerak lagi..." // soldier3
  ],
  block: [
    "Hei, tidakkah kamu ingin bicara kepada prajurit yang terluka?" // francisca
  ],
  start: [
    "Apakah kamu baik-baik saja!?", // ann
    "Ini kamu...", // ethel
    "Apakah naga memukulmu?", // ann
    "Ya...", // ethel
    "Kakak...", // ethel
    "Kamu datang membantu Edgar?", // ethel
    "Ya.", // ann
    "Apakah kamu pangeran?", // ann
    "Ya", // ethel double check.
    "Edgar dan naga di depan.", // ethel
    "Kamu terluka parah.", // ann
    "Jangan khawatir tentangku.", // ethel
    "Kakakku bertarung sendirian sekarang.", // ethel
    "Edgar...", // ethel
    "Bantu kakakku..." // ethel
  ],
  started: [
    "Apakah kita pernah bertemu di suatu tempat?", // ann
    "Tak ada waktu bergosip." // ethel
  ],
  confirm: [
    "Sarang naga di balik sana." // francisca
  ],
  confirmOption: ["Maju", "Berhenti"],
  king1: [
    "Edgar, bagus akhirnya kamu menemukan keberanian menunjukkan diri.", // sonberk
    "Aku tak pernah bisa pulang selama pria yang menyegelku sepuluh tahun berjalan bebas.", // sonberk
    "Atau... apakah kamu benar-benar berpikir bisa mengalahkanku lagi, seperti sepuluh tahun lalu?", // sonberk
    "Jangan begitu sombong.", // king
    "Sonberk, katakan sesuatu kepadaku.", // king
    "Apakah amarahmu reda jika kuserahkan kepalaku di sini sekarang?", // king
    "Kamu mengkhawatirkan kerajaanmu?", // sonberk
    "Kamu mencari ketenangan.", // sonberk
    "Kamu di sini sekarang.", // sonberk
    "Kakakmu Ethelbald telah memenuhi janjinya.", // sonberk
    "Kamu ingin menukar nyawamu demi kebaikan kerajaanmu.", // sonberk
    "Ya.", // king
    "Aku tak tahu apa yang disetujui kakakku, tetapi itulah yang kuinginkan.", // king
    "Mandikan aku dalam api sampai amarahmu puas." // king
  ],
  king2: [
    "Huwa!", // king
    "!", // ann
    "Cepat!", // ann
    "...", // king
    "Ia ambruk!" // ann
  ],
  sonberk: [
    "Sonberk! Bersiaplah!", // ann
    "Siapa?", // sonberk
    "Kamu bukan ksatria raja.", // sonberk
    "Kami hanya warga kerajaan.", // ann
    "Hanya warga.", // sonberk
    "Namun kamu datang ke sini untuk membantu raja?", // sonberk
    "Benar.", // ann
    "Dan apa yang bisa dilakukan gadis-gadis kecil kepadaku?", // sonberk
    "Membunuhmu.", // ann
    "Dengan pedang ini.", // ann
    "Pedang itu...", // sonberk
    "Aku kenal pedang itu.", // sonberk
    "Mengapa ada padamu?", // sonberk
    "Tidak penting.", // sonberk
    "Masih di tangan gadis kecil.", // sonberk
    "Jika kamu ingin mati di sini di samping rajamu, akan kukabulkan.", // sonberk
    "Ayolah!" // sonberk
  ],
  solve: [
    "Selesai! Kalah!", // ann
    "Kita berhasil Ann.", // jaquelyn
    "Entah bagaimana.", // francisca
    "Oke, kita harus membantu raja dan para ksatrianya!", // ann
    "Ya.", // jaquelyn
    "Setelah menolong mereka, kita bisa menghilang.", // francisca
    "Oke!" // ann
  ]
}
