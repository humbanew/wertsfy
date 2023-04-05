"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$calculoDoCalorSensivel = exports.$calculoDoAlcanceMaximoDeUmLancamentoVertical = exports.$calculoDoAlcanceDeUmLancamentoVertical = exports.$calculoDaAlturaMaximaDeUmLancamentoVertical = exports.$calculoDaEquacaoDeTorricelli = exports.$calculoDoLancamentoHorizontal = exports.$calculoDaAceleracaoNoPlanoInclinadoEixoY = exports.$calculoDaAceleracaoNoPlanoInclinadoEixoX = exports.$calculoDoPlanoInclinadoComAtrito = exports.$calculoDoPlanoInclinadoSemAtrito = exports.$calculoDoPotencialElastico = exports.$calculoDoPotencialMecanico = exports.$calculoDaEnergiaPotencialGravitacional = exports.$calculoDaEnergiaPotencialElastica = exports.$calculoDaEnergiaCinetica = exports.$calculoDaEqHorariaDoTempoEspaco = exports.$calculoDaEqHorariaDaForca = exports.$calculoDaEqHorariaDaAceleracao = exports.$calculoDaEqHorariaDaVelocidade = exports.$calculoDaEqHorariaDoEspaco = exports.$calculoDaEqHorariaDoTempo = exports.$calculoDaAceleracao = exports.$calculoDoTempo = exports.$calculoDoEspaco = exports.$calculoDaVelocidade = exports.$divisaoMatrizes = exports.$multiplicacaoMatrizes = exports.$subtracaoMatrizes = exports.$somaMatrizes = exports.$divisaoPolinomios = exports.$multiplicacaoPolinomios = exports.$subtracaoPolinomios = exports.$somaPolinomios = exports.$calculoDaDeterminante3x3 = exports.$calculoDaDeterminante2x2 = exports.$calculoDaPorcentagem = exports.$calculoDasPotenciasDeI = exports.$calculoDaRelacaoDeEuler = exports.$calculoDoTeoremaDeStirling = exports.$calculoDoConjugadoDeUmNumeroComplexo = exports.$calculoDaProbabilidade = exports.$calculoDoArranjo = exports.$calculoDaCombinacao = exports.$calculoDoFatorial = exports.$calculoDaRelacaoPitagoricaT3 = exports.$calculoDaRelacaoPitagoricaT2 = exports.$calculoDaRelacaoPitagoricaT1 = exports.$calculoDoTeoremaDePitagoras = exports.$calculoDoTeoremaDeTalesDeMileto = exports.$formulaDeGirard = void 0;
exports.$subtracaoNumerosComplexos = exports.$somaNumerosComplexos = exports.$sistemasLineares = exports.$sistemaDeInequacoes = exports.$sistemaDeEquacoes = exports.$regraDeTresComposta = exports.$regraDeTresSimples = exports.$calculoDaLeiGeralDosGases = exports.$calculoDoRendimento = exports.$calculoDaConcentracao = exports.$calculoDaTitulacao = exports.$calculoDaDensidade = exports.$calculoDoEfeitoFotoeletrico = exports.$calculoDaContraForcaEletromotriz = exports.$calculoDaForcaEletromotriz = exports.$calculoDaLeiDeLenz = exports.$calculoDoEfeitoJoule = exports.$calculoDaLeiDeOhm = exports.$calculoDaLeiDeCoulomb = exports.$calculoDoAtrito = exports.$calculoDaEquacaoDeLagrange = exports.$calculoDoPesoAparenteDaHidroestaticaHidrodinamica = exports.$calculoDoEmpuxoDaHidroestaticaHidrodinamica = exports.$calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica = exports.$calculoDaDilatacaoVolumetrica = exports.$calculoDaDilatacaoSuperficial = exports.$calculoDaDilatacaoLinear = exports.$calculoDaTemperatura = exports.$calculoDaFrequencia = exports.$calculoDoPeriodo = exports.$calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples = exports.$calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples = exports.$calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples = exports.$calculoDaAceleracaoAngularMovimentoCircularUnifVariado = exports.$calculoDeToricelliMovimentoCircularUnifVariado = exports.$calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado = exports.$calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado = exports.$calculoDoVelocidadeLinearMovimentoCircularUniforme = exports.$calculoDoVelocidadeAngularMovimentoCircularUniforme = exports.$calculoDoAceleracaoCentripetaMovimentoCircularUniforme = exports.$calculoDaForcaGravitacional = exports.$calculoDoTeoremaDePlanck = exports.$calculoDoTeoremaDeCoulomb = exports.$calculoDoTeoremaDeBoltzmann = exports.$calculoDoTeoremaDeStevin = exports.$calculoDoTeoremaDePascal = exports.$calculoDoConsumoDeEnergia = exports.$calculoDoTrabalho = exports.$calculoDasLeisDeNewton = exports.$calculoDoCalorLatente = void 0;
exports.$quadradoDePunnetExpandido = exports.$quadradoDePunnet = exports.$sinalizacaoOctantes = exports.$sinalizacaoQuadrantes = exports.$cossenosDiretoresDeUmVetorR3 = exports.$cossenosDiretoresDeUmVetorR2 = exports.$pontoMedioDeUmVetorR3 = exports.$pontoMedioDeUmVetorR2 = exports.$divisaoDeVetoresR3 = exports.$divisaoDeVetoresR2 = exports.$produtoEscalarDeVetoresR3 = exports.$produtoEscalarDeVetoresR2 = exports.$subtracaoDeVetoresR3 = exports.$subtracaoDeVetoresR2 = exports.$somaDeVetoresR3 = exports.$somaDeVetoresR2 = exports.$projecaoDeUmVetorSobreOutroVetorR3 = exports.$projecaoDeUmVetorSobreOutroVetorR2 = exports.$versorDeUmVetorR3 = exports.$versorDeUmVetorR2 = exports.$moduloDeUmVetorR3 = exports.$moduloDeUmVetorR2 = exports.$vetorDaDistanciaEntreDoisPontosR3 = exports.$vetorDaDistanciaEntreDoisPontosR2 = exports.$jurosCompostos = exports.$jurosSimples = exports.$potenciaNumerosComplexos = exports.$divisaoNumerosComplexos = exports.$multiplicacaoNumerosComplexos = void 0;
function $formulaDeGirard(expressao) {
    let resultado = [], valores = [];
    let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
    let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
    let pegaTergosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
    let valoresConvertidos = [];
    if (verificacao == null) {
        return console.error("Expressão Adicionada é Inválida ou está incorreta!");
    }
    valores.push(expressao.match(pegaTermosComIcognita), expressao.match(pegaTergosSemIcognita).toString());
    for (let i = 0; i < valores[0].length; i++) {
        valores[0][i] = parseFloat(valores[0][i]);
        valoresConvertidos.push(valores[0][i]);
    }
    valores[1] = parseFloat(valores[1]);
    valoresConvertidos.push(valores[1]);
    for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
        let verificadorSinal = i % 2;
        if (verificadorSinal == 0) {
            resultado.push(valoresConvertidos[i] / valoresConvertidos[0]);
        }
        if (verificadorSinal == 1) {
            resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0]));
        }
    }
    return resultado;
}
exports.$formulaDeGirard = $formulaDeGirard;
function $calculoDoTeoremaDeTalesDeMileto(valorMultiplicadoPorX, valorNormal) {
    let resultado = valorNormal / valorMultiplicadoPorX;
    return resultado;
}
exports.$calculoDoTeoremaDeTalesDeMileto = $calculoDoTeoremaDeTalesDeMileto;
function $calculoDoTeoremaDePitagoras(a, b) {
    let resultado = Math.sqrt(((a ** 2) + (b ** 2)));
    return resultado;
}
exports.$calculoDoTeoremaDePitagoras = $calculoDoTeoremaDePitagoras;
function $calculoDaRelacaoPitagoricaT1(m, n) {
    let resultado = Math.sqrt(m * n);
    return resultado;
}
exports.$calculoDaRelacaoPitagoricaT1 = $calculoDaRelacaoPitagoricaT1;
function $calculoDaRelacaoPitagoricaT2(a, n) {
    let resultado = Math.sqrt(a * n);
    return resultado;
}
exports.$calculoDaRelacaoPitagoricaT2 = $calculoDaRelacaoPitagoricaT2;
function $calculoDaRelacaoPitagoricaT3(h, b, c) {
    let resultado = (b * c) / h;
    return resultado;
}
exports.$calculoDaRelacaoPitagoricaT3 = $calculoDaRelacaoPitagoricaT3;
function $calculoDoFatorial(valor) {
    let resultado = 1;
    for (let i = valor; i > 0; i--) {
        resultado = i * resultado;
    }
    ;
    return resultado;
}
exports.$calculoDoFatorial = $calculoDoFatorial;
function $calculoDaCombinacao(total, divisor) {
    let resultado = 0;
    let totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) {
        totalConvertido = totalConvertido * i;
    }
    for (let j = divisor; j > 0; j--) {
        divisorConvertido = divisorConvertido * j;
    }
    resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
    return resultado;
}
exports.$calculoDaCombinacao = $calculoDaCombinacao;
function $calculoDoArranjo(total, divisor) {
    let resultado = 0;
    let totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) {
        totalConvertido = totalConvertido * i;
    }
    for (let j = divisor; j > 0; j--) {
        divisorConvertido = divisorConvertido * j;
    }
    resultado = totalConvertido / (totalConvertido - divisorConvertido);
    return resultado;
}
exports.$calculoDoArranjo = $calculoDoArranjo;
function $calculoDaProbabilidade(valor, valorTotal) {
    let resultado = valor / valorTotal;
    return resultado;
}
exports.$calculoDaProbabilidade = $calculoDaProbabilidade;
function $calculoDoConjugadoDeUmNumeroComplexo(expressao) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) {
        expressao.replace("-", '');
    }
    resultado = expressao;
    return resultado;
}
exports.$calculoDoConjugadoDeUmNumeroComplexo = $calculoDoConjugadoDeUmNumeroComplexo;
function $calculoDoTeoremaDeStirling(valor) {
    let resultado = 0;
    resultado = (Math.log(valor) * valor) / valor;
    return resultado;
}
exports.$calculoDoTeoremaDeStirling = $calculoDoTeoremaDeStirling;
function $calculoDaRelacaoDeEuler(vertices, arestas, faces) {
    let resultado = (vertices - (arestas + faces)) - 2;
    return resultado;
}
exports.$calculoDaRelacaoDeEuler = $calculoDaRelacaoDeEuler;
function $calculoDasPotenciasDeI(valor) {
    let resultado = '', divisor = valor % 4;
    if (divisor == 0) {
        resultado = 'i';
    }
    if (divisor == 1) {
        resultado = '-1';
    }
    if (divisor == 2) {
        resultado = '-i';
    }
    if (divisor == 3) {
        resultado = '1';
    }
    return resultado;
}
exports.$calculoDasPotenciasDeI = $calculoDasPotenciasDeI;
function $calculoDaPorcentagem(valorParte, valorTotal) {
    let resultado = valorParte / valorTotal;
    return resultado;
}
exports.$calculoDaPorcentagem = $calculoDaPorcentagem;
function $calculoDaDeterminante2x2(a00, a01, a10, a11) {
    let resultado = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
    resultado = vetorPrimario - vetorSecundario;
    return resultado;
}
exports.$calculoDaDeterminante2x2 = $calculoDaDeterminante2x2;
function $calculoDaDeterminante3x3(a00, a01, a02, a10, a11, a12, a20, a21, a22) {
    let resultado = 0;
    // 00 01 02  00 01
    // 10 11 12  10 11
    // 20 21 22  20 21
    let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;
    let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;
    resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
    return resultado;
}
exports.$calculoDaDeterminante3x3 = $calculoDaDeterminante3x3;
function $somaPolinomios(polinomio1, polinomio2) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) {
        polinomio1.replace("-", '');
    }
    if (verificaSinal != null) {
        polinomio2.replace("-", '');
    }
    resultado = polinomio1 + '+' + polinomio2;
    return resultado;
}
exports.$somaPolinomios = $somaPolinomios;
function $subtracaoPolinomios(polinomio1, polinomio2) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) {
        polinomio1.replace("-", '');
    }
    if (verificaSinal != null) {
        polinomio2.replace("-", '');
    }
    resultado = polinomio1 + '-' + polinomio2;
    return resultado;
}
exports.$subtracaoPolinomios = $subtracaoPolinomios;
function $multiplicacaoPolinomios(polinomio1, polinomio2) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) {
        polinomio1.replace("-", '');
    }
    if (verificaSinal != null) {
        polinomio2.replace("-", '');
    }
    resultado = polinomio1 + '*' + polinomio2;
    return resultado;
}
exports.$multiplicacaoPolinomios = $multiplicacaoPolinomios;
function $divisaoPolinomios(polinomio1, polinomio2) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) {
        polinomio1.replace("-", '');
    }
    if (verificaSinal != null) {
        polinomio2.replace("-", '');
    }
    resultado = polinomio1 + '/' + polinomio2;
    return resultado;
}
exports.$divisaoPolinomios = $divisaoPolinomios;
function $somaMatrizes(matriz, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            resultado[i][j] = matriz[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}
exports.$somaMatrizes = $somaMatrizes;
function $subtracaoMatrizes(matriz, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            resultado[i][j] = matriz[i][j] - matriz2[i][j];
        }
    }
    return resultado;
}
exports.$subtracaoMatrizes = $subtracaoMatrizes;
function $multiplicacaoMatrizes(matriz, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[0][j] != matriz2[i]) {
                return "Matrizes não podem ser multiplicadas";
            }
            resultado[i][j] = matriz[i][j] * matriz2[i][j];
        }
    }
    return resultado;
}
exports.$multiplicacaoMatrizes = $multiplicacaoMatrizes;
function $divisaoMatrizes(matriz, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            resultado[i][j] = matriz[i][j] / matriz2[i][j];
        }
    }
    return resultado;
}
exports.$divisaoMatrizes = $divisaoMatrizes;
function $calculoDaVelocidade(espaco, tempo) {
    let resultado = espaco / tempo;
    return resultado;
}
exports.$calculoDaVelocidade = $calculoDaVelocidade;
function $calculoDoEspaco(velocidade, tempo) {
    let resultado = velocidade * tempo;
    return resultado;
}
exports.$calculoDoEspaco = $calculoDoEspaco;
function $calculoDoTempo(velocidade, espaco) {
    let resultado = espaco / velocidade;
    return resultado;
}
exports.$calculoDoTempo = $calculoDoTempo;
function $calculoDaAceleracao(velocidade, tempo) {
    let resultado = velocidade / tempo;
    return resultado;
}
exports.$calculoDaAceleracao = $calculoDaAceleracao;
function $calculoDaEqHorariaDoTempo(tempo, tempoInicial, velocidade, aceleracao) {
    let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
    return resultado;
}
exports.$calculoDaEqHorariaDoTempo = $calculoDaEqHorariaDoTempo;
function $calculoDaEqHorariaDoEspaco(espaco, espacoInicial, aceleracao) {
    let resultado = espacoInicial + aceleracao * espaco;
    return resultado;
}
exports.$calculoDaEqHorariaDoEspaco = $calculoDaEqHorariaDoEspaco;
function $calculoDaEqHorariaDaVelocidade(velocidade, tempo, aceleracao) {
    let resultado = velocidade + aceleracao * tempo;
    return resultado;
}
exports.$calculoDaEqHorariaDaVelocidade = $calculoDaEqHorariaDaVelocidade;
function $calculoDaEqHorariaDaAceleracao(aceleracao, tempo, velocidade) {
    let resultado = aceleracao + (velocidade * tempo);
    return resultado;
}
exports.$calculoDaEqHorariaDaAceleracao = $calculoDaEqHorariaDaAceleracao;
function $calculoDaEqHorariaDaForca(forca, tempo, aceleracao) {
    let resultado = forca + (aceleracao * tempo);
    return resultado;
}
exports.$calculoDaEqHorariaDaForca = $calculoDaEqHorariaDaForca;
function $calculoDaEqHorariaDoTempoEspaco(tempo, espaco, tempoInicial, espacoInicial, velocidade, aceleracao) {
    let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
    return resultado;
}
exports.$calculoDaEqHorariaDoTempoEspaco = $calculoDaEqHorariaDoTempoEspaco;
function $calculoDaEnergiaCinetica(massa, velocidade) {
    let resultado = (massa * velocidade ** 2) / 2;
    return resultado;
}
exports.$calculoDaEnergiaCinetica = $calculoDaEnergiaCinetica;
function $calculoDaEnergiaPotencialElastica(constanteElastica, distancia) {
    let resultado = (constanteElastica * distancia ** 2) / 2;
    return resultado;
}
exports.$calculoDaEnergiaPotencialElastica = $calculoDaEnergiaPotencialElastica;
function $calculoDaEnergiaPotencialGravitacional(massa, gravidade, altura) {
    let resultado = massa * gravidade * altura;
    return resultado;
}
exports.$calculoDaEnergiaPotencialGravitacional = $calculoDaEnergiaPotencialGravitacional;
function $calculoDoPotencialMecanico(velocidade, constanteElastica, distancia, massa, gravidade, altura, energPotElas, energPotGrav) {
    let resultado = 0;
    if (energPotElas == true) {
        resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia);
    }
    if (energPotGrav == true) {
        resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialGravitacional(massa, gravidade, altura);
    }
    return resultado;
}
exports.$calculoDoPotencialMecanico = $calculoDoPotencialMecanico;
function $calculoDoPotencialElastico(constanteElastica, distancia) {
    let resultado = this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia);
    return resultado;
}
exports.$calculoDoPotencialElastico = $calculoDoPotencialElastico;
function $calculoDoPlanoInclinadoSemAtrito(massa, gravidade) {
    let resultado = massa * gravidade;
    return resultado;
}
exports.$calculoDoPlanoInclinadoSemAtrito = $calculoDoPlanoInclinadoSemAtrito;
function $calculoDoPlanoInclinadoComAtrito(forcaDeAtrito, massa, gravidade, angulo) {
    let resultado = forcaDeAtrito * massa * gravidade * angulo;
    return resultado;
}
exports.$calculoDoPlanoInclinadoComAtrito = $calculoDoPlanoInclinadoComAtrito;
function $calculoDaAceleracaoNoPlanoInclinadoEixoX(massa, gravidade, angulo) {
    let resultado = massa * gravidade * Math.sin(angulo);
    return resultado;
}
exports.$calculoDaAceleracaoNoPlanoInclinadoEixoX = $calculoDaAceleracaoNoPlanoInclinadoEixoX;
function $calculoDaAceleracaoNoPlanoInclinadoEixoY(massa, gravidade, angulo) {
    let resultado = massa * gravidade * Math.cos(angulo);
    return resultado;
}
exports.$calculoDaAceleracaoNoPlanoInclinadoEixoY = $calculoDaAceleracaoNoPlanoInclinadoEixoY;
function $calculoDoLancamentoHorizontal(gravidade, tempo) {
    let resultado = (gravidade * tempo ** 2) / 2;
    return resultado;
}
exports.$calculoDoLancamentoHorizontal = $calculoDoLancamentoHorizontal;
function $calculoDaEquacaoDeTorricelli(velocidadeInicial, aceleracao, espacoInicial, espacoFinal) {
    let resultado = Math.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
    return resultado;
}
exports.$calculoDaEquacaoDeTorricelli = $calculoDaEquacaoDeTorricelli;
function $calculoDaAlturaMaximaDeUmLancamentoVertical(velocidadeInicial, gravidade, angulo) {
    let resultado = (velocidadeInicial ** 2) * ((Math.sin(angulo) ** 2) / 2) * gravidade;
    return resultado;
}
exports.$calculoDaAlturaMaximaDeUmLancamentoVertical = $calculoDaAlturaMaximaDeUmLancamentoVertical;
function $calculoDoAlcanceDeUmLancamentoVertical(velocidade, tempo, angulo) {
    let resultado = velocidade * Math.cos(angulo) * tempo;
    return resultado;
}
exports.$calculoDoAlcanceDeUmLancamentoVertical = $calculoDoAlcanceDeUmLancamentoVertical;
function $calculoDoAlcanceMaximoDeUmLancamentoVertical(velocidade, angulo, gravidade) {
    let resultado = (velocidade ** 2 * (Math.sin(angulo) ** 2)) / gravidade;
    return resultado;
}
exports.$calculoDoAlcanceMaximoDeUmLancamentoVertical = $calculoDoAlcanceMaximoDeUmLancamentoVertical;
function $calculoDoCalorSensivel(massa, calorEspecifico, temperaturaInicial, temperaturaFinal) {
    let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
    return resultado;
}
exports.$calculoDoCalorSensivel = $calculoDoCalorSensivel;
function $calculoDoCalorLatente(quantidadeDeCalor, massa) {
    let resultado = quantidadeDeCalor / massa;
    return resultado;
}
exports.$calculoDoCalorLatente = $calculoDoCalorLatente;
function $calculoDasLeisDeNewton(massa, aceleracao) {
    let resultado = massa * aceleracao;
    return resultado;
}
exports.$calculoDasLeisDeNewton = $calculoDasLeisDeNewton;
function $calculoDoTrabalho(massa, gravidade, altura) {
    let resultado = massa * gravidade * altura;
    return resultado;
}
exports.$calculoDoTrabalho = $calculoDoTrabalho;
function $calculoDoConsumoDeEnergia(tempo, correnteEletrica, ddp) {
    let resultado = correnteEletrica * ddp * tempo;
    return resultado;
}
exports.$calculoDoConsumoDeEnergia = $calculoDoConsumoDeEnergia;
function $calculoDoTeoremaDePascal(forca1, forca2, area1, area2, forca1Inexistente, forca2Inexistente, area1Inexistente, area2Inexistente) {
    let resultado = 0;
    if (forca1Inexistente == true) {
        resultado = (area1 * forca2) / area2;
    }
    if (forca2Inexistente == true) {
        resultado = (area2 * forca1) / area1;
    }
    if (area1Inexistente == true) {
        resultado = (forca1 * area2) / forca2;
    }
    if (area2Inexistente == true) {
        resultado = (forca2 * area1) / forca1;
    }
    return resultado;
}
exports.$calculoDoTeoremaDePascal = $calculoDoTeoremaDePascal;
function $calculoDoTeoremaDeStevin(densidade, gravidade, alturaInicial, alturaFinal) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
}
exports.$calculoDoTeoremaDeStevin = $calculoDoTeoremaDeStevin;
function $calculoDoTeoremaDeBoltzmann(temperatura, constante) {
    let resultado = constante * (temperatura ** 4);
    return resultado;
}
exports.$calculoDoTeoremaDeBoltzmann = $calculoDoTeoremaDeBoltzmann;
function $calculoDoTeoremaDeCoulomb(correnteEletrica, distancia) {
    let resultado = correnteEletrica * distancia;
    return resultado;
}
exports.$calculoDoTeoremaDeCoulomb = $calculoDoTeoremaDeCoulomb;
function $calculoDoTeoremaDePlanck(energia, constante) {
    let resultado = constante * (energia ** 2);
    return resultado;
}
exports.$calculoDoTeoremaDePlanck = $calculoDoTeoremaDePlanck;
function $calculoDaForcaGravitacional(gravidade, massaPlaneta, distancia) {
    let resultado = gravidade * (massaPlaneta / distancia ** 2);
    return resultado;
}
exports.$calculoDaForcaGravitacional = $calculoDaForcaGravitacional;
function $calculoDoAceleracaoCentripetaMovimentoCircularUniforme(velocidade, raio) {
    let resultado = (velocidade ** 2) / raio;
    return resultado;
}
exports.$calculoDoAceleracaoCentripetaMovimentoCircularUniforme = $calculoDoAceleracaoCentripetaMovimentoCircularUniforme;
function $calculoDoVelocidadeAngularMovimentoCircularUniforme(anguloInicial, anguloFinal, tempoInicial, tempoFinal) {
    let resultado = (anguloFinal - anguloInicial) / (anguloFinal - anguloInicial);
    return resultado;
}
exports.$calculoDoVelocidadeAngularMovimentoCircularUniforme = $calculoDoVelocidadeAngularMovimentoCircularUniforme;
function $calculoDoVelocidadeLinearMovimentoCircularUniforme(frequencia, raio) {
    let resultado = (2 * Math.PI * frequencia) * raio;
    return resultado;
}
exports.$calculoDoVelocidadeLinearMovimentoCircularUniforme = $calculoDoVelocidadeLinearMovimentoCircularUniforme;
function $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado(velocidadeAngularInicial, aceleracaoAngular, tempo) {
    let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
    return resultado;
}
exports.$calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado = $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado;
function $calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado(posicaoAngularInicial, velocidadeAngularInicial, aceleracaoAngular, tempo) {
    let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
    return resultado;
}
exports.$calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado = $calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado;
function $calculoDeToricelliMovimentoCircularUnifVariado(velocidadeAngularInicial, aceleracaoAngular, deslocamentoAngularInicial, deslocamentoAngularFinal) {
    let resultado = Math.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
    return resultado;
}
exports.$calculoDeToricelliMovimentoCircularUnifVariado = $calculoDeToricelliMovimentoCircularUnifVariado;
function $calculoDaAceleracaoAngularMovimentoCircularUnifVariado(velocidadeAngularInicial, velocidadeAngularFinal, tempoInicial, tempoFinal) {
    let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
    return resultado;
}
exports.$calculoDaAceleracaoAngularMovimentoCircularUnifVariado = $calculoDaAceleracaoAngularMovimentoCircularUnifVariado;
function $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples(velocidadeAngular, amplitude, tempo, faseInicial) {
    let resultado = velocidadeAngular * amplitude * Math.cos(tempo + faseInicial);
    return resultado;
}
exports.$calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples = $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples;
function $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples(velocidadeAngular, amplitude, tempo, faseInicial) {
    let resultado = -1 * velocidadeAngular * amplitude * Math.sin(tempo + faseInicial);
    return resultado;
}
exports.$calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples = $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples;
function $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples(velocidadeAngular, amplitude, tempo, faseInicial) {
    let resultado = -1 * velocidadeAngular ** 2 * amplitude * Math.cos(tempo + faseInicial);
    return resultado;
}
exports.$calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples = $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples;
function $calculoDoPeriodo(frequencia) {
    let resultado = 1 / frequencia;
    return resultado;
}
exports.$calculoDoPeriodo = $calculoDoPeriodo;
function $calculoDaFrequencia(periodo) {
    let resultado = 1 / periodo;
    return resultado;
}
exports.$calculoDaFrequencia = $calculoDaFrequencia;
function $calculoDaTemperatura(valor, deCelsiusParaKelvin, deCelsiusParaFahrenheit, deKelvinParaCelsius, deKelvinParaFahrenheit, deFahrenheitParaKelvin, deFahrenheitParaCelsius) {
    let resultado = 0;
    if (deCelsiusParaFahrenheit == true) {
        resultado = (1.8 * valor) + 32;
    }
    if (deCelsiusParaKelvin == true) {
        resultado = valor - 273;
    }
    if (deFahrenheitParaCelsius == true) {
        resultado = (valor - 32) / 1.8;
    }
    if (deFahrenheitParaKelvin == true) {
        resultado = ((valor - 32) * 5) / 9 + 273;
    }
    if (deKelvinParaCelsius == true) {
        resultado = valor + 273;
    }
    if (deKelvinParaFahrenheit == true) {
        resultado = (valor - 273) * 1.8 + 32;
    }
    return resultado;
}
exports.$calculoDaTemperatura = $calculoDaTemperatura;
function $calculoDaDilatacaoLinear(comprimentoInicial, coeficienteDeDilatacaoLinear, temperaturaInicial, temperaturaFinal) {
    let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
    return resultado;
}
exports.$calculoDaDilatacaoLinear = $calculoDaDilatacaoLinear;
function $calculoDaDilatacaoSuperficial(areaInicial, coeficienteDeDilatacaoSuperficial, temperaturaInicial, temperaturaFinal) {
    let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
    return resultado;
}
exports.$calculoDaDilatacaoSuperficial = $calculoDaDilatacaoSuperficial;
function $calculoDaDilatacaoVolumetrica(volumeInicial, coeficienteDeDilatacaoVolumetrica, temperaturaInicial, temperaturaFinal) {
    let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
    return resultado;
}
exports.$calculoDaDilatacaoVolumetrica = $calculoDaDilatacaoVolumetrica;
function $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica(densidade, gravidade, alturaInicial, alturaFinal) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
}
exports.$calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica = $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica;
function $calculoDoEmpuxoDaHidroestaticaHidrodinamica(densidade, gravidade, volume) {
    let resultado = densidade * gravidade * volume;
    return resultado;
}
exports.$calculoDoEmpuxoDaHidroestaticaHidrodinamica = $calculoDoEmpuxoDaHidroestaticaHidrodinamica;
function $calculoDoPesoAparenteDaHidroestaticaHidrodinamica(peso, densidade, gravidade, volume) {
    let resultado = peso - this.calculoDoEmpuxoDaHidroestatica(densidade, gravidade, volume);
    return resultado;
}
exports.$calculoDoPesoAparenteDaHidroestaticaHidrodinamica = $calculoDoPesoAparenteDaHidroestaticaHidrodinamica;
function $calculoDaEquacaoDeLagrange(x, y, xi, yi, xii, yii, xiii, yiii) {
    let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
    return resultado;
}
exports.$calculoDaEquacaoDeLagrange = $calculoDaEquacaoDeLagrange;
function $calculoDoAtrito(coeficienteDeAtrito, massa) {
    let resultado = coeficienteDeAtrito * massa;
    return resultado;
}
exports.$calculoDoAtrito = $calculoDoAtrito;
function $calculoDaLeiDeCoulomb(carga1, carga2, distancia) {
    let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
    return resultado;
}
exports.$calculoDaLeiDeCoulomb = $calculoDaLeiDeCoulomb;
function $calculoDaLeiDeOhm(resistencia, corrente) {
    let resultado = resistencia * corrente;
    return resultado;
}
exports.$calculoDaLeiDeOhm = $calculoDaLeiDeOhm;
function $calculoDoEfeitoJoule(corrente, resistencia, tempo) {
    let resultado = (corrente ** 2) * resistencia * tempo;
    return resultado;
}
exports.$calculoDoEfeitoJoule = $calculoDoEfeitoJoule;
function $calculoDaLeiDeLenz(intensidadeDoCampoMagnetico, areaDaSuperficie, cosAngulo) {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Math.cos(cosAngulo);
    return resultado;
}
exports.$calculoDaLeiDeLenz = $calculoDaLeiDeLenz;
function $calculoDaForcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente) {
    let resultado = potenciaTotalGerador / intensidadeDaCorrente;
    return resultado;
}
exports.$calculoDaForcaEletromotriz = $calculoDaForcaEletromotriz;
function $calculoDaContraForcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente) {
    let resultado = -1 * this.calculoDaForcaEletromotriz;
    return resultado;
}
exports.$calculoDaContraForcaEletromotriz = $calculoDaContraForcaEletromotriz;
function $calculoDoEfeitoFotoeletrico(frequenciaDaLuz) {
    let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
    return resultado;
}
exports.$calculoDoEfeitoFotoeletrico = $calculoDoEfeitoFotoeletrico;
function $calculoDaDensidade(massa, volume) {
    let resultado = massa / volume;
    return resultado;
}
exports.$calculoDaDensidade = $calculoDaDensidade;
function $calculoDaTitulacao(massaBase, massaAcido, volumeBase, volumeAcido, naoTemMassaBase, naoTemMassaAcido, naoTemVolumeBase, naoTemVolumeAcido) {
    let resultado = 0;
    if (naoTemMassaAcido == true) {
        resultado = massaBase * volumeBase / volumeAcido;
    }
    if (naoTemMassaBase == true) {
        resultado = massaAcido * volumeAcido / volumeBase;
    }
    if (naoTemVolumeAcido == true) {
        resultado = massaBase * volumeBase / massaAcido;
    }
    if (naoTemVolumeBase == true) {
        resultado = massaAcido * volumeAcido / massaBase;
    }
    return resultado;
}
exports.$calculoDaTitulacao = $calculoDaTitulacao;
function $calculoDaConcentracao(massaSoluto, volume) {
    let resultado = massaSoluto / volume;
    return resultado;
}
exports.$calculoDaConcentracao = $calculoDaConcentracao;
function $calculoDoRendimento(valorParte, valorTotal) {
    let resultado = this.calculoDaPorcentagem(valorParte, valorTotal);
    return resultado;
}
exports.$calculoDoRendimento = $calculoDoRendimento;
function $calculoDaLeiGeralDosGases(pressao1, pressao2, volume1, volume2, temperatura1, temperatura2) {
    let verificacao = /([a-zA-Z])/gi;
    let resultado = 0;
    if (pressao1.match(verificacao) != null) {
        resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (pressao2.match(verificacao) != null) {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (volume1.match(verificacao) != null) {
        resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (volume2.match(verificacao) != null) {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1));
    }
    if (temperatura1.match(verificacao) != null) {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2));
    }
    if (temperatura2.match(verificacao) != null) {
        resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    return resultado;
}
exports.$calculoDaLeiGeralDosGases = $calculoDaLeiGeralDosGases;
function $regraDeTresSimples(valor1, valor2, valor3, localDaVariavel = ("A" || "B" || "C")) {
    if (localDaVariavel == "a") {
        localDaVariavel = "A";
    }
    if (localDaVariavel == "b") {
        localDaVariavel = "B";
    }
    if (localDaVariavel == "c") {
        localDaVariavel = "C";
    }
    let resultado = 0;
    switch (localDaVariavel) {
        case "A":
            resultado = valor1 * valor2 / valor3;
            break;
        case "B":
            resultado = valor1 * valor3 / valor2;
            break;
        case "C":
            resultado = valor2 * valor3 / valor1;
            break;
    }
    return resultado;
}
exports.$regraDeTresSimples = $regraDeTresSimples;
function $regraDeTresComposta(valor1, valor2, valor3, valor4, valor5, valor6, valor7, localDaVariavel = ("A" || "B" || "C" || "D" || "E" || "F" || "G")) {
    if (localDaVariavel == "a") {
        localDaVariavel = "A";
    }
    if (localDaVariavel == "b") {
        localDaVariavel = "B";
    }
    if (localDaVariavel == "c") {
        localDaVariavel = "C";
    }
    if (localDaVariavel == "d") {
        localDaVariavel = "D";
    }
    if (localDaVariavel == "e") {
        localDaVariavel = "E";
    }
    if (localDaVariavel == "f") {
        localDaVariavel = "F";
    }
    if (localDaVariavel == "g") {
        localDaVariavel = "G";
    }
    let resultado = 0;
    switch (localDaVariavel) {
        case "A":
            resultado = valor1 * valor2 / valor3;
            break;
        case "B":
            resultado = valor1 * valor3 / valor2;
            break;
        case "C":
            resultado = valor2 * valor3 / valor1;
            break;
        case "D":
            resultado = valor4 * valor5 / valor6;
            break;
        case "E":
            resultado = valor4 * valor6 / valor5;
            break;
        case "F":
            resultado = valor5 * valor6 / valor4;
            break;
        case "G":
            resultado = valor7 * valor5 / valor6;
            break;
    }
    return resultado;
}
exports.$regraDeTresComposta = $regraDeTresComposta;
function $sistemaDeEquacoes(expressao1, expressao2) {
    let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;
    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) {
        return console.error("A expressão inserida não é válida");
    }
    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi, pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi, pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
    let parteAA = expressao1.match(pegaParteA).toString();
    let parteAB = expressao2.match(pegaParteA).toString();
    let parteBA = expressao1.match(pegaParteB).toString();
    let parteBB = expressao2.match(pegaParteB).toString();
    let parteCA = expressao1.match(pegaParteC).toString();
    let parteCB = expressao2.match(pegaParteC).toString();
    resultado = `${parseFloat(parteAA + parteAB)}x${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    if (parseFloat(parteBA + parteBB) > 0) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    }
    return resultado;
}
exports.$sistemaDeEquacoes = $sistemaDeEquacoes;
function $sistemaDeInequacoes(expressao1, expressao2) {
    let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) {
        return console.error("A expressão inserida não é válida");
    }
    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi, pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi, pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
    let parteAA = expressao1.match(pegaParteA).toString();
    let parteAB = expressao2.match(pegaParteA).toString();
    let parteBA = expressao1.match(pegaParteB).toString();
    let parteBB = expressao2.match(pegaParteB).toString();
    let parteCA = expressao1.match(pegaParteC).toString();
    let parteCB = expressao2.match(pegaParteC).toString();
    resultado = `${parseFloat(parteAA + parteAB)}x${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    if (parseFloat(parteBA + parteBB) > 0) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) < parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`;
    }
    return resultado;
}
exports.$sistemaDeInequacoes = $sistemaDeInequacoes;
function $sistemasLineares(expressoes) {
    let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi, verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;
    let somatorio = [], aux = 0, calculo = 0;
    for (let i = 0; i < expressoes.length; i++) {
        if (expressoes[i].match(verificacao) == null) {
            return console.error("A expressão inserida não é válida!");
        }
        expressaoPartida.push(expressoes[i].match(verificacao2));
    }
    for (let i = 0; i < expressaoPartida.length; i++) {
        for (let h = 0; h < expressaoPartida[i].length; h++) {
            expressaoPartida[i][h] = parseFloat(expressaoPartida[i][h]);
        }
    }
    let x = 0;
    while (x != expressaoPartida[0].length) {
        for (let w = 0; w < expressaoPartida.length; w++) {
            calculo = calculo + expressaoPartida[w][x];
        }
        somatorio.push(calculo);
        x++;
    }
    for (let q = 1; q < somatorio.length; q++) {
        if (q % 2 == 0) {
            resultado.push(somatorio[q] / somatorio[0]);
        }
        if (q % 2 == 1) {
            resultado.push((-1 * somatorio[q]) / somatorio[0]);
        }
    }
    return resultado;
}
exports.$sistemasLineares = $sistemasLineares;
function $somaNumerosComplexos(valores) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let resultadoPartImaginarias = 0;
    let resultadoPartImaginariasPuras = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) {
            return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
        }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }
    for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }
    for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) {
        resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`;
    }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) {
        resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`;
    }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) {
        resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`;
    }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) {
        resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`;
    }
    return resultado;
}
exports.$somaNumerosComplexos = $somaNumerosComplexos;
function $subtracaoNumerosComplexos(valorTotal, valores) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let valorTotalPartImaginarias = "";
    let valorTotalPartImaginariasPuras = "";
    let resultadoPartImaginarias = "";
    let resultadoPartImaginariasPuras = "";
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) {
            return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
        }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }
    if (valorTotal.match(verif) == null) {
        return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
    }
    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
    for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }
    for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }
    resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) - parseFloat(resultadoPartImaginarias);
    resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) - parseFloat(resultadoPartImaginariasPuras);
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    return resultado;
}
exports.$subtracaoNumerosComplexos = $subtracaoNumerosComplexos;
function $multiplicacaoNumerosComplexos(valorTotal, valores) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let valorTotalPartImaginarias = "";
    let valorTotalPartImaginariasPuras = "";
    let resultadoPartImaginarias = "";
    let resultadoPartImaginariasPuras = "";
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) {
            return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
        }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }
    if (valorTotal.match(verif) == null) {
        return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
    }
    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
    for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }
    for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }
    resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) * parseFloat(resultadoPartImaginarias);
    resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) * parseFloat(resultadoPartImaginariasPuras);
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    return resultado;
    // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}
exports.$multiplicacaoNumerosComplexos = $multiplicacaoNumerosComplexos;
function $divisaoNumerosComplexos(valorTotal, valores) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let valorTotalPartImaginarias = "";
    let valorTotalPartImaginariasPuras = "";
    let resultadoPartImaginarias = "";
    let resultadoPartImaginariasPuras = "";
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) {
            return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
        }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }
    if (valorTotal.match(verif) == null) {
        return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
    }
    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
    for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }
    for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }
    resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) / parseFloat(resultadoPartImaginarias);
    resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) / parseFloat(resultadoPartImaginariasPuras);
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    return resultado;
    // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}
exports.$divisaoNumerosComplexos = $divisaoNumerosComplexos;
function $potenciaNumerosComplexos(valorTotal, valores, potencia) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let valorTotalPartImaginarias = "";
    let valorTotalPartImaginariasPuras = "";
    let resultadoPartImaginarias = "";
    let resultadoPartImaginariasPuras = "";
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) {
            return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
        }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }
    if (valorTotal.match(verif) == null) {
        return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido.");
    }
    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
    for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }
    for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }
    resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) + parseFloat(resultadoPartImaginarias) ** potencia;
    resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) + parseFloat(resultadoPartImaginariasPuras) ** potencia;
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) {
        resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) {
        resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`;
    }
    return resultado;
    // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}
