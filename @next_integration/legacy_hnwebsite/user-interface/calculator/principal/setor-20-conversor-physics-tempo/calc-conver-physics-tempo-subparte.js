/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/* $$ Classes e IDs (subparte) $$ */

var classeEIDSectionRaizConverPhysicsTempoSPart = "conver_physics_tempo__spart";
var classeTituloSPart = "conver_physics_tempo_titulo__spart";
var classeCardInferiorSPart = "card_conver_physics_tempo__inferior___spart";
var classeCardSuperiorSPart = "card_conver_physics_tempo__superior___spart";
var classeCardContadorSPart = "card_conver_physics_tempo_contador__spart";

function tituloConstructor(x = 0) {
  /** Título da Section **/
  var tituloSPart = document.createElement("p");

  tituloSPart.classList.add(classeTituloSPart);

  if (x == typeof ("" || '' || ``)) {
    return;
  }

  if (x >= 9) {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Tempo | Pt.${x+1}`;
  } else {
    tituloSPart.textContent = `Funcionalidades de Conversão de Bases Physics de Tempo | Pt.${"0"+(x+1)}`;
  }

  sectionRaizConverPhysicsTempoSPart.appendChild(tituloSPart);
}

/*** Conteúdo de texto dos Cards Subparte ***/

var medidasPhysicsTempo = [
  "Milênios",
  "Séculos",
  "Décadas",
  "Biênios",
  "Anos",
  "Semestres",
  "Quadrimestres",
  "Trimestres",
  "Bimestres",
  "Meses",
  "Semanas",
  "Dias",
  "Horas",
  "Minutos",
  "Yoctôssegundos",
  "Zeptôssegundos",
  "Attôssegundos",
  "Fentôssegundos",
  "Picôssegundos",
  "Nanôssegundos",
  "Micrôssegundos",
  "Milíssegundos",
  "Centíssegundos",
  "Decíssegundos",
  "Segundos",
  "Decâssegundos",
  "Hectôssegundos",
  "Kilôssegundos",
  "Megassegundos",
  "Gigassegundos",
  "Terassegundos",
  "Petassegundos",
  "Exassegundos",
  "Zettassegundos"
];

for (let u = 0; u < medidasPhysicsTempo.length; u++) {

  var contentsFuncionalidadesSubParte = [
    `Conversor de ${medidasPhysicsTempo[u]} em Séculos`,
    `Conversor de Séculos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Décadas`,
    `Conversor de Décadas em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Biênios`,
    `Conversor de Biênios em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Anos`,
    `Conversor de Anos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Semestres`,
    `Conversor de Semestres em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Quadrimestres`,
    `Conversor de Quadrimestres em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Trimestres`,
    `Conversor de Trimestres em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Bimestres`,
    `Conversor de Bimestres em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Meses`,
    `Conversor de Meses em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Semanas`,
    `Conversor de Semanas em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Dias`,
    `Conversor de Dias em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Horas`,
    `Conversor de Horas em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Minutos`,
    `Conversor de Minutos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Yoctôssegundos`,
    `Conversor de Yoctôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Zeptôssegundos`,
    `Conversor de Zeptôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Attôssegundos`,
    `Conversor de Attôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Fentôssegundos`,
    `Conversor de Fentôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Picôssegundos`,
    `Conversor de Picôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Nanôssegundos`,
    `Conversor de Nanôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Micrôssegundos`,
    `Conversor de Micrôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Milíssegundos`,
    `Conversor de Milíssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Centíssegundos`,
    `Conversor de Centíssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Decíssegundos`,
    `Conversor de Decíssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Segundos`,
    `Conversor de ssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Decâssegundos`,
    `Conversor de Decâssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Hectôssegundos`,
    `Conversor de Hectôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Kilôssegundos`,
    `Conversor de Kilôssegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Megassegundos`,
    `Conversor de Megassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Gigassegundos`,
    `Conversor de Gigassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Terassegundos`,
    `Conversor de Terassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Petassegundos`,
    `Conversor de Petassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Exassegundos`,
    `Conversor de Exassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Zettassegundos`,
    `Conversor de Zettassegundos em ${medidasPhysicsTempo[u]}`,
    `Conversor de ${medidasPhysicsTempo[u]} em Yottassegundos`,
    `Conversor de Yottassegundos em ${medidasPhysicsTempo[u]}`
  ];

  var contentsFuncionalidadesDescricaoSubParte = [
    `Converte ${medidasPhysicsTempo[u]} em Séculos`,
    `Converte Séculos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Décadas`,
    `Converte Décadas em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Biênios`,
    `Converte Biênios em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Anos`,
    `Converte Anos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Semestres`,
    `Converte Semestres em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Quadrimestres`,
    `Converte Quadrimestres em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Trimestres`,
    `Converte Trimestres em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Bimestres`,
    `Converte Bimestres em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Meses`,
    `Converte Meses em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Semanas`,
    `Converte Semanas em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Dias`,
    `Converte Dias em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Horas`,
    `Converte Horas em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Minutos`,
    `Converte Minutos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Yoctôssegundos`,
    `Converte Yoctôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Zeptôssegundos`,
    `Converte Zeptôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Attôssegundos`,
    `Converte Attôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Fentôssegundos`,
    `Converte Fentôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Picôssegundos`,
    `Converte Picôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Nanôssegundos`,
    `Converte Nanôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Micrôssegundos`,
    `Converte Micrôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Milíssegundos`,
    `Converte Milíssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Centíssegundos`,
    `Converte Centíssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Decíssegundos`,
    `Converte Decíssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Segundos`,
    `Converte ssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Decâssegundos`,
    `Converte Decâssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Hectôssegundos`,
    `Converte Hectôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Kilôssegundos`,
    `Converte Kilôssegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Megassegundos`,
    `Converte Megassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Gigassegundos`,
    `Converte Gigassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Terassegundos`,
    `Converte Terassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Petassegundos`,
    `Converte Petassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Exassegundos`,
    `Converte Exassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Zettassegundos`,
    `Converte Zettassegundos em ${medidasPhysicsTempo[u]}`,
    `Converte ${medidasPhysicsTempo[u]} em Yottassegundos`,
    `Converte Yottassegundos em ${medidasPhysicsTempo[u]}`
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

  var sectionRaizConverPhysicsTempoSPart = document.createElement("section");

  sectionRaizConverPhysicsTempoSPart.classList.add(classeEIDSectionRaizConverPhysicsTempo);

  sectionRaizConverPhysicsTempoSPart.id = "conver_physics_tempo__spart" + `_${u+1}`;

  ui.appendChild(sectionRaizConverPhysicsTempoSPart);

  /** Botão de Retorno à página anterior **/

  var botaoRetornoConverPhysicsTempoSPart = document.createElement("button");

  botaoRetornoConverPhysicsTempoSPart.classList.add(classeEIDSectionBotao);

  botaoRetornoConverPhysicsTempoSPart.id = "botao_retorno_physics_tempo_part" + `_${u+1}`;

  botaoRetornoConverPhysicsTempoSPart.textContent = "Voltar à página anterior";

  sectionRaizConverPhysicsTempoSPart.appendChild(botaoRetornoConverPhysicsTempoSPart);

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

    /*** cardInferiorSPart é elemento-filho de sectionRaizConverPhysicsTempoSPart ***/
    sectionRaizConverPhysicsTempoSPart.appendChild(cardInferiorSPart);

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