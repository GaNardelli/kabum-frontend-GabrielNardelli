"use strict";

function httpGet(theUrl) {
  let request = new XMLHttpRequest();
  request.open("GET", theUrl, false); // false for synchronous request
  request.send(null);
  return request.responseText;
}

function criaClones() {
  // pegando os produtos
  let url = "https://run.mocky.io/v3/3b64b253-0b28-47b8-8c0d-20f85289c8f8";

  const itemsListText = httpGet(url);
  const { products: products } = JSON.parse(itemsListText);
  // selecionando as div pais
  let imgBox = document.querySelector(
    ".products-display-carousel__inner-box-img"
  );
  let descBox = document.querySelector(
    ".products-display-carousel__inner-box-desc"
  );
  let priceBox = document.querySelector(
    ".products-display-carousel__inner-box-price"
  );

  let originalDiv = document.querySelector(".display-carousel");

  // criando os elementos da caixa
  let fabricante = document.createElement("p");
  let nameProduct = document.createElement("p");
  let imgElement = document.createElement("img");
  let oldPrice = document.createElement("p");
  let newPrice = document.createElement("h2");

  fabricante.classList.add("fabricante-desc");
  nameProduct.classList.add("label-name-product");
  oldPrice.classList.add("old-price");
  newPrice.classList.add("new-price");

  // styling (adicionar uma classe especifica depois)
  imgBox.appendChild(imgElement).style.width = "212px";
  imgBox.appendChild(imgElement).style.height = "106px";
  descBox.style.display = "inline";

  oldPrice.style.color = "rgba(127, 133, 141, 1)";
  imgBox.classList.add("carousel-img");
  // Para multiplos produtos
  imgBox.appendChild(imgElement).src = products[0]["source"];
  descBox.appendChild(fabricante).textContent = "Fabricante";
  descBox.appendChild(nameProduct).textContent = products[0]["name"];
  priceBox.appendChild(oldPrice).textContent = products[0]["old_price"];
  priceBox.appendChild(newPrice).textContent = products[0]["promotion_price"];

  products.forEach((product, index) => {
    if (index < 1) return;

    let clone = originalDiv.cloneNode(true);

    document
      .querySelector(".products-display-carousel__box")
      .appendChild(clone);
  });

  return products;
}

function alteraClones() {
  const products = criaClones();
  const produtosCarousel = document.querySelectorAll(".display-carousel");

  let star = document.createElement("img");
  star.classList.add("rate-star");

  produtosCarousel.forEach((produto, index) => {
    let rate = products[index]["rate"];
    produto.querySelector(".carousel-img").querySelector("img").src =
      products[index]["source"];
    produto.querySelector(".label-name-product").textContent =
      products[index]["name"];
    produto.querySelector(".old-price").textContent =
      products[index]["old_price"];
    produto.querySelector(".new-price").textContent =
      products[index]["promotion_price"];

    produto.querySelector(".rate-indicator").textContent = rate;

    produto.style.order = index;

    const [fill, half] = String(rate).split(".");
    for (let i = 0; i < fill; i++) {
      produto.querySelector(`.star-${Number(i) + 1}`).src =
        "assets/img/stars/StarFill.svg";
    }
    if (Number(half) === 5) {
      produto.querySelector(`.star-${Number(fill) + 1}`).src =
        "assets/img/stars/StarHalf.svg";
    }
  });
}

alteraClones();

// fazendo rodar o carrosel
const slides = document.querySelectorAll(".display-carousel");
const leftArrow = document.querySelector(".carousel-item__arrow.left");
const rightArrow = document.querySelector(".carousel-item__arrow.right");

rightArrow.addEventListener("click", (e) => {
  e.preventDefault();
  slides.forEach((slide) => {
    let order = Number(slide.style.order);
    order += 1;

    if (order === slides.length) {
      order = 0;
    }
    slide.style.order = order;
  });
});

leftArrow.addEventListener("click", (e) => {
  e.preventDefault();
  slides.forEach((slide) => {
    let order = Number(slide.style.order);
    order -= 1;
    if (order < 0) {
      order = slides.length - 1;
    }
    slide.style.order = order;
  });
});
