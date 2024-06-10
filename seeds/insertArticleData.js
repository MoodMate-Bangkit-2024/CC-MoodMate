const articleData = [
  {
    category: "happy",
    title: "Ini Efek Positif Kebahagiaan Bagi Kesehatan",
    author: "dr. Fadhli Rizal Makarim",
    link: "https://www.halodoc.com/artikel/ini-efek-positif-kebahagiaan-bagi-kesehatan",
  },
  {
    category: "happy",
    title: "Rasa Bahagia Bikin Tubuh dan Otak Lebih Sehat",
    author: "dr. Reza Fahlevi",
    link: "https://www.klikdokter.com/info-sehat/berita-kesehatan/rasa-bahagia-bikin-tubuh-dan-otak-lebih-sehat",
  },
  {
    category: "happy",
    title: "Rasa bahagia itu sebuah pilihan, kata psikolog",
    author: "dr. Reza Fahlevi",
    link: "https://www.antaranews.com/berita/2054498/rasa-bahagia-itu-sebuah-pilihan-kata-psikolog",
  },
  {
    category: "happy",
    title: "Hati yang Gembira Adalah Obat",
    author: "administrator dinkes",
    link: "https://www.antaranews.com/berita/2054498/rasa-bahagia-itu-sebuah-pilihan-kata-psikolog",
  },
  {
    category: "happy",
    title: "Pentingnya Merasa Bahagia",
    author: "Stecy Holie",
    link: "https://kumparan.com/stecy-holie-1633514501817482540/pentingnya-merasa-bahagia-1wfVxDmId8Z/1",
  },
  {
    category: "happy",
    title: "4 Hormon Bahagia yang Menjaga Kestabilan Emos",
    author: "dr. Rossalina, Sp.KJ",
    link: "https://www.klikdokter.com/psikologi/kesehatan-mental/hormon-bahagia-fungsinya",
  },
  {
    category: "happy",
    title: "TENANG VS SENANG",
    author: "-",
    link: "https://rsudmangusada.badungkab.go.id/promosi/read/167/tenang-vs-senang",
  },

  {
    category: "sadness",
    title: "8 Tips Mengusir Sedih yang Efektif",
    author: "dr. Airindya Bella",
    link: "https://www.alodokter.com/mengusir-rasa-sedih-dengan-cara-cara-ini",
  },
  {
    category: "sadness",
    title: "11 Cara Jitu Mengusir Rasa Sedih dan Galau Dalam Hati",
    author: "https://hellosehat.com/mental/stres/cara-mengusir-sedih-galau/",
    link: "Risky Candra Swari",
  },
  {
    category: "sadness",
    title: "Cara Menghilangkan Kesedihan",
    author: "Punto Wicaksono",
    link: "https://www.qubisa.com/article/cara-menghilangkan-kesedihan",
  },
  {
    category: "sadness",
    title: "7 Cara Menghilangkan Rasa Sedih yang Efektif, Jangan Banyak Galau!",
    author: "Gayuh Tri Pinjungwati",
    link: "https://www.fimela.com/lifestyle/read/5452633/7-cara-menghilangkan-rasa-sedih-yang-efektif-jangan-banyak-galau",
  },
  {
    category: "sadness",
    title: "Rasa Sedih dan 4 Cara Mengatasinya",
    author: "Ila Fadilasari",
    link: "https://lampung.nu.or.id/syiar/rasa-sedih-dan-4-cara-mengatasinya-DhyX6",
  },
  {
    category: "sadness",
    title: "9 Cara Mengatasi Kesedihan Secara Sehat",
    author: "-",
    link: "https://lifestyle.kompas.com/read/2020/02/21/143914520/9-cara-mengatasi-kesedihan-secara-sehat?page=all#google_vignette",
  },
  {
    category: "sadness",
    title: "Cara Mengatasi Rasa Kehilangan dan Kesedihan",
    author: "-",
    link: "https://id.wikihow.com/Mengatasi-Rasa-Kehilangan-dan-Kesedihan",
  },
  {
    category: "sadness",
    title: "Penyebab dan cara mengatasi rasa sedih yang berkepanjangan",
    author: "-",
    link: "https://www.alodokter.com/komunitas/topic/sedih-yang-berlarut-larut",
  },
  {
    category: "sadness",
    title: "Jangan Ditahan, Begini 4 Cara Mengatasi Kesedihan Menurut Ahli",
    author: "Siti Fatimah Al Mukarramah",
    link: "https://cewekbanget.grid.id/read/063799724/jangan-ditahan-begini-4-cara-mengatasi-kesedihan-menurut-ahli?page=all#google_vignette",
  },
  {
    category: "sadness",
    title: "Mengenal Rasa Sedih: Bagaimana Cara Bangkit dari Kesedihan?",
    author: "Nadya Anindita",
    link: "https://satupersen.net/blog/mengenal-rasa-sedih",
  },

  {
    category: "fear",
    title: "Ini 5 Cara Menghilangkan Rasa Takut yang Efektif",
    author: "-",
    link: "https://www.alodokter.com/ini-5-cara-menghilangkan-rasa-takut-yang-efektif",
  },
  {
    category: "fear",
    title: "7 Cara Efektif Mengusir Rasa Takut yang Berlebihan",
    author: "Annisa Hapsari",
    link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-takut/",
  },
  {
    category: "fear",
    title: "Begini Cara Menghilangkan Rasa Takut",
    author: "-",
    link: "https://www.halodoc.com/artikel/begini-cara-menghilangkan-rasa-takut",
  },
  {
    category: "fear",
    title: "Pahami Cara Mengatasi Fobia secara Mandiri dan Medis",
    author: "Siloam Hospital Medical Team",
    link: "https://www.siloamhospitals.com/en/informasi-siloam/artikel/cara-mengatasi-fobia",
  },
  {
    category: "fear",
    title:
      "Cara Menghilangkan Rasa Takut Berlebihan di Dalam Diri dengan Efektif",
    author: "Anggi Mardiana",
    link: "https://katadata.co.id/lifestyle/varia/63a01ee797fca/cara-menghilangkan-rasa-takut-berlebihan-di-dalam-diri-dengan-efektif",
  },
  {
    category: "fear",
    title: "9 Cara Mengusir Rasa Takut yang Berlebihan",
    author: "Wisnubrata",
    link: "https://lifestyle.kompas.com/read/2017/10/18/095902420/9-cara-mengusir-rasa-takut-yang-berlebihan?page=all#google_vignette",
  },
  {
    category: "fear",
    title: "Understanding Anxiety Disorder and How to Treat it",
    author: "dr. Laela Dian Kurniasih, Sp.KJ",
    link: "https://www.siloamhospitals.com/en/informasi-siloam/artikel/mengenal-gangguan-cemas-dan-cara-menanganinya",
  },

  {
    category: "anger",
    title: "Jangan Dipendam, Ini 5 Cara Mengatasi Marah agar Lebih Tenang",
    author: "alodokter",
    link: "https://www.alodokter.com/kelola-marah-agar-penyakit-tidak-datang",
  },
  {
    category: "anger",
    title: "10 Cara Mengendalikan Emosi, Coba Lakukan Saat Amarah Memuncak",
    author: "Naufal Khalish",
    link: "https://rsj.acehprov.go.id/berita/kategori/artikel/10-cara-mengendalikan-emosi-coba-lakukan-saat-amarah-memuncak",
  },
  {
    category: "anger",
    title: "7 TIPS MENGENDALIKAN RASA MARAH",
    author: "Admin",
    link: "https://www.rsmurniteguh.com/artikel/7-Tips-Mengendalikan-Rasa-Marah?page=7",
  },
  {
    category: "anger",
    title: "Tips Sederhana Mengelola Emosi Saat Marah",
    author: "Kemenkes",
    link: "https://yankes.kemkes.go.id/view_artikel/643/tips-sederhana-mengelola-emosi-saat-marah",
  },
  {
    category: "anger",
    title: "Ini 7 Cara Ampuh Mengendalikan Emosi Diri saat Marah",
    author: "-",
    link: "https://www.halodoc.com/artikel/ini-7-cara-ampuh-mengendalikan-emosi-diri-saat-marah",
  },
  {
    category: "anger",
    title: "8 Cara Menenangkan Pikiran agar Amarah Mereda",
    author: "-",
    link: "https://www.alodokter.com/cara-menenangkan-pikiran-ini-bisa-meredakan-amarah",
  },
  {
    category: "anger",
    title: "12 Cara Jitu untuk Mengendalikan Emosi Berlebih",
    author: "dr. Nitish Basant Adnani BMedSc MSc",
    link: "https://www.klikdokter.com/psikologi/kesehatan-mental/cara-jitu-untuk-mengendalikan-emosi-berlebih#google_vignette",
  },
  {
    category: "anger",
    title: "10 Langkah Efektif untuk Mengendalikan Amarah",
    author: "",
    link: "https://hellosehat.com/mental/gangguan-mood/10-langkah-mengendalikan-amarah/",
  },
  {
    category: "anger",
    title: "Ini 4 Cara Mengontrol Kemarahan dengan Ampuh",
    author: "-",
    link: "https://www.halodoc.com/artikel/ini-4-cara-mengontrol-kemarahan-dengan-ampuh",
  },
  {
    category: "anger",
    title: "Mengontrol Emosi Marah Agar Tidak Salah Arah",
    author: "Kementerian Keuangan",
    link: "https://www.djkn.kemenkeu.go.id/kpknl-semarang/baca-artikel/16691/Mengontrol-Emosi-Marah-Agar-Tidak-Salah-Arah.html",
  },
];

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Article = require("../models/article");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

const seedDB = async function () {
  try {
    // Insert the music data
    await Article.insertMany(articleData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
