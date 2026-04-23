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
    tagline: "Handcrafted drinks made with love 🧋",
    categories: ["drink"],
    photo: "assets/images/food.jpg",
    photoBg: "#FFD166",
    photoEmoji: "",
    description:
      "Sips & Smiles was founded by Anisa, a 11th-grader who has been passionate about mixology since middle school. We craft fresh, handmade boba teas, fruit infusions, and creamy matcha lattes right here on campus. Every cup is made to order — no premix, all love. Perfect for beating that afternoon slump between classes!",
    menuLink: "https://forms.gle/example-menu-1",
    orderLink: "https://forms.gle/example-order-1",
    accentColor: "#E63946",
  },
  {
    id: "bisnis 2",
    name: "bisnis 2",
    tagline: "Homemade snacks that hit different 🍱",
    categories: ["food", "accessories"],
    photo: "assets/images/crunch.jpg",
    photoBg: "#FCA311",
    photoEmoji: "🍱",
    description:
      "Crunch Corner started as Rizky's weekend cooking hobby and grew into the most talked-about food stall at school. From crispy onion rings and mini spring rolls to Japanese-style onigiri, every item is prepped fresh each morning. We also sell cute reusable snack boxes and lunch bags — order yours with your meal!",
    menuLink: "https://forms.gle/example-menu-2",
    orderLink: "https://forms.gle/example-order-2",
    accentColor: "#E63946",
  },
  {
    id: "bisnis 3",
    name: "bisnis 3",
    tagline: "Student-designed accessories & merch 🎨",
    categories: ["accessories"],
    photo: "assets/images/thread.jpg",
    photoBg: "#E63946",
    photoEmoji: "🎨",
    description:
      "Thread Theory is a student-run creative brand by Nabila & Dimas from the Arts program. We design and sell hand-painted tote bags, embroidered keychains, custom phone cases, and limited-edition school merch. Every piece is one-of-a-kind. If you want something personalised — a name, a design, a vibe — just let us know in the order form!",
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
