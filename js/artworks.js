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
    title: "Hot, Hot Morning Coffee",
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
    title: "Black and White Oil Painting Girl",
    medium: "Oil on Canvas",
    size: "12 × 16 in",
    year: "2025",
    category: "Portrait",
    image: "images/girlportrait.jpeg",
    placeholderColor: "#5B5346",
    description: "Oil Painting based off a photo.",
    forSale: true,
    status: "available",
    price: "$50"
  },
  {
    id: "aw-08",
    title: "Study of Woman in Oil",
    medium: "Oil on Canvas",
    size: "12 × 10 in",
    year: "2025",
    category: "Portrait",
    image: "images/portraitwithearring.jpeg",
    placeholderColor: "#C4A25C",
    description: "Live painting of woman with Earring in Oil",
    forSale: true,
    status: "available",
    price: "$75"
  },
  {
    id: "aw-09",
    title: "Self Portrait 2026",
    medium: "Oil on canvas",
    size: "12 x 16 in",
    year: "2025",
    category: "Portrait",
    image: "images/selfportrait.jpeg",
    placeholderColor: "#6E7A5E",
    description: "Self Portrait in Oil",
    forSale: false,
    status: "not-for-sale",
    price: null
  },
  {
    id: "aw-10",
    title: "Study of Woman in Hat",
    medium: "Oil on canvas",
    size: "12 × 16 in",
    year: "2025",
    category: "Portrait",
    image: "images/womanwithhat.jpeg",
    placeholderColor: "#8C8577",
    description: "Live study of a Woman in a hat in Oil.",
    forSale: true,
    status: "available",
    price: "$75"
  },
  {
    id: "aw-11",
    title: "Study of Woman in Color",
    medium: "Oil on Canvas",
    size: "12 × 16 in",
    year: "2025",
    category: "Portrait",
    image: "images/womanwithbun.jpeg",
    placeholderColor: "#5B5346",
    description: "Live study of a Woman while experimenting with color",
    forSale: true,
    status: "available",
    price: "$75"
  },
  {
    id: "aw-12",
    title: "Live Figure Painting",
    medium: "Oil on Canvas",
    size: "24 x 36 in",
    year: "2025",
    category: "Portrait",
    image: "images/figurepainting.jpeg",
    placeholderColor: "#C4A25C",
    description: "Live figure painting study of a man with light",
    forSale: true,
    status: "available",
    price: "$200"
  }
];