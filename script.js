const products = [
  { id: 1, name: "Apple MacBook Pro 16 M4 Max", specs: "Apple M4 Max · 64GB RAM · 2TB SSD · 16.2\" Liquid Retina XDR", ram: "64GB", storage: "2TB", price: 189999, img: "images/Apple-MacBook-Pro-16-M4-Max.png" },
  { id: 2, name: "Apple MacBook Air 15 M3", specs: "Apple M3 · 16GB RAM · 512GB SSD · 15.3\" Liquid Retina", ram: "16GB", storage: "512GB", price: 84999, img: "images/Apple-MacBook-Air-15-M3.png" },
  { id: 3, name: "Dell XPS 15 9530 OLED", specs: "Intel Core Ultra 9 · 32GB RAM · 1TB SSD · 15.6\" OLED Touch", ram: "32GB", storage: "1TB", price: 129999, img: "images/Dell-XPS-15-9530-OLED.png" },
  { id: 4, name: "Dell XPS 13 Plus 9340", specs: "Intel Core Ultra 7 · 16GB RAM · 512GB SSD · 13.4\" OLED", ram: "16GB", storage: "512GB", price: 94999, img: "images/4.png" },
  { id: 5, name: "Lenovo ThinkPad X1 Carbon Gen 12", specs: "Intel Core Ultra 7 · 32GB RAM · 1TB SSD · 14\" IPS", ram: "32GB", storage: "1TB", price: 119999, img: "images/5.png" },
  { id: 6, name: "Lenovo Legion Pro 9i Gen 9", specs: "Intel Core i9-14900HX · 64GB RAM · 2TB SSD · 16\" Mini LED 240Hz", ram: "64GB", storage: "2TB", price: 174999, img: "images/6.png" },
  { id: 7, name: "ASUS ROG Zephyrus G16 2026", specs: "AMD Ryzen AI 9 HX · 32GB RAM · 1TB SSD · 16\" QHD+ 240Hz", ram: "32GB", storage: "1TB", price: 139999, img: "images/7.png" },
  { id: 8, name: "ASUS ProArt Studiobook Pro 16", specs: "Intel Core Ultra 9 · 64GB RAM · 2TB SSD · 16\" OLED Touch", ram: "64GB", storage: "2TB", price: 189999, img: "images/8.png" },
  { id: 9, name: "HP Spectre x360 14 2026", specs: "Intel Core Ultra 7 · 16GB RAM · 1TB SSD · 14\" OLED Touch 2-in-1", ram: "16GB", storage: "1TB", price: 99999, img: "images/9.png" },
  { id: 10, name: "HP OMEN 16 Max", specs: "AMD Ryzen 9 HX · 32GB RAM · 1TB SSD · 16.1\" QHD 240Hz", ram: "32GB", storage: "1TB", price: 119999, img: "images/10.png" },
  { id: 11, name: "Microsoft Surface Laptop 6", specs: "Intel Core Ultra 7 · 16GB RAM · 512GB SSD · 13.5\" PixelSense", ram: "16GB", storage: "512GB", price: 89999, img: "images/11.png" },
  { id: 12, name: "Razer Blade 18 2026", specs: "Intel Core i9-14900HX · 64GB RAM · 2TB SSD · 18\" QHD+ 300Hz", ram: "64GB", storage: "2TB", price: 219999, img: "images/12.png" },
  { id: 13, name: "Razer Blade 14 2026", specs: "AMD Ryzen 9 HX · 16GB RAM · 1TB SSD · 14\" QHD+ 165Hz", ram: "16GB", storage: "1TB", price: 129999, img: "images/13.png" },
  { id: 14, name: "MSI Titan GT77 HX 2026", specs: "Intel Core i9-14900HX · 64GB RAM · 4TB SSD · 17.3\" UHD 144Hz", ram: "64GB", storage: "2TB", price: 249999, img: "images/14.png" },
  { id: 15, name: "Acer Swift X 14 OLED", specs: "Intel Core Ultra 5 · 16GB RAM · 512GB SSD · 14\" OLED", ram: "16GB", storage: "512GB", price: 64999, img: "images/15.png" },
  { id: 16, name: "Acer Predator Helios Neo 16", specs: "AMD Ryzen 9 HX · 32GB RAM · 1TB SSD · 16\" QHD IPS 165Hz", ram: "32GB", storage: "1TB", price: 109999, img: "images/16.png" },
  { id: 17, name: "Samsung Galaxy Book4 Ultra", specs: "Intel Core Ultra 9 · 32GB RAM · 1TB SSD · 16\" Dynamic AMOLED", ram: "32GB", storage: "1TB", price: 134999, img: "images/17.png" },
  { id: 18, name: "Samsung Galaxy Book4 Pro 360", specs: "Intel Core Ultra 7 · 16GB RAM · 512GB SSD · 16\" AMOLED Touch", ram: "16GB", storage: "512GB", price: 109999, img: "images/18.png" },
  { id: 19, name: "LG Gram 17 2026", specs: "Intel Core Ultra 7 · 32GB RAM · 1TB SSD · 17\" IPS Anti-Glare", ram: "32GB", storage: "1TB", price: 104999, img: "images/19.png" },
  { id: 20, name: "LG Gram Pro 16 OLED", specs: "Intel Core Ultra 9 · 32GB RAM · 2TB SSD · 16\" OLED", ram: "32GB", storage: "2TB", price: 139999, img: "images/20.png" },
  { id: 21, name: "Huawei MateBook X Pro 2026", specs: "Intel Core Ultra 9 · 32GB RAM · 1TB SSD · 14.2\" OLED Touch", ram: "32GB", storage: "1TB", price: 99999, img: "images/21.png" },
  { id: 22, name: "Xiaomi Book Pro 14 2026", specs: "Intel Core Ultra 7 · 16GB RAM · 1TB SSD · 14.5\" OLED 120Hz", ram: "16GB", storage: "1TB", price: 74999, img: "images/22.png" },
  { id: 23, name: "ASUS Zenbook 14 OLED 2026", specs: "Intel Core Ultra 5 · 16GB RAM · 512GB SSD · 14\" OLED 120Hz", ram: "16GB", storage: "512GB", price: 59999, img: "images/23.png" },
  { id: 24, name: "ASUS Vivobook Pro 16X OLED", specs: "AMD Ryzen AI 9 · 32GB RAM · 1TB SSD · 16\" OLED 120Hz", ram: "32GB", storage: "1TB", price: 89999, img: "images/24.png" },
  { id: 25, name: "Lenovo Yoga 9i Gen 9 2026", specs: "Intel Core Ultra 7 · 16GB RAM · 1TB SSD · 14\" OLED 2-in-1 120Hz", ram: "16GB", storage: "1TB", price: 94999, img: "images/25.png" },
  { id: 26, name: "HP EliteBook 840 G11", specs: "Intel Core Ultra 7 · 32GB RAM · 1TB SSD · 14\" IPS Sure View", ram: "32GB", storage: "1TB", price: 114999, img: "images/26.png" },
  { id: 27, name: "Acer Aspire 5 A515 2026", specs: "AMD Ryzen 7 · 8GB RAM · 256GB SSD · 15.6\" FHD IPS", ram: "8GB", storage: "256GB", price: 34999, img: "images/27.png" },
  { id: 28, name: "Lenovo IdeaPad Slim 5i 2026", specs: "Intel Core Ultra 5 · 8GB RAM · 512GB SSD · 15.6\" OLED", ram: "8GB", storage: "512GB", price: 44999, img: "images/28.png" },
  { id: 29, name: "HP Pavilion 15 2026", specs: "AMD Ryzen 5 · 8GB RAM · 256GB SSD · 15.6\" FHD IPS", ram: "8GB", storage: "256GB", price: 29999, img: "images/29.png" },
  { id: 30, name: "Dell Inspiron 16 Plus 2026", specs: "Intel Core Ultra 7 · 16GB RAM · 512GB SSD · 16\" QHD+ IPS", ram: "16GB", storage: "512GB", price: 69999, img: "images/30.png" }
];

