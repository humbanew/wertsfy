/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

/*
 * Ações ao carregar a página
 */

let dynamicLoader = new Dinamicador();
dynamicLoader.dynamicLoad();
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_tech_c_part", 13);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_an_p_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_an_s_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_c_part", 33);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_a_part", 38);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_v_part", 35);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_4d_part", 33);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_math_m_part", 21);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_tempo_part", 34);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_pressao_part", 47);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_frequencia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_forca_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_energia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_potencia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_carga_eletrica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_dif_pot_eletrico_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_capacitancia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_resistencia_eletrica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_condutancia_eletrica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_fluxo_inducao_magnetica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_inducao_magnetica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_indutancia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_fluxo_luminoso_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_physics_iluminancia_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_chemical_ativ_radionuc_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_chemical_dose_absorvida_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_chemical_dose_equivalente_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_chemical_atividade_catalitica_part", 20);
dynamicLoader.dynamicBotaoReturnFormatter("botao_retorno_chemical_massa_especifica_part", 25);

/*
 * Estilo do Botão de Retorno das Funcionalidades
 */

let dynamicButtonsStyle = new Dinamicador();
dynamicButtonsStyle.dynamicButtonStyle("botao_retorno__soma");
dynamicButtonsStyle.dynamicButtonStyle("botao_retorno__subtracao");

/*
 * Configurações dos Botões de Retorno
 */

/** Setor Principal **/

let dynamicButtons = new Dinamicador();
dynamicButtons.dynamicActionExterno(botaoRetornoCovencionais, "covencionais", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoTrigonometricos, "trigonometricas", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoArcosTrigonometricos, "arcos_trigonometricos", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoLogaritmos, "logaritmas", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverTech, "conver_tech", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverTechComp, "conver_tech_comp", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathAn, "conver_math_an", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathAnP, "conver_math_an_p", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathAnS, "conver_math_an_s", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathC, "conver_math_c", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathA, "conver_math_a", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathV, "conver_math_v", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMath4d, "conver_math_4d", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverMathM, "conver_math_m", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsTempo, "conver_physics_tempo", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsPressao, "conver_physics_pressao", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsTemperatura, "conver_physics_temperatura", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsFluxMag, "conver_physics_fluxo_magnetico", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsFreq, "conver_physics_frequencia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsForca, "conver_physics_forca", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsEnergia, "conver_physics_energia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsPotencia, "conver_physics_potencia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsCargaEletrica, "conver_physics_carga_eletrica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsDifPotEletrico, "conver_physics_dif_pot_eletrico", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsCapacitancia, "conver_physics_capacitancia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsResistEletrica, "conver_physics_resistencia_eletrica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsCondutEletrica, "conver_physics_condutancia_eletrica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsFluxoIndMag, "conver_physics_fluxo_inducao_magnetica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsIndMag, "conver_physics_inducao_magnetica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsIndutancia, "conver_physics_indutancia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsFluxoLuminoso, "conver_physics_fluxo_luminoso", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverPhysicsIluminancia, "conver_physics_iluminancia", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverChemicalAtivRadionuc, "conver_chemical_ativ_radionuc", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverChemicalDoseAbsorvida, "conver_chemical_dose_absorvida", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverChemicalDoseEquivalente, "conver_chemical_dose_equivalente", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverChemicalAtivCatalitica, "conver_chemical_atividade_catalitica", "calc_principal");
dynamicButtons.dynamicActionExterno(botaoRetornoConverChemicalMassaEspecifica, "conver_chemical_massa_especifica", "calc_principal");

/** Setor Covencionais **/
dynamicButtons.dynamicActionExternoComId("botao_retorno__soma", "covencionais_soma", "covencionais");
dynamicButtons.dynamicActionExternoComId("botao_retorno__subtracao", "covencionais_subtracao", "covencionais");

/** Setor Conver Tech Covencionais **/
for(let w = 0; w < 13; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_tech_c_part"+`_${w+1}`, "conver_tech__spart"+`_${w+1}`, "conver_tech");
}

/** Setor Conver Math de Ângulos Planos **/
for(let w = 0; w < 20; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_an_p_part"+`_${w+1}`, "conver_math_an_p__spart"+`_${w+1}`, "conver_math_an_p");
}

/** Setor Conver Math de Ângulos Sólidos **/
for(let w = 0; w < 20; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_an_s_part"+`_${w+1}`, "conver_math_an_s__spart"+`_${w+1}`, "conver_math_an_s");
}

