const cart = JSON.parse(localStorage.getItem("novaCart")) || [];

function formatPrice(n) {
  return "₱" + n.toLocaleString("en-PH");
}

function renderOrder() {
  const container = document.getElementById("orderItems");
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-cart">No items in cart. <a href="index.html" style="color:var(--accent)">Go back to shop.</a></p>`;
    return;
  }
  let total = 0;
  let html = "";
  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    html += `<div class="order-item"><span>${item.name} × ${item.qty}</span><span>${formatPrice(sub)}</span></div>`;
  });
  html += `<div class="order-total"><span>Total</span><span>${formatPrice(total)}</span></div>`;
  container.innerHTML = html;
}

function setError(inputId, errId, show) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (show) {
    input.classList.add("error");
    err.classList.add("show");
  } else {
    input.classList.remove("error");
    err.classList.remove("show");
  }
}

function formatCardInput(e) {
  let v = e.target.value.replace(/\D/g, "").substring(0, 16);
  e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiryInput(e) {
  let v = e.target.value.replace(/\D/g, "").substring(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
  e.target.value = v;
}

document.getElementById("cardNumber").addEventListener("input", formatCardInput);
document.getElementById("expiry").addEventListener("input", formatExpiryInput);
document.getElementById("cvv").addEventListener("input", e => {
  e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
});

document.getElementById("payBtn").addEventListener("click", () => {
  const name = document.getElementById("fullName").value.trim();
  const address = document.getElementById("address").value.trim();
  const card = document.getElementById("cardNumber").value.replace(/\s/g, "");
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  let valid = true;

  if (!name) { setError("fullName", "nameErr", true); valid = false; } else { setError("fullName", "nameErr", false); }
  if (!address) { setError("address", "addressErr", true); valid = false; } else { setError("address", "addressErr", false); }
  if (!/^\d{16}$/.test(card)) { setError("cardNumber", "cardErr", true); valid = false; } else { setError("cardNumber", "cardErr", false); }
  if (!expiryRegex.test(expiry)) { setError("expiry", "expiryErr", true); valid = false; } else { setError("expiry", "expiryErr", false); }
  if (!/^\d{3}$/.test(cvv)) { setError("cvv", "cvvErr", true); valid = false; } else { setError("cvv", "cvvErr", false); }

  if (valid) {
    localStorage.removeItem("novaCart");
    document.getElementById("payBtn").style.display = "none";
    document.getElementById("successMsg").style.display = "block";
  }
});

renderOrder();