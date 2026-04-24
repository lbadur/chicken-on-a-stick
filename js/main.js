/* ============================================================
   UP GROWTH — main.js
   Renders category bar + business grid on index.html
   ============================================================ */

document.getElementById("year").textContent = new Date().getFullYear();

let activeCategory = "all";

// ── Build Category Bar ──────────────────────────────────────
function buildCategoryBar() {
  const bar = document.getElementById("categoryBar");
  bar.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat.id === activeCategory ? " active" : "");
    btn.innerHTML = `<span>${cat.emoji}</span> ${cat.label}`;
    btn.setAttribute("aria-pressed", cat.id === activeCategory);
    btn.addEventListener("click", () => setCategory(cat.id));
    bar.appendChild(btn);
  });
}

// ── Set Active Category ─────────────────────────────────────
function setCategory(id) {
  activeCategory = id;
  buildCategoryBar();
  renderGrid();
}

// ── Render Business Grid ────────────────────────────────────
function renderGrid() {
  const grid     = document.getElementById("businessGrid");
  const emptyMsg = document.getElementById("emptyMsg");

  const filtered = activeCategory === "all"
    ? BUSINESSES
    : BUSINESSES.filter(b => b.categories.includes(activeCategory));

  grid.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;

  filtered.forEach((biz, i) => {
    grid.appendChild(createCard(biz, i));
  });
}

// ── Create a Business Card ──────────────────────────────────
function createCard(biz, index) {
  const card = document.createElement("div");
  card.className = "biz-card";
  card.style.animationDelay = `${index * 0.07}s`;

  // Category pills HTML
  const pillsHtml = biz.categories.map(c => {
    const cat = CATEGORIES.find(x => x.id === c);
    return `<span class="cat-pill">${cat ? cat.emoji + " " + cat.label : c}</span>`;
  }).join("");

  // Photo or fallback
  const photoHtml = biz.photo
    ? `<img src="${biz.photo}" alt="${biz.name}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="card-photo-fallback" style="display:none;background:${biz.photoBg};">${biz.photoEmoji}</div>`
    : `<div class="card-photo-fallback" style="background:${biz.photoBg};">${biz.photoEmoji}</div>`;

  // Action buttons — only render a button if the link is not empty
  const menuBtn = biz.menuLink
    ? `<a href="${biz.menuLink}" target="_blank" rel="noopener" class="btn-action btn-menu"> Product</a>`
    : "";
  const orderBtn = biz.orderLink
    ? `<a href="${biz.orderLink}" target="_blank" rel="noopener" class="btn-action btn-order"> Order</a>`
    : "";

  card.innerHTML = `
    <div class="card-photo">
      ${photoHtml}
      <div class="card-cats">${pillsHtml}</div>
    </div>
    <div class="card-body">
      <h2 class="card-name">${biz.name}</h2>
      <p class="card-tagline">${biz.tagline}</p>
      <div class="card-actions">
        ${menuBtn}
        ${orderBtn}
      </div>
    </div>
  `;

  return card;
}

// ── Init ────────────────────────────────────────────────────
buildCategoryBar();
renderGrid();
