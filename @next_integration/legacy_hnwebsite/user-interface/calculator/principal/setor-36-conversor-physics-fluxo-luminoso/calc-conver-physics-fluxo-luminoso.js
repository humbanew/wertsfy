/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Fluxo Luminoso ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsFluxoLuminoso = "conver_physics_fluxo_luminoso";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_fluxo_luminoso_titulo";
var classeCardInferior = "card_conver_physics_fluxo_luminoso__inferior";
var classeCardSuperior = "card_conver_physics_fluxo_luminoso__superior";
var classeCardLista = "card_conver_physics_fluxo_luminoso_lista";
var classeCardItem = "card_conver_physics_fluxo_luminoso_item";
var classeCardDescricao = "card_conver_physics_fluxo_luminoso_descricao";
var classeCardContador = "card_conver_physics_fluxo_luminoso_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsFluxoLuminoso = document.createElement("section");

sectionRaizConverPhysicsFluxoLuminoso.classList.add(classeEIDSectionRaizConverPhysicsFluxoLuminoso);

sectionRaizConverPhysicsFluxoLuminoso.id = classeEIDSectionRaizConverPhysicsFluxoLuminoso;

ui.appendChild(sectionRaizConverPhysicsFluxoLuminoso);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsFluxoLuminoso = document.createElement("button");

botaoRetornoConverPhysicsFluxoLuminoso.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsFluxoLuminoso.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsFluxoLuminoso.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsFluxoLuminoso.appendChild(botaoRetornoConverPhysicsFluxoLuminoso);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Fluxo Luminoso" ;

sectionRaizConverPhysicsFluxoLuminoso.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôlumen",
  "Conversores de Zeptôlumen",
  "Conversores de Attôlumen",
  "Conversores de Fentôlumen",
  "Conversores de Picôlumen",
  "Conversores de Nanôlumen",
  "Conversores de Micrôlumen",
  "Conversores de Milílumen",
  "Conversores de Centílumen",
  "Conversores de Decílumen",
  "Conversores de Lumen",
  "Conversores de Decâlumen",
  "Conversores de Hectôlumen",
  "Conversores de Kilôlumen",
  "Conversores de Megalumen",
  "Conversores de Gigalumen",
  "Conversores de Teralumen",
  "Conversores de Petalumen",
  "Conversores de Exalumen",
  "Conversores de Zettalumen"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yLm para outro tamanho",
  "Converte de zLm para outro tamanho",
  "Converte de aLm para outro tamanho",
  "Converte de fLm para outro tamanho",
  "Converte de pLm para outro tamanho",
  "Converte de nLm para outro tamanho",
  "Converte de μLm para outro tamanho",
  "Converte de mLm para outro tamanho",
  "Converte de cLm para outro tamanho",
  "Converte de dLm para outro tamanho",
  "Converte de Lm para outro tamanho",
  "Converte de daLm para outro tamanho",
  "Converte de hLm para outro tamanho",
  "Converte de kLm para outro tamanho",
  "Converte de MLm para outro tamanho",
  "Converte de GLm para outro tamanho",
  "Converte de TLm para outro tamanho",
  "Converte de PLm para outro tamanho",
  "Converte de ELm para outro tamanho",
  "Converte de ZLm para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsFluxoLuminoso = [];

var cardsSuperioresPhysicsFluxoLuminoso = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsFluxoLuminoso.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsFluxoLuminoso.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsFluxoLuminoso ***/
  sectionRaizConverPhysicsFluxoLuminoso.appendChild(cardInferior);

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