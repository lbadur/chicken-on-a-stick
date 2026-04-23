// ============================================================
//  UP GROWTH — Business Data Config
//  Add, edit, or remove businesses here.
//  categories: array of "food" | "drink" | "accessories"
// ============================================================

const BUSINESSES = [
  {
    id: "sips-n-smiles",
    name: "Sips & Smiles",
    tagline: "Handcrafted drinks made with love 🧋",
    categories: ["drink"],
    photo: "assets/images/sips.jpg",          // replace with real photo
    photoBg: "#FFD166",                        // fallback bg colour
    photoEmoji: "🧋",                          // shown if photo missing
    description:
      "Sips & Smiles was founded by Anisa, a 11th-grader who has been passionate about mixology since middle school. We craft fresh, handmade boba teas, fruit infusions, and creamy matcha lattes right here on campus. Every cup is made to order — no premix, all love. Perfect for beating that afternoon slump between classes!",
    formLink: "https://forms.gle/example1",
    accentColor: "#E63946",
  },
  {
    id: "crunch-corner",
    name: "Crunch Corner",
    tagline: "Homemade snacks that hit different 🍱",
    categories: ["food", "accessories"],
    photo: "assets/images/crunch.jpg",
    photoBg: "#FCA311",
    photoEmoji: "🍱",
    description:
      "Crunch Corner started as Rizky's weekend cooking hobby and grew into the most talked-about food stall at school. From crispy onion rings and mini spring rolls to Japanese-style onigiri, every item is prepped fresh each morning. We also sell cute reusable snack boxes and lunch bags — order yours with your meal!",
    formLink: "https://forms.gle/example2",
    accentColor: "#E63946",
  },
  {
    id: "thread-theory",
    name: "Thread Theory",
    tagline: "Student-designed accessories & merch 🎨",
    categories: ["accessories"],
    photo: "assets/images/thread.jpg",
    photoBg: "#E63946",
    photoEmoji: "🎨",
    description:
      "Thread Theory is a student-run creative brand by Nabila & Dimas from the Arts program. We design and sell hand-painted tote bags, embroidered keychains, custom phone cases, and limited-edition school merch. Every piece is one-of-a-kind. If you want something personalised — a name, a design, a vibe — just let us know in the order form!",
    formLink: "https://forms.gle/example3",
    accentColor: "#E63946",
  },
];

// ============================================================
//  Category Config — add new categories here if needed
// ============================================================
const CATEGORIES = [
  { id: "all",         label: "All",         emoji: "✦" },
  { id: "food",        label: "Food",         emoji: "🍱" },
  { id: "drink",       label: "Drink",        emoji: "🧋" },
  { id: "accessories", label: "Accessories",  emoji: "🎨" },
];
