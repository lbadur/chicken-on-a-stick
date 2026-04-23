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
      <a href="index.html" class="btn-action btn-order" style="display:inline-flex;margin-top:24px;text-decoration:none;">← Go Back</a>
    </div>
  `;
} else {
  document.title = `${biz.name} — UP GROWTH`;

  const pillsHtml = biz.categories.map(c => {
    const cat = CATEGORIES.find(x => x.id === c);
    return `<span class="cat-pill">${cat ? cat.emoji + " " + cat.label : c}</span>`;
  }).join("");

  const photoHtml = biz.photo
    ? `<img src="${biz.photo}" alt="${biz.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="detail-photo-fallback" style="display:none;background:${biz.photoBg};">${biz.photoEmoji}</div>`
    : `<div class="detail-photo-fallback" style="background:${biz.photoBg};">${biz.photoEmoji}</div>`;

  // Build action buttons — only show if link provided
  const menuBtn = biz.menuLink
    ? `<a class="btn-action btn-menu detail-action-btn" href="${biz.menuLink}" target="_blank" rel="noopener noreferrer">
         📋 View Menu
       </a>`
    : "";
  const orderBtn = biz.orderLink
    ? `<a class="btn-action btn-order detail-action-btn" href="${biz.orderLink}" target="_blank" rel="noopener noreferrer">
         🛒 Order Now
       </a>`
    : "";

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
        <div class="detail-actions">
          ${menuBtn}
          ${orderBtn}
        </div>
        <p class="btn-order-note">Links open in a new tab</p>
      </div>
    </div>
  `;
}
