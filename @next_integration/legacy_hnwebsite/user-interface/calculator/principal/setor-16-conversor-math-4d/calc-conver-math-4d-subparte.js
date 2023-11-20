/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverMath4dSPart = "conver_math_4d__spart";
var classeTituloSPart = "conver_math_4d_titulo__spart";
var classeCardInferiorSPart = "card_conver_math_4d__inferior___spart";
var classeCardSuperiorSPart = "card_conver_math_4d__superior___spart";
var classeCardContadorSPart = "card_conver_math_4d_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de 4 Dimensões | Pt. ${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Math de 4 Dimensões | Pt. ${"0"+(x+1)}`;
  }

  sectionRaizConverMath4dSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasMath4d = [
  "Polegadas⁴",
  "Pés⁴",
  "Milhas⁴",
  "Milhas Náuticas⁴",
  "Angstrons⁴",
  "Fermis⁴",
  "Anos-luz⁴",
  "Parsecs⁴",
  "Braças⁴",
  "Jardas⁴",
  "Raios de Bohr⁴",
  "Varas⁴",
  "Mils⁴",
  "Yoctômetros⁴",
  "Zeptômetros⁴",
  "Attômetros⁴",
  "Fentômetros⁴",
  "Picômetros⁴",
  "Nanômetros⁴",
  "Micrômetros⁴",
  "Milímetros⁴",
  "Centímetros⁴",
  "Decímetros⁴",
  "Metros⁴",
  "Decâmetros⁴",
  "Hectômetros⁴",
  "Kilômetros⁴",
  "Megametros⁴",
  "Gigametros⁴",
  "Terametros⁴",
  "Petametros⁴",
  "Exametros⁴",
  "Zettametros⁴"
];

for (let u = 0; u < medidasMath4d.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasMath4d[u]} em Pés⁴`,
    `Conversor de Pés⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Milhas⁴`,
    `Conversor de Milhas⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Milhas Náuticas⁴`,
    `Conversor de Milhas Náuticas⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Angstrongs⁴`,
    `Conversor de Angstrongs⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Fermis⁴`,
    `Conversor de Fermis⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Anos-luz⁴`,
    `Conversor de Anos-luz⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Parsecs⁴`,
    `Conversor de Parsecs⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Braças⁴`,
    `Conversor de Braças⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Jardas⁴`,
    `Conversor de Jardas⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Raios de Bohr⁴`,
    `Conversor de Raios de Bohr⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Varas⁴`,
    `Conversor de Varas⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Mils⁴`,
    `Conversor de Mils⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Yoctômetros⁴`,
    `Conversor de Yoctômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Zeptômetros⁴`,
    `Conversor de Zeptômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Attômetros⁴`,
    `Conversor de Attômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Fentômetros⁴`,
    `Conversor de Fentômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Picômetros⁴`,
    `Conversor de Picômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Nanômetros⁴`,
    `Conversor de Nanômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Micrômetros⁴`,
    `Conversor de Micrômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Milímetros⁴`,
    `Conversor de Milímetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Centímetros⁴`,
    `Conversor de Centímetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Decímetros⁴`,
    `Conversor de Decímetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Metros⁴`,
    `Conversor de Metros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Decâmetros⁴`,
    `Conversor de Decâmetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Hectômetros⁴`,
    `Conversor de Hectômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Kilômetros⁴`,
    `Conversor de Kilômetros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Megametros⁴`,
    `Conversor de Megametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Gigametros⁴`,
    `Conversor de Gigametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Terametros⁴`,
    `Conversor de Terametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Petametros⁴`,
    `Conversor de Petametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Exametros⁴`,
    `Conversor de Exametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Zettametros⁴`,
    `Conversor de Zettametros⁴ em ${medidasMath4d[u]}`,
    `Conversor de ${medidasMath4d[u]} em Yottametros⁴`,
    `Conversor de Yottametros⁴ em ${medidasMath4d[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasMath4d[u]} em Pés⁴`,
    `Converte Pés⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Milhas⁴`,
    `Converte Milhas⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Milhas Náuticas⁴`,
    `Converte Milhas Náuticas⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Angstrongs⁴`,
    `Converte Angstrongs⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Fermis⁴`,
    `Converte Fermis⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Anos-luz⁴`,
    `Converte Anos-luz⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Parsecs⁴`,
    `Converte Parsecs⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Braças⁴`,
    `Converte Braças⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Jardas⁴`,
    `Converte Jardas⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Raios de Bohr⁴`,
    `Converte Raios de Bohr⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Varas⁴`,
    `Converte Varas⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Mils⁴`,
    `Converte Mils⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Yoctômetros⁴`,
    `Converte Yoctômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Zeptômetros⁴`,
    `Converte Zeptômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Attômetros⁴`,
    `Converte Attômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Fentômetros⁴`,
    `Converte Fentômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Picômetros⁴`,
    `Converte Picômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Nanômetros⁴`,
    `Converte Nanômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Micrômetros⁴`,
    `Converte Micrômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Milímetros⁴`,
    `Converte Milímetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Centímetros⁴`,
    `Converte Centímetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Decímetros⁴`,
    `Converte Decímetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Metros⁴`,
    `Converte Metros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Decâmetros⁴`,
    `Converte Decâmetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Hectômetros⁴`,
    `Converte Hectômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Kilômetros⁴`,
    `Converte Kilômetros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Megametros⁴`,
    `Converte Megametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Gigametros⁴`,
    `Converte Gigametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Terametros⁴`,
    `Converte Terametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Petametros⁴`,
    `Converte Petametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Exametros⁴`,
    `Converte Exametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Zettametros⁴`,
    `Converte Zettametros⁴ em ${medidasMath4d[u]}`,
    `Converte ${medidasMath4d[u]} em Yottametros⁴`,
    `Converte Yottametros⁴ em ${medidasMath4d[u]}`
  ];

  var contentsFuncionalidadesContadorSubParte = [];

  for (let i = 0; i < contentsFuncionalidadesSubParte.length; i++) {
    if (i >= 9) {
      contentsFuncionalidadesContadorSubParte.push(i + 1);
    } else {
      contentsFuncionalidadesContadorSubParte.push("0" + (i + 1));
    }
  }

  /** Section dos cards **/
  var sectionRaizConverMath4dSPart = document.createElement("section");

  sectionRaizConverMath4dSPart.classList.add(classeEIDSectionRaizConverMath4d);

  sectionRaizConverMath4dSPart.id = "conver_math_4d__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverMath4dSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverMath4dSPart = document.createElement("button");

  botaoRetornoConverMath4dSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverMath4dSPart.id = "botao_retorno_math_4d_part" + `_${u+1}`;

  botaoRetornoConverMath4dSPart.textContent = "Voltar à página anterior";

  sectionRaizConverMath4dSPart.appendChild(botaoRetornoConverMath4dSPart);

  tituloConstructor(u);

  /* Ajustador para a retirada dos Cards indevidos nas divisões */

  for (let i = 0; i < u; i++) {
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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverMath4dSPart ***/
    sectionRaizConverMath4dSPart.appendChild(cardInferiorSPart);

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