/** Setor Conver Math de Comprimento **/
for(let w = 0; w < 33; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_c_part"+`_${w+1}`, "conver_math_c__spart"+`_${w+1}`, "conver_math_c");
}

/** Setor Conver Math de Área **/
for(let w = 0; w < 38; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_a_part"+`_${w+1}`, "conver_math_a__spart"+`_${w+1}`, "conver_math_a");
}

/** Setor Conver Math de Volume **/
for(let w = 0; w < 35; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_v_part"+`_${w+1}`, "conver_math_v__spart"+`_${w+1}`, "conver_math_v");
}

/** Setor Conver Math de 4 Dimensões **/
for(let w = 0; w < 33; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_4d_part"+`_${w+1}`, "conver_math_4d__spart"+`_${w+1}`, "conver_math_4d");
}

/** Setor Conver Math de Massa **/
for(let w = 0; w < 21; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_math_m_part"+`_${w+1}`, "conver_math_m__spart"+`_${w+1}`, "conver_math_m");
}

/** Setor Conver Physics de Tempo **/
for(let w = 0; w < 34; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_tempo_part"+`_${w+1}`, "conver_physics_tempo__spart"+`_${w+1}`, "conver_physics_tempo");
}

/** Setor Conver Physics de Pressão **/
for(let w = 0; w < 47; w++){
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_pressao_part"+`_${w+1}`, "conver_physics_pressao__spart"+`_${w+1}`, "conver_physics_pressao");
}

/** Setor Conver Physics de Frequência **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_frequencia_part"+`_${w + 1}`, "conver_physics_frequencia__spart"+`_${w + 1}`, "conver_physics_frequencia");
}

/** Setor Conver Physics de Força **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_forca_part"+`_${w + 1}`, "conver_physics_forca__spart"+`_${w + 1}`, "conver_physics_forca");
}

/** Setor Conver Physics de Energia **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_energia_part"+`_${w + 1}`, "conver_physics_energia__spart"+`_${w + 1}`, "conver_physics_energia");
}

/** Setor Conver Physics de Potência **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_potencia_part"+`_${w + 1}`, "conver_physics_potencia__spart"+`_${w + 1}`, "conver_physics_potencia");
}

/** Setor Conver Physics de Carga Elétrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_carga_eletrica_part" + `_${w + 1}`, "conver_physics_carga_eletrica__spart" + `_${w + 1}`, "conver_physics_carga_eletrica");
}

/** Setor Conver Physics da Diferença de Potencial Elétrico **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_dif_pot_eletrico_part" + `_${w + 1}`, "conver_physics_dif_pot_eletrico__spart" + `_${w + 1}`, "conver_physics_dif_pot_eletrico");
}

/** Setor Conver Physics de Capacitância Elétrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_capacitancia_part" + `_${w + 1}`, "conver_physics_capacitancia__spart" + `_${w + 1}`, "conver_physics_capacitancia");
}

/** Setor Conver Physics de Resistência Elétrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_resistencia_eletrica_part" + `_${w + 1}`, "conver_physics_resistencia_eletrica__spart" + `_${w + 1}`, "conver_physics_resistencia_eletrica");
}

/** Setor Conver Physics de Condutância Elétrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_condutancia_eletrica_part" + `_${w + 1}`, "conver_physics_condutancia_eletrica__spart" + `_${w + 1}`, "conver_physics_condutancia_eletrica");
}

/** Setor Conver Physics de Fluxo Indução Magnética **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_fluxo_inducao_magnetica_part" + `_${w + 1}`, "conver_physics_fluxo_inducao_magnetica__spart" + `_${w + 1}`, "conver_physics_fluxo_inducao_magnetica");
}

/** Setor Conver Physics de Indução Magnética **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_inducao_magnetica_part" + `_${w + 1}`, "conver_physics_inducao_magnetica__spart" + `_${w + 1}`, "conver_physics_inducao_magnetica");
}

/** Setor Conver Physics de Indutância **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_indutancia_part" + `_${w + 1}`, "conver_physics_indutancia__spart" + `_${w + 1}`, "conver_physics_indutancia");
}

/** Setor Conver Physics de Fluxo Luminoso **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_fluxo_luminoso_part" + `_${w + 1}`, "conver_physics_fluxo_luminoso__spart" + `_${w + 1}`, "conver_physics_fluxo_luminoso");
}

/** Setor Conver Physics de Iluminância **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_physics_iluminancia_part" + `_${w + 1}`, "conver_physics_iluminancia__spart" + `_${w + 1}`, "conver_physics_iluminancia");
}

/** Setor Conver Chemical da Atividade de um Radionuclídeo **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_chemical_ativ_radionuc_part" + `_${w + 1}`, "conver_chemical_ativ_radionuc__spart" + `_${w + 1}`, "conver_chemical_ativ_radionuc");
}

/** Setor Conver Chemical de Dose Absorvida **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_chemical_dose_absorvida_part" + `_${w + 1}`, "conver_chemical_dose_absorvida__spart" + `_${w + 1}`, "conver_chemical_dose_absorvida");
}

/** Setor Conver Chemical de Dose Equivalente **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_chemical_dose_equivalente_part" + `_${w + 1}`, "conver_chemical_dose_equivalente__spart" + `_${w + 1}`, "conver_chemical_dose_equivalente");
}

/** Setor Conver Chemical de Atividade Catalítica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_chemical_atividade_catalitica_part" + `_${w + 1}`, "conver_chemical_atividade_catalitica__spart" + `_${w + 1}`, "conver_chemical_atividade_catalitica");
}

/** Setor Conver Chemical de Massa Específica **/
for (let w = 0; w < 25; w++) {
  dynamicButtons.dynamicActionExternoSubPartes("botao_retorno_chemical_massa_especifica_part" + `_${w + 1}`, "conver_chemical_massa_especifica__spart" + `_${w + 1}`, "conver_chemical_massa_especifica");
}

