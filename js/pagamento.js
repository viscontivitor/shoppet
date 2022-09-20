// let campoDados = document.querySelector(".campo-dados-compras");
let cartaoRadio = document.querySelector(".cartao-pagamento-compras");
let pixRadio = document.querySelector(".pix-pagamento-compras");
let boletoRadio = document.querySelector(".boleto-pagamento-compras");
let cartaoDados = document.querySelector(".campo-dados-compras");
let pixDados = document.querySelector(".campo-dados-pix-compras");
let boletoDados = document.querySelector(".campo-dados-boleto-imprimir");
let cardPag = document.querySelector("#card-pag");
let pixPag = document.querySelector("#pix-pag");
let boletoPag = document.querySelector("#boleto-pag");

cartaoRadio.addEventListener("click", () => {
  cartaoDados.style.display = "flex";
  pixDados.style.display = "none";
  boletoDados.style.display = "none";
  cardPag.checked = true;
  pixPag.checked = false;
  boletoPag.checked = false;
});

pixRadio.addEventListener("click", () => {
  cartaoDados.style.display = "none";
  pixDados.style.display = "flex";
  boletoDados.style.display = "none";
  cardPag.checked = false;
  pixPag.checked = true;
  boletoPag.checked = false;
});

boletoRadio.addEventListener("click", () => {
  cartaoDados.style.display = "none";
  pixDados.style.display = "none";
  boletoDados.style.display = "flex";
  boletoPag.checked = true;
  cardPag.checked = false;
  pixPag.checked = false;
});

//Barra de pesquisa
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
};

//Carrinho de compra
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

//Formulário do login
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

//Menu responsivo do cabeçalho

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
}