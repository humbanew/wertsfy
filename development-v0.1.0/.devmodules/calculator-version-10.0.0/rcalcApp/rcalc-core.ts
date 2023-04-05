import { $calculoDaAceleracao, $calculoDaAceleracaoAngularMovimentoCircularUnifVariado, $calculoDaAceleracaoNoPlanoInclinadoEixoX, $calculoDaAceleracaoNoPlanoInclinadoEixoY, $calculoDaAlturaMaximaDeUmLancamentoVertical, $calculoDaCombinacao, $calculoDaConcentracao, $calculoDaContraForcaEletromotriz, $calculoDaDensidade, $calculoDaDeterminante2x2, $calculoDaDeterminante3x3, $calculoDaDilatacaoLinear, $calculoDaDilatacaoSuperficial, $calculoDaDilatacaoVolumetrica, $calculoDaEnergiaCinetica, $calculoDaEnergiaPotencialElastica, $calculoDaEnergiaPotencialGravitacional, $calculoDaEqHorariaDaAceleracao, $calculoDaEqHorariaDaForca, $calculoDaEqHorariaDaVelocidade, $calculoDaEqHorariaDoEspaco, $calculoDaEqHorariaDoTempo, $calculoDaEqHorariaDoTempoEspaco, $calculoDaEquacaoDeLagrange, $calculoDaEquacaoDeTorricelli, $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado, $calculoDaForcaEletromotriz, $calculoDaForcaGravitacional, $calculoDaFrequencia, $calculoDaLeiDeCoulomb, $calculoDaLeiDeLenz, $calculoDaLeiDeOhm, $calculoDaLeiGeralDosGases, $calculoDaPorcentagem, $calculoDaProbabilidade, $calculoDaRelacaoDeEuler, $calculoDaRelacaoPitagoricaT1, $calculoDaRelacaoPitagoricaT2, $calculoDaRelacaoPitagoricaT3, $calculoDasLeisDeNewton, $calculoDasPotenciasDeI, $calculoDaTemperatura, $calculoDaTitulacao, $calculoDaVelocidade, $calculoDeToricelliMovimentoCircularUnifVariado, $calculoDoAceleracaoCentripetaMovimentoCircularUniforme, $calculoDoAlcanceDeUmLancamentoVertical, $calculoDoAlcanceMaximoDeUmLancamentoVertical, $calculoDoArranjo, $calculoDoAtrito, $calculoDoCalorLatente, $calculoDoCalorSensivel, $calculoDoConjugadoDeUmNumeroComplexo, $calculoDoConsumoDeEnergia, $calculoDoEfeitoFotoeletrico, $calculoDoEfeitoJoule, $calculoDoEmpuxoDaHidroestaticaHidrodinamica, $calculoDoEspaco, $calculoDoFatorial, $calculoDoLancamentoHorizontal, $calculoDoPeriodo, $calculoDoPesoAparenteDaHidroestaticaHidrodinamica, $calculoDoPlanoInclinadoComAtrito, $calculoDoPlanoInclinadoSemAtrito, $calculoDoPotencialElastico, $calculoDoPotencialMecanico, $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica, $calculoDoRendimento, $calculoDoTempo, $calculoDoTeoremaDeBoltzmann, $calculoDoTeoremaDeCoulomb, $calculoDoTeoremaDePascal, $calculoDoTeoremaDePitagoras, $calculoDoTeoremaDePlanck, $calculoDoTeoremaDeStevin, $calculoDoTeoremaDeStirling, $calculoDoTeoremaDeTalesDeMileto, $calculoDoTrabalho, $calculoDoVelocidadeAngularMovimentoCircularUniforme, $calculoDoVelocidadeLinearMovimentoCircularUniforme, $cossenosDiretoresDeUmVetorR2, $cossenosDiretoresDeUmVetorR3, $divisaoDeVetoresR2, $divisaoDeVetoresR3, $divisaoMatrizes, $divisaoNumerosComplexos, $divisaoPolinomios, $formulaDeGirard, $jurosCompostos, $jurosSimples, $moduloDeUmVetorR2, $moduloDeUmVetorR3, $multiplicacaoMatrizes, $multiplicacaoNumerosComplexos, $multiplicacaoPolinomios, $pontoMedioDeUmVetorR2, $pontoMedioDeUmVetorR3, $potenciaNumerosComplexos, $produtoEscalarDeVetoresR2, $produtoEscalarDeVetoresR3, $projecaoDeUmVetorSobreOutroVetorR2, $projecaoDeUmVetorSobreOutroVetorR3, $quadradoDePunnet, $quadradoDePunnetExpandido, $regraDeTresComposta, $regraDeTresSimples, $sinalizacaoOctantes, $sinalizacaoQuadrantes, $sistemaDeEquacoes, $sistemaDeInequacoes, $sistemasLineares, $somaDeVetoresR2, $somaDeVetoresR3, $somaMatrizes, $somaNumerosComplexos, $somaPolinomios, $subtracaoDeVetoresR2, $subtracaoDeVetoresR3, $subtracaoMatrizes, $subtracaoNumerosComplexos, $subtracaoPolinomios, $versorDeUmVetorR2, $versorDeUmVetorR3, $vetorDaDistanciaEntreDoisPontosR2, $vetorDaDistanciaEntreDoisPontosR3 } from "./components/funcoes-algebricas";
import { $divisao, $multiplicacao, $potencia, $potenciaDePotencia, $raizBicubica, $raizBiquadrada, $raizCubica, $raizQuadrada, $raizTricubica, $raizTriquadrada, $soma, $subtracao } from "./components/funcoes-basicas";
import { $oitavoGrau, $primeiroGrau, $quartoGrau, $quintoGrau, $segundoGrau, $setimoGrau, $sextoGrau, $terceiroGrau } from "./components/funcoes-cartesianas";
import { $antilogaritmoBase10, $antilogaritmoBase10Hiperbolico, $antilogaritmoBase10Inverso, $antilogaritmoBase10InversoHiperbolico, $antilogaritmoBase2, $antilogaritmoBase2Hiperbolico, $antilogaritmoBase2Inverso, $antilogaritmoBase2InversoHiperbolico, $antilogaritmoBaseQualquer, $antilogaritmoBaseQualquerHiperbolico, $antilogaritmoBaseQualquerHiperbolicoMenosUm, $antilogaritmoBaseQualquerInverso, $antilogaritmoBaseQualquerInversoHiperbolico, $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm, $antilogaritmoBaseQualquerInversoMenosUm, $antilogaritmoBaseQualquerMenosUm, $antilogaritmoNatural, $antilogaritmoNaturalHiperbolico, $antilogaritmoNaturalHiperbolicoMaisUm, $antilogaritmoNaturalInverso, $antilogaritmoNaturalInversoHiperbolico, $antilogaritmoNaturalInversoHiperbolicoMaisUm, $antilogaritmoNaturalInversoMaisUm, $antilogaritmoNaturalMaisUm, $cologaritmoBase10, $cologaritmoBase10Hiperbolico, $cologaritmoBase10Inverso, $cologaritmoBase10InversoHiperbolico, $cologaritmoBase2, $cologaritmoBase2Hiperbolico, $cologaritmoBase2Inverso, $cologaritmoBase2InversoHiperbolico, $cologaritmoBaseQualquer, $cologaritmoBaseQualquerHiperbolico, $cologaritmoBaseQualquerHiperbolicoMaisUm, $cologaritmoBaseQualquerInverso, $cologaritmoBaseQualquerInversoHiperbolico, $cologaritmoBaseQualquerInversoHiperbolicoMaisUm, $cologaritmoBaseQualquerInversoMaisUm, $cologaritmoBaseQualquerMaisUm, $cologaritmoNatural, $cologaritmoNaturalHiperbolico, $cologaritmoNaturalHiperbolicoMaisUm, $cologaritmoNaturalInverso, $cologaritmoNaturalInversoHiperbolico, $cologaritmoNaturalInversoHiperbolicoMaisUm, $cologaritmoNaturalInversoMaisUm, $cologaritmoNaturalMaisUm, $exponencial, $exponencialHiperbolica, $exponencialHiperbolicaInversa, $exponencialHiperbolicaInversaMenosUm, $exponencialHiperbolicaMenosUm, $exponencialInversa, $exponencialInversaMenosUm, $exponencialMenosUm, $logaritmoBase10, $logaritmoBase10Hiperbolico, $logaritmoBase10Inverso, $logaritmoBase10InversoHiperbolico, $logaritmoBase2, $logaritmoBase2Hiperbolico, $logaritmoBase2Inverso, $logaritmoBase2InversoHiperbolico, $logaritmoBaseQualquer, $logaritmoBaseQualquerHiperbolico, $logaritmoBaseQualquerHiperbolicoMenosUm, $logaritmoBaseQualquerInverso, $logaritmoBaseQualquerInversoHiperbolico, $logaritmoBaseQualquerInversoHiperbolicoMenosUm, $logaritmoBaseQualquerInversoMenosUm, $logaritmoBaseQualquerMenosUm, $logaritmoNatural, $logaritmoNaturalHiperbolico, $logaritmoNaturalHiperbolicoMaisUm, $logaritmoNaturalInverso, $logaritmoNaturalInversoHiperbolico, $logaritmoNaturalInversoHiperbolicoMaisUm, $logaritmoNaturalInversoMaisUm, $logaritmoNaturalMaisUm } from "./components/funcoes-cientificas-avancadas";
import { $arccossecante, $arccossecanteHiperbolica, $arccossecanteHiperbolicaInversa, $arccossecanteInversa, $arccosseno, $arccossenoHiperbolico, $arccossenoHiperbolicoInverso, $arccossenoInverso, $arccotangente, $arccotangenteHiperbolica, $arccotangenteHiperbolicaInversa, $arccotangenteInversa, $arcsecante, $arcsecanteHiperbolica, $arcsecanteHiperbolicaInversa, $arcsecanteInversa, $arcseno, $arcsenoHiperbolico, $arcsenoHiperbolicoInverso, $arcsenoInverso, $arctangente, $arctangenteHiperbolica, $arctangenteHiperbolicoInversa, $arctangenteInversa, $cossecante, $cossecanteHiperbolica, $cossecanteHiperbolicaInversa, $cossecanteInversa, $cosseno, $cossenoHiperbolico, $cossenoHiperbolicoInverso, $cossenoInverso, $cotangente, $cotangenteHiperbolica, $cotangenteHiperbolicaInversa, $cotangenteInversa, $secante, $secanteHiperbolica, $secanteHiperbolicaInversa, $secanteInversa, $seno, $senoHiperbolico, $senoHiperbolicoInverso, $senoInverso, $tangente, $tangenteHiperbolica, $tangenteHiperbolicaInversa, $tangenteInversa } from "./components/funcoes-cientificas-basicas";
import { $calculoDaEscalaGeografica, $calculoDeDensidadePopulacional, $calculoDeGINI, $calculoDeIDH, $calculoDeIMC, $calculoDoDiagramaDeVennDe2Grupos, $calculoDoDiagramaDeVennDe3Grupos, $calculoDoDiagramaDeVennDe4Grupos, $calculoDosNumerosImpares, $calculoDosNumerosPares, $calculoDosNumerosPrimos, $criaJogoDaLotoFacil, $criaJogoDaLotoMania, $criaJogoDaMegaSena, $criaJogoDaQuadra, $criaJogoDaQuina, $numeroDeConjuntos } from "./components/funcoes-experimentais";
import { $apotemaDeUmTrianguloQualquer, $areaCilindroQualquer, $areaCirculoQualquer, $areaCircunferenciaQualquer, $areaConeQualquer, $areaDeUmaSuperficieQualquer, $areaDeUmParalelogramoQualquer, $areaDeUmPoligonoQualquer, $areaElipseQualquer, $areaEsferaQualquer, $areaLateralDeUmPrismaQualquer, $areaLozangoQualquer, $areaPiramideQualquer, $areaQuadradoQualquer, $areaRetanguloQualquer, $areaTrapezioQualquer, $areaTrianguloQualquer, $volumeDeUmaSuperficieQualquer, $volumeDeUmCilindroQualquer, $volumeDeUmConeQualquer, $volumeDeUmCuboQualquer, $volumeDeUmDodecaedroQualquer, $volumeDeUmEsferaQualquer, $volumeDeUmIcosaedroQualquer, $volumeDeUmOctaedroQualquer, $volumeDeUmParalelepipedoQualquer, $volumeDeUmPiramideQualquer, $volumeDeUmPoligonoFormatoLozangoQualquer, $volumeDeUmPoligonoFormatoTrapezioQualquer, $volumeDeUmPrismaQualquer, $volumeDeUmRombQualquer, $volumeDeUmTetraedroQualquer } from "./components/funcoes-geometricas";

