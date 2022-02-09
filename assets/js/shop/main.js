const purchaseButtons = document.querySelectorAll(".btn-comprar");
const iconsCart = document.querySelector(".shop-icons__cart");
iconsCart.style.setProperty("--display-cart", "none");
let i = 0;
purchaseButtons.forEach((btn, index) => {
  let button = purchaseButtons[index];
  button.addEventListener("click", function (event) {
    let btnClicked = event.target;
    event.preventDefault();
    i += 1;
    let carrinhoAtual = iconsCart.setAttribute("data", i);
    iconsCart.style.setProperty("--display-cart", "inline-block");
  });
});
