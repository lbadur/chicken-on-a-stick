/* ============================================================
   UP GROWTH — detail.js
   Renders the full business detail view on detail.html
   ============================================================ */

document.getElementById("year").textContent = new Date().getFullYear();

// ── Read business ID from URL ───────────────────────────────
const params = new URLSearchParams(window.location.search);
const bizId  = params.get("id");

const biz = BUSINESSES.find(b => b.id === bizId);

// ── Render ──────────────────────────────────────────────────
const container = document.getElementById("detailContent");

if (!biz) {
  container.innerHTML = `
    <div style="text-align:center; padding:80px 0;">
      <p style="font-size:3rem;">🤔</p>
      <h2 style="font-family:var(--font-head);font-size:2rem;margin:16px 0 8px;">Business not found</h2>
      <p style="color:var(--muted);">The business you're looking for doesn't exist.</p>
      <a href="index.html" class="btn-view" style="display:inline-flex;margin-top:24px;text-decoration:none;">← Go Back</a>
    </div>
  `;
} else {
  // Update page title
  document.title = `${biz.name} — UP GROWTH`;

  // Category pills
  const pillsHtml = biz.categories.map(c => {
    const cat = CATEGORIES.find(x => x.id === c);
    return `<span class="cat-pill">${cat ? cat.emoji + " " + cat.label : c}</span>`;
  }).join("");

  // Photo or fallback
  const photoHtml = biz.photo
    ? `<img src="${biz.photo}" alt="${biz.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="detail-photo-fallback" style="display:none;background:${biz.photoBg};">${biz.photoEmoji}</div>`
    : `<div class="detail-photo-fallback" style="background:${biz.photoBg};">${biz.photoEmoji}</div>`;

  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-photo">
        ${photoHtml}
        <div class="detail-cats">${pillsHtml}</div>
      </div>
      <div class="detail-content">
        <p class="detail-eyebrow">✦ UP GROWTH Student Business</p>
        <h1 class="detail-name">${biz.name}</h1>
        <p class="detail-tagline">${biz.tagline}</p>
        <div class="detail-divider"></div>
        <p class="detail-desc">${biz.description}</p>
        <a class="btn-order" href="${biz.formLink}" target="_blank" rel="noopener noreferrer">
          <span class="order-icon">📋</span>
          Order Now via Google Form
        </a>
        <p class="btn-order-note">Opens in a new tab · Powered by Google Forms</p>
      </div>
    </div>
  `;
}
