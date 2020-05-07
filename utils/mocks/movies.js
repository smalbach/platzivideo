const moviesMock = [
  {
    id: 1,
    title: "Marilena de la P7",
    year: 1995,
    cover: "http://dummyimage.com/673x265.bmp/cc0000/ffffff",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    duration: 1925,
    contentRating: "PG-13",
    source: "http://mapy.cz/lorem/quisque/ut.jpg",
    tags: ["Comedy|Mystery", "Drama|Horror|Thriller", "Crime|Thriller"],
  },
  {
    id: 2,
    title: "Von Richthofen and Brown",
    year: 1993,
    cover: "http://dummyimage.com/715x541.jpg/5fa2dd/ffffff",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    duration: 2392,
    contentRating: "PG",
    source: "http://tamu.edu/ac.png",
    tags: ["Documentary", "Drama", "Comedy|Romance", "Drama|War"],
  },
  {
    id: 3,
    title: "Bertsolari",
    year: 1995,
    cover: "http://dummyimage.com/556x472.jpg/5fa2dd/ffffff",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    duration: 2512,
    contentRating: "G",
    source: "https://psu.edu/dui/maecenas/tristique.xml",
    tags: ["Drama", "Comedy|Romance", "Crime|Drama|Film-Noir"],
  },
  {
    id: 4,
    title: "Bernie",
    year: 1998,
    cover: "http://dummyimage.com/640x517.bmp/5fa2dd/ffffff",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    duration: 2087,
    contentRating: "NC",
    source: "https://pbs.org/porttitor/lorem/id/ligula.aspx",
    tags: [
      "Drama",
      "Drama|Romance",
      "Action|Comedy",
      "Drama",
      "Crime|Drama|Romance",
    ],
  },
  {
    id: 5,
    title: "Simple-Minded Murder, The (Enfaldige mördaren, Den)",
    year: 1996,
    cover: "http://dummyimage.com/720x341.png/cc0000/ffffff",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    duration: 2344,
    contentRating: "R",
    source: "http://cloudflare.com/pharetra.jpg",
    tags: [
      "Crime|Mystery|Romance|Thriller",
      "Comedy|Drama",
      "Comedy",
      "Drama|Romance|War|Western",
      "Crime|Drama|Thriller",
    ],
  },
  {
    id: 6,
    title: "Blood Shack",
    year: 1994,
    cover: "http://dummyimage.com/424x382.bmp/dddddd/000000",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    duration: 2342,
    contentRating: "G",
    source: "https://about.me/dictumst/maecenas/ut/massa/quis/augue/luctus.xml",
    tags: [
      "Comedy|Drama|Musical|Romance",
      "Comedy|Drama",
      "Drama",
      "Documentary",
    ],
  },
  {
    id: 7,
    title: "Very Potter Musical, A",
    year: 2003,
    cover: "http://dummyimage.com/391x271.png/5fa2dd/ffffff",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    duration: 2382,
    contentRating: "R",
    source: "https://prweb.com/at/nibh/in/hac/habitasse/platea/dictumst.json",
    tags: ["Action|Thriller"],
  },
  {
    id: 8,
    title: "Babylon 5: The River of Souls",
    year: 2008,
    cover: "http://dummyimage.com/787x492.png/ff4444/ffffff",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    duration: 2468,
    contentRating: "NC",
    source: "https://time.com/commodo.jpg",
    tags: ["Action|Crime", "Drama|Romance"],
  },
  {
    id: 9,
    title: "Wind That Shakes the Barley, The",
    year: 1996,
    cover: "http://dummyimage.com/413x257.png/dddddd/000000",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    duration: 2564,
    contentRating: "G",
    source: "http://si.edu/ipsum/primis.js",
    tags: ["Adventure|Animation|Children|Comedy"],
  },
  {
    id: 10,
    title: "Art of War III: Retribution, The",
    year: 1998,
    cover: "http://dummyimage.com/605x260.png/ff4444/ffffff",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    duration: 2207,
    contentRating: "PG",
    source:
      "https://merriam-webster.com/volutpat/dui/maecenas/tristique/est.js",
    tags: [
      "Action|Crime|Drama|Mystery|Thriller",
      "Comedy",
      "Documentary",
      "Drama",
      "Drama",
    ],
  },
];

module.exports = {
  moviesMock,
};
