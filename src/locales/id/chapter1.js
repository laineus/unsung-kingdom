/* eslint-disable quotes */
export const dog = {
  start: [
    "Hutan ini berbahaya, kecuali ada urusan mendesak kusarankan jangan pergi lebih jauh.", // hunter
    "Mengapa begitu berbahaya?", // ann
    "Beruang buas telah muncul.", // hunter
    "Beruang?", // ann
    "Bukan beruang biasa, ini sungguh binatang buas.", // hunter
    "Awalnya tidak berbahaya, sampai ia mencicipi manusia pertama.", // hunter
    "Ia mengingat rasanya, dan kini agresif memburu siapa pun yang masuk hutan.", // hunter
    "Wah!", // ann
    "Pemburu kerajaan, bahkan satu unit tentara bayaran, dikirim untuk menangkap beruang itu, |Tetapi tak ada kabar dari mereka sejak itu.", // hunter
    "Apakah ada imbalan bila mengalahkan beruang itu?", // ann
    "Pasti ada imbalan.", // francisca
    "Hmmm. Kuharap ceritanya sangat dibesar-besarkan.", // hunter
    "Itu cerita bagus bagi yang tak perlu masuk hutan.", // hunter
    "Lagipula, aku tak ingin melihat binatang buas seperti itu.", // hunter
    "Jika seseorang mengalahkannya, kami semua akan senang.", // hunter
    "Jadi kamu pemburu.", // ann
    "Apa yang kamu buru di sini?", // ann
    "Bukan beruang buas, itu pasti! Hanya hewan kecil untuk daging.", // hunter
    "Tetapi sekarang aku hanya mencari anjing-anjingku yang kabur.", // hunter
    "Anjing-anjingmu kabur?", // ann
    "Anjing pemburuku punya lima ekor anak anjing, umurnya belum setahun.", // hunter
    "Maaf merepotkan, tetapi jika melihat anak anjing tolong bawakan kepadaku?", // hunter
    ["Tentu", "Aku sangat sibuk"],
    ["Terima kasih. Senang bertemu denganmu.", "Begitu ya."] // hunter
  ],
  started: [
    "Terima kasih!", // hunter
    "Tersisa #{count} ekor anak anjing. ", // hunter
    "Aku sangat beruntung bertemu denganmu." // hunter
  ],
  solve: [
    "Terima kasih! Kalian bertiga!", // hunter
    "Sejujurnya, aku tak menyangka kelimanya kembali.", // hunter
    "Bagaimana aku bisa membalasmu?", // hunter
    "Tolong jangan khawatir!", // ann
    "Oh aku tak tahu bisakah kamu memakai ini, tetapi terimalah busur dan panah cadanganku.", // hunter
    "Terima kasih. Aku tahu betapa pentingnya busur bagi pemburu.", // ann
    "Benar.", // hunter
    "Kami menangkap mangsa dengan perangkap dan panah beracun.", // hunter
    "Butuh waktu, tetapi itu cara berburu paling aman.", // hunter
    "Hmmm.", // ann
    "Ngomong-ngomong, tempo hari, ada orang mencurigakan yang memintaku berbagi racun untuk racun itu.", // hunter
    "Aku menolak karena ia tampak sangat mencurigakan...", // hunter
    "Tetapi kalian waspadalah terhadap orang aneh yang kalian lihat." // hunter
  ],
  solved: [
    "Kamu menyelamatkan mereka semua, terima kasih banyak." // hunter
  ],
  dog: {
    notStarted: "Apa yang kamu lakukan sendirian di sini, kawan?", // ann
    d1: "Hei, kemari anak kecil.", // ann
    d2: "Anak baik.", // jaquelyn
    d3: "Hei anak anjing, ke sini.", // francisca
    d4: "Hei, kemari kawan.", // ann
    d5: "Ayolah, pemburu pasti khawatir.", // jaquelyn
    jaquelyn: "Tersisa #{remain} ekor anjing",
    francisca: "Tersisa #{remain} ekor anjing",
    foundAll: "Itu semuanya."
  }
}
export const mercenary = {
  start: [
    "Apakah kalian berdua baik-baik saja!?", // ann
    "Ya, kami baik-baik saja.", // leader
    "Sepertinya kamu terluka...", // jaquelyn
    "Kami datang untuk menaklukkan monster itu, Beruang Rex, tetapi ia mengalahkan kami.", // leader
    "Ia benar-benar menghajar kami. Maafkan aku.", // leader
    "Apakah ada imbalan bila menaklukkan beruang itu?", // ann
    "Tentu saja.", // leader
    "Raja menawarkan imbalan besar.", // leader
    "Semua orang ingin ancaman ini disingkirkan.", // jaquelyn
    "Ia bukan sekadar gangguan bagi pengguna hutan.", // leader
    "Kami yakin beruang itu berkaitan dengan penyakit kerajaan.", // leader
    "Bagaimana beruang ini mungkin terlibat?", // jaquelyn
    "Konon pertapa tua bernama Drystan tinggal di kedalaman hutan ini, |Dan dapat membuat obat untuk menyembuhkan penyakit apa pun.", // leader
    "Tetapi untuk itu, ia membutuhkan darah Beruang Rex.", // leader
    "Aku belum pernah mendengar darah monster dipakai sebagai bahan obat.", // francisca
    "Apakah pertapa ini benar-benar tabib?", // francisca
    "Aku tak tahu.", // leader
    "Kami hanya ingin mendapatkan imbalan.", // leader
    `Hanya diberitahu "keluarga kerajaan" tetapi kurasa Raja Edgar sendirilah yang sakit.`, // leader
    "Pasti begitu mengingat besarnya imbalan.", // leader
    "Begitu...", // ann
    "Ngomong-ngomong,", // leader
    "Jika melihat prajurit lain dari unitku, bisakah memberitahunya di mana aku?", // leader
    "Kami terpisah saat beruang menyerang dan ia pasti tersesat.", // leader
    "Aku tak bisa mundur dari hutan sebelum menemukannya.", // leader
    ["Tentu.", "Aku sangat sibuk."],
    ["Terima kasih banyak.", "Begitu ya."] // leader
  ],
  started: "Aku yakin ia belum pergi jauh.", // leader
  flower: [
    "Bukankah ini bunga aneh? Aku belum pernah melihat yang seperti ini.", // ann
    "Mari periksa.",
    "Biarkan saja."
  ],
  battle: [
    "Wah... Itu monster.", // ann
    "Lihat Ann, ada orang di dalamnya!", // francisca
    "Ugh...", // member2
    "Wah!", // ann
    "Apakah kamu baik-baik saja?", // jaquelyn
    "Kamu menyelamatkanku...", // member2
    "Kamu dimakan monster bunga?", // jaquelyn
    "Tidak, aku melompat sendiri.", // member2
    "Sendiri?", // francisca
    "Kamu pasti kerabat Ann.", // francisca
    "Hei!", // ann
    "Sebenarnya aku lari dari Beruang Rex,", // member2
    "Ia mengejarku ke sini.", // member2
    "Di depanku bunga, di belakangku beruang raksasa itu.", // member2
    "Aku tak berniat berakhir di perut bunga.", // member2
    "Begitu...", // ann
    "Aku langsung menyesali keputusanku.", // member2
    "Jika kutahu aku akan larut perlahan di perut bunga,", // member2
    "Aku lebih baik menghadapi beruang dan terbunuh.", // member2
    "Wah...", // ann
    "Tetapi berkat kalian bertiga, aku selamat!", // member2
    "Situasi yang mengerikan.", // jaquelyn
    "Ngomong-ngomong, jika kamu bagian unit tentara bayaran,", // jaquelyn
    "Pimpinanmu mencarimu di selatan sini.", // jaquelyn
    "Benarkah? Terima kasih atas semuanya.", // member2
    "Tolong mampir lagi nanti, aku ingin berterima kasih.", // member2
    "Kalian semua harus berhati-hati di hutan ini." // member2
  ],
  member1: [
    "Aku tak bisa menemukannya...",
    "Ia pasti...",
    "Terima kasih banyak telah menolong kawanku.",
    "Tidak mungkin, ia benar-benar bersembunyi di perut monster bunga!"
  ],
  member2: [
    "Terima kasih lagi telah menyelamatkanku.",
    "Maukah menerima hadiah dari pimpinanku?"
  ],
  leader: [
    "Oh, kamu kembali!",
    "Prajuritku menceritakan semuanya.",
    "Ia ditelan monster bunga.",
    "Tidak heran kami tak bisa menemukannya.",
    "Terima kasih telah menyelamatkannya. Terima kasih banyak.",
    "Kami mundur, Beruang Rex terlalu kuat."
  ]
}
export const drystan = {
  door: "Aku sedang pergi.", // ann
  start: [
    "Apakah kamu Drystan?", // ann
    "Ya, ada perlu apa?", // drystan
    "Kudengar kamu bisa membuat obat untuk menyembuhkan penyakit apa pun.", // ann
    "Bahkan lebih banyak lagi.", // drystan
    "Lagi?", // ann
    "Pertama keluarga kerajaan datang.", // drystan
    "Lalu para pedagang yang ingin menjual obat kepada keluarga kerajaan.", // drystan
    "Sejauh ini, tak ada yang membawa kembali bahan yang kubutuhkan!", // drystan
    "Bisakah memberitahuku apa yang kamu butuhkan?", // ann
    "Aku tak keberatan.", // drystan
    "Aku tak peduli siapa yang membawakannya.", // drystan
    "Pertama-tama aku butuh #{MANDRAKE_COUNT} akar mandrake.", // drystan
    "Ya, apa lagi?", // ann
    "Bawa dulu, baru kukatakan.", // drystan
    "Aku orang sibuk." // drystan
  ],
  progress: [
    "#{MANDRAKE_COUNT} akar mandrake.", // drystan
    "Bawa cepat." // drystan
  ],
  solve: [
    "Aku telah mengumpulkan akar mandrake.", // ann
    "Cepat sekali.", // drystan
    "Hmmm. Ya ini cukup." // drystan
  ]
}
export const bear = {
  start: [
    "Apa bahan berikutnya?", // ann
    "Darah iblis.", // drystan
    "Bawakan aku darah iblis yang telah memburu manusia itu.", // drystan
    "Beruang Rex telah berkeliaran di hutan, membuat keributan.", // drystan
    "Maksudmu darah Beruang Rex?", // ann
    "Ya.", // drystan
    "Dengan darah monster yang telah menyerap daya hidup banyak makhluk, |Aku bisa membuat obat.", // drystan
    "Tetapi jumlah pada pedangmu takkan cukup, |Aku butuh sebotol penuh.", // drystan
    "Kita perlu mengalahkan Beruang Rex.", // ann
    "Baiklah, akan kubawakan darah itu." // ann
  ],
  progress:
    "Itu Beruang Rex. Pastikan kamu membunuhnya dan membawakanku sebotol darahnya.", // drystan
  bearArea: [
    "Tidak ada monster di sini?", // ann
    "Aneh. Mari maju dengan hati-hati." // francisca
  ],
  bear: [
    "Ah!", // ann
    "Semuanya, ayo!", // ann
    "Kita berhasil.", // francisca
    "Oke, darah sudah kukumpulkan. Mari kembali kepada pertapa." // ann
  ],
  solve: [
    "Aku membawanya. Ini darah Beruang Rex.", // ann
    "Tunjukkan kepadaku.", // drystan
    "Hmm. Sepertinya kamu benar-benar mengalahkan Beruang Rex.", // drystan
    "Oke, ini obatnya.", // drystan
    "Bukankah kamu butuh darah ini untuk membuatnya?", // ann
    "Menjijikkan, aku tak menginginkannya.", // drystan
    "Pernahkah kamu mencampur darah dengan obat?", // drystan
    "Lalu mengapa kamu menginginkannya!?", // ann
    "Karena beruang bodoh itu mengganggu.", // drystan
    "Aku bahkan tak bisa berkeliaran di hutanku sendiri.", // drystan
    "Bagaimana dengan soal daya hidup? Apakah itu bohong?", // ann
    "Bagaimana jika begitu?", // drystan
    "Keluarga kerajaan penting, tetapi kesejahteraanku sendiri juga.", // drystan
    "Lagipula, aku sudah membuat obat. Jangan mengeluh.", // drystan
    "Aku tak butuh uang.", // drystan
    "... Begitukah?", // ann
    "Terima kasih atas obatnya.", // ann
    "Minum sendiri, jual kepada keluarga kerajaan, terserah padamu.", // drystan
    "Seperti kamu tahu, raja sedang sakit. Itu akan laku.", // drystan
    "Tidak, berikan kepada utusan kerajaan saat ia kembali.", // ann
    "...Hmmmmm.", // drystan
    "Oke. Aku tak tahu apa yang kamu cari, tetapi akan kulakukan seperti katamu.", // drystan
    "Ngomong-ngomong, apakah kamu punya dugaan bagaimana raja tiba-tiba sakit?", // ann
    "Tidak jarang sehat hari ini lalu sakit esok hari.", // drystan
    "Aku dibawa ke istana untuk melihat raja.", // drystan
    "Aku bertanya-tanya apakah ia benar-benar sakit.", // drystan
    "Apa maksudmu?", // ann
    "Tentunya kamu tahu aku bisa membedakan penyakit dan racun.", // drystan
    "Racun?", // ann
    "Orang-orang yang merawatnya tampaknya tidak tahu.", // drystan
    "Raja diracun?", // ann
    "Aku tak tahu.", // drystan
    "Aku tak ingin terlibat.", // drystan
    "Itulah mengapa aku memilih tinggal di sini.", // drystan
    "Lagipula akan kuberikan obat kepada utusan, pulanglah." // drystan
  ],
  end: [
    "Oke, misi kita selesai!", // ann
    "Ya, kamu hebat Ann.", // jaquelyn
    "Sekarang mari kembali.", // francisca
    "Aku ingin memeriksa sejarah lagi." // francisca
  ]
}
