/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Energia ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsEnergia = "conver_physics_energia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_energia_titulo";
var classeCardInferior = "card_conver_physics_energia__inferior";
var classeCardSuperior = "card_conver_physics_energia__superior";
var classeCardLista = "card_conver_physics_energia_lista";
var classeCardItem = "card_conver_physics_energia_item";
var classeCardDescricao = "card_conver_physics_energia_descricao";
var classeCardContador = "card_conver_physics_energia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsEnergia = document.createElement("section");

sectionRaizConverPhysicsEnergia.classList.add(classeEIDSectionRaizConverPhysicsEnergia);

sectionRaizConverPhysicsEnergia.id = classeEIDSectionRaizConverPhysicsEnergia;

ui.appendChild(sectionRaizConverPhysicsEnergia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsEnergia = document.createElement("button");

botaoRetornoConverPhysicsEnergia.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsEnergia.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsEnergia.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsEnergia.appendChild(botaoRetornoConverPhysicsEnergia);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Energia";

sectionRaizConverPhysicsEnergia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôjoules",
  "Conversores de Zeptôjoules",
  "Conversores de Attôjoules",
  "Conversores de Fentôjoules",
  "Conversores de Picôjoules",
  "Conversores de Nanôjoules",
  "Conversores de Micrôjoules",
  "Conversores de Milíjoules",
  "Conversores de Centíjoules",
  "Conversores de Decíjoules",
  "Conversores de Joules",
  "Conversores de Decâjoules",
  "Conversores de Hectôjoules",
  "Conversores de Kilôjoules",
  "Conversores de Megajoules",
  "Conversores de Gigajoules",
  "Conversores de Terajoules",
  "Conversores de Petajoules",
  "Conversores de Exajoules",
  "Conversores de Zettajoules"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yJ para outro tamanho",
  "Converte de zJ para outro tamanho",
  "Converte de aJ para outro tamanho",
  "Converte de fJ para outro tamanho",
  "Converte de pJ para outro tamanho",
  "Converte de nJ para outro tamanho",
  "Converte de μJ para outro tamanho",
  "Converte de mJ para outro tamanho",
  "Converte de cJ para outro tamanho",
  "Converte de dJ para outro tamanho",
  "Converte de J para outro tamanho",
  "Converte de daJ para outro tamanho",
  "Converte de hJ para outro tamanho",
  "Converte de kJ para outro tamanho",
  "Converte de MJ para outro tamanho",
  "Converte de GJ para outro tamanho",
  "Converte de TJ para outro tamanho",
  "Converte de PJ para outro tamanho",
  "Converte de EJ para outro tamanho",
  "Converte de ZJ para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsEnergia = [];

var cardsSuperioresPhysicsEnergia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsEnergia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsEnergia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsEnergia ***/
  sectionRaizConverPhysicsEnergia.appendChild(cardInferior);

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