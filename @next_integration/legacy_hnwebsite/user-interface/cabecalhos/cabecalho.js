/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Tag Header (conteiner) ***/
var cabecalhoEspaco = document.getElementById("cabecalho_espaco");

/*** Tab Icon ***/
var iconTab = document.getElementById("icon");

iconTab.href = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

/*** Tab Title ***/

var titleTab = document.getElementById("title");

titleTab.textContent = "Humbanew | Innovations to the World";

/*** Cabeçalho ***/
var navegation = document.createElement("nav");

navegation.classList.add("cabecalho_nav");

/*** Logotipo do Cabeçalho ***/
var imgLogo = document.createElement("img");

imgLogo.classList.add("cabecalho_imagem__logo");

imgLogo.id = "log_esp";

imgLogo.src = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

imgLogo.style.width = "60px";

imgLogo.style.height = "60px";

var imgTexto = document.createElement("p");

imgTexto.classList.add("cabecalho_texto__logo");

imgTexto.id = "txt_esp";

imgTexto.textContent = "HUMBANEW";

imgTexto.style.paddingTop = "0.5%";

/*** Menu do Cabeçalho ***/
var btnMenu = document.createElement("button");

btnMenu.classList.add("cabecalho_menu_acesso");

btnMenu.id = "btn_menu";

var btnMenuImg = document.createElement("img");

btnMenuImg.classList.add("cabecalho_menu_acesso_img");

btnMenuImg.id = "btn_menu_img";

btnMenuImg.src = "svg/icons/opitions_comum.svg";

var sectionMenu = document.createElement("section");

sectionMenu.classList.add("cabecalho_menu_conteiner");

sectionMenu.id = "cab";

var menuLista = document.createElement("ul");

menuLista.classList.add("cabecalho_menu");

var menuListaContent = [
  "Início",
  "Blueprints",
  "Calculator",
  "Community",
  "Development",
  "Environment",
  "Helps",
  "Racing",
  "Reads",
  "Studios",
  "Vibes Musics",
  "Fale Conosco"
];

for(var i = 0; i < 12; i++) {
  var menuListaItem = document.createElement("li");

  menuListaItem.classList.add("cabecalho_menu__item");

  menuListaItem.textContent = menuListaContent[i];

  menuLista.appendChild(menuListaItem);

  if (i == 0) {
    menuListaItem.id = "main";
  }

  if(i == 1) {
    menuListaItem.id = "bluep";
  }

  if(i == 2) {
    menuListaItem.id = "calc";
  }

  if(i == 3) {
    menuListaItem.id = "comm";
  }

  if(i == 4) {
    menuListaItem.id = "devel";
  }

  if(i == 5) {
    menuListaItem.id = "envir";
  }

  if(i == 6) {
    menuListaItem.id = "helps";
  }

  if(i == 7) {
    menuListaItem.id = "racin";
  }

  if(i == 8) {
    menuListaItem.id = "reads";
  }

  if(i == 9) {
    menuListaItem.id = "stud";
  }

  if(i == 10) {
    menuListaItem.id = "vibm";
  }

  if(i == 11) {
    menuListaItem.id = "falec";
  }
}

/*** navegation é elemento-filho de cabecalhoEspaco ***/
cabecalhoEspaco.appendChild(navegation);

/*** imgLogo é elemento-filho de navegation ***/
navegation.appendChild(imgLogo);

/*** imgTexto é elemento-filho de navegation ***/
navegation.appendChild(imgTexto);

/***$ Cabeçalho Complemento $***/
var complemento = document.createElement("div");

complemento.classList.add("cabecalho_texto_complementar_espaco");
//complemento.classList.add("cabecalho_texto_complementar_espaco_c");

var compTexto = document.createElement("p");

compTexto.classList.add("cabecalho_texto_complementar_espaco__logo");

navegation.appendChild(complemento);

complemento.appendChild(compTexto);

/*** btnMenu é elemento-filho de navegation ***/
navegation.appendChild(btnMenu);

/*** btnMenuImg é elemento-filho de btnMenu ***/
btnMenu.appendChild(btnMenuImg);

/*** sectionMenu é elemento-filho de navegation ***/
navegation.appendChild(sectionMenu);

/*** menuLista é elemento-filho de sectionMenu ***/
sectionMenu.appendChild(menuLista);