/*
 * Interação dos Cards de Todos os Setores
 */

/** Setor Principal **/

let dynamicCards = new Dinamicador();
dynamicCards.dynamicCardsSelector("card_principal__inferior", 1, "calc_principal", "covencionais");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 2, "calc_principal", "trigonometricas");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 3, "calc_principal", "arcos_trigonometricos");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 4, "calc_principal", "logaritmas");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 5, "calc_principal", "conver_tech");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 6, "calc_principal", "conver_tech_comp");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 7, "calc_principal", "conver_math_an");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 8, "calc_principal", "conver_math_an_p");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 9, "calc_principal", "conver_math_an_s");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 10, "calc_principal", "conver_math_c");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 11, "calc_principal", "conver_math_a");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 12, "calc_principal", "conver_math_v");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 13, "calc_principal", "conver_math_4d");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 14, "calc_principal", "conver_math_m");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 15, "calc_principal", "conver_physics_tempo");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 16, "calc_principal", "conver_physics_pressao");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 17, "calc_principal", "conver_physics_temperatura");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 18, "calc_principal", "conver_physics_fluxo_magnetico");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 19, "calc_principal", "conver_physics_frequencia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 20, "calc_principal", "conver_physics_forca");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 21, "calc_principal", "conver_physics_energia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 22, "calc_principal", "conver_physics_potencia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 23, "calc_principal", "conver_physics_carga_eletrica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 24, "calc_principal", "conver_physics_dif_pot_eletrico");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 25, "calc_principal", "conver_physics_capacitancia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 26, "calc_principal", "conver_physics_resistencia_eletrica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 27, "calc_principal", "conver_physics_condutancia_eletrica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 28, "calc_principal", "conver_physics_fluxo_inducao_magnetica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 29, "calc_principal", "conver_physics_inducao_magnetica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 30, "calc_principal", "conver_physics_indutancia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 31, "calc_principal", "conver_physics_fluxo_luminoso");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 32, "calc_principal", "conver_physics_iluminancia");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 33, "calc_principal", "conver_chemical_ativ_radionuc");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 34, "calc_principal", "conver_chemical_dose_absorvida");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 35, "calc_principal", "conver_chemical_dose_equivalente");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 36, "calc_principal", "conver_chemical_atividade_catalitica");
dynamicCards.dynamicCardsSelector("card_principal__inferior", 37, "calc_principal", "conver_chemical_massa_especifica");

/** Setor Covencionais **/
dynamicCards.dynamicCardsSelector("card_covencionais__inferior", 0, "covencionais", "covencionais_soma");
dynamicCards.dynamicCardsSelector("card_covencionais__inferior", 1, "covencionais", "covencionais_subtracao");

/** Setor Conver Tech Covencionais **/
for (let w = 0; w < 13; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_tech__inferior", w, "conver_tech", "conver_tech__spart" + `_${w+1}`);
}