export const rcalcCore = {

  funcoes: {

    basicas:  {

      soma: $soma,

      subtracao: $subtracao,

      multiplicacao: $multiplicacao,

      divisao: $divisao,

      potencia: $potencia,

      potenciaDePotencia: $potenciaDePotencia,

      raizQuadrada: $raizQuadrada,

      raizCubica: $raizCubica,

      raizBiquadrada: $raizBiquadrada,

      raizBicubica: $raizBicubica,

      raizTriquadrada: $raizTriquadrada,

      raizTricubica: $raizTricubica

    },

    cientificasBasicas: {

      seno: $seno,

      cosseno: $cosseno,

      tangente: $tangente,

      secante: $secante,

      cossecante: $cossecante,

      cotangente: $cotangente,
      
      senoInverso: $senoInverso,

      cossenoInverso: $cossenoInverso,

      tangenteInversa: $tangenteInversa,

      secanteInversa: $secanteInversa,

      cossecanteInversa: $cossecanteInversa,

      cotangenteInversa: $cotangenteInversa,

      senoHiperbolico: $senoHiperbolico,

      cossenoHiperbolico: $cossenoHiperbolico,

      tangenteHiperbolica: $tangenteHiperbolica,

      secanteHiperbolica: $secanteHiperbolica,

      cossecanteHiperbolica: $cossecanteHiperbolica,

      cotangenteHiperbolica: $cotangenteHiperbolica,

      senoHiperbolicoInverso: $senoHiperbolicoInverso,

      cossenoHiperbolicoInverso: $cossenoHiperbolicoInverso,

      tangenteHiperbolicoInverso: $tangenteHiperbolicaInversa,

      secanteHiperbolicaInversa: $secanteHiperbolicaInversa,

      cossecanteHiperbolicaInversa: $cossecanteHiperbolicaInversa,

      cotangenteHiperbolicaInversa: $cotangenteHiperbolicaInversa,

      arcseno: $arcseno,

      arccosseno: $arccosseno,

      arctangente: $arctangente,

      arcsecante: $arcsecante,

      arccossecante: $arccossecante,

      arccotangente: $arccotangente,

      arcsenoInverso: $arcsenoInverso,

      arccossenoInverso: $arccossenoInverso,

      arctangenteInversa: $arctangenteInversa,

      arcsecanteInversa: $arcsecanteInversa,

      arccossecanteInversa: $arccossecanteInversa,

      arccotangenteInversa: $arccotangenteInversa,

      arcsenoHiperbolico: $arcsenoHiperbolico,

      arccossenoHiperbolico: $arccossenoHiperbolico,

      arctangenteHiperbolica: $arctangenteHiperbolica,

      arcsecanteHiperbolica: $arcsecanteHiperbolica,

      arccossecanteHiperbolica: $arccossecanteHiperbolica,

      arccotangenteHiperbolica: $arccotangenteHiperbolica,

      arcsenoHiperbolicoInverso: $arcsenoHiperbolicoInverso,

      arccossenoHiperbolicoInverso: $arccossenoHiperbolicoInverso,

      arctangenteHiperbolicoInversa: $arctangenteHiperbolicoInversa,

      arcsecanteHiperbolicaInversa: $arcsecanteHiperbolicaInversa,

      arccossecanteHiperbolicaInversa: $arccossecanteHiperbolicaInversa,

      arccotangenteHiperbolicaInversa: $arccotangenteHiperbolicaInversa

    },

    cientificasAvancadas: {

      exponencial: $exponencial,

      exponencialMenosUm: $exponencialMenosUm,

      exponencialInversa: $exponencialInversa,

      exponencialInversaMenosUm: $exponencialInversaMenosUm,

      exponencialHiperbolica: $exponencialHiperbolica,

      exponencialHiperbolicaMenosUm: $exponencialHiperbolicaMenosUm,

      exponencialHiperbolicaInversa: $exponencialHiperbolicaInversa,

      exponencialHiperbolicaInversaMenosUm: $exponencialHiperbolicaInversaMenosUm,

      logaritmoNatural: $logaritmoNatural,

      logaritmoNaturalMaisUm: $logaritmoNaturalMaisUm,

      logaritmoBase10: $logaritmoBase10,

      logaritmoBase2: $logaritmoBase2,

      logaritmoBaseQualquer: $logaritmoBaseQualquer,

      logaritmoBaseQualquerMenosUm: $logaritmoBaseQualquerMenosUm,

      logaritmoNaturalInverso: $logaritmoNaturalInverso,

      logaritmoNaturalInversoMaisUm: $logaritmoNaturalInversoMaisUm,

      logaritmoBase10Inverso: $logaritmoBase10Inverso,

      logaritmoBase2Inverso: $logaritmoBase2Inverso,

      logaritmoBaseQualquerInverso: $logaritmoBaseQualquerInverso,

      logaritmoBaseQualquerInversoMenosUm: $logaritmoBaseQualquerInversoMenosUm,

      logaritmoNaturalHiperbolico: $logaritmoNaturalHiperbolico,

      logaritmoNaturalHiperbolicoMaisUm: $logaritmoNaturalHiperbolicoMaisUm,

      logaritmoBase10Hiperbolico: $logaritmoBase10Hiperbolico,

      logaritmoBase2Hiperbolico: $logaritmoBase2Hiperbolico,

      logaritmoBaseQualquerHiperbolico: $logaritmoBaseQualquerHiperbolico,

      logaritmoBaseQualquerHiperbolicoMenosUm: $logaritmoBaseQualquerHiperbolicoMenosUm,

      logaritmoNaturalInversoHiperbolico: $logaritmoNaturalInversoHiperbolico,

      logaritmoNaturalInversoHiperbolicoMaisUm: $logaritmoNaturalInversoHiperbolicoMaisUm,

      logaritmoBase10InversoHiperbolico: $logaritmoBase10InversoHiperbolico,

      logaritmoBase2InversoHiperbolico: $logaritmoBase2InversoHiperbolico,

      logaritmoBaseQualquerInversoHiperbolico: $logaritmoBaseQualquerInversoHiperbolico,

      logaritmoBaseQualquerInversoHiperbolicoMenosUm: $logaritmoBaseQualquerInversoHiperbolicoMenosUm,

      antilogaritmoNatural: $antilogaritmoNatural,

      antilogaritmoNaturalMaisUm: $antilogaritmoNaturalMaisUm,

      antilogaritmoBase10: $antilogaritmoBase10,

      antilogaritmoBase2: $antilogaritmoBase2,

      antilogaritmoBaseQualquer: $antilogaritmoBaseQualquer,

      antilogaritmoBaseQualquerMenosUm: $antilogaritmoBaseQualquerMenosUm,

      antilogaritmoNaturalInverso: $antilogaritmoNaturalInverso,

      antilogaritmoNaturalInversoMaisUm: $antilogaritmoNaturalInversoMaisUm,

      antilogaritmoBase10Inverso: $antilogaritmoBase10Inverso,

      antilogaritmoBase2Inverso: $antilogaritmoBase2Inverso,

      antilogaritmoBaseQualquerInverso: $antilogaritmoBaseQualquerInverso,

      antilogaritmoBaseQualquerInversoMenosUm: $antilogaritmoBaseQualquerInversoMenosUm,

      antilogaritmoNaturalHiperbolico: $antilogaritmoNaturalHiperbolico,

      antilogaritmoNaturalHiperbolicoMaisUm: $antilogaritmoNaturalHiperbolicoMaisUm,

      antilogaritmoBase10Hiperbolico: $antilogaritmoBase10Hiperbolico,

      antilogaritmoBase2Hiperbolico: $antilogaritmoBase2Hiperbolico,

      antilogaritmoBaseQualquerHiperbolico: $antilogaritmoBaseQualquerHiperbolico,

      antilogaritmoBaseQualquerHiperbolicoMenosUm: $antilogaritmoBaseQualquerHiperbolicoMenosUm,

      antilogaritmoNaturalInversoHiperbolico: $antilogaritmoNaturalInversoHiperbolico,

      antilogaritmoNaturalInversoHiperbolicoMaisUm: $antilogaritmoNaturalInversoHiperbolicoMaisUm,

      antilogaritmoBase10InversoHiperbolico: $antilogaritmoBase10InversoHiperbolico,

      antilogaritmoBase2InversoHiperbolico: $antilogaritmoBase2InversoHiperbolico,

      antilogaritmoBaseQualquerInversoHiperbolico: $antilogaritmoBaseQualquerInversoHiperbolico,

      antilogaritmoBaseQualquerInversoHiperbolicoMenosUm: $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm,

      cologaritmoNatural: $cologaritmoNatural,

      cologaritmoNaturalMaisUm: $cologaritmoNaturalMaisUm,

      cologaritmoBase10: $cologaritmoBase10,

      cologaritmoBase2: $cologaritmoBase2,

      cologaritmoBaseQualquer: $cologaritmoBaseQualquer,

      cologaritmoBaseQualquerMaisUm: $cologaritmoBaseQualquerMaisUm,

      cologaritmoNaturalInverso: $cologaritmoNaturalInverso,

      cologaritmoNaturalInversoMaisUm: $cologaritmoNaturalInversoMaisUm,

      cologaritmoBase10Inverso: $cologaritmoBase10Inverso,

      cologaritmoBase2Inverso: $cologaritmoBase2Inverso,

      cologaritmoBaseQualquerInverso: $cologaritmoBaseQualquerInverso,

      cologaritmoBaseQualquerInversoMaisUm: $cologaritmoBaseQualquerInversoMaisUm,

      cologaritmoNaturalHiperbolico: $cologaritmoNaturalHiperbolico,

      cologaritmoNaturalHiperbolicoMaisUm: $cologaritmoNaturalHiperbolicoMaisUm,

      cologaritmoBase10Hiperbolico: $cologaritmoBase10Hiperbolico,

      cologaritmoBase2Hiperbolico: $cologaritmoBase2Hiperbolico,

      cologaritmoBaseQualquerHiperbolico: $cologaritmoBaseQualquerHiperbolico,

      cologaritmoBaseQualquerHiperbolicoMaisUm: $cologaritmoBaseQualquerHiperbolicoMaisUm,

      cologaritmoNaturalInversoHiperbolico: $cologaritmoNaturalInversoHiperbolico,

      cologaritmoNaturalInversoHiperbolicoMaisUm: $cologaritmoNaturalInversoHiperbolicoMaisUm,

      cologaritmoBase10InversoHiperbolico: $cologaritmoBase10InversoHiperbolico,

      cologaritmoBase2InversoHiperbolico: $cologaritmoBase2InversoHiperbolico,

      cologaritmoBaseQualquerInversoHiperbolico: $cologaritmoBaseQualquerInversoHiperbolico,

      cologaritmoBaseQualquerInversoHiperbolicoMaisUm: $cologaritmoBaseQualquerInversoHiperbolicoMaisUm,

    },

    cartesianas: {

      primeiroGrau: $primeiroGrau,

      segundoGrau: $segundoGrau,

      terceiroGrau: $terceiroGrau,

      quartoGrau: $quartoGrau,

      quintoGrau: $quintoGrau,

      sextoGrau: $sextoGrau,

      setimoGrau: $setimoGrau,

      oitavoGrau: $oitavoGrau,

    },

    geometricas: {

      areaQuadradoQualquer: $areaQuadradoQualquer,

      areaTrianguloQualquer: $areaTrianguloQualquer,

      apotemaDeUmTrianguloQualquer: $apotemaDeUmTrianguloQualquer,

      areaRetanguloQualquer: $areaRetanguloQualquer,

      areaCirculoQualquer: $areaCirculoQualquer,

      areaElipseQualquer: $areaElipseQualquer,

      areaPiramideQualquer: $areaPiramideQualquer,

      areaTrapezioQualquer: $areaTrapezioQualquer,

      areaLozangoQualquer: $areaLozangoQualquer,

      areaDeUmaSuperficieQualquer: $areaDeUmaSuperficieQualquer,

      volumeDeUmaSuperficieQualquer: $volumeDeUmaSuperficieQualquer,

      areaEsferaQualquer: $areaEsferaQualquer,

      areaCilindroQualquer: $areaCilindroQualquer,

      areaConeQualquer: $areaConeQualquer,

      areaDeUmPoligonoQualquer: $areaDeUmPoligonoQualquer,

      volumeDeUmPoligonoFormatoLozangoQualquer: $volumeDeUmPoligonoFormatoLozangoQualquer,

      volumeDeUmPoligonoFormatoTrapezioQualquer: $volumeDeUmPoligonoFormatoTrapezioQualquer,

      areaDeUmParalelogramoQualquer: $areaDeUmParalelogramoQualquer,

      areaLateralDeUmPrismaQualquer: $areaLateralDeUmPrismaQualquer,

      volumeDeUmPrismaQualquer: $volumeDeUmPrismaQualquer,

      volumeDeUmCuboQualquer: $volumeDeUmCuboQualquer,

      volumeDeUmParalelepipedoQualquer: $volumeDeUmParalelepipedoQualquer,

      volumeDeUmPiramideQualquer: $volumeDeUmPiramideQualquer,

      volumeDeUmTetraedroQualquer: $volumeDeUmTetraedroQualquer,

      volumeDeUmOctaedroQualquer: $volumeDeUmOctaedroQualquer,

      volumeDeUmDodecaedroQualquer: $volumeDeUmDodecaedroQualquer,

      volumeDeUmIcosaedroQualquer: $volumeDeUmIcosaedroQualquer,

      volumeDeUmConeQualquer: $volumeDeUmConeQualquer,

      volumeDeUmCilindroQualquer: $volumeDeUmCilindroQualquer,

      volumeDeUmEsferaQualquer: $volumeDeUmEsferaQualquer,

      volumeDeUmRombQualquer: $volumeDeUmRombQualquer,

      areaCircunferenciaQualquer: $areaCircunferenciaQualquer

    },

    algebricos: {

      formulaDeGirard: $formulaDeGirard,

      calculoDoTeoremaDeTalesDeMileto: $calculoDoTeoremaDeTalesDeMileto,

      calculoDoTeoremaDePitagoras: $calculoDoTeoremaDePitagoras,

      calculoDaRelacaoPitagoricaT1: $calculoDaRelacaoPitagoricaT1,
      
      calculoDaRelacaoPitagoricaT2: $calculoDaRelacaoPitagoricaT2,

      calculoDaRelacaoPitagoricaT3: $calculoDaRelacaoPitagoricaT3,

      calculoDoFatorial: $calculoDoFatorial,

      calculoDaCombinacao: $calculoDaCombinacao,

      calculoDoArranjo: $calculoDoArranjo,

      calculoDaProbabilidade: $calculoDaProbabilidade,

      calculoDoConjugadoDeUmNumeroComplexo: $calculoDoConjugadoDeUmNumeroComplexo,

      calculoDoTeoremaDeStirling: $calculoDoTeoremaDeStirling,

      calculoDaRelacaoDeEuler: $calculoDaRelacaoDeEuler,

      calculoDasPotenciasDeI: $calculoDasPotenciasDeI,

      calculoDaPorcentagem: $calculoDaPorcentagem,

      calculoDaDeterminante2x2: $calculoDaDeterminante2x2,

      calculoDaDeterminante3x3: $calculoDaDeterminante3x3,

      somaPolinomios: $somaPolinomios,

      subtracaoPolinomios: $subtracaoPolinomios,

      multiplicacaoPolinomios: $multiplicacaoPolinomios,

      divisaoPolinomios: $divisaoPolinomios,

      somaMatrizes: $somaMatrizes,

      subtracaoMatrizes: $subtracaoMatrizes,

      multiplicacaoMatrizes: $multiplicacaoMatrizes,

      divisaoMatrizes: $divisaoMatrizes,

      calculoDaVelocidade: $calculoDaVelocidade,

      calculoDoEspaco: $calculoDoEspaco,

      calculoDoTempo: $calculoDoTempo,

      calculoDaAceleracao: $calculoDaAceleracao,

      calculoDaEqHorariaDoTempo: $calculoDaEqHorariaDoTempo,

      calculoDaEqHorariaDoEspaco: $calculoDaEqHorariaDoEspaco,

      calculoDaEqHorariaDaVelocidade: $calculoDaEqHorariaDaVelocidade,

      calculoDaEqHorariaDaAceleracao: $calculoDaEqHorariaDaAceleracao,

      calculoDaEqHorariaDaForca: $calculoDaEqHorariaDaForca,

      calculoDaEqHorariaDoTempoEspaco: $calculoDaEqHorariaDoTempoEspaco,

      calculoDaEnergiaCinetica: $calculoDaEnergiaCinetica,

      calculoDaEnergiaPotencialElastica: $calculoDaEnergiaPotencialElastica,

      calculoDaEnergiaPotencialGravitacional: $calculoDaEnergiaPotencialGravitacional,

      calculoDoPotencialMecanico: $calculoDoPotencialMecanico,

      calculoDoPotencialElastico: $calculoDoPotencialElastico,

      calculoDoPlanoInclinadoSemAtrito: $calculoDoPlanoInclinadoSemAtrito,

      calculoDoPlanoInclinadoComAtrito: $calculoDoPlanoInclinadoComAtrito,

      calculoDaAceleracaoNoPlanoInclinadoEixoX: $calculoDaAceleracaoNoPlanoInclinadoEixoX,

      calculoDaAceleracaoNoPlanoInclinadoEixoY: $calculoDaAceleracaoNoPlanoInclinadoEixoY,

      calculoDoLancamentoHorizontal: $calculoDoLancamentoHorizontal,

      calculoDaEquacaoDeTorricelli: $calculoDaEquacaoDeTorricelli,

      calculoDaAlturaMaximaDeUmLancamentoVertical: $calculoDaAlturaMaximaDeUmLancamentoVertical,

      calculoDoAlcanceDeUmLancamentoVertical: $calculoDoAlcanceDeUmLancamentoVertical,

      calculoDoAlcanceMaximoDeUmLancamentoVertical: $calculoDoAlcanceMaximoDeUmLancamentoVertical,

      calculoDoCalorSensivel: $calculoDoCalorSensivel,

      calculoDoCalorLatente: $calculoDoCalorLatente,

      calculoDasLeisDeNewton: $calculoDasLeisDeNewton,

      calculoDoTrabalho: $calculoDoTrabalho,

      calculoDoConsumoDeEnergia: $calculoDoConsumoDeEnergia,

      calculoDoTeoremaDePascal: $calculoDoTeoremaDePascal,

      calculoDoTeoremaDeStevin: $calculoDoTeoremaDeStevin,

      calculoDoTeoremaDeBoltzmann: $calculoDoTeoremaDeBoltzmann,

      calculoDoTeoremaDeCoulomb: $calculoDoTeoremaDeCoulomb,

      calculoDoTeoremaDePlanck: $calculoDoTeoremaDePlanck,

      calculoDaForcaGravitacional: $calculoDaForcaGravitacional,

      calculoDoAceleracaoCentripetaMovimentoCircularUniforme: $calculoDoAceleracaoCentripetaMovimentoCircularUniforme,

      calculoDoVelocidadeAngularMovimentoCircularUniforme: $calculoDoVelocidadeAngularMovimentoCircularUniforme,

      calculoDoVelocidadeLinearMovimentoCircularUniforme: $calculoDoVelocidadeLinearMovimentoCircularUniforme,

      calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado: $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado,

      calculoDeToricelliMovimentoCircularUnifVariado: $calculoDeToricelliMovimentoCircularUnifVariado,

      calculoDaAceleracaoAngularMovimentoCircularUnifVariado: $calculoDaAceleracaoAngularMovimentoCircularUnifVariado,

      calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples: $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples,

      calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples: $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples,

      calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples: $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples,

      calculoDoPeriodo: $calculoDoPeriodo,

      calculoDaFrequencia: $calculoDaFrequencia,

      calculoDaTemperatura: $calculoDaTemperatura,

      calculoDaDilatacaoLinear: $calculoDaDilatacaoLinear,

      calculoDaDilatacaoSuperficial: $calculoDaDilatacaoSuperficial,

      calculoDaDilatacaoVolumetrica: $calculoDaDilatacaoVolumetrica,

      calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica: $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica,

      calculoDoEmpuxoDaHidroestaticaHidrodinamica: $calculoDoEmpuxoDaHidroestaticaHidrodinamica,

      calculoDoPesoAparenteDaHidroestaticaHidrodinamica: $calculoDoPesoAparenteDaHidroestaticaHidrodinamica,

      calculoDaEquacaoDeLagrange: $calculoDaEquacaoDeLagrange,
      
      calculoDoAtrito: $calculoDoAtrito,

      calculoDaLeiDeCoulomb: $calculoDaLeiDeCoulomb,

      calculoDaLeiDeOhm: $calculoDaLeiDeOhm,

      calculoDoEfeitoJoule: $calculoDoEfeitoJoule,

      calculoDaLeiDeLenz: $calculoDaLeiDeLenz,

      calculoDaForcaEletromotriz: $calculoDaForcaEletromotriz,

      calculoDaContraForcaEletromotriz: $calculoDaContraForcaEletromotriz,

      calculoDoEfeitoFotoeletrico: $calculoDoEfeitoFotoeletrico,

      calculoDaDensidade: $calculoDaDensidade,

      calculoDaTitulacao: $calculoDaTitulacao,

      calculoDaConcentracao: $calculoDaConcentracao,

      calculoDoRendimento: $calculoDoRendimento,

      calculoDaLeiGeralDosGases: $calculoDaLeiGeralDosGases,

      regraDeTresSimples: $regraDeTresSimples,

      regraDeTresComposta: $regraDeTresComposta,

      sistemaDeEquacoes: $sistemaDeEquacoes,

      sistemaDeInequacoes: $sistemaDeInequacoes,

      sistemasLineares: $sistemasLineares,

      somaNumerosComplexos: $somaNumerosComplexos,

      subtracaoNumerosComplexos: $subtracaoNumerosComplexos,

      multiplicacaoNumerosComplexos: $multiplicacaoNumerosComplexos,

      divisaoNumerosComplexos: $divisaoNumerosComplexos,

      potenciaNumerosComplexos: $potenciaNumerosComplexos,

      jurosSimples: $jurosSimples,

      jurosCompostos: $jurosCompostos,

      vetorDaDistanciaEntreDoisPontosR2: $vetorDaDistanciaEntreDoisPontosR2,

      vetorDaDistanciaEntreDoisPontosR3: $vetorDaDistanciaEntreDoisPontosR3,

      moduloDeUmVetorR2: $moduloDeUmVetorR2,

      moduloDeUmVetorR3: $moduloDeUmVetorR3,

      versorDeUmVetorR2: $versorDeUmVetorR2,

      versorDeUmVetorR3: $versorDeUmVetorR3,

      projecaoDeUmVetorSobreOutroVetorR2: $projecaoDeUmVetorSobreOutroVetorR2,

      projecaoDeUmVetorSobreOutroVetorR3: $projecaoDeUmVetorSobreOutroVetorR3,

      somaDeVetoresR2: $somaDeVetoresR2,

      somaDeVetoresR3: $somaDeVetoresR3,

      subtracaoDeVetoresR2: $subtracaoDeVetoresR2,

      subtracaoDeVetoresR3: $subtracaoDeVetoresR3,

      produtoEscalarDeVetoresR2: $produtoEscalarDeVetoresR2,

      produtoEscalarDeVetoresR3: $produtoEscalarDeVetoresR3,

      divisaoDeVetoresR2: $divisaoDeVetoresR2,

      divisaoDeVetoresR3: $divisaoDeVetoresR3,

      pontoMedioDeUmVetorR2: $pontoMedioDeUmVetorR2,

      pontoMedioDeUmVetorR3: $pontoMedioDeUmVetorR3,

      cossenosDiretoresDeUmVetorR2: $cossenosDiretoresDeUmVetorR2,

      cossenosDiretoresDeUmVetorR3: $cossenosDiretoresDeUmVetorR3,

      sinalizacaoQuadrantes: $sinalizacaoQuadrantes,

      sinalizacaoOctantes: $sinalizacaoOctantes,

      quadradoDePunnet: $quadradoDePunnet,

      quadradoDePunnetExpandido: $quadradoDePunnetExpandido

    },

    experimentais: {

      calculoDaEscalaGeografica: $calculoDaEscalaGeografica,
    
      calculoDeIDH: $calculoDeIDH,

      calculoDeGINI: $calculoDeGINI,

      calculoDeIMC: $calculoDeIMC,

      calculoDeDensidadePopulacional: $calculoDeDensidadePopulacional,

      calculoDosNumerosPares: $calculoDosNumerosPares,

      calculoDosNumerosImpares: $calculoDosNumerosImpares,

      numeroDeConjuntos: $numeroDeConjuntos,

      criaJogoDaMegaSena: $criaJogoDaMegaSena,

      criaJogoDaQuina: $criaJogoDaQuina,

      criaJogoDaQuadra: $criaJogoDaQuadra,

      criaJogoDaLotoFacil: $criaJogoDaLotoFacil,

      criaJogoDaLotoMania: $criaJogoDaLotoMania,

      calculoDoDiagramaDeVennDe2Nucleos: $calculoDoDiagramaDeVennDe2Grupos,

      calculoDoDiagramaDeVennDe3Nucleos: $calculoDoDiagramaDeVennDe3Grupos,
      
      calculoDoDiagramaDeVennDe4Nucleos: $calculoDoDiagramaDeVennDe4Grupos,

      calculoDosNumerosPrimos: $calculoDosNumerosPrimos,

    }

  }

};
