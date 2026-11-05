let products = [];
function createProduct(name, price, category, stock) {
    return {
        id: Date.now(),
        name,
        price: Number(price),
        category,
        stock: Number(stock),
        tax: 0.18,
        getPriceWithTax() {
            return this.price * (1 + this.tax);
        },
        isAvailable() {
            return this.stock > 0;
        },
        toHTML() {
            const available = this.isAvailable();
            const priceWithTax = this.getPriceWithTax();
            return `
            <div class="card ${available ? 'in-stock' : 'out-stock'}">
                <h3>${this.name}</h3>
                <p>Price: ₹${this.price}</p>
                <p>With GST: ₹${priceWithTax.toFixed(2)}</p>
                <p>Category: ${this.category}</p>
                <p class="${available ? 'badge-green' : 'badge-red'}">
                    ${available ? 'In Stock' : 'Out of Stock'}
                </p>
                <button onclick="showDetails(${this.id})">Details</button>
                <button onclick="deleteProduct(${this.id})">Delete</button>
            </div>
            `;
        }
    };
}
function addProduct() {
    const { value: name } = document.getElementById("name");
    const { value: price } = document.getElementById("price");
    const { value: category } = document.getElementById("category");
    const { value: stock } = document.getElementById("stock");
    if (price <= 0 || stock < 0) return;
    products.push(createProduct(name, price, category, stock));
    render();
}
function render(list = products) {
    document.getElementById("products").innerHTML =
        list.map(p => p.toHTML()).join("");
}
function sortHighToLow() {
    products.sort((a, b) => b.price - a.price);
    render();
}
function sortLowToHigh() {
    products.sort((a, b) => a.price - b.price);
    render();
}
function filterStock() {
    const filtered = products.filter(p => p.stock > 0);
    render(filtered);
}
function showAll() {
    render(products);
}
function clearAll() {
    products = [];
    render();
}
function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        render();
    }
}
function showDetails(id) {
    const p = products.find(p => p.id === id);
    let details = "";
    Object.entries(p).forEach(([key, value]) => {
        if (p.hasOwnProperty(key) && typeof value !== "function") {
            details += key + ": " + value + "\n";
        }
    });
    alert(details);
}