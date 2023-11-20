/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão Physics de Fluxo Magnético ***/

/* $$ Classes e IDs $$ */

var classeEIDSectionRaizConverPhysicsFluxMag = "conver_physics_fluxo_magnetico";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_fluxo_magnetico_titulo";
var classeCardInferior = "card_conver_physics_fluxo_magnetico__inferior";
var classeCardSuperior = "card_conver_physics_fluxo_magnetico__superior";
var classeCardLista = "card_conver_physics_fluxo_magnetico_lista";
var classeCardItem = "card_conver_physics_fluxo_magnetico_item";
var classeCardDescricao = "card_conver_physics_fluxo_magnetico_descricao";
var classeCardContador = "card_conver_physics_fluxo_magnetico_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsFluxMag = document.createElement("section");

sectionRaizConverPhysicsFluxMag.classList.add(classeEIDSectionRaizConverPhysicsFluxMag);

sectionRaizConverPhysicsFluxMag.id = classeEIDSectionRaizConverPhysicsFluxMag;

ui.appendChild(sectionRaizConverPhysicsFluxMag);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsFluxMag = document.createElement("button");

botaoRetornoConverPhysicsFluxMag.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsFluxMag.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsFluxMag.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsFluxMag.appendChild(botaoRetornoConverPhysicsFluxMag);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão Physics de Fluxo Magnético";

sectionRaizConverPhysicsFluxMag.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards ***/
var contentsFuncionalidades = [];

contentsFuncionalidades.push(
  "Conversor de Maxwell em Weber",
  "Conversor de Weber em Maxwell");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte Maxwell em Weber",
  "Converte Weber em Maxwell");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsFluxMag ***/
  sectionRaizConverPhysicsFluxMag.appendChild(cardInferior);

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
