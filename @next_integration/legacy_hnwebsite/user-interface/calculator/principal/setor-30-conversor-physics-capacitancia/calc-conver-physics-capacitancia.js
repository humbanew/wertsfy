/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Capacitância ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsCapacitancia = "conver_physics_capacitancia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_capacitancia_titulo";
var classeCardInferior = "card_conver_physics_capacitancia__inferior";
var classeCardSuperior = "card_conver_physics_capacitancia__superior";
var classeCardLista = "card_conver_physics_capacitancia_lista";
var classeCardItem = "card_conver_physics_capacitancia_item";
var classeCardDescricao = "card_conver_physics_capacitancia_descricao";
var classeCardContador = "card_conver_physics_capacitancia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsCapacitancia = document.createElement("section");

sectionRaizConverPhysicsCapacitancia.classList.add(classeEIDSectionRaizConverPhysicsCapacitancia);

sectionRaizConverPhysicsCapacitancia.id = classeEIDSectionRaizConverPhysicsCapacitancia;

ui.appendChild(sectionRaizConverPhysicsCapacitancia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsCapacitancia = document.createElement("button");

botaoRetornoConverPhysicsCapacitancia.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsCapacitancia.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsCapacitancia.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsCapacitancia.appendChild(botaoRetornoConverPhysicsCapacitancia);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Capacitância";

sectionRaizConverPhysicsCapacitancia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôfarad",
  "Conversores de Zeptôfarad",
  "Conversores de Attôfarad",
  "Conversores de Fentôfarad",
  "Conversores de Picôfarad",
  "Conversores de Nanôfarad",
  "Conversores de Micrôfarad",
  "Conversores de Milífarad",
  "Conversores de Centífarad",
  "Conversores de Decífarad",
  "Conversores de Farad",
  "Conversores de Decâfarad",
  "Conversores de Hectôfarad",
  "Conversores de Kilôfarad",
  "Conversores de Megafarad",
  "Conversores de Gigafarad",
  "Conversores de Terafarad",
  "Conversores de Petafarad",
  "Conversores de Exafarad",
  "Conversores de Zettafarad"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yF para outro tamanho",
  "Converte de zF para outro tamanho",
  "Converte de aF para outro tamanho",
  "Converte de fF para outro tamanho",
  "Converte de pF para outro tamanho",
  "Converte de nF para outro tamanho",
  "Converte de μF para outro tamanho",
  "Converte de mF para outro tamanho",
  "Converte de cF para outro tamanho",
  "Converte de dF para outro tamanho",
  "Converte de F para outro tamanho",
  "Converte de daF para outro tamanho",
  "Converte de hF para outro tamanho",
  "Converte de kF para outro tamanho",
  "Converte de MF para outro tamanho",
  "Converte de GF para outro tamanho",
  "Converte de TF para outro tamanho",
  "Converte de PF para outro tamanho",
  "Converte de EF para outro tamanho",
  "Converte de ZF para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsCapacitancia = [];

var cardsSuperioresPhysicsCapacitancia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsCapacitancia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsCapacitancia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsCapacitancia ***/
  sectionRaizConverPhysicsCapacitancia.appendChild(cardInferior);

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