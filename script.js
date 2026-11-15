
// MAISON NYXELLE - WEBSITE INTERACTIONS

let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " has been added to your bag!");
}

// UPDATE SHOPPING BAG

function updateCart() {
    const count = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    document.getElementById("cart-count").textContent = count;

    const container = document.getElementById("cart-items");

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your bag is empty.</p>";
    } else {
        container.innerHTML = "";

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            container.innerHTML += `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p>${item.price} DH</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button onclick="removeItem(${index})">
                        REMOVE
                    </button>
                </div>
            `;
        });
    }

    document.getElementById("total").textContent =
        total.toLocaleString("fr-FR");
}

// REMOVE PRODUCT

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// OPEN AND CLOSE CART

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

// FILTER PRODUCTS

function filterProducts(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// NEWSLETTER

function subscribe(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email) {
        document.getElementById("message").textContent =
            "Thank you for joining the NYXELLE world!";

        document.getElementById("email").value = "";
    }
}

// CHECKOUT DEMONSTRATION

function checkout() {
    if (cart.length === 0) {
        alert("Your shopping bag is empty.");
        return;
    }

    alert(
        "Thank you for choosing MAISON NYXELLE! " +
        "This is a fictional checkout. No payment was made."
    );
}
