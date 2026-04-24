// ============================================================
//  UP GROWTH — Business Data Config
//
//  HOW TO ADD A NEW BUSINESS:
//  1. Copy one of the blocks below and paste it after the last one (before the closing ]);
//  2. Fill in all the fields (see comments for guidance)
//  3. Add your image to assets/images/ and update the "photo" field
//  4. Done! The card will appear on the site automatically.
//
//  FIELDS:
//  id          → unique slug, no spaces (e.g. "my-business")
//  name        → display name shown on card
//  tagline     → short one-liner shown on card
//  categories  → array of "food" | "drink" | "accessories" (can combine)
//  photo       → path to image, e.g. "assets/images/myshop.jpg"
//                leave as "" if you don't have a photo yet
//  photoBg     → fallback background colour when photo is missing
//  photoEmoji  → emoji shown when photo is missing
//  description → longer text shown on the detail page
//  menuLink    → URL to menu (Google Drive, Linktree, etc.) — use "" to hide button
//  orderLink   → URL to order form (Google Forms, etc.)    — use "" to hide button
//  accentColor → colour used on the detail page
// ============================================================

const BUSINESSES = [
  {
    id: "bisnis 1",
    name: "bisnis 1",
    tagline: "details",
    categories: ["drink"],
    photo: "assets/food.jpg",
    photoBg: "#FFD166",
    photoEmoji: "",
    description:
      "",
    menuLink: "https://forms.gle/example-menu-1",
    orderLink: "https://forms.gle/example-order-1",
    accentColor: "#E63946",
  },
  {
    id: "kofi",
    name: "kofi",
    tagline: "details",
    categories: ["food", "accessories"],
    photo: "assets/gifar.jpg",
    photoBg: "#FCA311",
    photoEmoji: "",
    description:
      "",
    menuLink: "https://forms.gle/example-menu-2",
    orderLink: "https://forms.gle/example-order-2",
    accentColor: "#E63946",
  },
  {
    id: "bisnis 3",
    name: "bisnis 3",
    tagline: "details",
    categories: ["accessories"],
    photo: "assets/thread.jpg",
    photoBg: "#E63946",
    photoEmoji: "",
    description:
      "",
    menuLink: "https://forms.gle/example-menu-3",
    orderLink: "https://forms.gle/example-order-3",
    accentColor: "#E63946",
  },

  // ── ADD NEW BUSINESSES BELOW THIS LINE ──────────────────────
  // {
  //   id: "your-business-id",
  //   name: "Your Business Name",
  //   tagline: "Your short tagline here ✨",
  //   categories: ["food"],
  //   photo: "assets/images/yourphoto.jpg",
  //   photoBg: "#AABBCC",
  //   photoEmoji: "🍕",
  //   description: "Tell your story here...",
  //   menuLink: "https://...",
  //   orderLink: "https://...",
  //   accentColor: "#E63946",
  // },
];

// ============================================================
//  Category Config
//  Add a new line here if you create a brand new category.
// ============================================================
const CATEGORIES = [
  { id: "all",         label: "All",         emoji: "" },
  { id: "food",        label: "Food",         emoji: "" },
  { id: "drink",       label: "Drink",        emoji: "" },
  { id: "accessories", label: "Accessories",  emoji: "" },
];
