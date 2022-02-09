const btLogin = document.querySelector(".btn-login");
let logged = false;

btLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (logged) {
    logged = false;
  } else {
    logged = true;
  }
  const navigation = document.querySelector(".navigation");
  const enderecoInfo = document.querySelector(".endereco-info");
  const baselineIcon = document.querySelector(".shop-icons__baseline");
  const loginImg = document.querySelector("[data-login-img]");
  const disconectedText = document.querySelector(".login-text__disconected");
  const loggedText = document.querySelector(".logged-text__logged");
  const hamburgerMenu = document.querySelector(".menu-btn");

  hamburgerMenu.classList.toggle("hide");
  enderecoInfo.classList.toggle("hide");
  baselineIcon.classList.toggle("hide");
  navigation.classList.toggle("hide");
  if (logged) {
    loginImg.src = "/assets/img/perfil_fake_picture.png";
    disconectedText.classList.add("hide");
    loggedText.classList.remove("hide");
  } else {
    loginImg.src = "/assets/img/login-icon.svg";
    disconectedText.classList.remove("hide");
    loggedText.classList.add("hide");
  }
});
