/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Força ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsForca = "conver_physics_forca";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_forca_titulo";
var classeCardInferior = "card_conver_physics_forca__inferior";
var classeCardSuperior = "card_conver_physics_forca__superior";
var classeCardLista = "card_conver_physics_forca_lista";
var classeCardItem = "card_conver_physics_forca_item";
var classeCardDescricao = "card_conver_physics_forca_descricao";
var classeCardContador = "card_conver_physics_forca_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsForca = document.createElement("section");

sectionRaizConverPhysicsForca.classList.add(classeEIDSectionRaizConverPhysicsForca);

sectionRaizConverPhysicsForca.id = classeEIDSectionRaizConverPhysicsForca;

ui.appendChild(sectionRaizConverPhysicsForca);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsForca = document.createElement("button");

botaoRetornoConverPhysicsForca.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsForca.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsForca.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsForca.appendChild(botaoRetornoConverPhysicsForca);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Força";

sectionRaizConverPhysicsForca.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctônewtons",
  "Conversores de Zeptônewtons",
  "Conversores de Attônewtons",
  "Conversores de Fentônewtons",
  "Conversores de Picônewtons",
  "Conversores de Nanônewtons",
  "Conversores de Micrônewtons",
  "Conversores de Milínewtons",
  "Conversores de Centínewtons",
  "Conversores de Decínewtons",
  "Conversores de Newtons",
  "Conversores de Decânewtons",
  "Conversores de Hectônewtons",
  "Conversores de Kilônewtons",
  "Conversores de Meganewtons",
  "Conversores de Giganewtons",
  "Conversores de Teranewtons",
  "Conversores de Petanewtons",
  "Conversores de Exanewtons",
  "Conversores de Zettanewtons"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yN para outro tamanho",
  "Converte de zN para outro tamanho",
  "Converte de aN para outro tamanho",
  "Converte de fN para outro tamanho",
  "Converte de pN para outro tamanho",
  "Converte de nN para outro tamanho",
  "Converte de μN para outro tamanho",
  "Converte de mN para outro tamanho",
  "Converte de cN para outro tamanho",
  "Converte de dN para outro tamanho",
  "Converte de N para outro tamanho",
  "Converte de daN para outro tamanho",
  "Converte de hN para outro tamanho",
  "Converte de kN para outro tamanho",
  "Converte de MN para outro tamanho",
  "Converte de GN para outro tamanho",
  "Converte de TN para outro tamanho",
  "Converte de PN para outro tamanho",
  "Converte de EN para outro tamanho",
  "Converte de ZN para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsForca = [];

var cardsSuperioresPhysicsForca = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsForca.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsForca.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsForca ***/
  sectionRaizConverPhysicsForca.appendChild(cardInferior);

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