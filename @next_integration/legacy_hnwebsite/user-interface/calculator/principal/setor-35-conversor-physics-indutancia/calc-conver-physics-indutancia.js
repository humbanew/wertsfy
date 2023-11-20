/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Indutância ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsIndutancia = "conver_physics_indutancia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_indutancia_titulo";
var classeCardInferior = "card_conver_physics_indutancia__inferior";
var classeCardSuperior = "card_conver_physics_indutancia__superior";
var classeCardLista = "card_conver_physics_indutancia_lista";
var classeCardItem = "card_conver_physics_indutancia_item";
var classeCardDescricao = "card_conver_physics_indutancia_descricao";
var classeCardContador = "card_conver_physics_indutancia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsIndutancia = document.createElement("section");

sectionRaizConverPhysicsIndutancia.classList.add(classeEIDSectionRaizConverPhysicsIndutancia);

sectionRaizConverPhysicsIndutancia.id = classeEIDSectionRaizConverPhysicsIndutancia;

ui.appendChild(sectionRaizConverPhysicsIndutancia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsIndutancia = document.createElement("button");

botaoRetornoConverPhysicsIndutancia.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsIndutancia.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsIndutancia.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsIndutancia.appendChild(botaoRetornoConverPhysicsIndutancia);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Indutância" ;

sectionRaizConverPhysicsIndutancia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôhenry",
  "Conversores de Zeptôhenry",
  "Conversores de Attôhenry",
  "Conversores de Fentôhenry",
  "Conversores de Picôhenry",
  "Conversores de Nanôhenry",
  "Conversores de Micrôhenry",
  "Conversores de Milíhenry",
  "Conversores de Centíhenry",
  "Conversores de Decíhenry",
  "Conversores de Henry",
  "Conversores de Decâhenry",
  "Conversores de Hectôhenry",
  "Conversores de Kilôhenry",
  "Conversores de Megahenry",
  "Conversores de Gigahenry",
  "Conversores de Terahenry",
  "Conversores de Petahenry",
  "Conversores de Exahenry",
  "Conversores de Zettahenry"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yH para outro tamanho",
  "Converte de zH para outro tamanho",
  "Converte de aH para outro tamanho",
  "Converte de fH para outro tamanho",
  "Converte de pH para outro tamanho",
  "Converte de nH para outro tamanho",
  "Converte de μH para outro tamanho",
  "Converte de mH para outro tamanho",
  "Converte de cH para outro tamanho",
  "Converte de dH para outro tamanho",
  "Converte de H para outro tamanho",
  "Converte de daH para outro tamanho",
  "Converte de hH para outro tamanho",
  "Converte de kH para outro tamanho",
  "Converte de MH para outro tamanho",
  "Converte de GH para outro tamanho",
  "Converte de TH para outro tamanho",
  "Converte de PH para outro tamanho",
  "Converte de EH para outro tamanho",
  "Converte de ZH para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsIndutancia = [];

var cardsSuperioresPhysicsIndutancia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsIndutancia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsIndutancia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsIndutancia ***/
  sectionRaizConverPhysicsIndutancia.appendChild(cardInferior);

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