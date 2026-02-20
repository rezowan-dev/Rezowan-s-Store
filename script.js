let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
    cart.push({ name: name, price: price, img: img });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}