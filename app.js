/**
 * VYLEN — Clean, Lightweight Affiliate Store Engine
 * Resilient for local server, file://, and GitHub Pages (/VYLEN/) subdirectory hosting
 */

// Helper to reliably get products (via global array or fallback json fetch)
async function fetchProductsData() {
  if (typeof window !== 'undefined' && window.VYLEN_PRODUCTS && Array.isArray(window.VYLEN_PRODUCTS) && window.VYLEN_PRODUCTS.length > 0) {
    return window.VYLEN_PRODUCTS;
  }
  if (typeof VYLEN_PRODUCTS !== 'undefined' && Array.isArray(VYLEN_PRODUCTS) && VYLEN_PRODUCTS.length > 0) {
    return VYLEN_PRODUCTS;
  }
  
  // Fallback: try fetching relative products.json
  const pathsToTry = ['./products.json', 'products.json', './data/products.json', 'data/products.json'];
  for (const path of pathsToTry) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          window.VYLEN_PRODUCTS = data;
          return data;
        }
      }
    } catch (e) {
      // continue to next path
    }
  }
  return [];
}

document.addEventListener("DOMContentLoaded", async () => {
  // Mobile Nav Toggle
  const navToggle = document.getElementById("mobile-nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Load products data
  const products = await fetchProductsData();

  // Page Initializers
  if (document.getElementById("featured-products-grid")) {
    initHomePage(products);
  }

  if (document.getElementById("shop-products-grid")) {
    initShopPage(products);
  }

  if (document.getElementById("pdp-wrapper")) {
    initProductDetailPage(products);
  }
});

/* ==========================================================================
   Helper: Generate Product Card HTML
   ========================================================================== */
function createProductCardHTML(product) {
  return `
    <article class="product-card">
      <div class="product-card-img">
        <a href="./product.html?id=${encodeURIComponent(product.id)}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </a>
      </div>
      <div class="product-card-body">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title">
          <a href="./product.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        </h3>
        <div class="product-price">${product.formattedPrice || '$' + product.price}</div>
        <div class="product-card-actions">
          <a href="./product.html?id=${encodeURIComponent(product.id)}" class="btn-card-view">Details</a>
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-card-buy">Shop Now</a>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   Home Page: Render Featured Products
   ========================================================================== */
function initHomePage(products) {
  const container = document.getElementById("featured-products-grid");
  if (!container || !products || products.length === 0) return;

  // Render the first 4 items as featured
  const featured = products.slice(0, 4);
  container.innerHTML = featured.map(p => createProductCardHTML(p)).join("");
}

/* ==========================================================================
   Shop Page: Render All Products with Category Filters
   ========================================================================== */
function initShopPage(products) {
  const container = document.getElementById("shop-products-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!container || !products || products.length === 0) return;

  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";

  // Set active button
  filterBtns.forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat && cat.toLowerCase() === activeCategory.toLowerCase()) {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      renderList();
    });
  });

  function renderList() {
    let list = [...products];
    if (activeCategory !== "all") {
      list = list.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (list.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No products found in this category.</div>`;
      return;
    }

    container.innerHTML = list.map(p => createProductCardHTML(p)).join("");
  }

  renderList();
}

/* ==========================================================================
   Product Detail Page: Dynamic Product View
   ========================================================================== */
function initProductDetailPage(products) {
  const container = document.getElementById("pdp-wrapper");
  if (!container || !products || products.length === 0) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Lookup the exact product
  let product = products.find(p => p.id === productId);

  if (!product) {
    container.innerHTML = `
      <div style="text-align: center; padding: 80px 20px;">
        <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 12px;">Product Not Found</h2>
        <p style="color: var(--text-muted); margin-bottom: 24px;">The product you are looking for is unavailable.</p>
        <a href="./products.html" class="btn-solid">Back to Shop</a>
      </div>
    `;
    return;
  }

  // Set document title
  document.title = `${product.name} | VYLEN`;

  // Breadcrumb
  const crumbEl = document.getElementById("pdp-crumb-name");
  if (crumbEl) crumbEl.textContent = product.name;

  // Main Image
  const mainImg = document.getElementById("pdp-main-image");
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }

  // Thumbnails Gallery
  const thumbsContainer = document.getElementById("pdp-thumbnails");
  if (thumbsContainer && product.gallery && product.gallery.length > 0) {
    thumbsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
      <div class="pdp-thumb ${idx === 0 ? 'active' : ''}" onclick="selectThumb('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${product.name} view ${idx + 1}" />
      </div>
    `).join("");
  }

  // Brand & Title
  const brandEl = document.getElementById("pdp-brand");
  const titleEl = document.getElementById("pdp-title");
  if (brandEl) brandEl.textContent = product.brand;
  if (titleEl) titleEl.textContent = product.fullName || product.name;

  // Price
  const priceEl = document.getElementById("pdp-price");
  if (priceEl) priceEl.textContent = product.formattedPrice || '$' + product.price;

  // Description
  const descEl = document.getElementById("pdp-desc");
  if (descEl) descEl.textContent = product.description;

  // Affiliate Button
  const shopBtn = document.getElementById("pdp-shop-btn");
  if (shopBtn) {
    shopBtn.href = product.affiliateUrl;
    shopBtn.target = "_blank";
    shopBtn.rel = "noopener sponsored";
  }

  // Features List
  const featuresList = document.getElementById("pdp-features");
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(feat => `
      <li class="pdp-feature-item">
        <span>✓</span>
        <span>${feat}</span>
      </li>
    `).join("");
  }
}

function selectThumb(src, element) {
  const mainImg = document.getElementById("pdp-main-image");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".pdp-thumb").forEach(t => t.classList.remove("active"));
  if (element) element.classList.add("active");
}