let cart = JSON.parse(localStorage.getItem("novaCart")) || [];

function saveCart() {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}

function formatPrice(n) {
  return "₱" + n.toLocaleString("en-PH");
}

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  grid.innerHTML = "";
  if (list.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" />` : `<svg class="placeholder-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-specs">${p.specs}</div>
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });
}

function filterProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const ram = document.getElementById("ramFilter").value;
  const storage = document.getElementById("storageFilter").value;
  const price = document.getElementById("priceFilter").value;
  let result = products.filter(p => {
    const text = (p.name + " " + p.specs).toLowerCase();
    if (search && !text.includes(search)) return false;
    if (ram && p.ram !== ram) return false;
    if (storage && p.storage !== storage) return false;
    if (price) {
      if (price === "150000+" && p.price <= 150000) return false;
      else if (price !== "150000+") {
        const [min, max] = price.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
    }
    return true;
  });
  renderProducts(result);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart();
  renderCart();
  openCart();
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");
  container.innerHTML = "";
  const totalQty = cart.reduce((a, c) => a + c.qty, 0);
  countEl.textContent = totalQty;
  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    totalEl.textContent = "₱0";
    return;
  }
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${item.id}" data-action="dec">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
        </div>
      </div>
      <button class="remove-item" data-id="${item.id}">✕</button>
    `;
    container.appendChild(el);
  });
  totalEl.textContent = formatPrice(total);
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      const item = cart.find(c => c.id === id);
      if (action === "inc") item.qty++;
      else if (action === "dec") {
        item.qty--;
        if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
      }
      saveCart();
      renderCart();
    });
  });
  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", () => {
      cart = cart.filter(c => c.id !== parseInt(btn.dataset.id));
      saveCart();
      renderCart();
    });
  });
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);

document.getElementById("searchInput").addEventListener("input", filterProducts);
document.getElementById("ramFilter").addEventListener("change", filterProducts);
document.getElementById("storageFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("change", filterProducts);

document.getElementById("clearFilters").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("ramFilter").value = "";
  document.getElementById("storageFilter").value = "";
  document.getElementById("priceFilter").value = "";
  filterProducts();
});

renderProducts(products);
renderCart();