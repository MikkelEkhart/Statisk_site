const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("hej", id);

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const produktside = document.querySelector(".produktside");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  produktside.innerHTML = `
       <div class="foto">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="">
        </div>
        <div class="beskrivelse">
            <h1>${data.productdisplayname}</h1>
            <h2>${data.articletype}</h2>
            <p>${data.price} DKK</p>
            <p>Lagerstatus: ${data.soldout}</p>
            <button class="add-to-basket">Læg i kurv</button>
        </div>
  `;
}

getData();
