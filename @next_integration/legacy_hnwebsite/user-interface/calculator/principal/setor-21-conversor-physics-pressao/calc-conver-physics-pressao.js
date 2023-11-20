/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Pressão ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsPressao = "conver_physics_pressao";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_pressao_titulo";
var classeCardInferior = "card_conver_physics_pressao__inferior";
var classeCardSuperior = "card_conver_physics_pressao__superior";
var classeCardLista = "card_conver_physics_pressao_lista";
var classeCardItem = "card_conver_physics_pressao_item";
var classeCardDescricao = "card_conver_physics_pressao_descricao";
var classeCardContador = "card_conver_physics_pressao_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsPressao = document.createElement("section");

sectionRaizConverPhysicsPressao.classList.add(classeEIDSectionRaizConverPhysicsPressao);

sectionRaizConverPhysicsPressao.id = classeEIDSectionRaizConverPhysicsPressao;

ui.appendChild(sectionRaizConverPhysicsPressao);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsPressao = document.createElement("button");

botaoRetornoConverPhysicsPressao.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsPressao.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsPressao.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsPressao.appendChild(botaoRetornoConverPhysicsPressao);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Pressão";

sectionRaizConverPhysicsPressao.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Kilogramas de Força por Centímetros²",
  "Conversores de Metros de H2O",
  "Conversores de Pés de H2O",
  "Conversores de Polegadas de H2O",
  "Conversores de Milímetros de Hg",
  "Conversores de Polegadas de Hg",
  "Conversores de Psi",
  "Conversores de Yoctôbar",
  "Conversores de Zeptôbar",
  "Conversores de Attôbar",
  "Conversores de Fentôbar",
  "Conversores de Picôbar",
  "Conversores de Nanôbar",
  "Conversores de Micrôbar",
  "Conversores de Milíbar",
  "Conversores de Centíbar",
  "Conversores de Decíbar",
  "Conversores de Bar",
  "Conversores de Decâbar",
  "Conversores de Hectôbar",
  "Conversores de Kilôbar",
  "Conversores de Megabar",
  "Conversores de Gigabar",
  "Conversores de Terabar",
  "Conversores de Petabar",
  "Conversores de Exabar",
  "Conversores de Zettabar",
  "Conversores de Yoctôpascal",
  "Conversores de Zeptôpascal",
  "Conversores de Attôpascal",
  "Conversores de Fentôpascal",
  "Conversores de Picôpascal",
  "Conversores de Nanôpascal",
  "Conversores de Micrôpascal",
  "Conversores de Milípascal",
  "Conversores de Centípascal",
  "Conversores de Decípascal",
  "Conversores de Pascal",
  "Conversores de Decâpascal",
  "Conversores de Hectôpascal",
  "Conversores de Kilôpascal",
  "Conversores de Megapascal",
  "Conversores de Gigapascal",
  "Conversores de Terapascal",
  "Conversores de Petapascal",
  "Conversores de Exapascal",
  "Conversores de Zettapascal"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de kgf/cm² para outro tamanho",
  "Converte de m H2O para outro tamanho",
  "Converte de ft H2O para outro tamanho",
  "Converte de in H2O para outro tamanho",
  "Converte de mm Hg para outro tamanho",
  "Converte de in Hg para outro tamanho",
  "Converte de psi para outro tamanho",
  "Converte de ybar para outro tamanho",
  "Converte de zbar para outro tamanho",
  "Converte de abar para outro tamanho",
  "Converte de fbar para outro tamanho",
  "Converte de pbar para outro tamanho",
  "Converte de nbar para outro tamanho",
  "Converte de μbar para outro tamanho",
  "Converte de mbar para outro tamanho",
  "Converte de cbar para outro tamanho",
  "Converte de dbar para outro tamanho",
  "Converte de Bar para outro tamanho",
  "Converte de dabar para outro tamanho",
  "Converte de hbar para outro tamanho",
  "Converte de kbar para outro tamanho",
  "Converte de Mbar para outro tamanho",
  "Converte de Gbar para outro tamanho",
  "Converte de Tbar para outro tamanho",
  "Converte de Pbar para outro tamanho",
  "Converte de Ebar para outro tamanho",
  "Converte de Zbar para outro tamanho",
  "Converte de yPa para outro tamanho",
  "Converte de zPa para outro tamanho",
  "Converte de aPa para outro tamanho",
  "Converte de fPa para outro tamanho",
  "Converte de pPa para outro tamanho",
  "Converte de nPa para outro tamanho",
  "Converte de μPa para outro tamanho",
  "Converte de mPa para outro tamanho",
  "Converte de cPa para outro tamanho",
  "Converte de dPa para outro tamanho",
  "Converte de Pa para outro tamanho",
  "Converte de daPa para outro tamanho",
  "Converte de hPa para outro tamanho",
  "Converte de kPa para outro tamanho",
  "Converte de MPa para outro tamanho",
  "Converte de GPa para outro tamanho",
  "Converte de TPa para outro tamanho",
  "Converte de PPa para outro tamanho",
  "Converte de EPa para outro tamanho",
  "Converte de ZPa para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsPressao = [];

var cardsSuperioresPhysicsPressao = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsPressao.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsPressao.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsPressao ***/
  sectionRaizConverPhysicsPressao.appendChild(cardInferior);

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