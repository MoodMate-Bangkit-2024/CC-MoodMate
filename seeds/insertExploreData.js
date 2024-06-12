const exploreData = [
  {
    type: "article",
    title: "Pengertian Kesehatan Mental",
    author: "Kemenkes",
    link: "https://ayosehat.kemkes.go.id/pengertian-kesehatan-mental",
    imageUrl:
      "https://ayosehat.kemkes.go.id/imagex/content/21ed325a2dc4274609b1b5642c3ff381.webp",
    description:
      "Kesehatan mental yang baik adalah kondisi ketika batin kita berada dalam keadaan tentram dan tenang, sehingga memungkinkan kita untuk menikmati kehidupan sehari-hari dan menghargai orang lain di sekitar. Seseorang yang bermental sehat dapat menggunakan kemampuan atau potensi dirinya secara maksimal dalam menghadapi tantangan hidup, serta menjalin hubungan positif dengan orang lain.",
    publishedAt: "8 Juni 2018",
  },

  {
    type: "article",
    title: "Mental Health Disorders: Causes & How to Manage It",
    author: "Siloam Hospitals Medical Team",
    link: "https://www.siloamhospitals.com/en/informasi-siloam/artikel/apa-itu-mental-health",
    imageUrl:
      "https://mysiloam-api.siloamhospitals.com/storage-down/website-cms/website-cms-16980542352609237.webp",
    description:
      "Kesehatan mental yang baik adalah kondisi ketika seseorang mencapai keadaan mental yang tenang dan damai. Kondisi ini memungkinkan seseorang untuk berpikir lebih jernih dan lebih fokus selama beraktivitas. Kesehatan mental, seperti halnya kondisi fisik, penting untuk dijaga. Seseorang dengan kesehatan mental yang baik dapat mengoptimalkan potensinya untuk menghadapi masalah dan menjalin hubungan positif dengan orang lain. Sementara itu, kondisi mental yang terganggu dapat memiliki pengaruh buruk pada emosi, suasana hati, dan kemampuan berpikir seseorang.",
    publishedAt: "20 Maret 2024",
  },

  {
    type: "article",
    title: "Memahami Apa Itu Kesehatan Mental Hingga Cara Menjaganya",
    author: "-",
    link: "https://hellosehat.com/mental/kesehatan-mental/",
    imageUrl:
      "https://cdn.hellosehat.com/2021/01/88652cab-shutterstock_1562123215.jpg?w=1080&q=75",
    description:
      "Mental adalah hal-hal yang berkaitan dengan batin dan watak manusia. Dengan kata lain, kesehatan mental adalah kondisi ketika batin dan watak manusia dalam keadaan normal, tenteram, dan tenang, sehingga dapat menjalankan aktivitas dan menikmati kehidupan sehari-hari.",
    publishedAt: "28 Oktober 2022",
  },
  {
    type: "article",
    title: "Pentingnya Menjaga Kesehatan Mental",
    author: "-",
    link: "https://sardjito.co.id/2022/08/31/pentingnya-menjaga-kesehatan-mental/",
    imageUrl:
      "https://sardjito.co.id/wp-content/uploads/2022/09/5.-Pentingnya-Menjaga-Kesehatan-Mental-1024x576.jpeg",
    description:
      "Mental yang sehat juga merupakan cikal bakal bagi diri kita untuk terus berkembang. Banyak sekali manfaat yang bisa diperoleh dengan adanya kesehatan mental. ",
    publishedAt: "31 Agustus 2022",
  },
  {
    type: "article",
    title: "Gangguan Mental",
    author: "-",
    link: "https://www.alodokter.com/kesehatan-mental",
    imageUrl:
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1591354652/attached_image/kesehatan-mental-0-alodokter.jpg",
    description:
      "Ada banyak faktor yang bisa memicu terjadinya gangguan mental, mulai dari menderita penyakit tertentu sampai mengalami stres akibat peristiwa traumatis, seperti ditinggal mati orang yang disayang, kehilangan pekerjaan, atau terisolasi untuk waktu yang lama.",
    publishedAt: "20 April 2022",
  },
  {
    type: "article",
    title: "Berkenalan dengan Kesehatan Mental",
    author: "Aril Halida, M.Psi",
    link: "https://grhasia.jogjaprov.go.id/berita/376/berkenalan-dengan-kesehatan-mental.html",
    imageUrl:
      "https://grhasia.jogjaprov.go.id/assets/content_upload/images/imagefile__2020_12_15_09_54_47.jpg",
    description:
      "Kesehatan mental begitu istimewa, hingga WHO menetapkan setiap tanggal 10 Oktober diperingati sebagai Hari Kesehatan Jiwa Sedunia. Ditetapkannya momen ini tentu memiliki tujuan, yaitu mengkampanyekan kesehatan mental dan memberikan edukasi kepada masyarakat mengenai isu-isu yang relevan berkaitan dengan kesehatan mental.",
    publishedAt: "15 Desember 2020",
  },
  {
    type: "article",
    title:
      "Kesehatan Mental Generasi Muda Penting dalam Proses Pembangunan Bangsa",
    author: "-",
    link: "https://www.mpr.go.id/berita/Kesehatan-Mental-Generasi-Muda-Penting-dalam-Proses-Pembangunan-Bangsa",
    imageUrl: "https://www.mpr.go.id/img/blog-image/663ce69e27447.jpg",
    description:
      "Pembangunan nasional mesti menyediakan ruang bagi pembangunan non-fisik. Karena, hanya generasi muda yang sehat jasmani dan rohani yang mampu menjawab berbagai tantangan dalam kehidupan berbangsa di masa depan.",
    publishedAt: "8 Mei 2024",
  },
  {
    type: "article",
    title: "Minimnya Kesadaran Masyarakat terhadap Mental Health",
    author: "-",
    link: "https://sardjito.co.id/2022/03/09/minimnya-kesadaran-masyarakat-terhadap-mental-health/",
    imageUrl:
      "https://sardjito.co.id/wp-content/uploads/2022/03/25.-Minimnya-Kesadaran-Masyarakat-terhadap-Mental-Health-1024x1024.png",
    description:
      "Saat ini, kesehatan jiwa menjadi masalah yang belum dapat sepenuhnya diselesaikan, baik tingkat global maupun nasional.Riset Kesehatan Dasar (Riskesdas) 2018, menunjukkan lebih dari 19 juta penduduk berusia lebih dari 15 tahun mengalami gangguan mental emosional, dan lebih dari 12 juta penduduk berusia lebih dari 15 tahun mengalami depresi (Rokom, 2021).",
    publishedAt: "9 Maret 2022",
  },
  {
    type: "article",
    title: "Mengenal Pentingnya Kesehatan Mental pada Remaja",
    author: "Elsa Savitrie, SKM, M.Kes",
    link: "https://dinkes.kalbarprov.go.id/artikel/mengenal-pentingnya-kesehatan-mental-pada-remaja/",
    imageUrl: "https://dinkes.kalbarprov.go.id/images/QmXpW8pjwJCjH5Uo5721.png",
    description:
      "Kesehatan mental dipengaruhi oleh peristiwa dalam kehidupan yang meninggalkan dampak yang besar pada kepribadian dan perilaku seseorang. Peristiwa-peristiwa tersebut dapat berupa kekerasan dalam rumah tangga, pelecehan anak, atau stres berat jangka panjang.",
    publishedAt: "22 Maret 2024",
  },
  {
    type: "article",
    title: "7 Cara yang Bisa Dilakukan untuk Menjaga Kesehatan Mental",
    author: "dr. Kevin Adrian",
    link: "https://www.alodokter.com/tidak-hanya-sehat-badan-kesehatan-mental-juga-penting-dijaga",
    imageUrl:
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1714115498/attached_image/tidak-hanya-sehat-badan-kesehatan-mental-juga-penting-dijaga-0-alodokter.jpg",
    description: "Berikut beberapa cara menjaga kesehatan mental",
    publishedAt: "24 April 2024",
  },
  {
    type: "article",
    title:
      "Penting! Berikut 10 Cara Menjaga Kesehatan Mental, Gen Z Wajib Simak!",
    author: "Mendi Endritha Pristalisa",
    link: "https://fbhis.umsida.ac.id/10-cara-menjaga-kesehatan-mental/",
    imageUrl:
      "https://fbhis.umsida.ac.id/wp-content/uploads/2023/09/pexels-mental-health-america-mha-5543374-min-1-2-1024x683.jpg",
    description:
      "Kesahatan mental sendiri seharusnya mempunyai peran penting sama halnya kita kesehatan tubuh kita. Dalam jiwa yang sehat akan tentu bisa membuat seseorang menjadi lebih produtif dalam melakukan kesehariannya. Hal itu akan membentuk kepuasan akan menjalani hidup dan kebahagiaan, serta juga bisa dikaitkan dalam menurunan penyakit seseorang. Oleh karena itu keduanya sangatlah penting untuk dijaga dan bisa dicegah dengan cara berikut.",
    publishedAt: "13 September 2023",
  },
  {
    type: "article",
    title: "5 Tips Menjaga Kesehatan Mental bagi para Mahasiswa",
    author: "Fumina Lestari",
    link: "https://futureskills.id/blog/5-tips-menjaga-kesehatan-mental-bagi-para-mahasiswa/",
    imageUrl:
      "https://futureskills.id/wp-content/uploads/2023/10/OIG.h-730x730.jpg",
    description:
      "Mahasiswa sering mengalami tekanan akademik dan sosial yang tinggi, terlebih bagi mahasiswa perantauan yang kerap merasakan perubahan lingkungan juga bisa menambah tekanan psikologis. Tekanan-tekanan ini nantinya akan membuat banyak pikiran negatif atau sering disebut overthinking. Oleh karena itu, menjaga kesehatan mental bagi mahasiswa sangatlah penting agar bisa mengelola stress dan membentuk koping mekanisme yang kuat.",
    publishedAt: "31 Oktober 2023",
  },
  {
    type: "article",
    title:
      "Cara Menjaga Kesehatan Mental Menurut WHO, Pedoman dan Praktik Terbaik",
    author: "Poetri Hanzani",
    link: "https://health.grid.id/read/353900146/cara-menjaga-kesehatan-mental-menurut-who-pedoman-dan-praktik-terbaik?page=all",
    imageUrl:
      "https://asset-a.grid.id/photo/2023/09/25/screenshot-2023-09-25-084746jpg-20230925084809.jpg",
    description:
      "Menurut World Health Organization (WHO), kesehatan mental adalah keadaan kesejahteraan di mana setiap individu menyadari potensi mereka sendiri, dapat mengatasi tekanan normal kehidupan, dapat bekerja produktif, dan dapat memberikan kontribusi kepada komunitas mereka.",
    publishedAt: "25 September 2023",
  },
  {
    type: "article",
    title: "Menjaga Kesehatan Mental: Tips dan Trik Harian",
    author: "Administrator",
    link: "https://www.rspp.co.id/artikel-detail-275-Menjaga-Kesehatan-Mental-Tips-dan-Trik-Harian.html",
    imageUrl:
      "https://www.rspp.co.id/uploads/img_post/img_050120241704414447EKUHP.jpg",
    description:
      "Kesehatan mental yang baik merupakan pondasi utama bagi kehidupan yang seimbang dan bahagia. Dalam kesibukan sehari-hari, seringkali kita lupa untuk memberikan perhatian yang cukup pada kesehatan mental kita. ",
    publishedAt: "5 Januari 2024",
  },
  {
    type: "article",
    title: "Gangguan Kesehatan Mental",
    author: "dr. Dyah Novita",
    link: "https://www.klikdokter.com/penyakit/masalah-mental/kesehatan-mental",
    imageUrl:
      "https://img-cdn.medkomtek.com/PbBYAUR4dtWpaKgw9IU82zOA-F0=/510x395/smart/filters:quality(100):format(webp)/article/xTLzRJG-gTamGTMwMo8fD/original/1666340104-Mengikis-Stigma-Masalah-Kesehatan-Mental.jpg?w=256&q=100",
    description:
      "Kesehatan mental adalah kondisi-kondisi yang mencakup emosional, psikologis, dan sosial seseorang. Kesehatan mental akan memengaruhi bagaimana seseorang berpikir, merasakan, dan bertindak dalam kehidupan sehari-hari. ",
    publishedAt: "19 Januari 2023",
  },
  {
    type: "article",
    title: "Pentingnya Istirahat yang Cukup dalam Meminimalisir Resiko Depresi",
    author: "Christovel Ramot",
    link: "https://www.klikdokter.com/psikologi/kesehatan-mental/istirahat-untuk-meminimalisir-depresi",
    imageUrl:
      "https://img-cdn.medkomtek.com/wbqfUiEGl3Hy9IDgkdYp_hs75LE=/510x395/smart/filters:quality(100):format(webp)/article/FwF5yaAddJlsLsiOxOghK/original/qu2svdbyah09zco9ola53m7wj1tmg8qo.jpg?w=256&q=100",
    description:
      "Kurang tidur atau tidur yang tidak berkualitas dapat memiliki dampak negatif pada kesehatan mental seseorang. ",
    publishedAt: "15 Mei 2024",
  },
  {
    type: "article",
    title: "Teen Social Media Use and Mental Health",
    author: "Tori DeAngelis",
    link: "https://www.apa.org/monitor/2024/04/teen-social-use-mental-health",
    imageUrl:
      "https://www.apa.org/images/2024-04-numbers-teen-tile_tcm7-325750.jpg",
    description:
      "41% Percentage of teens with the highest social media use who rate their overall mental health as poor or very poor, compared with 23% of those with the lowest use. ",
    publishedAt: "1 April 2024",
  },
  {
    type: "article",
    title: "Kesehatan Mental di Masa Pandemi: Tantangan dan Solusi",
    author: "Alexander Haryanto",
    link: "https://tirto.id/kenali-dampak-buruk-kesehatan-mental-selama-pandemi-covid-19-gkwP",
    imageUrl:
      "https://mmc.tirto.id/image/otf/970x0/2018/10/29/ilustrasi-depresi-anak--istockphoto_ratio-16x9.jpg",
    description:
      "Iman Hanggautomo menjelaskan ada beberapa kelompok yang dinilai rentan terkait kesehatan mental di masa pandemi COVID-19.",
    publishedAt: "4 November 2021",
  },
  {
    type: "article",
    title: "COVID-19 dan Dampaknya pada Kesehatan Mental Anak di Indonesia:",
    author: "UNICEF Indonesia",
    link: "https://www.unicef.org/indonesia/id/siaran-pers/dampak-covid-19-terhadap-rendahnya-kesehatan-mental-anak-anak-dan-pemuda-hanyalah",
    imageUrl:
      "https://www.unicef.org/indonesia/sites/unicef.org.indonesia/files/styles/press_release_feature/public/timor%20leste%20sowc_0.jpg.webp?itok=DKjpqgx0",
    description:
      "Berdasarkan data terbaru, diperkirakan terdapat lebih dari 1 dari 7 remaja berusia 10-19 tahun di dunia yang hidup dengan diagnosis gangguan mental. Setiap tahun, tindakan bunuh diri merenggut nyawa hampir 46.000 anak muda – tindakan ini adalah satu dari lima penyebab utama kematian pada kelompok usia itu.",
    publishedAt: "5 Oktober 2021",
  },
  {
    type: "article",
    title: "Darurat Kesehatan Mental bagi Remaja",
    author: "egsaugm",
    link: "https://egsa.geo.ugm.ac.id/2020/11/27/darurat-kesehatan-mental-bagi-remaja/",
    imageUrl: "-",
    description:
      "Kesehatan mental atau jiwa menurut undang – undang nomor 18 tahun 2014 tentang kesehatan jiwa merupakan kondisi dimana seseorang individu dapat berkembang secara fisik, mental, spiritual dan sosial sehingga individu tersebut menyadari kemampuan sendiri, dapat mengatasi tekanan, dapat bekerja secara produktif, dan mampu memberikan kontribusi untuk komunitasnya. Hal itu juga berarti kesehatan mental mempunyai pengaruh terhadap fisik seseorang dan juga akan mengganggu produktivitas.  Kesehatan mental sangat penting untuk menunjang produktivitas dan kualitas kesehatan fisik.",
    publishedAt: "27 November 2020",
  },
  {
    type: "article",
    title: "Bunuh Diri Remaja: Ancaman Nyata yang Perlu Diseriuskan",
    author: "Kompas",
    link: "https://nasional.kompas.com/read/2024/03/14/06265761/bunuh-diri-jadi-ancaman-bagi-kelas-menengah?page=all",
    imageUrl:
      "https://asset.kompas.com/crops/AhZZlHSGW3FhwdO4ABjIgtxlXyI=/58x30:1000x658/750x500/data/photo/2018/06/21/441114293.jpg",
    description:
      "KASUS bunuh diri berturut-turut menyeruak di berbagai media dari tahun lalu. Bahkan kejadian terakhir yang menjadi headline, dilakukan oleh satu keluarga secara bersamaan lompat dari gedung tinggi. Kondisi ini bukan sesuatu yang bisa dianggap remeh. Kondisi ini perlu dijadikan titik tolak kebijakan pencegahan, supaya tidak menjadi beban menuju Indonesia Emas 2045.",
    publishedAt: "14 Maret 2024",
  },
  {
    type: "article",
    title: "8 cara mengelola stress dan emosi negatif di tempat kerja",
    author: "GreatNusa",
    link: "https://greatnusa.com/artikel/cara-mengelola-stress-dan-emosi-negatif/",
    imageUrl:
      "https://greatnusa.com/wp-content/uploads/2023/02/193-12TheresiaSurya-Primadhani-8-Cara-Mengelola-Stress-Dan-Emosi-Negatif-Di-Tempat-Kerja-Featured-Landscape-990x742.webp",
    description:
      "Tempat kerja merupakan salah satu lingkungan yang berkontribusi besar dalam menyebabkan stress. Ada banyak tugas yang harus dilakukan di tempat kerja dan terdapat konsekuensi jika tugas tidak dilakukan dengan baik. Cara mengelola stress dan emosi negatif yang baik perlu dipelajari karyawan agar bisa berfungsi optimal.",
    publishedAt: "20 Februari 2023",
  },
  {
    type: "article",
    title: "9 cara mengatasi stress saat kerja",
    author: "-",
    link: "https://pijarmahir.id/blog/news/cara-mengatasi-stres-saat-kerja",
    imageUrl:
      "https://minio.pijarmahir.id/article/4dfa6b38-904f-429b-ac81-1f7c0a3a16b5.jpg",
    description:
      "Stres saat kerja biasanya ditandai dengan beberapa hal, seperti mudah marah, sedih, atau khawatir, kurang fokus, dan tidak bersemangat bekerja. Jika kamu mengalami hal ini, jangan anggap remeh. Karena jika dibiarkan, stres saat kerja bisa menimbulkan beberapa dampak negatif, seperti membuat tubuh mudah sakit, menurunkan produktivitas kerja, dan membuatmu tidak bisa bekerja dengan baik.",
    publishedAt: "13 Januari 2023",
  },
  {
    type: "article",
    title: "Olahraga bermanfaat untuk kesehatan mental?",
    author: "Hermina Bogor",
    link: "https://herminahospitals.com/id/articles/olahraga-bermanfaat-untuk-kesehatan-mental.html",
    imageUrl:
      "https://dk4fkkwa4o9l0.cloudfront.net/production/uploads/article/image/1979/Buat_Cover_Web.jpg",
    description:
      "Olahraga adalah bentuk aktivitas fisik yang dilakukan dalam bentuk santai atau kompetitif. Pada dasarnya olahraga bertujuan untuk melatih, meningkatkan dan memelihara keterampilan kemampuan fisik dengan memberikan efek relaksasi bagi orang yang melakukan olahraga. Selain meningkatkan daya tahan tubuh, emosi yang diperoleh dari berolahraga dapat menguatkan mental terutama melatih kepercayaan diri dan meningkatkan motivasi.",
    publishedAt: "18 April 2023",
  },
  {
    type: "article",
    title: "Peran Olahraga terhadap kesehatan mental mahasiswa",
    author: "Esa Tauran",
    link: "https://danacita.co.id/blog/peran-olahraga-terhadap-kesehatan-mental-mahasiswa/",
    imageUrl:
      "https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Peran_Olahraga_Terhadap_Kesehatan_Mental_Mahasi.original.png",
    description:
      "Menjadi seorang mahasiswa memang bukan hal yang mudah. Ini membawa perubahan perubahan dalam hidup kamu. Tak hanya menyenangkan dan menarik, tetapi juga dapat menantang. Seorang mahasiswa dihadapkan dengan berbagai tantangan, mulai dari akademik, pergaulan, hingga keluarga. Tak jarang, banyak mahasiswa yang akhirnya mengalami gangguan kesehatan mental, bahkan hingga depresi. Tak heran, jika belakangan ini masalah tekanan dan kesehatan mental di kalangan mahasiswa menjadi topik pembicaraan, bahkan topik penelitian yang sedang berkembang.",
    publishedAt: "16 Oktober 2023",
  },
  {
    type: "video",
    title: "Apa itu Kesehatan Mental? | Mental Illness ",
    link: "https://www.youtube.com/watch?v=MKJppZ18FYU",
  },
  {
    type: "video",
    title: "Understanding and treating anxiety disorders",
    link: "https://youtu.be/WslEaP3YNMI?si=1t5frUUc9j7eT-P_",
  },
  {
    type: "video",
    title: "The Power of Arts Therapy | Laurence Vandenborre | TEDxLASALLE",
    link: "https://youtu.be/l5GpwCGO8Nc?si=sj3ign65PFe9hatG",
  },
  {
    type: "video",
    title: "3-Minute Stress Management: Reduce Stress With This Short Activity",
    link: "https://youtu.be/grfXR6FAsI8?si=pwu3PcW2tds8Rqcw",
  },
  {
    type: "video",
    title: "Self Care",
    link: "https://youtu.be/IYq0h3KgDpY?si=sLbp1-HBiv24X-zT",
  },
  {
    type: "video",
    title:
      "The Mental Health Doctor: Your Phone Screen & Sitting Is Destroying Your Brain!",
    link: "https://youtu.be/FN0_ow76hU8?si=K3RANcfBaltxUat2",
  },
  {
    type: "video",
    title:
      "World Leading Psychologist: How To Detach From Overthinking & Anxiety: Dr Julie",
    link: "https://youtu.be/iLlrIi9-NfQ?si=WL5Jmn4xty3ysgF3",
  },
  {
    type: "video",
    title: "APA ITU MENTAL HEALTH ISSUES??? | Josua Iwan Wahyudi | LIFE SERIES",
    link: "https://youtu.be/komKdcXIVDo?si=lkDs-azbtvJ8X8iA",
  },
  {
    type: "video",
    title:
      "BRAIN HEALTH EXPERT: Change Your Brain, Change Your Life | Dr. Daniel Amen X Rich Roll Podcast",
    link: "https://youtu.be/0SPC_Q7-k40?si=G3xMm0ochkhqZQcP",
  },
  {
    type: "video",
    title: "Mental Health di Kalangan Millennial",
    link: "https://youtu.be/pQnejArI-oA?si=SKiBHiVkumZY247a",
  },
  {
    type: "video",
    title: "Kamu Juga Manusia, Sebuah Dokumenter Tentang Kesehatan Mental ",
    link: "https://youtu.be/LeFkkFCFbmE?si=0JexyDHRL307sQ95",
  },
  {
    type: "video",
    title:
      "NSS Special Ep. 50 - Marissa Anita : Strategi Self Healing & Mengenal Diri Sendiri Seutuhnya",
    link: "https://youtu.be/kNOIyglqn3Y?si=6z3fNkJr9bxnMJk0",
  },
  {
    type: "video",
    title: "Supaya Hidup Gak Overthinking...",
    link: "https://youtu.be/9qwR3GmR63I?si=3KHJaLmvAgL5KWQR",
  },
  {
    type: "video",
    title: "Buat Yang Gampang Kecewa.. ",
    link: "https://youtu.be/s5w9D8Kk_I8?si=2Fg4nDDp83eYswoL",
  },
  {
    type: "video",
    title: "Kenapa Kita Tidak Bahagia?",
    link: "https://youtu.be/WQEdmaIkjFY?si=qVVA3FLlKnqA7mW-",
  },
  {
    type: "movie",
    title: "Ku Kira Kau Rumah",
    link: "https://www.youtube.com/watch?v=elri_2EO-HE",
  },
  {
    type: "movie",
    title: "Dear Nathan Thank You Salma",
    link: "https://www.netflix.com/id-en/title/81278480",
  },
  {
    type: "movie",
    title: "Nanti Kita Cerita Tentang Hari Ini",
    link: "https://www.netflix.com/id/title/81262711",
  },
  {
    type: "movie",
    title: "Imperfect",
    link: "https://www.netflix.com/id-en/title/81285889",
  },
  {
    type: "movie",
    title: "Posesif",
    link: "https://www.netflix.com/id/title/81140307",
  },
  {
    type: "movie",
    title: "27 Steps of May",
    link: "https://www.netflix.com/title/81497301",
  },
  {
    type: "movie",
    title: "Tabula Rasa",
    link: "https://www.netflix.com/title/80206360",
  },
  {
    type: "movie",
    title: "Joker",
    link: "https://www.netflix.com/title/81092221",
  },
  {
    type: "movie",
    title: "Ketika Berhenti Di Sini",
    link: "https://www.netflix.com/id/title/81716462",
  },
];

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Explore = require("../models/explore");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

const seedDB = async function () {
  try {
    // Insert the music data
    await Explore.insertMany(exploreData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
