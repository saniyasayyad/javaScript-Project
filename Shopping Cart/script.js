document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name:"Product 1", price: 29.99},
        {id: 2, name:"Product 2", price: 34.65},
        {id: 3, name:"Product 3", price: 259.99}
    ];

    const cart = [];

    const productList = document.getElementById("product-list");
    const CardItems = document.getElementById("cart-item");
    const EmptyCartMsg = document.getElementById("empty-cart");
    const CardTotalMsg = document.getElementById("cart-total");
    const totalPriceDis = document.getElementById("total-price");
    const CheckOutBtn = document.getElementById("checkout-button");

    // Create product cards
    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Add to cart handler
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    // Add product to cart and update UI
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    // Render cart items and total
    function renderCart() {
        CardItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            EmptyCartMsg.classList.add('hidden');
            CardTotalMsg.classList.remove('hidden');

            cart.forEach((item) => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                CardItems.appendChild(itemDiv);

                totalPrice += item.price;
            });

            totalPriceDis.textContent = `Total: $${totalPrice.toFixed(2)}`;
        } else {
            EmptyCartMsg.classList.remove("hidden");
            CardTotalMsg.classList.add("hidden");
            totalPriceDis.textContent = `Total: $0.00`;
        }
    }

    // Checkout functionality
    CheckOutBtn.addEventListener('click', () => {
        cart.length = 0;
        alert("Checkout Successfully");
        renderCart();
    });

    renderCart(); // initial render
});
