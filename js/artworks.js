/*
  ARTWORK DATA
  ------------
  This is the single place to edit your artwork. Every piece shown in the
  Gallery and Shop tabs is pulled from this file.

  HOW TO ADD YOUR OWN WORK:
  1. Put an image file in the /images folder (e.g. images/my-painting.jpg)
  2. Copy one of the objects below and change the fields.
  3. Set "image" to the path of your file, e.g. "images/my-painting.jpg"
  4. Set "forSale": true to have a piece appear in the Shop tab too.
     Set "status" to "available" or "sold".

  Until you add real images, each card shows a soft placeholder color
  instead — the site works fine like this, nothing will look "broken".
*/

const ARTWORKS = [
  {
    id: "aw-01",
    title: "Summer Mangos",
    medium: "Oil on canvas",
    size: "12 × 16 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/mangos.png",
    placeholderColor: "#C9B79C",
    description: "A study of mangos, tamarind, and light reflecting on glasses. Apart of a light study collection.",
    forSale: false,
    status: "sold",
    price: null
  },
  {
    id: "aw-02",
    title: "Hot Hot Morning Coffee",
    medium: "Oil on canvas",
    size: "8 × 12 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/redcup.png",
    placeholderColor: "#B98A6F",
    description: "Vibrant red coffee cup painting, a personal favorite. Apart of a light study collection. ",
    forSale: true,
    status: "available",
    price: "$175"
  },
  {
    id: "aw-03",
    title: "Flowers on a Winter Morning",
    medium: "Oil on canvas",
    size: "8 × 12 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/flowers.png",
    placeholderColor: "#8C8577",
    description: "Moody yellow flowers on a brisk winter morning. Apart of a light study collection.",
    forSale: true,
    status: "available",
    price: "$95"
  },
  {
    id: "aw-04",
    title: "Apple Anyone?",
    medium: "Oil on canvas",
    size: "8 × 12 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/apple.png",
    placeholderColor: "#8C8577",
    description: "Leafy vibes with an apple on the side. Apart of a light study collection.",
    forSale: true,
    status: "available",
    price: "$75"
  },
  {
    id: "aw-05",
    title: "Don't forget the Silverware Honey",
    medium: "Oil on canvas",
    size: "8 × 12 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/dinnerware.png",
    placeholderColor: "#8C8577",
    description: "Vibrant colors, fun dinnerware. Apart of a light study collection.",
    forSale: true,
    status: "available",
    price: "$150"
  },
  {
    id: "aw-06",
    title: "Golden Hour Mugs",
    medium: "Oil on canvas",
    size: "8 × 12 in",
    year: "2026",
    category: "Light Study Painting",
    image: "images/coffeecups.png",
    placeholderColor: "#8C8577",
    description: "Golden light shining on 2 warm coffee cups. Apart of a light study collection.",
    forSale: true,
    status: "available",
    price: "$125"
  },
  {
    id: "aw-07",
    title: "Nocturne No. 3",
    medium: "Acrylic on canvas",
    size: "20 × 20 in",
    year: "2026",
    category: "Painting",
    image: null,
    placeholderColor: "#5B5346",
    description: "Third in a series working through the same composition at different times of night.",
    forSale: true,
    status: "available",
    price: "$390"
  },
  {
    id: "aw-08",
    title: "Field Notes, No. 12",
    medium: "Watercolor on paper",
    size: "6 × 8 in",
    year: "2026",
    category: "Drawing",
    image: null,
    placeholderColor: "#C4A25C",
    description: "One page from a running sketchbook of small studies made outdoors.",
    forSale: true,
    status: "available",
    price: "$65"
  },
  {
    id: "aw-09",
    title: "Interior with Green Door",
    medium: "Oil on canvas",
    size: "22 × 28 in",
    year: "2023",
    category: "Painting",
    image: null,
    placeholderColor: "#6E7A5E",
    description: "An empty room, painted for the quality of the afternoon light on the far wall.",
    forSale: true,
    status: "sold",
    price: "$520"
  }
];