exports.$potenciaNumerosComplexos = $potenciaNumerosComplexos;
function $jurosSimples(valor, taxa, tempo) {
    let resultado = valor * (1 + taxa * tempo);
    return resultado;
}
exports.$jurosSimples = $jurosSimples;
function $jurosCompostos(valor, taxa, tempo, vezes) {
    let resultado = (valor * (1 + taxa * tempo)) ** vezes;
    return resultado;
}
exports.$jurosCompostos = $jurosCompostos;
function $vetorDaDistanciaEntreDoisPontosR2(x1, x2, y1, y2) {
    let xResultante = 0, yResultante = 0, resultado = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    resultado = [xResultante, yResultante];
    return resultado;
}
exports.$vetorDaDistanciaEntreDoisPontosR2 = $vetorDaDistanciaEntreDoisPontosR2;
function $vetorDaDistanciaEntreDoisPontosR3(x1, x2, y1, y2, z1, z2) {
    let xResultante = 0, yResultante = 0, zResultante = 0, resultado = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    zResultante = z2 - z1;
    resultado = [xResultante, yResultante, zResultante];
    return resultado;
}
exports.$vetorDaDistanciaEntreDoisPontosR3 = $vetorDaDistanciaEntreDoisPontosR3;
function $moduloDeUmVetorR2(x, y) {
    let resultado = 0;
    resultado = Math.sqrt(x ** 2 + y ** 2);
    return resultado;
}
exports.$moduloDeUmVetorR2 = $moduloDeUmVetorR2;
function $moduloDeUmVetorR3(x, y, z) {
    let resultado = 0;
    resultado = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    return resultado;
}
exports.$moduloDeUmVetorR3 = $moduloDeUmVetorR3;
function $versorDeUmVetorR2(x, y) {
    let resultado = [];
    let modulo = $moduloDeUmVetorR2(x, y);
    resultado = [x / modulo, y / modulo];
    return resultado;
}
exports.$versorDeUmVetorR2 = $versorDeUmVetorR2;
function $versorDeUmVetorR3(x, y, z) {
    let resultado = [];
    let modulo = $moduloDeUmVetorR3(x, y, z);
    resultado = [x / modulo, y / modulo, z / modulo];
    return resultado;
}
exports.$versorDeUmVetorR3 = $versorDeUmVetorR3;
function $projecaoDeUmVetorSobreOutroVetorR2(x1, x2, y1, y2) {
    let resultado;
    let expressoesVU = [x2 * x1, y2 * y1];
    let expressoesUU = [x1 * x1, y1 * y1];
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
    resultado = contExpressaoP2;
    return resultado;
}
exports.$projecaoDeUmVetorSobreOutroVetorR2 = $projecaoDeUmVetorSobreOutroVetorR2;
function $projecaoDeUmVetorSobreOutroVetorR3(x1, x2, y1, y2, z1, z2) {
    let resultado;
    let expressoesVU = [x2 * x1, y2 * y1, z2 * z1];
    let expressoesUU = [x1 * x1, y1 * y1, z1 * z1];
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
    resultado = contExpressaoP2;
    return resultado;
}
exports.$projecaoDeUmVetorSobreOutroVetorR3 = $projecaoDeUmVetorSobreOutroVetorR3;
function $somaDeVetoresR2(x1, x2, y1, y2) {
    let resultado;
    let contExpressaoP1 = [x1 + x2, y1 + y2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$somaDeVetoresR2 = $somaDeVetoresR2;
function $somaDeVetoresR3(x1, x2, y1, y2, z1, z2) {
    let resultado;
    let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$somaDeVetoresR3 = $somaDeVetoresR3;
function $subtracaoDeVetoresR2(x1, x2, y1, y2) {
    let resultado;
    let contExpressaoP1 = [x1 - x2, y1 - y2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$subtracaoDeVetoresR2 = $subtracaoDeVetoresR2;
function $subtracaoDeVetoresR3(x1, x2, y1, y2, z1, z2) {
    let resultado;
    let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$subtracaoDeVetoresR3 = $subtracaoDeVetoresR3;
function $produtoEscalarDeVetoresR2(x1, x2, y1, y2) {
    let resultado;
    let contExpressaoP1 = [x1 * x2, y1 * y2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1];
    return resultado;
}
exports.$produtoEscalarDeVetoresR2 = $produtoEscalarDeVetoresR2;
function $produtoEscalarDeVetoresR3(x1, x2, y1, y2, z1, z2) {
    let resultado;
    let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
    return resultado;
}
exports.$produtoEscalarDeVetoresR3 = $produtoEscalarDeVetoresR3;
function $divisaoDeVetoresR2(x1, x2, y1, y2) {
    let resultado;
    let contExpressaoP1 = [x1 / x2, y1 / y2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$divisaoDeVetoresR2 = $divisaoDeVetoresR2;
function $divisaoDeVetoresR3(x1, x2, y1, y2, z1, z2) {
    let resultado;
    let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$divisaoDeVetoresR3 = $divisaoDeVetoresR3;
function $pontoMedioDeUmVetorR2(x, y) {
    let resultado;
    let contExpressaoP1 = [x / 2, y / 2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$pontoMedioDeUmVetorR2 = $pontoMedioDeUmVetorR2;
function $pontoMedioDeUmVetorR3(x, y, z) {
    let resultado;
    let contExpressaoP1 = [x / 2, y / 2, z / 2];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$pontoMedioDeUmVetorR3 = $pontoMedioDeUmVetorR3;
function $cossenosDiretoresDeUmVetorR2(x, y) {
    let resultado;
    let contExpressaoP1 = [Math.cos(x), Math.cos(y)];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$cossenosDiretoresDeUmVetorR2 = $cossenosDiretoresDeUmVetorR2;
function $cossenosDiretoresDeUmVetorR3(x, y, z) {
    let resultado;
    let contExpressaoP1 = [Math.cos(x), Math.cos(y), Math.cos(z)];
    resultado = contExpressaoP1;
    return resultado;
}
exports.$cossenosDiretoresDeUmVetorR3 = $cossenosDiretoresDeUmVetorR3;
function $sinalizacaoQuadrantes(x, y) {
    let resultado;
    if (x > 0 && y > 0) {
        resultado = "1 Quadrante.";
    }
    if (x < 0 && y > 0) {
        resultado = "2 Quadrante.";
    }
    if (x < 0 && y < 0) {
        resultado = "3 Quadrante.";
    }
    if (x > 0 && y < 0) {
        resultado = "4 Quadrante.";
    }
    return resultado;
}
exports.$sinalizacaoQuadrantes = $sinalizacaoQuadrantes;
function $sinalizacaoOctantes(x, y, z) {
    let resultado;
    if (x > 0 && y > 0 && z > 0) {
        resultado = "1 Octante.";
    }
    if (x < 0 && y > 0 && z > 0) {
        resultado = "2 Octante.";
    }
    if (x < 0 && y < 0 && z > 0) {
        resultado = "3 Octante.";
    }
    if (x > 0 && y < 0 && z > 0) {
        resultado = "4 Octante.";
    }
    if (x > 0 && y > 0 && z < 0) {
        resultado = "5 Octante.";
    }
    if (x < 0 && y > 0 && z < 0) {
        resultado = "6 Octante.";
    }
    if (x < 0 && y < 0 && z < 0) {
        resultado = "7 Octante.";
    }
    if (x > 0 && y < 0 && z < 0) {
        resultado = "8 Octante.";
    }
    return resultado;
}
exports.$sinalizacaoOctantes = $sinalizacaoOctantes;
function $quadradoDePunnet(genotipo1, genotipo2) {
    if (genotipo1.length > 2 || genotipo2.length > 2) {
        return;
    }
    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);
    let resultado;
    return resultado = [
        genDiv1 + genDiv3,
        genDiv1 + genDiv4,
        genDiv2 + genDiv3,
        genDiv2 + genDiv4
    ];
}
exports.$quadradoDePunnet = $quadradoDePunnet;
function $quadradoDePunnetExpandido(genotipo1, genotipo2) {
    if (genotipo2.length > 4 || genotipo2.length > 4) {
        return;
    }
    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);
    const genDiv5 = genotipo1.slice(2, 3);
    const genDiv6 = genotipo2.slice(2, 3);
    const genDiv7 = genotipo1.slice(3, 4);
    const genDiv8 = genotipo2.slice(3, 4);
    let resultado;
    return resultado = [
        genDiv1 + genDiv3,
        genDiv1 + genDiv4,
        genDiv1 + genDiv5,
        genDiv1 + genDiv6,
        genDiv1 + genDiv7,
        genDiv1 + genDiv8,
        genDiv2 + genDiv3,
        genDiv2 + genDiv4,
        genDiv2 + genDiv5,
        genDiv2 + genDiv6,
        genDiv2 + genDiv7,
        genDiv2 + genDiv8
    ];
}
exports.$quadradoDePunnetExpandido = $quadradoDePunnetExpandido;
//# calcula uma derivada de uma função
//# calcula uma integral de uma função
//# calcula o limite de uma função
//# calcula a expressao de la precce de uma função
//# sourceMappingURL=funcoes-algebricas.js.map