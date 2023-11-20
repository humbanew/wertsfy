/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Fluxo de Indução Magnética ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsFluxoInducaoMagnetica = "conver_physics_fluxo_inducao_magnetica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_fluxo_inducao_magnetica_titulo";
var classeCardInferior = "card_conver_physics_fluxo_inducao_magnetica__inferior";
var classeCardSuperior = "card_conver_physics_fluxo_inducao_magnetica__superior";
var classeCardLista = "card_conver_physics_fluxo_inducao_magnetica_lista";
var classeCardItem = "card_conver_physics_fluxo_inducao_magnetica_item";
var classeCardDescricao = "card_conver_physics_fluxo_inducao_magnetica_descricao";
var classeCardContador = "card_conver_physics_fluxo_inducao_magnetica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsFluxoInducaoMagnetica = document.createElement("section");

sectionRaizConverPhysicsFluxoInducaoMagnetica.classList.add(classeEIDSectionRaizConverPhysicsFluxoInducaoMagnetica);

sectionRaizConverPhysicsFluxoInducaoMagnetica.id = classeEIDSectionRaizConverPhysicsFluxoInducaoMagnetica;

ui.appendChild(sectionRaizConverPhysicsFluxoInducaoMagnetica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsFluxoIndMag = document.createElement("button");

botaoRetornoConverPhysicsFluxoIndMag.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsFluxoIndMag.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsFluxoIndMag.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsFluxoInducaoMagnetica.appendChild(botaoRetornoConverPhysicsFluxoIndMag);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Fluxo de Indução Magnética" ;

sectionRaizConverPhysicsFluxoInducaoMagnetica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôweber",
  "Conversores de Zeptôweber",
  "Conversores de Attôweber",
  "Conversores de Fentôweber",
  "Conversores de Picôweber",
  "Conversores de Nanôweber",
  "Conversores de Micrôweber",
  "Conversores de Milíweber",
  "Conversores de Centíweber",
  "Conversores de Decíweber",
  "Conversores de Weber",
  "Conversores de Decâweber",
  "Conversores de Hectôweber",
  "Conversores de Kilôweber",
  "Conversores de Megaweber",
  "Conversores de Gigaweber",
  "Conversores de Teraweber",
  "Conversores de Petaweber",
  "Conversores de Exaweber",
  "Conversores de Zettaweber"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yWb para outro tamanho",
  "Converte de zWb para outro tamanho",
  "Converte de aWb para outro tamanho",
  "Converte de fWb para outro tamanho",
  "Converte de pWb para outro tamanho",
  "Converte de nWb para outro tamanho",
  "Converte de μWb para outro tamanho",
  "Converte de mWb para outro tamanho",
  "Converte de cWb para outro tamanho",
  "Converte de dWb para outro tamanho",
  "Converte de Wb para outro tamanho",
  "Converte de daWb para outro tamanho",
  "Converte de hWb para outro tamanho",
  "Converte de kWb para outro tamanho",
  "Converte de MWb para outro tamanho",
  "Converte de GWb para outro tamanho",
  "Converte de TWb para outro tamanho",
  "Converte de PWb para outro tamanho",
  "Converte de EWb para outro tamanho",
  "Converte de ZWb para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsFluxoInducaoMagnetica = [];

var cardsSuperioresPhysicsFluxoInducaoMagnetica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsFluxoInducaoMagnetica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsFluxoInducaoMagnetica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsFluxoInducaoMagnetica ***/
  sectionRaizConverPhysicsFluxoInducaoMagnetica.appendChild(cardInferior);

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