const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listContainer = document.querySelector(".produkter");
// min tilføjede knap
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");

// liste til produkterne
let allProducts = [];

const fetchUrl = myCategory
  ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}`
  : "https://kea-alt-del.dk/t7/api/products";

function getProducts() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((products) => {
      //gemmer alle produkter i allProducts
      allProducts = products;
      showProducts(products);
    });
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
     <div class="produkt">
            <a href="product.html">
                <img class="tshirt" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="billede3">
            </a>
            <h3 class="h3produkter">${product.productdisplayname}</h3>
            <p class="pprodukter">${product.articletype}</p>
            <p class="pprodukter">${product.price}</p>
            <a href="product.html?id=${product.id}" class="knap">Se mere</a>
        </div>
    `;
  });
}

// funktion der sorterer prisen, og listener på click til at sortere
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);

getProducts();
