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
    category: "Painting",
    image: "images/mango.png",
    placeholderColor: "#C9B79C",
    description: "A study of mangos, tamarind, and light reflecting on glasses.",
    forSale: true,
    status: "available",
    price: "$125"
  },
  {
    id: "aw-02",
    title: "Kitchen Table, Sunday",
    medium: "Gouache on paper",
    size: "11 × 14 in",
    year: "2025",
    category: "Painting",
    image: null,
    placeholderColor: "#B98A6F",
    description: "Part of an ongoing series of small domestic interiors, made quickly and from memory.",
    forSale: true,
    status: "sold",
    price: "$220"
  },
  {
    id: "aw-03",
    title: "Study for a Larger Work I",
    medium: "Charcoal on paper",
    size: "9 × 12 in",
    year: "2025",
    category: "Drawing",
    image: null,
    placeholderColor: "#8C8577",
    description: "A preparatory drawing exploring composition before beginning the full painting.",
    forSale: true,
    status: "available",
    price: "$95"
  },
  {
    id: "aw-04",
    title: "Two Chairs",
    medium: "Ink and wash",
    size: "8 × 10 in",
    year: "2024",
    category: "Drawing",
    image: null,
    placeholderColor: "#9C8B6E",
    description: "Quick ink studies made in a single afternoon, working directly and without correction.",
    forSale: false,
    status: "not-for-sale",
    price: null
  },
  {
    id: "aw-05",
    title: "Harbor Light",
    medium: "Oil on panel",
    size: "16 × 20 in",
    year: "2024",
    category: "Painting",
    image: null,
    placeholderColor: "#A8785A",
    description: "Painted on location over two mornings, chasing the same hour of light each day.",
    forSale: true,
    status: "available",
    price: "$450"
  },
  {
    id: "aw-06",
    title: "Portrait of E.",
    medium: "Oil on linen",
    size: "18 × 24 in",
    year: "2023",
    category: "Portrait",
    image: null,
    placeholderColor: "#B4A088",
    description: "A commissioned portrait, included here with the sitter's permission.",
    forSale: false,
    status: "not-for-sale",
    price: null
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
