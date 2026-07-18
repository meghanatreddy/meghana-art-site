/* ==========================================================================
   Config — edit these to personalize the site
   ========================================================================== */
const SITE_CONFIG = {
  artistName: "Meghana Reddy",
  email: "megha.treddy@gmail.com",
  instagram: "https://instagram.com/thisis_meghanacreates"
  // Free form-notification service — see README for the 2-minute setup.
  // Replace YOUR_FORM_ID with the ID Formspree gives you.
  
};

/* ==========================================================================
   Nav toggle (mobile)
   ========================================================================== */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ==========================================================================
   Scroll reveal
   ========================================================================== */
function initReveal() {
  const items = document.querySelectorAll(".reveal, .brush");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

/* ==========================================================================
   Artwork rendering helpers
   ========================================================================== */
function artFillStyle(art) {
  if (art.image) {
    return `background-image: url('${art.image}');`;
  }
  return `background: linear-gradient(155deg, ${art.placeholderColor} 0%, ${shade(art.placeholderColor, -18)} 100%);`;
}

// small helper to darken a hex color for a subtle gradient
function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0x00ff) + percent;
  let b = (num & 0x0000ff) + percent;
  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function badgeMarkup(art) {
  if (!art.forSale) return "";
  if (art.status === "sold") return `<span class="badge sold">Sold</span>`;
  return `<span class="badge available">Available</span>`;
}

function cardMarkup(art, showPrice) {
  return `
    <button class="art-card reveal" data-id="${art.id}" aria-label="View details for ${art.title}">
      <div class="frame">
        <div class="art-fill" style="${artFillStyle(art)}"></div>
        ${badgeMarkup(art)}
      </div>
      <div class="placard">
        <h3>${art.title}</h3>
        <div class="meta">${art.medium} — ${art.size} — ${art.year}</div>
        ${showPrice && art.forSale ? `<div class="price">${art.status === "sold" ? "Sold" : art.price}</div>` : ""}
      </div>
    </button>
  `;
}

/* ==========================================================================
   Lightbox
   ========================================================================== */
function buildLightbox() {
  if (document.querySelector(".lightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <div class="lightbox-art"></div>
      <h3></h3>
      <div class="meta"></div>
      <p class="desc"></p>
      <div class="lb-actions"></div>
    </div>
  `;
  document.body.appendChild(lb);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(art) {
  const lb = document.querySelector(".lightbox");
  lb.querySelector(".lightbox-art").setAttribute("style", artFillStyle(art));
  lb.querySelector("h3").textContent = art.title;
  lb.querySelector(".meta").textContent = `${art.medium} — ${art.size} — ${art.year}`;
  lb.querySelector(".desc").textContent = art.description || "";

  const actions = lb.querySelector(".lb-actions");
  actions.innerHTML = "";
  if (art.forSale && art.status === "available") {
    const subject = encodeURIComponent(`Purchase inquiry: ${art.title}`);
    const body = encodeURIComponent(
      `Hi, I'm interested in buying "${art.title}" (${art.price}). Could you let me know if it's still available?`
    );
    actions.innerHTML = `<a class="btn btn-primary" href="mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}">Inquire to purchase — ${art.price}</a>`;
  } else if (art.forSale && art.status === "sold") {
    actions.innerHTML = `<span class="btn" style="opacity:.6" aria-disabled="true">Sold</span>`;
  }

  lb.classList.add("open");
}

function closeLightbox() {
  document.querySelector(".lightbox")?.classList.remove("open");
}

function wireCardClicks(container, artworks) {
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".art-card");
    if (!card) return;
    const art = artworks.find((a) => a.id === card.dataset.id);
    if (art) openLightbox(art);
  });
}

/* ==========================================================================
   Gallery page
   ========================================================================== */
function initGalleryPage() {
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;
  buildLightbox();

  const categories = ["All", ...new Set(ARTWORKS.map((a) => a.category))];
  const filterBar = document.querySelector("[data-filter-bar]");
  if (filterBar) {
    filterBar.innerHTML = categories
      .map((c, i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`)
      .join("");
  }

  function render(filter) {
    const list = filter && filter !== "All" ? ARTWORKS.filter((a) => a.category === filter) : ARTWORKS;
    grid.innerHTML = list.length
      ? list.map((a) => cardMarkup(a, false)).join("")
      : `<div class="empty-state">No pieces in this category yet — check back soon.</div>`;
    initReveal();
  }

  filterBar?.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filterBar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });

  wireCardClicks(grid, ARTWORKS);
  render("All");
}

/* ==========================================================================
   Shop page
   ========================================================================== */
function initShopPage() {
  const grid = document.querySelector("[data-shop-grid]");
  if (!grid) return;
  buildLightbox();

  const forSale = ARTWORKS.filter((a) => a.forSale);
  grid.innerHTML = forSale.length
    ? forSale.map((a) => cardMarkup(a, true)).join("")
    : `<div class="empty-state">Nothing listed for sale right now — check back soon.</div>`;

  wireCardClicks(grid, forSale);
  initReveal();
}

/* ==========================================================================
   Home page preview grid (first 3 pieces)
   ========================================================================== */
function initHomePreview() {
  const grid = document.querySelector("[data-preview-grid]");
  if (!grid) return;
  buildLightbox();
  const preview = ARTWORKS.slice(0, 3);
  grid.innerHTML = preview.map((a) => cardMarkup(a, false)).join("");
  wireCardClicks(grid, preview);
}

/* ==========================================================================
   Commission form
   ========================================================================== */
function initCommissionForm() {
  const form = document.querySelector("[data-commission-form]");
  if (!form) return;

  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("Name") || "").toString().trim();
    const email = (data.get("Email") || "").toString().trim();
    const type = (data.get("Project type") || "").toString();
    const budget = (data.get("Budget range") || "").toString();
    const size = (data.get("Preferred size") || "").toString().trim();
    const deadline = (data.get("Deadline") || "").toString().trim();
    const details = (data.get("Project details") || "").toString().trim();

    const subject = `Commission request from ${name || "your site"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${type}`,
      `Budget range: ${budget}`,
      `Preferred size: ${size || "Not specified"}`,
      `Deadline: ${deadline || "Flexible"}`,
      "",
      "Project details:",
      details,
      "",
      "(Reference photos: please attach them to this email before sending.)"
    ];
    const body = bodyLines.join("\n");

    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = "Opening your email app with everything filled in — attach any reference photos there, then hit send.";
    status.className = "form-status show ok";

    window.location.href = mailtoLink;
  });
}

/* ==========================================================================
   Contact info fill-in
   ========================================================================== */
function initContactInfo() {
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = SITE_CONFIG.email;
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.email}`;
  });
  document.querySelectorAll("[data-instagram]").forEach((el) => {
    if (el.tagName === "A") el.href = SITE_CONFIG.instagram;
  });
  document.querySelectorAll("[data-artist-name]").forEach((el) => {
    el.textContent = SITE_CONFIG.artistName;
  });
}

/* ==========================================================================
   Footer year
   ========================================================================== */
function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initContactInfo();
  initFooterYear();
  initHomePreview();
  initGalleryPage();
  initShopPage();
  initCommissionForm();
  initReveal();
});
