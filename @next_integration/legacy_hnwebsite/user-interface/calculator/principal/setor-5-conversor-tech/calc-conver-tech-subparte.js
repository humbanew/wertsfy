/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverTechSPart = "conver_tech__spart";
var classeTituloSPart = "conver_tech_titulo__spart";
var classeCardInferiorSPart = "card_conver_tech__inferior___spart";
var classeCardSuperiorSPart = "card_conver_tech__superior___spart";
var classeCardContadorSPart = "card_conver_tech_contador__spart";

function tituloConstructor(x=0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Tech | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Tech | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverTechSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasTech = [
  "Bits",
  "Bytes",
  "Kilobytes",
  "Megabytes",
  "Gigabytes",
  "Terabytes",
  "Petabytes",
  "Exabytes",
  "Yottabytes",
  "Zettabytes",
  "Brontobytes",
  "Geopbytes",
  "Saganbytes"
];

for(let u = 0; u < medidasTech.length; u++) {

  var contentsFuncionalidadesSubParte = [
  `Conversor de ${medidasTech[u]} em Bytes`,
  `Conversor de Bytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Kilobytes`,
  `Conversor de Kilobytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Megabytes`,
  `Conversor de Megabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Gigabytes`,
  `Conversor de Gigabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Terrabytes`,
  `Conversor de Terrabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Petabytes`,
  `Conversor de Petabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Exabytes`,
  `Conversor de Exabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Yottabytes`,
  `Conversor de Yottabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Zettabytes`,
  `Conversor de Zettabytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Brontobytes`,
  `Conversor de Brontobytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Geopbytes`,
  `Conversor de Geopbytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Saganbytes`,
  `Conversor de Saganbytes em ${medidasTech[u]}`,
  `Conversor de ${medidasTech[u]} em Jotabytes`,
  `Conversor de Jotabytes em ${medidasTech[u]}`];

  var contentsFuncionalidadesDescricaoSubParte = [
  `Converte ${medidasTech[u]} em Bytes`,
  `Converte Bytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Kilobytes`,
  `Converte Kilobytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Megabytes`,
  `Converte Megabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Gigabytes`,
  `Converte Gigabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Terrabytes`,
  `Converte Terrabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Petabytes`,
  `Converte Petabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Exabytes`,
  `Converte Exabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Yottabytes`,
  `Converte Yottabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Zettabytes`,
  `Converte Zettabytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Brontobytes`,
  `Converte Brontobytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Geopbytes`,
  `Converte Geopbytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Saganbytes`,
  `Converte Saganbytes em ${medidasTech[u]}`,
  `Converte ${medidasTech[u]} em Jotabytes`,
  `Converte Jotabytes em ${medidasTech[u]}`];

  var contentsFuncionalidadesContadorSubParte = [];

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {
    if (i >= 9) {
      contentsFuncionalidadesContadorSubParte.push(i + 1);
    } else {
      contentsFuncionalidadesContadorSubParte.push("0" + (i + 1));
    }
  }

  /** Section dos cards **/
  var sectionRaizConverTechSPart = document.createElement("section");

  sectionRaizConverTechSPart.classList.add(classeEIDSectionRaizConverTech);

  sectionRaizConverTechSPart.id = "conver_tech__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverTechSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverTechDivSPart = document.createElement("button");

  botaoRetornoConverTechDivSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverTechDivSPart.id = "botao_retorno_tech_c_part" + `_${u+1}`;

  botaoRetornoConverTechDivSPart.textContent = "Voltar à página anterior";

  sectionRaizConverTechSPart.appendChild(botaoRetornoConverTechDivSPart);

  tituloConstructor(u);

  /* Ajustador para a retirada dos Cards indevidos nas divisões */

  for(let i = 0; i < u; i++) {
    contentsFuncionalidadesSubParte.splice(0, 2);
    contentsFuncionalidadesDescricaoSubParte.splice(0, 2);
  }

  /* Construtor das estruturas dos Cards */

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {

    /*** Card Inferior ***/
    var cardInferiorSPart = document.createElement("div");

    cardInferiorSPart.classList.add(classeCardInferiorSPart);

    /*** Card Superior ***/
    var cardSuperiorSPart = document.createElement("div");

    cardSuperiorSPart.classList.add(classeCardSuperiorSPart);

    /*** Lista de Conteúdo do Card ***/
    var cardListaSPart = document.createElement("ol");

    cardListaSPart.classList.add(classeCardLista);

    /*** Item da Lista de Conteúdo do Card ***/
    var cardListaItemSPart = document.createElement("li");

    cardListaItemSPart.classList.add(classeCardItem);

    cardListaItemSPart.textContent = contentsFuncionalidadesSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemDescricaoSPart = document.createElement("dl");

    cardListaItemDescricaoSPart.classList.add(classeCardDescricao);

    cardListaItemDescricaoSPart.textContent = contentsFuncionalidadesDescricaoSubParte[i];

    /*** Descrição do Item da Lista de Conteúdo do Card ***/
    var cardListaItemContadorSPart = document.createElement("dd");

    cardListaItemContadorSPart.classList.add(classeCardContadorSPart);

    cardListaItemContadorSPart.textContent = contentsFuncionalidadesContadorSubParte[i];

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverTechSPart ***/
    sectionRaizConverTechSPart.appendChild(cardInferiorSPart);

    /*** cardSuperiorSPart é elemento-filho de cardInferiorSPart ***/
    cardInferiorSPart.appendChild(cardSuperiorSPart);

    /*** cardListaSPart é elemento-filho de cardSuperiorSPart ***/
    cardSuperiorSPart.appendChild(cardListaSPart);

    /*** cardListaItemSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemDescricaoSPart);

    /*** cardListaItemDescricaoSPart é elemento-filho de cardListaSPart ***/
    cardListaSPart.appendChild(cardListaItemContadorSPart);
  }
}