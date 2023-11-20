/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Physics de Iluminância ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverPhysicsIluminancia = "conver_physics_iluminancia";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_physics_iluminancia_titulo";
var classeCardInferior = "card_conver_physics_iluminancia__inferior";
var classeCardSuperior = "card_conver_physics_iluminancia__superior";
var classeCardLista = "card_conver_physics_iluminancia_lista";
var classeCardItem = "card_conver_physics_iluminancia_item";
var classeCardDescricao = "card_conver_physics_iluminancia_descricao";
var classeCardContador = "card_conver_physics_iluminancia_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverPhysicsIluminancia = document.createElement("section");

sectionRaizConverPhysicsIluminancia.classList.add(classeEIDSectionRaizConverPhysicsIluminancia);

sectionRaizConverPhysicsIluminancia.id = classeEIDSectionRaizConverPhysicsIluminancia;

ui.appendChild(sectionRaizConverPhysicsIluminancia);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverPhysicsIluminancia = document.createElement("button");

botaoRetornoConverPhysicsIluminancia.classList.add(classeEIDSectionBotao);

botaoRetornoConverPhysicsIluminancia.id = classeEIDSectionBotao;

botaoRetornoConverPhysicsIluminancia.textContent = "Voltar à página anterior";

sectionRaizConverPhysicsIluminancia.appendChild(botaoRetornoConverPhysicsIluminancia);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Physics de Iluminância" ;

sectionRaizConverPhysicsIluminancia.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Yoctôlux",
  "Conversores de Zeptôlux",
  "Conversores de Attôlux",
  "Conversores de Fentôlux",
  "Conversores de Picôlux",
  "Conversores de Nanôlux",
  "Conversores de Micrôlux",
  "Conversores de Milílux",
  "Conversores de Centílux",
  "Conversores de Decílux",
  "Conversores de Lux",
  "Conversores de Decâlux",
  "Conversores de Hectôlux",
  "Conversores de Kilôlux",
  "Conversores de Megalux",
  "Conversores de Gigalux",
  "Conversores de Teralux",
  "Conversores de Petalux",
  "Conversores de Exalux",
  "Conversores de Zettalux"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de yLx para outro tamanho",
  "Converte de zLx para outro tamanho",
  "Converte de aLx para outro tamanho",
  "Converte de fLx para outro tamanho",
  "Converte de pLx para outro tamanho",
  "Converte de nLx para outro tamanho",
  "Converte de μLx para outro tamanho",
  "Converte de mLx para outro tamanho",
  "Converte de cLx para outro tamanho",
  "Converte de dLx para outro tamanho",
  "Converte de Lx para outro tamanho",
  "Converte de daLx para outro tamanho",
  "Converte de hLx para outro tamanho",
  "Converte de kLx para outro tamanho",
  "Converte de MLx para outro tamanho",
  "Converte de GLx para outro tamanho",
  "Converte de TLx para outro tamanho",
  "Converte de PLx para outro tamanho",
  "Converte de ELx para outro tamanho",
  "Converte de ZLx para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresPhysicsIluminancia = [];

var cardsSuperioresPhysicsIluminancia = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresPhysicsIluminancia.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresPhysicsIluminancia.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverPhysicsIluminancia ***/
  sectionRaizConverPhysicsIluminancia.appendChild(cardInferior);

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