/** Setor Conver Math de Ângulos Planos **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_an_p__inferior", w, "conver_math_an_p", "conver_math_an_p__spart" + `_${w+1}`);
}

/** Setor Conver Math de Ângulos Sólidos **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_an_s__inferior", w, "conver_math_an_s", "conver_math_an_s__spart" + `_${w+1}`);
}

/** Setor Conver Math de Comprimento **/
for (let w = 0; w < 33; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_c__inferior", w, "conver_math_c", "conver_math_c__spart" + `_${w+1}`);
}

/** Setor Conver Math de Área **/
for (let w = 0; w < 38; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_a__inferior", w, "conver_math_a", "conver_math_a__spart" + `_${w+1}`);
}

/** Setor Conver Math de Volume **/
for (let w = 0; w < 35; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_v__inferior", w, "conver_math_v", "conver_math_v__spart" + `_${w+1}`);
}

/** Setor Conver Math de 4 Dimensões **/
for (let w = 0; w < 33; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_4d__inferior", w, "conver_math_4d", "conver_math_4d__spart" + `_${w+1}`);
}

/** Setor Conver Math de Massa **/
for (let w = 0; w < 21; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_math_m__inferior", w, "conver_math_m", "conver_math_m__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Tempo **/
for (let w = 0; w < 34; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_tempo__inferior", w, "conver_physics_tempo", "conver_physics_tempo__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Pressão **/
for (let w = 0; w < 47; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_pressao__inferior", w, "conver_physics_pressao", "conver_physics_pressao__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Frequência **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_frequencia__inferior", w, "conver_physics_frequencia", "conver_physics_frequencia__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Força **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_forca__inferior", w, "conver_physics_forca", "conver_physics_forca__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Energia **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_energia__inferior", w, "conver_physics_energia", "conver_physics_energia__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Potência **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_potencia__inferior", w, "conver_physics_potencia", "conver_physics_potencia__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Carga Elétrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_carga_eletrica__inferior", w, "conver_physics_carga_eletrica", "conver_physics_carga_eletrica__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Diferença de Potencial Elétrico **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_dif_pot_eletrico__inferior", w, "conver_physics_dif_pot_eletrico", "conver_physics_dif_pot_eletrico__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Capacitância Eletrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_capacitancia__inferior", w, "conver_physics_capacitancia", "conver_physics_capacitancia__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Resistência Eletrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_resistencia_eletrica__inferior", w, "conver_physics_resistencia_eletrica", "conver_physics_resistencia_eletrica__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Condutância Eletrica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_condutancia_eletrica__inferior", w, "conver_physics_condutancia_eletrica", "conver_physics_condutancia_eletrica__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Fluxo de Indução Magnética **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_fluxo_inducao_magnetica__inferior", w, "conver_physics_fluxo_inducao_magnetica", "conver_physics_fluxo_inducao_magnetica__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Indução Magnética **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_inducao_magnetica__inferior", w, "conver_physics_inducao_magnetica", "conver_physics_inducao_magnetica__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Indutância **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_indutancia__inferior", w, "conver_physics_indutancia", "conver_physics_indutancia__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Fluxo Luminoso **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_fluxo_luminoso__inferior", w, "conver_physics_fluxo_luminoso", "conver_physics_fluxo_luminoso__spart" + `_${w+1}`);
}

/** Setor Conver Physics de Iluminância **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_physics_iluminancia__inferior", w, "conver_physics_iluminancia", "conver_physics_iluminancia__spart" + `_${w + 1}`);
}

/** Setor Conver Chemical da Atividade de um Radionuclídeo **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_chemical_ativ_radionuc__inferior", w, "conver_chemical_ativ_radionuc", "conver_chemical_ativ_radionuc__spart" + `_${w + 1}`);
}

/** Setor Conver Chemical de Dose Absorvida **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_chemical_dose_absorvida__inferior", w, "conver_chemical_dose_absorvida", "conver_chemical_dose_absorvida__spart" + `_${w + 1}`);
}

/** Setor Conver Chemical de Dose Equivalente **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_chemical_dose_equivalente__inferior", w, "conver_chemical_dose_equivalente", "conver_chemical_dose_equivalente__spart" + `_${w + 1}`);
}

/** Setor Conver Chemical de Atividade Catalítica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_chemical_atividade_catalitica__inferior", w, "conver_chemical_atividade_catalitica", "conver_chemical_atividade_catalitica__spart" + `_${w + 1}`);
}

/** Setor Conver Chemical de Massa Específica **/
for (let w = 0; w < 20; w++) {
  dynamicButtons.dynamicCardsSelector("card_conver_chemical_massa_especifica__inferior", w, "conver_chemical_massa_especifica", "conver_chemical_massa_especifica__spart" + `_${w + 1}`);
}