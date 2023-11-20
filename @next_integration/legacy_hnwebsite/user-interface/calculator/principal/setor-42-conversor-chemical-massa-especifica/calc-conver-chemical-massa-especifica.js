/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Setor de Funcionalidades de Conversão de Bases Chemical de Massa Específica ***/

/* $$ Classes e IDs (principal) $$ */

var classeEIDSectionRaizConverChemicalMassaEspecifica = "conver_chemical_massa_especifica";
var classeEIDSectionBotao = "botao_retorno";
var classeTitulo = "conver_chemical_massa_especifica_titulo";
var classeCardInferior = "card_conver_chemical_massa_especifica__inferior";
var classeCardSuperior = "card_conver_chemical_massa_especifica__superior";
var classeCardLista = "card_conver_chemical_massa_especifica_lista";
var classeCardItem = "card_conver_chemical_massa_especifica_item";
var classeCardDescricao = "card_conver_chemical_massa_especifica_descricao";
var classeCardContador = "card_conver_chemical_massa_especifica_contador";

/** Tag Body (conteiner) **/
var ui = document.getElementById("body");

/** Section dos cards **/
var sectionRaizConverChemicalMassaEspecifica = document.createElement("section");

sectionRaizConverChemicalMassaEspecifica.classList.add(classeEIDSectionRaizConverChemicalMassaEspecifica);

sectionRaizConverChemicalMassaEspecifica.id = classeEIDSectionRaizConverChemicalMassaEspecifica;

ui.appendChild(sectionRaizConverChemicalMassaEspecifica);

/** Botão de Retorno à página anterior **/

var botaoRetornoConverChemicalMassaEspecifica = document.createElement("button");

botaoRetornoConverChemicalMassaEspecifica.classList.add(classeEIDSectionBotao);

botaoRetornoConverChemicalMassaEspecifica.id = classeEIDSectionBotao;

botaoRetornoConverChemicalMassaEspecifica.textContent = "Voltar à página anterior";

sectionRaizConverChemicalMassaEspecifica.appendChild(botaoRetornoConverChemicalMassaEspecifica);

/** Título da Section **/
var titulo = document.createElement("p");

titulo.classList.add(classeTitulo);

titulo.textContent = "Funcionalidades de Conversão de Bases Chemical de Massa Específica & Quantidade de Matéria" ;

sectionRaizConverChemicalMassaEspecifica.appendChild(titulo);

/** Construção dos Cards **/

/*** Conteúdo de texto dos Cards Principais ***/

var contentsFuncionalidades = [];
contentsFuncionalidades.push(
  "Conversores de Slug por Pé³",
  "Conversores de Kilograma por Metro³",
  "Conversores de Grama por Centímetro³",
  "Conversores de Libra por Pé³",
  "Conversores de Libra por Polegada³",
  "Conversores de Yoctômol",
  "Conversores de Zeptômol",
  "Conversores de Attômol",
  "Conversores de Fentômol",
  "Conversores de Picômol",
  "Conversores de Nanômol",
  "Conversores de Micrômol",
  "Conversores de Milímol",
  "Conversores de Centímol",
  "Conversores de Decímol",
  "Conversores de Mol",
  "Conversores de Decâmol",
  "Conversores de Hectômol",
  "Conversores de Kilômol",
  "Conversores de Megamol",
  "Conversores de Gigamol",
  "Conversores de Teramol",
  "Conversores de Petamol",
  "Conversores de Examol",
  "Conversores de Zettamol"
);

var contentsFuncionalidadesDescricao = [];
contentsFuncionalidadesDescricao.push(
  "Converte de slug/ft³ para outro tamanho",
  "Converte de kg/m³ para outro tamanho",
  "Converte de g/cm³ para outro tamanho",
  "Converte de lb/ft³ para outro tamanho",
  "Converte de lb/in³ para outro tamanho",
  "Converte de ymol para outro tamanho",
  "Converte de zmol para outro tamanho",
  "Converte de amol para outro tamanho",
  "Converte de fmol para outro tamanho",
  "Converte de pmol para outro tamanho",
  "Converte de nmol para outro tamanho",
  "Converte de μmol para outro tamanho",
  "Converte de mmol para outro tamanho",
  "Converte de cmol para outro tamanho",
  "Converte de dmol para outro tamanho",
  "Converte de mol para outro tamanho",
  "Converte de damol para outro tamanho",
  "Converte de hmol para outro tamanho",
  "Converte de kmol para outro tamanho",
  "Converte de Mmol para outro tamanho",
  "Converte de Gmol para outro tamanho",
  "Converte de Tmol para outro tamanho",
  "Converte de Pmol para outro tamanho",
  "Converte de Emol para outro tamanho",
  "Converte de Zmol para outro tamanho"
);

var contentsFuncionalidadesContador = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  if (i >= 9) {
    contentsFuncionalidadesContador.push(i + 1);
  } else {
    contentsFuncionalidadesContador.push("0" + (i + 1));
  }
}

var cardsInferioresChemicalMassaEspecifica = [];

var cardsSuperioresChemicalMassaEspecifica = [];

for (let i = 0; i < contentsFuncionalidades.length; i++) {
  /*** Card Inferior ***/
  var cardInferior = document.createElement("div");

  cardInferior.classList.add(classeCardInferior);

  cardsInferioresChemicalMassaEspecifica.push(cardInferior);

  /*** Card Superior ***/
  var cardSuperior = document.createElement("div");

  cardSuperior.classList.add(classeCardSuperior);

  cardsSuperioresChemicalMassaEspecifica.push(cardSuperior);

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

  /*** cardTerciario é elemento-filho de sectionRaizConverChemicalMassaEspecifica ***/
  sectionRaizConverChemicalMassaEspecifica.appendChild(cardInferior);

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