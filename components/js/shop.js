function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart-items");
  let total = 0;

  if (!cartDiv) return;

  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

loadCart();