/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Tempo ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsTempo = "conver_physics_tempo";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_tempo_titulo";
var classeCardInferior = "card_conver_physics_tempo__inferior";
var classeCardSuperior = "card_conver_physics_tempo__superior";
var classeCardLista = "card_conver_physics_tempo_lista";
var classeCardItem = "card_conver_physics_tempo_item";
var classeCardDescricao = "card_conver_physics_tempo_descricao";
var classeCardContador = "card_conver_physics_tempo_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsTempo = document.createElement("section");

sectionRaizConverPhysicsTempo.classList.add(classeEIDSectionRaizConverPhysicsTempo);

sectionRaizConverPhysicsTempo.id = classeEIDSectionRaizConverPhysicsTempo;

ui.appendChild(sectionRaizConverPhysicsTempo);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsTempo = document.createElement("button");

botaoRetornoConverPhysicsTempo.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsTempo.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsTempo.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsTempo.appendChild(botaoRetornoConverPhysicsTempo);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Tempo";

sectionRaizConverPhysicsTempo.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Milênios",
  "Conversores de Séculos",
  "Conversores de Décadas",
  "Conversores de Biênios",
  "Conversores de Anos",
  "Conversores de Semestres",
  "Conversores de Quadrimestres",
  "Conversores de Trimestres",
  "Conversores de Bimestres",
  "Conversores de Meses",
  "Conversores de Semanas",
  "Conversores de Dias",
  "Conversores de Horas",
  "Conversores de Minutos",
  "Conversores de Yoctôssegundos",
  "Conversores de Zeptôssegundos",
  "Conversores de Attôssegundos",
  "Conversores de Fentôssegundos",
  "Conversores de Picôssegundos",
  "Conversores de Nanôssegundos",
  "Conversores de Micrôssegundos",
  "Conversores de Milíssegundos",
  "Conversores de Centíssegundos",
  "Conversores de Decíssegundos",
  "Conversores de Segundos",
  "Conversores de Decâssegundos",
  "Conversores de Hectôssegundos",
  "Conversores de Kilôssegundos",
  "Conversores de Megassegundos",
  "Conversores de Gigassegundos",
  "Conversores de Terassegundos",
  "Conversores de Petassegundos",
  "Conversores de Exassegundos",
  "Conversores de Zettassegundos");

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de Milênios para outro tamanho",
  "Converte de Séculos para outro tamanho",
  "Converte de Décadas para outro tamanho",
  "Converte de Biênios para outro tamanho",
  "Converte de Anos para outro tamanho",
  "Converte de Semestres para outro tamanho",
  "Converte de Quadrimestres para outro tamanho",
  "Converte de Trimestres para outro tamanho",
  "Converte de Bimestres para outro tamanho",
  "Converte de Meses para outro tamanho",
  "Converte de Semanas para outro tamanho",
  "Converte de Dias para outro tamanho",
  "Converte de Horas para outro tamanho",
  "Converte de Minutos para outro tamanho",
  "Converte de yseg para outro tamanho",
  "Converte de zseg para outro tamanho",
  "Converte de aseg para outro tamanho",
  "Converte de fseg para outro tamanho",
  "Converte de pseg para outro tamanho",
  "Converte de nseg para outro tamanho",
  "Converte de μseg para outro tamanho",
  "Converte de mseg para outro tamanho",
  "Converte de cseg para outro tamanho",
  "Converte de dseg para outro tamanho",
  "Converte de seg para outro tamanho",
  "Converte de daseg para outro tamanho",
  "Converte de hseg para outro tamanho",
  "Converte de kseg para outro tamanho",
  "Converte de Mseg para outro tamanho",
  "Converte de Gseg para outro tamanho",
  "Converte de Tseg para outro tamanho",
  "Converte de Pseg para outro tamanho",
  "Converte de Eseg para outro tamanho",
  "Converte de Zseg para outro tamanho");

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsTempo = [];

var cardsSuperioresPhysicsTempo = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsTempo.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsTempo.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsTempo ***/
  sectionRaizConverPhysicsTempo.appendChild(cardInferior);

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