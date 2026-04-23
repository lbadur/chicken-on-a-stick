# UP GROWTH — Student Business Hub

A static website for promoting small businesses run by students.  
Deployable on **GitHub Pages** with zero back-end required.

---

## 📁 File Structure

```
up-growth/
├── index.html          ← Home page (business grid)
├── detail.html         ← Business detail page
├── data/
│   └── businesses.js   ← ✏️  ALL business data lives here
├── css/
│   ├── style.css       ← Global styles
│   └── detail.css      ← Detail page styles
├── js/
│   ├── main.js         ← Home page logic
│   └── detail.js       ← Detail page logic
└── assets/
    └── images/         ← Drop business photos here
```

---

## ✏️ How to Add / Edit Businesses

Open **`data/businesses.js`** and edit the `BUSINESSES` array.

Each business object looks like this:

```js
{
  id: "unique-slug",              // used in the URL — no spaces
  name: "Business Name",
  tagline: "Short catchy description",
  categories: ["food"],           // "food" | "drink" | "accessories" — can be multiple
  photo: "assets/images/pic.jpg", // path to photo (or leave "" for emoji fallback)
  photoBg: "#FFD166",             // background colour shown if photo is missing
  photoEmoji: "🍱",               // emoji shown if photo is missing
  description: "Longer paragraph about the business...",
  formLink: "https://forms.gle/yourlink",
  accentColor: "#E63946",         // reserved for future use
}
```

### Add a new category

Edit the `CATEGORIES` array in the same file:

```js
{ id: "crafts", label: "Crafts", emoji: "🧶" }
```

That's it — the filter bar updates automatically.

---

## 🖼️ Adding Photos

1. Drop the image into `assets/images/`
2. Set `photo: "assets/images/your-photo.jpg"` in the business object
3. If no photo is set, the emoji + background colour is shown automatically

---

## 🚀 Deploy to GitHub Pages

1. Push the entire `up-growth/` folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo>/`

---

## 🎨 Changing Colours

Open `css/style.css` and edit the `:root` variables at the top:

```css
:root {
  --yellow:  #FFD600;
  --red:     #E63946;
  ...
}
```
