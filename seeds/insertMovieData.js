const movieData = [
  {
    category: "happy",
    title: "Laskar Pelangi",
    link: "https://www.imdb.com/title/tt1301264/?ref_=nv_sr_srsg_0_tt_3_nm_1_q_Laskar%2520Pelangi",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/thumb/1/17/Laskar_Pelangi_film.jpg/330px-Laskar_Pelangi_film.jpg",
  },
  {
    category: "happy",
    title: "Ted ",
    link: "https://www.imdb.com/title/tt1637725/?ref_=fn_al_tt_3",
    imageUrl:
      "https://m.media-amazon.com/images/I/61I7LUN5jXL._AC_UF894,1000_QL80_.jpg",
  },
  {
    category: "happy",
    title: "Ngeri-ngeri Sedap",
    link: "https://www.imdb.com/title/tt16266336/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/6/6a/Poster_Ngeri_Ngeri_Sedap_2022_movie.jpeg",
  },
  {
    category: "happy",
    title: "The Hangover",
    link: "https://www.imdb.com/title/tt1119646/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520hangover",
    imageUrl: "https://m.media-amazon.com/images/I/61e+nQQXoqL._AC_.jpg",
  },
  {
    category: "happy",
    title: "The Shawshank Redemption",
    link: "https://www.imdb.com/title/tt0111161/",
    imageUrl:
      "https://images-cdn.ubuy.co.id/6351416337e9de157a371824-shawshank-redemption-movie-poster-us.jpg",
  },
  {
    category: "happy",
    title: "The Dark Knight",
    link: "https://www.imdb.com/title/tt0468569/",
    imageUrl: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SY879_.jpg",
  },
  {
    category: "happy",
    title: "Inception",
    link: "https://www.imdb.com/title/tt1375666/",
    imageUrl: "https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_SY879_.jpg",
  },
  {
    category: "happy",
    title: "Forrest Gump",
    link: "https://www.imdb.com/title/tt0109830/",
    imageUrl:
      "https://img.alinea.id/img/content/2021/10/02/122937/forrest-gump-film-tentang-korban-perundungan-yang-bangkit-berprestasi-z58lXTpZaV.jpg",
  },
  {
    category: "happy",
    title: "The Lion King",
    link: "https://www.imdb.com/title/tt0110357/",
    imageUrl:
      "https://images-cdn.ubuy.co.id/634d11eb82d41754b205a335-the-lion-king-2019-movie-poster.jpg",
  },
  {
    category: "happy",
    title: "The Green Mile",
    link: "https://www.imdb.com/title/tt0120689/",
    imageUrl:
      "https://media.themoviedb.org/t/p/w440_and_h660_face/qSN3inXO0S7jmqlJDIleumghw7J.jpg",
  },
  {
    category: "happy",
    title: "Life Is Beautiful",
    link: "https://www.imdb.com/title/tt0118799/",
    imageUrl:
      "https://static.displate.com/460x640/displate/2021-02-23/d79b45e5ceb9c813d67e3826aea2ab6a_7688a516a1e56d12178f2124cc816ab9.avif",
  },
  {
    category: "happy",
    title: "Spirited Away",
    link: "https://www.imdb.com/title/tt0245429/",
    imageUrl: "https://m.media-amazon.com/images/I/61ON14PVzoL._AC_SY879_.jpg",
  },
  {
    category: "happy",
    title: "The Intouchables",
    link: "https://www.imdb.com/title/tt1675434/",
    imageUrl: "https://m.media-amazon.com/images/I/51WbHjvEceL._AC_.jpg",
  },
  {
    category: "happy",
    title: "Up",
    link: "https://www.imdb.com/title/tt1049413/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/id/c/c5/Up_Poster.JPG",
  },
  {
    category: "happy",
    title: "Back to the Future",
    link: "https://www.imdb.com/title/tt0088763/",
    imageUrl: "https://cdn.europosters.eu/image/750webp/2795.webp",
  },
  {
    category: "happy",
    title: "Toy Story",
    link: "https://www.imdb.com/title/tt0114709/",
    imageUrl: "https://m.media-amazon.com/images/I/818uD-gmD2L._AC_SX679_.jpg",
  },
  {
    category: "happy",
    title: "Finding Nemo",
    link: "https://www.imdb.com/title/tt0266543/",
    imageUrl:
      "https://media.themoviedb.org/t/p/w440_and_h660_face/33YtcDp2BGxG7vKxno3laymNuM4.jpg",
  },
  {
    category: "happy",
    title: "Ratatouille",
    link: "https://www.imdb.com/title/tt0382932/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71nmk6zlvcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    category: "happy",
    title: "Coco",
    link: "https://www.imdb.com/title/tt2380307/",
    imageUrl: "https://cdn.europosters.eu/image/750webp/56183.webp",
  },
  {
    category: "happy",
    title: "The Incredibles",
    link: "https://www.imdb.com/title/tt0317705/",
    imageUrl: "https://m.media-amazon.com/images/I/81p5GProPrL._AC_SY879_.jpg",
  },
  {
    category: "happy",
    title: "Monsters, Inc.",
    link: "https://www.imdb.com/title/tt0198781/",
    imageUrl: "https://m.media-amazon.com/images/I/81lR4Bm8USL._AC_SY879_.jpg",
  },
  {
    category: "happy",
    title: "WALL·E",
    link: "https://www.imdb.com/title/tt0910970/",
    imageUrl: "https://m.media-amazon.com/images/I/51RoZRgIHtL._AC_.jpg",
  },
  {
    category: "happy",
    title: "The Grand Budapest Hotel",
    link: "https://www.imdb.com/title/tt2278388/",
    imageUrl: "https://m.media-amazon.com/images/I/51OM85JsXxL._AC_.jpg",
  },
  {
    category: "happy",
    title: "Amélie",
    link: "https://www.imdb.com/title/tt0211915/",
    imageUrl: "https://m.media-amazon.com/images/I/51t3yxtcpsL._AC_.jpg",
  },
  {
    category: "happy",
    title: "Singin' in the Rain",
    link: "https://www.imdb.com/title/tt0045152/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg/593px-Singin%27_in_the_Rain_%281952_poster%29.jpg?20200108010152",
  },
  {
    category: "happy",
    title: "The Truman Show",
    link: "https://www.imdb.com/title/tt0120382/",
    imageUrl:
      "https://m.media-amazon.com/images/I/51C-LBA+opL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "La La Land",
    link: "https://www.imdb.com/title/tt3783958/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81wp+J3zlAL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "My Neighbor Totoro",
    link: "https://www.imdb.com/title/tt0096283/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91K6uLfluxL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Zootopia",
    link: "https://www.imdb.com/title/tt2948356/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91qnZ6AAruL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "The Lego Movie",
    link: "https://www.imdb.com/title/tt1490017/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Eq4aAsoYL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Guardians of the Galaxy",
    link: "https://www.imdb.com/title/tt2015381/",
    imageUrl:
      "https://m.media-amazon.com/images/I/51X6DFhSzeL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Inside Out",
    link: "https://www.imdb.com/title/tt2096673/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91JyhM8h8gL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Tangled",
    link: "https://www.imdb.com/title/tt0398286/",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1a5p71MkcL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Moana",
    link: "https://www.imdb.com/title/tt3521164/",
    imageUrl: "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg",
  },
  {
    category: "happy",
    title: "Paddington 2",
    link: "https://www.imdb.com/title/tt4468740/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81vZ1xmtxXL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Shrek",
    link: "https://www.imdb.com/title/tt0126029/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91XwrQtjgiL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Despicable Me",
    link: "https://www.imdb.com/title/tt1323594/",
    imageUrl:
      "https://m.media-amazon.com/images/I/7186nuZR9GL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Jumanji: Welcome to the Jungle",
    link: "https://www.imdb.com/title/tt2283362/",
    imageUrl:
      "https://m.media-amazon.com/images/I/918gSJ+CuXL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "School of Rock",
    link: "https://www.imdb.com/title/tt0332379/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71gIZ2Q5EEL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Elf",
    link: "https://www.imdb.com/title/tt0319343/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61KJUbwdngL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    category: "happy",
    title: "The Princess Bride",
    link: "https://www.imdb.com/title/tt0093779/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71sxdzCAccL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Enchanted",
    link: "https://www.imdb.com/title/tt0461770/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91dhk0S2UKL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "The Greatest Showman",
    link: "https://www.imdb.com/title/tt1485796/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61eZ1DjQnjL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Big Hero 6",
    link: "https://www.imdb.com/title/tt2245084/",
    imageUrl:
      "https://m.media-amazon.com/images/I/41A1nFFzn3L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "The Jungle Book",
    link: "https://www.imdb.com/title/tt3040964/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71g1+VGc04L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Mamma Mia!",
    link: "https://www.imdb.com/title/tt0795421/",
    imageUrl:
      "https://m.media-amazon.com/images/I/8183B3PqgJL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Lilo & Stitch",
    link: "https://www.imdb.com/title/tt0275847/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81MujfR2X-L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Finding Dory",
    link: "https://www.imdb.com/title/tt2277860/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Kz5FhwEzL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Mary Poppins",
    link: "https://www.imdb.com/title/tt0058331/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71kxCWnCa4L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Matilda",
    link: "https://www.imdb.com/title/tt0117008/",
    imageUrl:
      "https://m.media-amazon.com/images/I/616xMs2RSkL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Ferris Bueller's Day Off",
    link: "https://www.imdb.com/title/tt0091042/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71RTnrEpLmL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "A League of Their Own",
    link: "https://www.imdb.com/title/tt0104694/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Kr5IVmd8L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "The Secret Life of Walter Mitty",
    link: "https://www.imdb.com/title/tt0359950/",
    imageUrl:
      "https://m.media-amazon.com/images/I/819SZuDV0dL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "happy",
    title: "Little Miss Sunshine",
    link: "https://www.imdb.com/title/tt0449059/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71NoXi4V5HL._AC_UY327_FMwebp_QL65_.jpg",
  },

  {
    category: "sadness",
    title: "Schindler's List",
    link: "https://m.media-amazon.com/images/I/719kmsTK6ZL._AC_UY327_FMwebp_QL65_.jpg",
    imageUrl: "",
  },
  {
    category: "sadness",
    title: "The Green Mile",
    link: "https://www.imdb.com/title/tt0120689/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71GZjecm3DL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Forrest Gump",
    link: "https://www.imdb.com/title/tt0109830/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71dViWh3lnL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Life Is Beautiful",
    link: "https://www.imdb.com/title/tt0118799/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81WoOr1-K8L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Grave of the Fireflies",
    link: "https://www.imdb.com/title/tt0095327/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71ZeukZA6CL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Pursuit of Happyness",
    link: "https://www.imdb.com/title/tt0454921/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71-JsS3LidL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Titanic",
    link: "https://www.imdb.com/title/tt0120338/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71osmBH30GL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "A Beautiful Mind",
    link: "https://www.imdb.com/title/tt0268978/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81a-hTiPUBL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Million Dollar Baby",
    link: "https://www.imdb.com/title/tt0405159/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71KG-HmdkaL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Manchester by the Sea",
    link: "https://www.imdb.com/title/tt4034228/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81iIK0pWmBL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Requiem for a Dream",
    link: "https://www.imdb.com/title/tt0180093/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91dp81U07-L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Fault in Our Stars",
    link: "https://www.imdb.com/title/tt2582846/",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1-+bJdq+PL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Elephant Man",
    link: "https://www.imdb.com/title/tt0080678/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81j35H1rT1L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "A Monster Calls",
    link: "https://www.imdb.com/title/tt3416532/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81yCC7MHXmL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "12 Years a Slave",
    link: "https://www.imdb.com/title/tt2024544/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81kThJfGpIL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Boy in the Striped Pajamas",
    link: "https://www.imdb.com/title/tt0914798/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71RlklfI5oL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "My Sister's Keeper",
    link: "https://www.imdb.com/title/tt1078588/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81CZ87CF-sL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Marley & Me",
    link: "https://www.imdb.com/title/tt0822832/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71g442X-vOL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Notebook",
    link: "https://www.imdb.com/title/tt0332280/",
    imageUrl:
      "https://m.media-amazon.com/images/I/810hHt9jaRL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Blue Valentine",
    link: "https://www.imdb.com/title/tt1120985/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71so5qg8fuL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Hachi: A Dog's Tale",
    link: "https://www.imdb.com/title/tt1028532/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Cgd7oAw2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Lovely Bones",
    link: "https://www.imdb.com/title/tt0380510/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71CXSLp8xML._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Color Purple",
    link: "https://www.imdb.com/title/tt0088939/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71t15P0ciKL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Dancer in the Dark",
    link: "https://www.imdb.com/title/tt0168629/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Cvs84dqsS._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Leaving Las Vegas",
    link: "https://www.imdb.com/title/tt0113627/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71XHAUqG0pL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Eternal Sunshine of the Spotless Mind",
    link: "https://www.imdb.com/title/tt0338013/",
    imageUrl:
      "https://m.media-amazon.com/images/I/8199-x23OLL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Her",
    link: "https://www.imdb.com/title/tt1798709/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71OmYMgVKNL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Brokeback Mountain",
    link: "https://www.imdb.com/title/tt0388795/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81+86PtVLpL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Mystic River",
    link: "https://www.imdb.com/title/tt0327056/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Gt297iF-L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Pianist",
    link: "https://www.imdb.com/title/tt0253474/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71pArK4WTWL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Precious",
    link: "https://www.imdb.com/title/tt0929632/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71fhZ+TUJRL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Philadelphia",
    link: "https://www.imdb.com/title/tt0107818/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71U+hV4oATL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Dead Poets Society",
    link: "https://www.imdb.com/title/tt0097165/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81CMhnXNzjL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Ordinary People",
    link: "https://www.imdb.com/title/tt0081283/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71cPwGTxl2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Beaches",
    link: "https://www.imdb.com/title/tt0094715/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Ng1u3oA2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Bridge to Terabithia",
    link: "https://www.imdb.com/title/tt0398808/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91WfUCgJzAL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Terms of Endearment",
    link: "https://www.imdb.com/title/tt0086425/",
    imageUrl:
      "https://m.media-amazon.com/images/I/810RnAtgYPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Marley & Me",
    link: "https://www.imdb.com/title/tt0822832/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71g442X-vOL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Boys Don't Cry",
    link: "https://www.imdb.com/title/tt0171804/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91PlgMEixBL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "21 Grams",
    link: "https://www.imdb.com/title/tt0315733/",
    imageUrl:
      "https://www.amazon.com/21-Grams-Sean-Penn/dp/B0001CNRRU/ref=sr_1_1?crid=LNBPATS7U039&dib=eyJ2IjoiMSJ9.WY1nQT4HFL4KuZ-KV_VRLJ6-uiDwAKvLfdff3MUIvLK-V605zyhJq2X_9kFOoyc-5WXOGPhuemysdmvBNWtJPn7EROK4JBSA3khZ3SiaovhUC2ESDrVmLmlgvSXF7-JwmIFVzYUjH1WqRYvrbqEPg0A6ZaxBvqlMm3diGEi5GndtmGSmdPslgSjTBmtNliA5d8Q1oCc_ShLA8rSs-IbnImuYRR6V4DMk4EkF4Zsif4M.-tQNZjlbARyHgxWvKdyKLaMfdvljjIWGmoJNcQnnNpI&dib_tag=se&keywords=21+Grams&qid=1718195469&sprefix=boys+don%27t+cry%2Caps%2C873&sr=8-1",
  },
  {
    category: "sadness",
    title: "Rabbit Hole",
    link: "https://www.imdb.com/title/tt0935075/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91VFI2UyrjL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Fruitvale Station",
    link: "https://www.imdb.com/title/tt2334649/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71PJitZFzbL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Last King of Scotland",
    link: "https://www.imdb.com/title/tt0455590/",
    imageUrl:
      "https://m.media-amazon.com/images/I/819NmAo960L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Good Will Hunting",
    link: "https://www.imdb.com/title/tt0119217/",
    imageUrl:
      "https://m.media-amazon.com/images/I/913nrT6JfiL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Pursuit of Happyness",
    link: "https://www.imdb.com/title/tt0454921/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71-JsS3LidL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Atonement",
    link: "https://www.imdb.com/title/tt0783233/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91z-VMEotaL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "The Danish Girl",
    link: "https://www.imdb.com/title/tt0810819/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91uDQKPeF2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Precious",
    link: "https://www.imdb.com/title/tt0929632/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71fhZ+TUJRL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "Sophie’s Choice",
    link: "https://www.imdb.com/title/tt0084707/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81PBT12JvuL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "sadness",
    title: "A Walk to Remember",
    link: "https://www.imdb.com/title/tt0281358/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81OeSUmJesL._AC_UY327_FMwebp_QL65_.jpg",
  },

  {
    category: "fear",
    title: "The Shining",
    link: "https://www.imdb.com/title/tt0081505/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71TabV2ES8L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Exorcist",
    link: "https://www.imdb.com/title/tt0070047/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81TCAJOIrgL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Psycho",
    link: "https://www.imdb.com/title/tt0054215/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71goUgwDL9L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Jaws",
    link: "https://www.imdb.com/title/tt0073195/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81je5knGp+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Alien",
    link: "https://www.imdb.com/title/tt0078748/",
    imageUrl:
      "https://m.media-amazon.com/images/I/910xaEX2ThL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Silence of the Lambs",
    link: "https://www.imdb.com/title/tt0102926/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Tj46I+86L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Rosemary's Baby",
    link: "https://www.imdb.com/title/tt0063522/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81E+Fx6KNHL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Thing",
    link: "https://www.imdb.com/title/tt0084787/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81fuvhQ6u+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Hereditary",
    link: "https://www.imdb.com/title/tt7784604/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81+diYzQ2+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Get Out",
    link: "https://www.imdb.com/title/tt5052448/",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1JALctBEKL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "A Nightmare on Elm Street",
    link: "https://www.imdb.com/title/tt0087800/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91YEQQGmnLL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Halloween",
    link: "https://www.imdb.com/title/tt0077651/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81TzYGqfJjS._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Texas Chain Saw Massacre",
    link: "https://www.imdb.com/title/tt0072271/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91FLb+5F0ZL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Witch",
    link: "https://www.imdb.com/title/tt4263482/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Z2E0P8GlL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Conjuring",
    link: "https://www.imdb.com/title/tt1457767/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Oi50KkGpL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "It",
    link: "https://www.imdb.com/title/tt1396484/",
    imageUrl:
      "https://m.media-amazon.com/images/I/816PO80qmIL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Saw",
    link: "https://www.imdb.com/title/tt0387564/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81jXsPEmsDL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Scream",
    link: "https://www.imdb.com/title/tt0117571/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91RKo5IMK-L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Ring",
    link: "https://www.imdb.com/title/tt0298130/",
    imageUrl:
      "https://m.media-amazon.com/images/I/814uvr2aq4L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "28 Days Later",
    link: "https://www.imdb.com/title/tt0289043/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71TLTrl0w+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "An American Werewolf in London",
    link: "https://www.imdb.com/title/tt0082010/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81AzQksKaVL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Babadook",
    link: "https://www.imdb.com/title/tt2321549/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61F1eamY+YL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Insidious",
    link: "https://www.imdb.com/title/tt1591095/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81nyZbN0qwL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Poltergeist",
    link: "https://www.imdb.com/title/tt0084516/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81pHukCdUiL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Sixth Sense",
    link: "https://www.imdb.com/title/tt0167404/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81fu1REWlPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Evil Dead II",
    link: "https://www.imdb.com/title/tt0092991/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61idIs2YPPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Train to Busan",
    link: "https://www.imdb.com/title/tt5700672/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71bCTKTLY+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Sinister",
    link: "https://www.imdb.com/title/tt1922777/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81ML-KfKQJL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Don't Breathe",
    link: "https://www.imdb.com/title/tt4160708/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81N9a1yyHwL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Others",
    link: "https://www.imdb.com/title/tt0230600/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61Vc-bzEtmL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Let the Right One In",
    link: "https://www.imdb.com/title/tt1139797/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81K5I1G9YzL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Cabin in the Woods",
    link: "https://www.imdb.com/title/tt1259521/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91vgV8oodaL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Drag Me to Hell",
    link: "https://www.imdb.com/title/tt1127180/",
    imageUrl:
      "https://m.media-amazon.com/images/I/813DS7PaR2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Fly",
    link: "https://www.imdb.com/title/tt0091064/",
    imageUrl:
      "https://m.media-amazon.com/images/I/712v3fwuD+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "It Follows",
    link: "https://www.imdb.com/title/tt3235888/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91ImXEG229L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Omen",
    link: "https://www.imdb.com/title/tt0075005/",
    imageUrl:
      "https://m.media-amazon.com/images/I/911hjAc6YsL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Descent",
    link: "https://www.imdb.com/title/tt0435625/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81dKT4QeXtL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "10 Cloverfield Lane",
    link: "https://www.imdb.com/title/tt1179933/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81zbgngL6JL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Mist",
    link: "https://www.imdb.com/title/tt0884328/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Lf49RDwZL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "REC",
    link: "https://www.imdb.com/title/tt1038988/",
    imageUrl:
      "https://m.media-amazon.com/images/I/51S56g5QOhL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Babadook",
    link: "https://www.imdb.com/title/tt2321549/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61F1eamY+YL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Suspiria",
    link: "https://www.imdb.com/title/tt0076786/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81jgtTZ6otL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Child's Play",
    link: "https://www.imdb.com/title/tt0094862/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81ke5Kyza4L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Candyman",
    link: "https://www.imdb.com/title/tt0103919/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71ug9uBNaaL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Carrie",
    link: "https://www.imdb.com/title/tt0074285/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81FpYjDwIRL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Hostel",
    link: "https://www.imdb.com/title/tt0450278/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71I+cqTkgQL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "Split",
    link: "https://www.imdb.com/title/tt4972582/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91GRmssDiXL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Blair Witch Project",
    link: "https://www.imdb.com/title/tt0185937/",
    imageUrl:
      "https://m.media-amazon.com/images/I/61mZqbalGFL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Invisible Man",
    link: "https://www.imdb.com/title/tt1051906/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Zgxt3SEbL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "fear",
    title: "The Wicker Man",
    link: "https://www.imdb.com/title/tt0070917/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71DF7PnMEOL._AC_UY327_FMwebp_QL65_.jpg",
  },

  {
    category: "anger",
    title: "Schindler's List",
    link: "https://www.imdb.com/title/tt0108052/",
    imageUrl:
      "https://m.media-amazon.com/images/I/719kmsTK6ZL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "12 Angry Men",
    link: "https://www.imdb.com/title/tt0050083/",
    imageUrl:
      "https://m.media-amazon.com/images/I/712MWtQoKQL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Fight Club",
    link: "https://www.imdb.com/title/tt0137523/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71XgYWOug+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "American History X",
    link: "https://www.imdb.com/title/tt0120586/",
    imageUrl:
      "https://m.media-amazon.com/images/I/810jS58jzQL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Hotel Rwanda",
    link: "https://www.imdb.com/title/tt0395169/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81n73GOrOwL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Mississippi Burning",
    link: "https://www.imdb.com/title/tt0095647/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71eGrF2h8zL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Do the Right Thing",
    link: "https://www.imdb.com/title/tt0097216/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Qtu+vTUUL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Falling Down",
    link: "https://www.imdb.com/title/tt0106856/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91ht2CdTyKL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "A Time to Kill",
    link: "https://www.imdb.com/title/tt0117913/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71k2DdxUrKL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Platoon",
    link: "https://www.imdb.com/title/tt0091763/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71fVzQW3CFL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Color Purple",
    link: "https://www.imdb.com/title/tt0088939/",
    imageUrl:
      "https://m.media-amazon.com/images/I/9130mT4zGBL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Selma",
    link: "https://www.imdb.com/title/tt1020072/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81MqIJTkC3L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "12 Years a Slave",
    link: "https://www.imdb.com/title/tt2024544/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81kThJfGpIL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Amistad",
    link: "https://www.imdb.com/title/tt0118607/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81N2+wQWgML._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Dead Man Walking",
    link: "https://www.imdb.com/title/tt0112818/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91gix7zQSRL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "JFK",
    link: "https://www.imdb.com/title/tt0102138/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91gef7+8c8L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Judgment at Nuremberg",
    link: "https://www.imdb.com/title/tt0055031/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91RFYYvHvmL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Hurricane",
    link: "https://www.imdb.com/title/tt0174856/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Q4QKuwUNL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Milk",
    link: "https://www.imdb.com/title/tt1013753/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81l9HKLVpJL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Gandhi",
    link: "https://www.imdb.com/title/tt0083987/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71B+WYhKZUL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Accused",
    link: "https://www.imdb.com/title/tt0094608/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81pID-YvXNL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Boys Don't Cry",
    link: "https://www.imdb.com/title/tt0171804/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91PlgMEixBL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Passion of the Christ",
    link: "https://www.imdb.com/title/tt0335345/",
    imageUrl:
      "https://m.media-amazon.com/images/I/9102zWJLhDL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Crash",
    link: "https://www.imdb.com/title/tt0375679/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71E9pZYjdML._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Green Mile",
    link: "https://www.imdb.com/title/tt0120689/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71GZjecm3DL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Help",
    link: "https://www.imdb.com/title/tt1454029/",
    imageUrl:
      "https://m.media-amazon.com/images/I/813Z2CTIF9L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Pianist",
    link: "https://www.imdb.com/title/tt0253474/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71pArK4WTWL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Hacksaw Ridge",
    link: "https://www.imdb.com/title/tt2119532/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91XQnW6u40L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Revenant",
    link: "https://www.imdb.com/title/tt1663202/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91ISDlbem7L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Imitation Game",
    link: "https://www.imdb.com/title/tt2084970/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81qTPi4XOkL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Great Debaters",
    link: "https://www.imdb.com/title/tt0427309/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71zuDwTPECL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Killing Fields",
    link: "https://www.imdb.com/title/tt0087553/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71bGUBiIDPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "In the Name of the Father",
    link: "https://www.imdb.com/title/tt0107207/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81gBSePdx9L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Philadelphia",
    link: "https://www.imdb.com/title/tt0107818/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71U+hV4oATL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "A Few Good Men",
    link: "https://www.imdb.com/title/tt0104257/",
    imageUrl:
      "https://m.media-amazon.com/images/I/815GOtUvJgL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Gran Torino",
    link: "https://www.imdb.com/title/tt1205489/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71z5TfclAsL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Blind Side",
    link: "https://www.imdb.com/title/tt0878804/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91ip4x3mI2L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Erin Brockovich",
    link: "https://www.imdb.com/title/tt0195685/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81DClZ0ZQsL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "The Constant Gardener",
    link: "https://www.imdb.com/title/tt0387131/",
    imageUrl:
      "https://m.media-amazon.com/images/I/819mEtxFVVL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Dallas Buyers Club",
    link: "https://www.imdb.com/title/tt0790636/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81hwpaOVmmL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Blood Diamond",
    link: "https://www.imdb.com/title/tt0450259/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91NDuXkXHDL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Black Mass",
    link: "https://www.imdb.com/title/tt1355683/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71o7WXOGb+L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Room",
    link: "https://www.imdb.com/title/tt3170832/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81vXJby-s4L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Mandela: Long Walk to Freedom",
    link: "https://www.imdb.com/title/tt2304771/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81cDPjgn1PL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Detroit",
    link: "https://www.imdb.com/title/tt5390504/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91vIJeqwQfL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Sicario",
    link: "https://www.imdb.com/title/tt3397884/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91-FrwFxnoL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Argo",
    link: "https://www.imdb.com/title/tt1024648/",
    imageUrl:
      "https://m.media-amazon.com/images/I/91-EviB83KL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Spotlight",
    link: "https://www.imdb.com/title/tt1895587/",
    imageUrl: "https://m.media-amazon.com/images/I/81FQRdN+D5L._AC_SY879_.jpg",
  },
  {
    category: "anger",
    title: "Mystic River",
    link: "https://www.imdb.com/title/tt0327056/",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Gt297iF-L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    category: "anger",
    title: "Changeling",
    link: "https://www.imdb.com/title/tt0824747/",
    imageUrl:
      "https://m.media-amazon.com/images/I/71H6BqaWEtL._AC_UY327_FMwebp_QL65_.jpg",
  },
];

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Movie = require("../models/movie");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

const seedDB = async function () {
  try {
    // Insert the music data
    await Movie.insertMany(movieData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
