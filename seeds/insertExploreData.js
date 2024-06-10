const exploreData = [
  {
    type: "article",
    title: "Kesehatan Mental dan Kesejahteraan Hidup",
    author: "UNICEF Indonesia",
    link: "https://www.unicef.org/indonesia/id/kesehatan-mental",
  },
  {
    type: "article",
    title: "Kesehatan Mental",
    author: "-",
    link: "https://www.halodoc.com/kesehatan/kesehatan-mental",
  },
  {
    type: "article",
    title: "Pengertian Kesehatan Mental",
    author: "Kemenkes",
    link: "https://ayosehat.kemkes.go.id/pengertian-kesehatan-mental",
  },
  {
    type: "article",
    title: "Mental Health Disorders: Causes & How to Manage It",
    author: "Siloam Hospitals Medical Team",
    link: "https://www.siloamhospitals.com/en/informasi-siloam/artikel/apa-itu-mental-health",
  },
  {
    type: "article",
    title: "9 Cara Sederhana Menjaga Kesehatan Menta",
    author: "-",
    link: "https://www.halodoc.com/artikel/9-cara-sederhana-menjaga-kesehatan-mental",
  },
  {
    type: "article",
    title: "Ketahui Pentingnya Menjaga Kesehatan Mental dan 5 Caranya",
    author: "-",
    link: "https://www.prudentialsyariah.co.id/id/pulse/article/pentingnya-menjaga-kesehatan-mental/",
  },
  {
    type: "article",
    title: "Langkah Mudah Menjaga Kesehatan Mental",
    author: "dr. Sahat Hamonangan H, M.Biomed,Sp.Kj",
    link: "https://rsudmangusada.badungkab.go.id/promosi/read/107/langkah-mudah-menjaga-kesehatan-mental",
  },
  {
    type: "article",
    title: "Memahami Apa Itu Kesehatan Mental Hingga Cara Menjaganya",
    author: "-",
    link: "https://hellosehat.com/mental/kesehatan-mental/",
  },
  {
    type: "article",
    title: "Pentingnya Menjaga Kesehatan Mental",
    author: "-",
    link: "https://sardjito.co.id/2022/08/31/pentingnya-menjaga-kesehatan-mental/",
  },
  {
    type: "article",
    title: "Gangguan Mental",
    author: "-",
    link: "https://www.alodokter.com/kesehatan-mental",
  },
  {
    type: "article",
    title: "Berkenalan dengan Kesehatan Mental",
    author: "Aril Halida, M.Psi",
    link: "https://grhasia.jogjaprov.go.id/berita/376/berkenalan-dengan-kesehatan-mental.html",
  },
  {
    type: "article",
    title:
      "Kesehatan Mental Generasi Muda Penting dalam Proses Pembangunan Bangsa",
    author: "-",
    link: "https://www.mpr.go.id/berita/Kesehatan-Mental-Generasi-Muda-Penting-dalam-Proses-Pembangunan-Bangsa",
  },
  {
    type: "article",
    title: "Apa itu kesehatan mental?",
    author: "-",
    link: "https://www.seributujuan.id/id/apa-itu-kesehatan-mental",
  },
  {
    type: "article",
    title: "Minimnya Kesadaran Masyarakat terhadap Mental Health",
    author: "-",
    link: "https://sardjito.co.id/2022/03/09/minimnya-kesadaran-masyarakat-terhadap-mental-health/",
  },
  {
    type: "article",
    title: "Mengenal Pentingnya Kesehatan Mental pada Remaja",
    author: "Elsa Savitrie, SKM, M.Kes",
    link: "https://dinkes.kalbarprov.go.id/artikel/mengenal-pentingnya-kesehatan-mental-pada-remaja/",
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
