const musicData = [
  {
    category: "happy",
    title: "Happy",
    singer: "Pharrel Williams",
    link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=8f3232c306bf4fe1",
  },
  {
    category: "happy",
    title: "Can't stop the feeling!",
    singer: "Justin Timberlake",
    link: "https://open.spotify.com/album/40LbnfieVTWtHrK24WQeEB?si=qehnL7o7Sd-v-SJfHF8_dA",
  },
  {
    category: "happy",
    title: "Walking on Sunshine",
    singer: "Katrina and the Waves",
    link: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=f7ffa3ed6e2445d8",
  },
  {
    category: "happy",
    title: "Don't worry, be happy",
    singer: "Bobby McFerrin",
    link: "https://open.spotify.com/track/5YbgcwHjQhdT1BYQ4rxWlD?si=7e8108a9d2164228",
  },
  {
    category: "happy",
    title: "Levitating",
    singer: "Dua Lipa",
    link: "https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF?si=62fb4b4a664d42c6",
  },
  {
    category: "happy",
    title: "Dancing Queen",
    singer: "ABBA",
    link: "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr?si=5318755ed1b94abb",
  },
  {
    category: "happy",
    title: "Uptown Funk",
    singer: "Mark Ronson ft. Bruno Mars",
    link: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS?si=63a7b81c8c264389",
  },
  {
    category: "happy",
    title: "Shake It Off",
    singer: "Taylor Swift",
    link: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD?si=591328efb17d4802",
  },
  {
    category: "happy",
    title: "Problem",
    singer: "Ariana Grande",
    link: "https://open.spotify.com/track/7vS3Y0IKjde7Xg85LWIEdP?si=df5bbb9f5bb644e9",
  },
  {
    category: "happy",
    title: "All About That Bass",
    singer: "Meghan Trainor",
    link: "https://open.spotify.com/track/5jE48hhRu8E6zBDPRSkEq7?si=99b6f03277764b6e",
  },
  {
    category: "happy",
    title: "Haven't Met You Yet",
    singer: "Michael Bublé",
    link: "https://open.spotify.com/track/4fIWvT19w9PR0VVBuPYpWA?si=bbf25275cf0f439a",
  },
  {
    category: "happy",
    title: "Sugar",
    singer: "Maroon 5",
    link: "https://open.spotify.com/track/5d6Mjuu2uCGRPYpFjGpCX5?si=8053ab45fcdf4de5",
  },
  {
    category: "happy",
    title: "Try Everything",
    singer: "Shakira",
    link: "https://open.spotify.com/track/1N3dZ7TTWO6VcD4Y3hHYLZ?si=71c09621fd1a475a",
  },
  {
    category: "happy",
    title: "Roar",
    singer: "Katy Perry",
    link: "https://open.spotify.com/track/6F5c58TMEs1byxUstkzVeM?si=5d17f8477a024faf",
  },
  {
    category: "happy",
    title: "Good Life",
    singer: "OneRepublic",
    link: "https://open.spotify.com/track/6OtCIsQZ64Vs1EbzztvAv4?si=3689976992cd4fed",
  },
  {
    category: "happy",
    title: "Here Comes the Sun",
    singer: "The Beatles",
    link: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=42b2f92f82c8499e",
  },
  {
    category: "happy",
    title: "Viva La Vida",
    singer: "Coldplay",
    link: "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b?si=3bc33db82a424944",
  },
  {
    category: "happy",
    title: "Treasure",
    singer: "Bruno Mars",
    link: "https://open.spotify.com/track/55h7vJchibLdUkxdlX3fK7?si=cecd69c93153406c",
  },
  {
    category: "happy",
    title: "Higher Love",
    singer: "Kygo ft. Whitney Houston",
    link: "https://open.spotify.com/track/6oJ6le65B3SEqPwMRNXWjY?si=98bd022e8cd94bbb",
  },
  {
    category: "happy",
    title: "Fight Song",
    singer: "Rachel Platten",
    link: "https://open.spotify.com/track/37f4ITSlgPX81ad2EvmVQr?si=b5b1b30f7b974506",
  },
  {
    category: "happy",
    title: "HandClap",
    singer: "Fitz and The Tantrums",
    link: "https://open.spotify.com/track/7j56HrjR9cGzvekvZY3Faz?si=c44cad5bcd504b88",
  },
  {
    category: "happy",
    title: "Dance Monkey",
    singer: "Tones and I",
    link: "https://open.spotify.com/track/2XU0oxnq2qxCpomAAuJY8K?si=2f93e83602104ae0",
  },
  {
    category: "happy",
    title: "Pumped Up Kicks",
    singer: "Foster The People",
    link: "https://open.spotify.com/track/7w87IxuO7BDcJ3YUqCyMTT?si=75936858f81a4560",
  },
  {
    category: "happy",
    title: "Price Tag",
    singer: "Jessie J",
    link: "https://open.spotify.com/track/2fTsFCKRFQ5M0igJgabnLA?si=1005f82c78dc4616",
  },
  {
    category: "happy",
    title: "Something Just Like This",
    singer: "The Chainsmokers & Coldplay",
    link: "https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW?si=e3d9fc5053334a8b",
  },
  {
    category: "happy",
    title: "Raise Your Glass",
    singer: "P!nk",
    link: "https://open.spotify.com/track/1gv4xPanImH17bKZ9rOveR?si=4a35b5a3e53e4153",
  },
  {
    category: "happy",
    title: "On Top of the World",
    singer: "Imagine Dragons",
    link: "https://open.spotify.com/track/213x4gsFDm04hSqIUkg88w?si=bc08ea468f734b40",
  },
  {
    category: "happy",
    title: "I'm Yours",
    singer: "Jason Mraz",
    link: "https://open.spotify.com/track/1EzrEOXmMH3G43AXT1y7pA?si=8029e02660b04cc5",
  },
  {
    category: "happy",
    title: "Girls Just Want to Have Fun",
    singer: "Cyndi Lauper",
    link: "https://open.spotify.com/track/4y1LsJpmMti1PfRQV9AWWe?si=956c9727f4224b3f",
  },
  {
    category: "happy",
    title: "Hey Ya!",
    singer: "OutKast",
    link: "https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM?si=bb76c18a4de8449b",
  },
  {
    category: "happy",
    title: "Good as Hell",
    singer: "Lizzo",
    link: "https://open.spotify.com/track/07Oz5StQ7GRoygNLaXs2pd?si=0a90d063f18d4d82",
  },
  {
    category: "happy",
    title: "Shape of You",
    singer: "Ed Sheeran",
    link: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3?si=8d388e39591946b8",
  },
  {
    category: "happy",
    title: "Marvin Gaye",
    singer: "Charlie Puth, Meghan Trainor",
    link: "https://open.spotify.com/track/3rKYiySCDMUKTw5kGVVhaa?si=13773b04585c4c23",
  },
  {
    category: "happy",
    title: "Love On Top",
    singer: "Beyoncé",
    link: "https://open.spotify.com/track/34h7O0d0ToOB60zYSFkGKH?si=543745315d784720",
  },
  {
    category: "happy",
    title: "Sorry",
    singer: "Justin Bieber",
    link: "https://open.spotify.com/track/0JBq4P9Jpp37F1PteCgGL1?si=b14b303617cb48af",
  },
  {
    category: "happy",
    title: "Pompeii",
    singer: "Bastille",
    link: "https://open.spotify.com/track/7Fw5i56my24ZBnGS7hFX2n?si=7675082884204014",
  },
  {
    category: "happy",
    title: "Wake Me Up",
    singer: "Avicii",
    link: "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2?si=5504b378809e468e",
  },
  {
    category: "happy",
    title: "Good Feeling",
    singer: "Flo Rida",
    link: "https://open.spotify.com/track/2LEF1A8DOZ9wRYikWgVlZ8?si=c32fefc28b074a65",
  },
  {
    category: "happy",
    title: "Party Rock Anthem",
    singer: "LMFAO",
    link: "https://open.spotify.com/track/7mitXLIMCflkhZiD34uEQI?si=d7ae321bc7b74f25",
  },
  {
    category: "happy",
    title: "There's Nothing Holdin' Me Back",
    singer: "Shawn Mendes",
    link: "https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml?si=3fbd0c8fdea54d52",
  },
  {
    category: "happy",
    title: "Party in the U.S.A.",
    singer: "Miley Cyrus",
    link: "https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr?si=47a869ed594d41c1",
  },
  {
    category: "happy",
    title: "Shut Up and Dance",
    singer: "Walk the Moon",
    link: "https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA?si=9132695fc94246a4",
  },
  {
    category: "happy",
    title: "Timber",
    singer: "Pitbull ft. Kesha",
    link: "https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS?si=b5ba0bf165374b6f",
  },
  {
    category: "happy",
    title: "Moves Like Jagger",
    singer: "Maroon 5",
    link: "https://open.spotify.com/track/1r299qCKBLgUS9XJ9m1kEx?si=9541b1738f864407",
  },
  {
    category: "happy",
    title: "Watermelon Sugar",
    singer: "Harry Styles",
    link: "https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY?si=56407c52d0e742db",
  },
  {
    category: "happy",
    title: "Dynamite",
    singer: "BTS",
    link: "https://open.spotify.com/track/5QDLhrAOJJdNAmCTJ8xMyW?si=03c9fdd9c5ac46c9",
  },
  {
    category: "happy",
    title: "good 4 u",
    singer: "Olivia Rodrigo",
    link: "https://open.spotify.com/track/6P4d1NWBCNIYZjzF9k1mVN?si=c76dbd24f3c249b5",
  },
  {
    category: "happy",
    title: "Peaches",
    singer: "Justin Bieber",
    link: "https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI?si=fab0b26d7718435f",
  },
  {
    category: "happy",
    title: "Say So",
    singer: "Doja Cat",
    link: "https://open.spotify.com/track/3Dv1eDb0MEgF93GpLXlucZ?si=11869290d28d4898",
  },
  {
    category: "happy",
    title: "Positions",
    singer: "Ariana Grande",
    link: "https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0?si=68d321a8d17a475d",
  },
  {
    category: "happy",
    title: "Señorita",
    singer: "Shawn Mendes & Camila Cabello",
    link: "https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik?si=d90861c59a3c4242",
  },
  {
    category: "happy",
    title: "Midnight Sky",
    singer: "Miley Cyrus",
    link: "https://open.spotify.com/track/4i2qxFEVVUi8yOYoxB8TCX?si=b54b8355bab44ab8",
  },
  {
    category: "happy",
    title: "Bad Habits",
    singer: "Ed Sheeran",
    link: "https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d?si=420586f4de5a423d",
  },
  {
    category: "happy",
    title: "Heat Waves",
    singer: "Glass Animals",
    link: "https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp?si=0383f4bd7a424598",
  },
  {
    category: "happy",
    title: "MONTERO (Call Me By Your Name)",
    singer: "Lil Nas X",
    link: "https://open.spotify.com/track/67BtfxlNbhBmCDR2L2l8qd?si=878b78c26b054457",
  },
  {
    category: "happy",
    title: "Feel Special",
    singer: "TWICE",
    link: "https://open.spotify.com/track/3Hz3tTQwOdM6XkA0ALB2G9?si=c17f21fb3e4347e8",
  },
  {
    category: "happy",
    title: "How You Like That",
    singer: "BLACKPINK",
    link: "https://open.spotify.com/track/6bvZRLLkBKkmgpBJTTj3QK?si=c9d3f0aec16a4244",
  },
  {
    category: "happy",
    title: "Red Flavor",
    singer: "Red Velvet",
    link: "https://open.spotify.com/track/7nKQ5WAcjnG48knyLuo8gO?si=28d311ec214c4f01",
  },
  {
    category: "happy",
    title: "WANNABE",
    singer: "ITZY",
    link: "https://open.spotify.com/track/4pspYVQGFHLPEFgQPD1J7e?si=f4e11df64c4b45e9",
  },
  {
    category: "happy",
    title: "VERY NICE",
    singer: "SEVENTEEN",
    link: "https://open.spotify.com/track/1Rrj7KyS2R6SP9CQMDJW1w?si=6d0b6b9c295f4e62",
  },
  {
    category: "happy",
    title: "Power",
    singer: "EXO",
    link: "https://open.spotify.com/track/53YZi9zgTnF0Py0K6ejyWz?si=9be61563eb9747fb",
  },
  {
    category: "happy",
    title: "HIP",
    singer: "MAMAMOO",
    link: "https://open.spotify.com/track/24nK8tW7Pt3Inh2utttuoG?si=380c7a0c93294052",
  },
  {
    category: "happy",
    title: "We Go Up",
    singer: "NCT DREAM",
    link: "https://open.spotify.com/track/26vOBLHS116a4WNUVlvAUW?si=2d206e4c16584cbd",
  },
  {
    category: "happy",
    title: "Blue Hour",
    singer: "TXT",
    link: "https://open.spotify.com/track/3ObPkJQAgjAhTwYvDhPrAW?si=d86c1220efd14272",
  },
  {
    category: "happy",
    title: "MAGO",
    singer: "GFRIEND",
    link: "https://open.spotify.com/track/46WaBBaEHzgbN88Ew0nh50?si=636c571ce6b34f23",
  },
  {
    category: "happy",
    title: "View",
    singer: "SHINee",
    link: "https://open.spotify.com/track/46E1ic6n099e76t5J1TbHn?si=eb11181701504089",
  },
  {
    category: "happy",
    title: "Pporappippam",
    singer: "Sunmi",
    link: "https://open.spotify.com/track/7oQh96s9YemWG3A4zkIbrU?si=80507f1ce2ff4f38",
  },
  {
    category: "happy",
    title: "Gashina",
    singer: "Sunmi",
    link: "https://open.spotify.com/track/0jFHMDRXxKaREor3hBEEST?si=c07933d98fdd4c4a",
  },
  {
    category: "happy",
    title: "Back Door",
    singer: "Stray Kids",
    link: "https://open.spotify.com/track/0XuepwFJUcKN8T5zTqoP0F?si=7693acac8d92461c",
  },
  {
    category: "happy",
    title: "Panorama",
    singer: "IZ*ONE",
    link: "https://open.spotify.com/track/0CnpSTdL9l5vQM4YnzXtyo?si=f5e6e1e68b11484d",
  },
  {
    category: "happy",
    title: "Jopping",
    singer: "SuperM",
    link: "https://open.spotify.com/track/5WrEilrRI5cIW0DxMvQYPZ?si=4b69c921dc94424c",
  },
  {
    category: "happy",
    title: "Ko Ko Bop",
    singer: "EXO",
    link: "https://open.spotify.com/track/5EzitieoPnjyKHAq0gfRMa?si=a6ac6300439b41d0",
  },
  {
    category: "happy",
    title: "Peek-A-Boo",
    singer: "Red Velvet",
    link: "https://open.spotify.com/track/42tFTth2jcF7iSo0RBjfJF?si=daeb78b866954f1d",
  },
  {
    category: "happy",
    title: "Ice Cream",
    singer: "BLACKPINK",
    link: "https://open.spotify.com/track/1cdbkpZ3q1KYZDNSrOpdkb?si=ed5153a4532143b8",
  },
  {
    category: "happy",
    title: "God's Menu",
    singer: "Stray Kids",
    link: "https://open.spotify.com/track/4XPXrcpyNr30Km6aPiflJy?si=2febf09facf244d9",
  },
  {
    category: "happy",
    title: "Love Scenario",
    singer: "IKON",
    link: "https://open.spotify.com/track/3d3ELsqKlQ7WA0a10Isu3l?si=b444838186f44126",
  },
  {
    category: "happy",
    title: "Bestfriend",
    singer: "IKON",
    link: "https://open.spotify.com/track/1AhfmrzSrDmOIstpRO9wTI?si=d64643c44e6c4198",
  },
  {
    category: "happy",
    title: "Darari",
    singer: "Treasure",
    link: "https://open.spotify.com/track/0dcnrLo8s1rhjm8euGjI4n?si=81375e2883214d68",
  },
  {
    category: "happy",
    title: "Make A Wish (Birthday Song)",
    singer: "NCT U",
    link: "https://open.spotify.com/track/1Q5SpQeocfNXefx76svqkl?si=a832c3e39fdd4c30",
  },
  {
    category: "happy",
    title: "Polaroid Love",
    singer: "Enhypen",
    link: "https://open.spotify.com/track/5elW2CKSoqjYoJ32AGDxf1?si=d416ec00b3ad4ddb",
  },
  {
    category: "happy",
    title: "Psycho",
    singer: "Red Velvet",
    link: "https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK?si=7f1c60d54c584e6b",
  },
  {
    category: "happy",
    title: "MORE & MORE",
    singer: "Twice",
    link: "https://open.spotify.com/track/3omvXShuRPM3zbDpWYqf5g?si=0ebc3ecc19844b2b",
  },
  {
    category: "happy",
    title: "Lovesick Girls",
    singer: "BLACKPINK",
    link: "https://open.spotify.com/track/1GMufNnkKAnPLnqKJ5HHxW?si=83a0eb46af74405a",
  },
  {
    category: "happy",
    title: "Dolphin",
    singer: "Oh My Girl",
    link: "https://open.spotify.com/track/5gpojs9yi3nm8aC3BOg6q5?si=7b73069a6b4349ea",
  },
];

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Music = require("../models/music");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

const seedDB = async function () {
  try {
    // Insert the music data
    await Music.insertMany(musicData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
