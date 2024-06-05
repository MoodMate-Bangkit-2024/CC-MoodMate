const rawData = [
  "1. Happy - Pharrel Williams (https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=8f3232c306bf4fe1)",
  "2. Can't stop the feeling! - Justin Timberlake (https://open.spotify.com/album/40LbnfieVTWtHrK24WQeEB?si=qehnL7o7Sd-v-SJfHF8_dA)",
  "3. Walking on Sunshine - Katrina and the Waves (https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=f7ffa3ed6e2445d8)",
  "4. Don't worry, be happy - Bobby McFerrin (https://open.spotify.com/track/5YbgcwHjQhdT1BYQ4rxWlD?si=7e8108a9d2164228)",
  "5. Levitating - Dua Lipa (https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF?si=62fb4b4a664d42c6)",
  "6. Dancing Queen - ABBA (https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr?si=5318755ed1b94abb)",
  "7. Uptown Funk - Mark Ronson ft. Bruno Mars (https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS?si=63a7b81c8c264389)",
  "8. Shake It Off - Taylor Swift (https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD?si=591328efb17d4802)",
  "9. Problem - Ariana Grande (https://open.spotify.com/track/7vS3Y0IKjde7Xg85LWIEdP?si=df5bbb9f5bb644e9)",
  "10. All About That Bass - Meghan Trainor (https://open.spotify.com/track/5jE48hhRu8E6zBDPRSkEq7?si=99b6f03277764b6e)",
  "11. Haven't Met You Yet - Michael Bublé (https://open.spotify.com/track/4fIWvT19w9PR0VVBuPYpWA?si=bbf25275cf0f439a)",
  "12. Sugar - Maroon 5 (https://open.spotify.com/track/5d6Mjuu2uCGRPYpFjGpCX5?si=8053ab45fcdf4de5)",
  "13. Try Everything - Shakira (https://open.spotify.com/track/1N3dZ7TTWO6VcD4Y3hHYLZ?si=71c09621fd1a475a)",
  "14. Roar - Katy Perry (https://open.spotify.com/track/6F5c58TMEs1byxUstkzVeM?si=5d17f8477a024faf)",
  "15. Good Life - OneRepublic (https://open.spotify.com/track/6OtCIsQZ64Vs1EbzztvAv4?si=3689976992cd4fed)",
  "16. Here Comes the Sun - The Beatles (https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=42b2f92f82c8499e)",
  "17. Viva La Vida - Coldplay (https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b?si=3bc33db82a424944)",
  "18. Treasure - Bruno Mars (https://open.spotify.com/track/55h7vJchibLdUkxdlX3fK7?si=cecd69c93153406c)",
  "19. Higher Love - Kygo ft. Whitney Houston (https://open.spotify.com/track/6oJ6le65B3SEqPwMRNXWjY?si=98bd022e8cd94bbb)",
  "20. Fight Song - Rachel Platten (https://open.spotify.com/track/37f4ITSlgPX81ad2EvmVQr?si=b5b1b30f7b974506)",
  "21. HandClap - Fitz and The Tantrums (https://open.spotify.com/track/7j56HrjR9cGzvekvZY3Faz?si=c44cad5bcd504b88)",
  "22. Dance Monkey - Tones and I (https://open.spotify.com/track/2XU0oxnq2qxCpomAAuJY8K?si=2f93e83602104ae0)",
  "23. Pumped Up Kicks - Foster The People (https://open.spotify.com/track/7w87IxuO7BDcJ3YUqCyMTT?si=75936858f81a4560)",
  "24. Price Tag - Jessie J (https://open.spotify.com/track/2fTsFCKRFQ5M0igJgabnLA?si=1005f82c78dc4616)",
  "25. Something Just Like This - The Chainsmokers & Coldplay (https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW?si=e3d9fc5053334a8b)",
  "26. Raise Your Glass - P!nk (https://open.spotify.com/track/1gv4xPanImH17bKZ9rOveR?si=4a35b5a3e53e4153)",
  "27. On Top of the World - Imagine Dragons (https://open.spotify.com/track/213x4gsFDm04hSqIUkg88w?si=bc08ea468f734b40)",
  "28. I'm Yours - Jason Mraz (https://open.spotify.com/track/1EzrEOXmMH3G43AXT1y7pA?si=8029e02660b04cc5)",
  "29. Girls Just Want to Have Fun - Cyndi Lauper (https://open.spotify.com/track/4y1LsJpmMti1PfRQV9AWWe?si=956c9727f4224b3f)",
  "30. Hey, Soul Sister - Train (https://open.spotify.com/track/4HlFJV71xXKIGcU3kRyttv?si=cb693da6860c4cc4) ",
  "31. Hey Ya! - OutKast (https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM?si=bb76c18a4de8449b)",
  "32. Good as Hell - Lizzo (https://open.spotify.com/track/07Oz5StQ7GRoygNLaXs2pd?si=0a90d063f18d4d82)",
  "33. Shape of You - Ed Sheeran (https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3?si=8d388e39591946b8)",
  "34. Marvin Gaye - Charlie Puth, Meghan Trainor (https://open.spotify.com/track/3rKYiySCDMUKTw5kGVVhaa?si=13773b04585c4c23)",
  "35. Love On Top - Beyoncé (https://open.spotify.com/track/34h7O0d0ToOB60zYSFkGKH?si=543745315d784720)",
  "36. Sorry - Justin Bieber (https://open.spotify.com/track/0JBq4P9Jpp37F1PteCgGL1?si=b14b303617cb48af)",
  "37. Pompeii - Bastille (https://open.spotify.com/track/7Fw5i56my24ZBnGS7hFX2n?si=7675082884204014)",
  "38. Wake Me Up - Avicii (https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2?si=5504b378809e468e)",
  "39. Good Feeling - Flo Rida (https://open.spotify.com/track/2LEF1A8DOZ9wRYikWgVlZ8?si=c32fefc28b074a65)",
  "40. Party Rock Anthem - LMFAO (https://open.spotify.com/track/7mitXLIMCflkhZiD34uEQI?si=d7ae321bc7b74f25)",
  "41. Rather Be - Clean Bandit ft. Jess Glynne (https://open.spotify.com/track/3s4U7OHV7gnj42VV72eSZ6?si=d7979588f5c5464d) ",
  "42. There's Nothing Holdin' Me Back - Shawn Mendes (https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml?si=3fbd0c8fdea54d52)",
  "43. Party in the U.S.A. - Miley Cyrus (https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr?si=47a869ed594d41c1)",
  "44. Shut Up and Dance - Walk the Moon (https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA?si=9132695fc94246a4)",
  "45. Timber - Pitbull ft. Kesha (https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS?si=b5ba0bf165374b6f)",
  "46. Moves Like Jagger - Maroon 5 (https://open.spotify.com/track/1r299qCKBLgUS9XJ9m1kEx?si=9541b1738f864407)",
  "47. Watermelon Sugar - Harry Styles (https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY?si=56407c52d0e742db)",
  "48. Dynamite - BTS (https://open.spotify.com/track/5QDLhrAOJJdNAmCTJ8xMyW?si=03c9fdd9c5ac46c9)",
  "49. good 4 u - Olivia Rodrigo (https://open.spotify.com/track/6P4d1NWBCNIYZjzF9k1mVN?si=c76dbd24f3c249b5)",
  "50. Peaches - Justin Bieber (https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI?si=fab0b26d7718435f)",
  "51. Say So - Doja Cat (https://open.spotify.com/track/3Dv1eDb0MEgF93GpLXlucZ?si=11869290d28d4898)",
  "52. Positions - Ariana Grande (https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0?si=68d321a8d17a475d)",
  "53. Señorita - Shawn Mendes & Camila Cabello (https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik?si=d90861c59a3c4242)",
  "54. Midnight Sky - Miley Cyrus (https://open.spotify.com/track/4i2qxFEVVUi8yOYoxB8TCX?si=b54b8355bab44ab8)",
  "55. Bad Habits - Ed Sheeran (https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d?si=420586f4de5a423d)",
  "56. Heat Waves - Glass Animals (https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp?si=0383f4bd7a424598)",
  "57. MONTERO (Call Me By Your Name) - Lil Nas X (https://open.spotify.com/track/67BtfxlNbhBmCDR2L2l8qd?si=878b78c26b054457)",
  "58. Feel Special - TWICE (https://open.spotify.com/track/3Hz3tTQwOdM6XkA0ALB2G9?si=c17f21fb3e4347e8)",
  "59. How You Like That - BLACKPINK (https://open.spotify.com/track/6bvZRLLkBKkmgpBJTTj3QK?si=c9d3f0aec16a4244)",
  "60. Red Flavor - Red Velvet (https://open.spotify.com/track/7nKQ5WAcjnG48knyLuo8gO?si=28d311ec214c4f01)",
  "61. WANNABE - ITZY (https://open.spotify.com/track/4pspYVQGFHLPEFgQPD1J7e?si=f4e11df64c4b45e9)",
  "62.  VERY NICE - SEVENTEEN (https://open.spotify.com/track/1Rrj7KyS2R6SP9CQMDJW1w?si=6d0b6b9c295f4e62)",
  "63. Power - EXO (https://open.spotify.com/track/53YZi9zgTnF0Py0K6ejyWz?si=9be61563eb9747fb)",
  "64. HIP - MAMAMOO (https://open.spotify.com/track/24nK8tW7Pt3Inh2utttuoG?si=380c7a0c93294052)",
  "65. We Go Up - NCT DREAM (https://open.spotify.com/track/26vOBLHS116a4WNUVlvAUW?si=2d206e4c16584cbd)",
  "66. Blue Hour - TXT (https://open.spotify.com/track/3ObPkJQAgjAhTwYvDhPrAW?si=d86c1220efd14272)",
  "67. MAGO - GFRIEND (https://open.spotify.com/track/46WaBBaEHzgbN88Ew0nh50?si=636c571ce6b34f23)",
  "68. View - SHINee (https://open.spotify.com/track/46E1ic6n099e76t5J1TbHn?si=eb11181701504089)",
  "69.  Pporappippam - Sunmi (https://open.spotify.com/track/7oQh96s9YemWG3A4zkIbrU?si=80507f1ce2ff4f38)",
  "70. Gashina - Sunmi (https://open.spotify.com/track/0jFHMDRXxKaREor3hBEEST?si=c07933d98fdd4c4a)",
  "71. Back Door - Stray Kids (https://open.spotify.com/track/0XuepwFJUcKN8T5zTqoP0F?si=7693acac8d92461c)",
  "72. Panorama - IZ*ONE (https://open.spotify.com/track/0CnpSTdL9l5vQM4YnzXtyo?si=f5e6e1e68b11484d)",
  "73. Jopping - SuperM (https://open.spotify.com/track/5WrEilrRI5cIW0DxMvQYPZ?si=4b69c921dc94424c)",
  "74.  Ko Ko Bop - EXO (https://open.spotify.com/track/5EzitieoPnjyKHAq0gfRMa?si=a6ac6300439b41d0)",
  "75. Peek-A-Boo - Red Velvet (https://open.spotify.com/track/42tFTth2jcF7iSo0RBjfJF?si=daeb78b866954f1d)",
  "76.  Ice Cream - BLACKPINK (https://open.spotify.com/track/1cdbkpZ3q1KYZDNSrOpdkb?si=ed5153a4532143b8)",
  "77. God's Menu - Stray Kids (https://open.spotify.com/track/4XPXrcpyNr30Km6aPiflJy?si=2febf09facf244d9)",
  "78. Love Scenario - IKON (https://open.spotify.com/track/3d3ELsqKlQ7WA0a10Isu3l?si=b444838186f44126)",
  "79. Bestfriend - IKON (https://open.spotify.com/track/1AhfmrzSrDmOIstpRO9wTI?si=d64643c44e6c4198)",
  "80.  Darari - Treasure (https://open.spotify.com/track/0dcnrLo8s1rhjm8euGjI4n?si=81375e2883214d68)",
  "81. Make A Wish (Birthday Song) - NCT U (https://open.spotify.com/track/1Q5SpQeocfNXefx76svqkl?si=a832c3e39fdd4c30)",
  "82. Polaroid Love - Enhypen (https://open.spotify.com/track/5elW2CKSoqjYoJ32AGDxf1?si=d416ec00b3ad4ddb)",
  "83. Psycho - Red Velvet (https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK?si=7f1c60d54c584e6b)",
  "84. MORE & MORE - Twice (https://open.spotify.com/track/3omvXShuRPM3zbDpWYqf5g?si=0ebc3ecc19844b2b)",
  "85. Lovesick Girls - BLACKPINK (https://open.spotify.com/track/1GMufNnkKAnPLnqKJ5HHxW?si=83a0eb46af74405a)",
  "86. Dolphin - Oh My Girl (https://open.spotify.com/track/5gpojs9yi3nm8aC3BOg6q5?si=7b73069a6b4349ea)",
  "87. What is Love? - TWICE (https://open.spotify.com/track/3zhbXKFjUDw40pTYyCgt1Y?si=909e149c70ce4b3b) ",
];

const musicArray = rawData
  .map((entry) => {
    // Extract the title, singer, and link using regular expressions
    const match = entry.match(/^\d+\.\s+(.*?)\s+-\s+(.*?)\s+\((.*?)\)$/);

    // Ensure we have a match before proceeding
    if (match) {
      const [, title, singer, link] = match;
      return {
        category: "happy",
        title,
        singer,
        link,
      };
    }

    // Return null if the format is unexpected (optional, depending on how you want to handle errors)
    return null;
  })
  .filter((entry) => entry !== null); // Remove any null entries

// Output the transformed array
console.log(musicArray);
