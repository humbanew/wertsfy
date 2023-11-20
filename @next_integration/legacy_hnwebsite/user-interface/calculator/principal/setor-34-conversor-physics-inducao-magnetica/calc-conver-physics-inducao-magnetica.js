/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Indução Magnética ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsInducaoMagnetica = "conver_physics_inducao_magnetica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_inducao_magnetica_titulo";
var classeCardInferior = "card_conver_physics_inducao_magnetica__inferior";
var classeCardSuperior = "card_conver_physics_inducao_magnetica__superior";
var classeCardLista = "card_conver_physics_inducao_magnetica_lista";
var classeCardItem = "card_conver_physics_inducao_magnetica_item";
var classeCardDescricao = "card_conver_physics_inducao_magnetica_descricao";
var classeCardContador = "card_conver_physics_inducao_magnetica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsInducaoMagnetica = document.createElement("section");

sectionRaizConverPhysicsInducaoMagnetica.classList.add(classeEIDSectionRaizConverPhysicsInducaoMagnetica);

sectionRaizConverPhysicsInducaoMagnetica.id = classeEIDSectionRaizConverPhysicsInducaoMagnetica;

ui.appendChild(sectionRaizConverPhysicsInducaoMagnetica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsIndMag = document.createElement("button");

botaoRetornoConverPhysicsIndMag.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsIndMag.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsIndMag.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsInducaoMagnetica.appendChild(botaoRetornoConverPhysicsIndMag);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Indução Magnética" ;

sectionRaizConverPhysicsInducaoMagnetica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôteslas",
  "Conversores de Zeptôteslas",
  "Conversores de Attôteslas",
  "Conversores de Fentôteslas",
  "Conversores de Picôteslas",
  "Conversores de Nanôteslas",
  "Conversores de Micrôteslas",
  "Conversores de Milíteslas",
  "Conversores de Centíteslas",
  "Conversores de Decíteslas",
  "Conversores de Teslas",
  "Conversores de Decâteslas",
  "Conversores de Hectôteslas",
  "Conversores de Kilôteslas",
  "Conversores de Megateslas",
  "Conversores de Gigateslas",
  "Conversores de Terateslas",
  "Conversores de Petateslas",
  "Conversores de Exateslas",
  "Conversores de Zettateslas"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yT para outro tamanho",
  "Converte de zT para outro tamanho",
  "Converte de aT para outro tamanho",
  "Converte de fT para outro tamanho",
  "Converte de pT para outro tamanho",
  "Converte de nT para outro tamanho",
  "Converte de μT para outro tamanho",
  "Converte de mT para outro tamanho",
  "Converte de cT para outro tamanho",
  "Converte de dT para outro tamanho",
  "Converte de T para outro tamanho",
  "Converte de daT para outro tamanho",
  "Converte de hT para outro tamanho",
  "Converte de kT para outro tamanho",
  "Converte de MT para outro tamanho",
  "Converte de GT para outro tamanho",
  "Converte de TT para outro tamanho",
  "Converte de PT para outro tamanho",
  "Converte de ET para outro tamanho",
  "Converte de ZT para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsInducaoMagnetica = [];

var cardsSuperioresPhysicsInducaoMagnetica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsInducaoMagnetica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsInducaoMagnetica.push(cardSuperior);

  /*** Lista de Conteúdo do Card ***/
  var cardLista = document.createElement("ol");

  cardLista.classList.add(classeCardLista);

  /*** Item da Lista de Conteúdo do Card ***/
  var cardListaItem = document.createElement("li");

  cardListaItem.classList.add(classeCardItem);

  cardListaItem.textContent = contentsFuncionalidades[i];

  /*** Descrição do Item da Lista de Conteúdo do Card ***/
  var cardListaItemDescricao = document.createElement("dl");

  cardListaItemDescricao.classList.add(classeCardDescricao);

  cardListaItemDescricao.textContent = contentsFuncionalidadesDescricao[i];

  /*** Descrição do Item da Lista de Conteúdo do Card ***/
  var cardListaItemContador = document.createElement("dd");

  cardListaItemContador.classList.add(classeCardContador);

  cardListaItemContador.textContent = contentsFuncionalidadesContador[i];

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsInducaoMagnetica ***/
  sectionRaizConverPhysicsInducaoMagnetica.appendChild(cardInferior);

  /*** cardSuperior é elemento-filho de cardInferior ***/
  cardInferior.appendChild(cardSuperior);

  /*** cardLista é elemento-filho de cardSuperior ***/
  cardSuperior.appendChild(cardLista);

  /*** cardListaItem é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItem);

  /*** cardListaItemDescricao é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItemDescricao);

  /*** cardListaItemDescricao é elemento-filho de cardLista ***/
  cardLista.appendChild(cardListaItemContador);
}