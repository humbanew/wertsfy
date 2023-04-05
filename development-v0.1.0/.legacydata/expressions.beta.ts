import { MathematicDefines } from "../../../wdefines";
import { mathematic_corebase } from "../../../wertsfy";

  const formulaDoTeoremaDeGirard = (expressao: string): number[]|string[]|void => {
    let resultado: any, valores: any;
    let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
    let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
    let pegaTermosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
    let valoresConvertidos: any;
    if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }
    valores.push(expressao.match(pegaTermosComIcognita));
    if(expressao.match(pegaTermosSemIcognita) != null) { valores.push(expressao.match(pegaTermosSemIcognita)); }
    for (let i = 0; i < valores[0].length; i++) {
      valores[0][i] = parseFloat(valores[0][i]);
      valoresConvertidos.push(valores[0][i]);
    }
    valores[1] = parseFloat(valores[1]);
    valoresConvertidos.push(valores[1]);
    for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
      let verificadorSinal = i % 2;
      if (verificadorSinal == 0) { resultado.push(valoresConvertidos[i] / valoresConvertidos[0]); }
      if (verificadorSinal == 1) { resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0])); }
    }
    return resultado;
  }

  const formulaDoTeoremaDoTalesDeMileto = (n1: number, n2: number, n3: number): number => {
    return ( n2 * n3 ) / n1;
  }

  const formulaDoTeoremaDePitagoras = (tipo: MathematicDefines["expressions"]["trianglePitagoras"]): number => {

    let resultado = 0;

    switch(tipo[0]) {
      case "classic(a and b)":
        resultado = mathematic_corebase.sqrt(((tipo[1].a ** 2) + (tipo[1].b ** 2))); break;
      case "t1(m and n)":
        resultado = mathematic_corebase.sqrt(tipo[1].m * tipo[1].n); break;
      case "t2(a and n)":
        resultado = mathematic_corebase.sqrt(tipo[1].a * tipo[1].n); break;
      case "t3(b, c and h)":  
        resultado = (tipo[1].b * tipo[1].c) / tipo[1].h; break;
    }
    return resultado;

  }

  const formulaDoCalculoDoFatorial = (x: number): number => {
    let resultado: number = 1;
    for (let i = x; i > 0; i--) { resultado = i * resultado; };
    return resultado;
  }

  const formulaDoCalculoDaCombinacao = (total: number, divisor: number): number => {
    let resultado: number = 0, totalConvertido: number = 1, divisorConvertido: number = 1;
    for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
    for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
    resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
    return resultado;
  }

  const formulaDoCalculoDoArranjo = (total: number, divisor: number): number => {
    let resultado: number = 0, totalConvertido: number = 1, divisorConvertido: number = 1;
    for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
    for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
    resultado = totalConvertido / (totalConvertido - divisorConvertido);
    return resultado;
  }

  const formulaDoCalculoDaProbabilidade = (valor: number, valorTotal: number): number => {
    return valor / valorTotal;
  }

  const formulaDoCalculoDeUmConjugadoDeNumeroComplexo = (expressao: string): string => {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { expressao.replace("-", ''); }
    resultado = expressao;
    return resultado;
  }

  const formulaDoTeoremaDeStirling = (valor: number): number => {
    let resultado: number = 0;
    resultado = (mathematic_corebase.log(valor) * valor) / valor;
    return resultado;
  }

  const formulaDoCalculoDaRelacaoDeEuler = (vertices: number, arestas: number, faces: number): number => {
    return (vertices - (arestas + faces)) - 2;
  }

  const formulaDoCalculoDasPotenciasDeI = (valor: number): string => {
    let resultado = '', divisor = valor % 4;

    switch(divisor) {
      case 0:
        resultado = 'i'; break;
      case 1:
        resultado = '-1'; break;
      case 2:
        resultado = '-1'; break;
      case 3:
        resultado = '1'; break;
    }
    return resultado;
  }

  const formulasDoCalculoDePorcentagem = (tipo: MathematicDefines["expressions"]["porcentage"]) => {

    let resultado = 0;

    switch(tipo[0]) {
      case "10E2":
        resultado = tipo[1].value / 10 ** 2; break;
      case "10E3":
        resultado = tipo[1].value / 10 ** 3; break;
      case "10E4":
        resultado = tipo[1].value / 10 ** 4; break;
      case "10E5":
        resultado = tipo[1].value / 10 ** 5; break;
      case "AnyNumber":  
        resultado = tipo[1].value / tipo[1].valueTotal; break;
    }
    return resultado;
  }

  const formulasDoCalculoDeDeterminante = (tipo: MathematicDefines["expressions"]["determinant"]): number => {

    let resultado: number = 0;

    switch(tipo[0]) {
      case "d2x2":
        let vetorPrimario = tipo[1].a00 * tipo[1].a11;
        let vetorSecundario = tipo[1].a01 * tipo[1].a10;
        resultado = vetorPrimario - vetorSecundario; break;
      case "d3x3":
        let vetorPrincipal1 = tipo[1].a00 * tipo[1].a11 * tipo[1].a22; 
        let vetorPrincipal2 = tipo[1].a01 * tipo[1].a12 * tipo[1].a20; 
        let vetorPrincipal3 = tipo[1].a02 * tipo[1].a10 * tipo[1].a21;
        let vetorSecundario1 = tipo[1].a02 * tipo[1].a11 * tipo[1].a20; 
        let vetorSecundario2 = tipo[1].a00 * tipo[1].a12 * tipo[1].a21; 
        let vetorSecundario3 = tipo[1].a01 * tipo[1].a10 * tipo[1].a22;
        resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
        break;
    }
    return resultado;
  }

  const formulasDoCalculoDePolinomios = (tipo: MathematicDefines["expressions"]["classicOperations"], polinomios: {sent1: string, sent2: string }): string => {
    let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
    if (verificaSinal != null) { polinomios.sent1.replace("-", ''); }
    if (verificaSinal != null) { polinomios.sent2.replace("-", ''); }
    switch(tipo) {
      case "plus":
        resultado = polinomios.sent1 + '+' + polinomios.sent2; break;
      case "minus":
        resultado = polinomios.sent1 + '-' + polinomios.sent2; break;
      case "multip":
        resultado = polinomios.sent1 + '*' + polinomios.sent2; break;
      case "divisor":
        resultado = polinomios.sent1 + '/' + polinomios.sent2; break;
    }
    return resultado;
  }

  const formulasDeCalculoDeMatrizes = (tipo: MathematicDefines["expressions"]["classicOperations"], matriz: { m1: number[][], m2: number[][] }): number[][] => {
    let resultado: number[][];
    for (let i = 0; i < matriz.m1.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz.m1[i].length; j++) {
        switch(tipo) {
          case "plus":
            resultado[i][j] = matriz.m1[i][j] + matriz.m2[i][j]; break;
          case "minus":
            resultado[i][j] = matriz.m1[i][j] - matriz.m2[i][j]; break;
          case "multip":
            if(matriz.m1[0][j] != matriz.m2[i][j]){ new Error("Calc Error"); }
            resultado[i][j] = matriz.m1[i][j] * matriz.m2[i][j]; break;
          case "divisor":
            resultado[i][j] = matriz.m1[i][j] / matriz.m2[i][j]; break;
        }
      }
    }
    return resultado;
  }

  const formulaDoCalculoDaVelocidade = (espaco: {inicial: number, final: number}, tempo: {inicial: number, final: number}): number => {
    return (espaco.final - espaco.inicial) / (tempo.final - tempo.inicial);
  }

  const formulaDoCalculoDoEspaco = (velocidade: number, tempo: {inicial: number, final: number}): number => {
    return velocidade * (tempo.final - tempo.inicial);
  }

  const formulaDoCalculoDoTempo = (velocidade: number, espaco: {inicial: number, final: number}): number => {
    return (espaco.final - espaco.inicial) / velocidade;
  }

  const formulaDoCalculoDaAceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
    return velocidade / (tempo.final - tempo.inicial);
  }

  const formulaCalculoDaEquacaoHorariaDoTempo = (tempo: number, tempoInicial: number, velocidade: number, aceleracao: number): number => {
    return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
  }

  const formulacalculoDaEquacaoHorariaDoEspaco = (espaco: number, espacoInicial: number, aceleracao: number): number => {
    return espacoInicial + aceleracao * espaco;
  }

  const formulaCalculoDaEquacaoHorariaDaVelocidade = (velocidade: number, tempo: number, aceleracao: number): number => {
    return velocidade + aceleracao * tempo;
  }

  const formulaCalculoDaEquacaoHorariaDaAceleracao = (aceleracao: number, tempo: number, velocidade: number): number => {
    return aceleracao + (velocidade * tempo);
  }

  const formulaCalculoDaEquacaoHorariaDaForca = (forca: number, tempo: number, aceleracao: number): number => {
    return forca + (aceleracao * tempo);
  }

  const formulaCalculoDaEquacaoHorariaDoTempoEspaco = (tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number): number => {
    return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
  }

  const formulaCalculoDaEnergiaCinetica = (massa: number, velocidade: number): number => {
    return (massa * velocidade ** 2) / 2;
  }

  const formulaCalculoDaEnergiaPotencialElastica = (constanteElastica: number, distancia: number): number => {
    return (constanteElastica * distancia ** 2) / 2;
  }

  const formulaCalculoDaEnergiaPotencialGravitacional = (massa: number, gravidade: number, altura: number): number => {
    return massa * gravidade * altura;
  }

  const formulaCalculoDoPotencialMecanico = (velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number => {
    let resultado = 0;
    if (energPotElas == true) { resultado = formulaCalculoDaEnergiaCinetica(massa, velocidade) + formulaCalculoDaEnergiaPotencialElastica(constanteElastica, distancia); }
    if (energPotGrav == true) { resultado = formulaCalculoDaEnergiaCinetica(massa, velocidade) + formulaCalculoDaEnergiaPotencialGravitacional(massa, gravidade, altura); }
    return resultado;
  }

  const formulaCalculoDoPotencialElastico = (constanteElastica: number, distancia: number): number => {
    let resultado = formulaCalculoDaEnergiaPotencialElastica(constanteElastica, distancia);
    return resultado;
  }

  const formulaCalculoDoPlanoInclinadoSemAtrito = (massa: number, gravidade: number): number => {
    let resultado = massa * gravidade;
    return resultado;
  }

  const formulaCalculoDoPlanoInclinadoComAtrito = (forcaDeAtrito: number, massa: number, gravidade: number, angulo: number): number => {
    let resultado = forcaDeAtrito * massa * gravidade * angulo;
    return resultado;
  }

  const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX = (massa: number, gravidade: number, angulo: number): number => {
    let resultado = massa * gravidade * mathematic_corebase.sin(angulo);
    return resultado;
  }

  const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY = (massa: number, gravidade: number, angulo: number): number => {
    let resultado = massa * gravidade * mathematic_corebase.cos(angulo);
    return resultado;
  }

  const formulaCalculoDoLancamentoHorizontal = (gravidade: number, tempo: number): number => {
    let resultado = (gravidade * tempo ** 2) / 2;
    return resultado;
  }

  const formulaCalculoDaEquacaoDeTorricelli = (velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number): number => {
    let resultado = mathematic_corebase.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
    return resultado;
  }

  const formulaCalculoDaAlturaMaximaDeUmLancamentoVertical = (velocidadeInicial: number, gravidade: number, angulo: number): number => {
    let resultado = (velocidadeInicial ** 2) * ((mathematic_corebase.sin(angulo) ** 2) / 2) * gravidade;
    return resultado;
  }

  const formulaCalculoDoAlcanceDeUmLancamentoVertical = (velocidade: number, tempo: number, angulo: number): number => {
    let resultado = velocidade * mathematic_corebase.cos(angulo) * tempo;
    return resultado;
  }

  const formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical = (velocidade: number, angulo: number, gravidade: number): number => {
    let resultado = (velocidade ** 2 * (mathematic_corebase.sin(angulo) ** 2)) / gravidade;
    return resultado;
  }

  const formulaCalculoDoCalorSensivel = (massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number): number => {
    let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  const formulaCalculoDoCalorLatente = (quantidadeDeCalor: number, massa: number): number => {
    let resultado = quantidadeDeCalor / massa;
    return resultado;
  }

  const formulaCalculoDasLeisDeNewton = (massa: number, aceleracao: number): number => {
    let resultado = massa * aceleracao;
    return resultado;
  }

  const formulaCalculoDoTrabalho = (massa: number, gravidade: number, altura: number): number => {
    let resultado = massa * gravidade * altura;
    return resultado;
  }

  const formulaCalculoDoConsumoDeEnergia = (tempo: number, correnteEletrica: number, ddp: number): number => {
    let resultado = correnteEletrica * ddp * tempo;
    return resultado;
  }

  const formulaCalculoDoTeoremaDePascal = (forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean): number => {
    let resultado = 0;
    if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }
    if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }
    if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }
    if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }
    return resultado;
  }

  const formulaCalculoDoTeoremaDeStevin = (densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number => {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
  }

  const formulaCalculoDoTeoremaDeBoltzmann = (temperatura: number, constante: number): number => {
    let resultado = constante * (temperatura ** 4);
    return resultado;
  }

  const formulaCalculoDoTeoremaDeCoulomb = (correnteEletrica: number, distancia: number): number => {
    let resultado = correnteEletrica * distancia;
    return resultado;
  }

  const formulaCalculoDoTeoremaDePlanck = (energia: number, constante: number): number => {
    let resultado = constante * (energia ** 2);
    return resultado;
  }

  const formulaCalculoDaForcaGravitacional = (gravidade: number, massaPlaneta: number, distancia: number): number => {
    let resultado = gravidade * (massaPlaneta / distancia ** 2);
    return resultado;
  }

  const formulaCalculoDoAceleracaoCentripetaMovimentoCircularUniforme = (velocidade: number, raio: number): number => {
    let resultado = (velocidade ** 2) / raio;
    return resultado;
  }

  const formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme = (anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number): number => {
    let resultado = (anguloFinal - anguloInicial) / (tempoFinal - tempoInicial);
    return resultado;
  }

  const formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme = (frequencia: number, raio: number): number => {
    let resultado = (2 * Component_math_corebase_pi_constant * frequencia) * raio;
    return resultado;
  }

  const formulaCalculoDaEquacaoHorariaDoTempoMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
    let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
    return resultado;
  }

  const formulaCalculoDaEquacaoHorariaDoEspacoMovimentoCircularUniformenteVariado = (posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
    let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
    return resultado;
  }

  const formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number): number => {
    let resultado = mathematic_corebase.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
    return resultado;
  }

  const formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number): number => {
    let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
    return resultado;
  }

  const formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
    let resultado = velocidadeAngular * amplitude * mathematic_corebase.cos(tempo + faseInicial);
    return resultado;
  }

  const formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
    let resultado = -1 * velocidadeAngular * amplitude * mathematic_corebase.sin(tempo + faseInicial);
    return resultado;
  }

  const formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
    let resultado = -1 * velocidadeAngular ** 2 * amplitude * mathematic_corebase.cos(tempo + faseInicial);
    return resultado;
  }

  const formulaCalculoDoPeriodo = (frequencia: number): number => {
    let resultado = 1 / frequencia;
    return resultado;
  }

  const formulaCalculoDaFrequencia = (periodo: number): number => {
    let resultado = 1 / periodo;
    return resultado;
  }

  const formulaCalculoDaTemperatura = (valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean): number => {
    let resultado = 0;
    if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }
    if (deCelsiusParaKelvin == true) { resultado = valor - 273; }
    if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }
    if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }
    if (deKelvinParaCelsius == true) { resultado = valor + 273; }
    if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }
    return resultado;
  }

  const formulaCalculoDaDilatacaoLinear = (comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number): number => {
    let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  const formulaCalculoDaDilatacaoSuperficial = (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number): number => {
    let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  const formulaCalculoDaDilatacaoVolumetrica = (volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number): number => {
    let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  const formulaCalculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica = (densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number => {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
  }

  const formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica = (densidade: number, gravidade: number, volume: number): number => {
    let resultado = densidade * gravidade * volume;
    return resultado;
  }

  const formulaCalculoDoPesoAparenteDaHidroestaticaHidrodinamica = (peso: number, densidade: number, gravidade: number, volume: number): number => {
    let resultado = peso - formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica(densidade, gravidade, volume);
    return resultado;
  }

  const formulaCalculoDaEquacaoDeLagrange = (x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number): number => {
    let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
    return resultado;
  }

  const formulaCalculoDoAtrito = (coeficienteDeAtrito: number, massa: number): number => {
    let resultado = coeficienteDeAtrito * massa;
    return resultado;
  }

  const formulaCalculoDaLeiDeCoulomb = (carga1: number, carga2: number, distancia: number): number => {
    let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
    return resultado;
  }

  const formulaCalculoDaLeiDeOhm = (resistencia: number, corrente: number): number => {
    let resultado = resistencia * corrente;
    return resultado;
  }

  const formulaCalculoDoEfeitoJoule = (corrente: number, resistencia: number, tempo: number): number => {
    let resultado = (corrente ** 2) * resistencia * tempo;
    return resultado;
  }

  const formulaCalculoDaLeiDeLenz = (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number): number => {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * mathematic_corebase.cos(cosAngulo);
    return resultado;
  }

  const formulaCalculoDaForcaEletromotriz = (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
    let resultado = potenciaTotalGerador / intensidadeDaCorrente;
    return resultado;
  }

  const formulaCalculoDaContraForcaEletromotriz = (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
    let resultado = -1 * formulaCalculoDaForcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
    return resultado;
  }

  const formulaCalculoDoEfeitoFotoeletrico = (frequenciaDaLuz: number): number => {
    let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
    return resultado;
  }

  const formulaCalculoDaDensidade = (massa: number, volume: number): number => {
    let resultado = massa / volume;
    return resultado;
  }

  const formulaCalculoDaTitulacao = (massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean): number => {
    let resultado = 0;
    if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
    if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
    if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
    if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
    return resultado;
  }

  const formulaCalculoDaConcentracao = (massaSoluto: number, volume: number): number => {
    let resultado = massaSoluto / volume;
    return resultado;
  }

  const formulaCalculoDoRendimento = (valorParte: number, valorTotal: number): number => {
    let resultado = formulasDoCalculoDePorcentagem(
      ["AnyNumber", { value: valorParte, valueTotal: valorTotal}]
    );
    return resultado;
  }

  const formulaCalculoDaLeiGeralDosGases = (pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string): number => {
    let verificacao = /([a-zA-Z])/gi;
    let resultado = 0;
    if (pressao1.match(verificacao) != null) { 
      resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); 
    }
    if (pressao2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1)); }
    if (volume1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
    if (volume2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1)); }
    if (temperatura1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2)); }
    if (temperatura2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
    return resultado;
  }

  const formulaRegraDeTresSimples = (valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")): number => {
    if (localDaVariavel == "a") { localDaVariavel = "A"; }
    if (localDaVariavel == "b") { localDaVariavel = "B"; }
    if (localDaVariavel == "c") { localDaVariavel = "C"; }
    let resultado = 0;
    switch (localDaVariavel) {
      case "A": resultado = valor1 * valor2 / valor3; break;
      case "B": resultado = valor1 * valor3 / valor2; break;
      case "C": resultado = valor2 * valor3 / valor1; break;
    }
    return resultado;
  }

  const formulaRegraDeTresComposta = (valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")): number => {
    if (localDaVariavel == "a") { localDaVariavel = "A"; }
    if (localDaVariavel == "b") { localDaVariavel = "B"; }
    if (localDaVariavel == "c") { localDaVariavel = "C"; }
    if (localDaVariavel == "d") { localDaVariavel = "D"; }
    if (localDaVariavel == "e") { localDaVariavel = "E"; }
    if (localDaVariavel == "f") { localDaVariavel = "F"; }
    if (localDaVariavel == "g") { localDaVariavel = "G"; }
    let resultado = 0;
    switch (localDaVariavel) {
      case "A": resultado = valor1 * valor2 / valor3; break;
      case "B": resultado = valor1 * valor3 / valor2; break;
      case "C": resultado = valor2 * valor3 / valor1; break;
      case "D": resultado = valor4 * valor5 / valor6; break;
      case "E": resultado = valor4 * valor6 / valor5; break;
      case "F": resultado = valor5 * valor6 / valor4; break;
      case "G": resultado = valor7 * valor5 / valor6; break;
    }
    return resultado;
  }

  const formulaSistemaDeEquacoes = (expressao1: string, expressao2: string): string|void => {
    let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;
    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
      pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
      pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
    let parteAA = expressao1.match(pegaParteA)?.toString(); 
    let parteAB = expressao2.match(pegaParteA)?.toString();
    let parteBA = expressao1.match(pegaParteB)?.toString();
    let parteBB = expressao2.match(pegaParteB)?.toString();
    let parteCA = expressao1.match(pegaParteC)?.toString(); 
    let parteCB = expressao2.match(pegaParteC)?.toString();
    resultado = `${parseFloat(parteAA+parteAB)}x${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`;
    if (parseFloat(parteBA+parteBB) > 0) { 
      resultado = `${parseFloat(parteAA+parteAB)}x+${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`; 
    }
    return resultado;
  }

  const formulaSistemaDeInequacoes = (expressao1: string, expressao2: string): string|void => {
    let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
      pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
      pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
    let parteAA = expressao1.match(pegaParteA)?.toString();
    let parteAB = expressao2.match(pegaParteA)?.toString();
    let parteBA = expressao1.match(pegaParteB)?.toString();
    let parteBB = expressao2.match(pegaParteB)?.toString();
    let parteCA = expressao1.match(pegaParteC)?.toString();
    let parteCB = expressao2.match(pegaParteC)?.toString();
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

  const formulaSistemasLineares = (expressoes: string[]): Array<any>|void => {
    let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi,
      verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;
    let somatorio = [], aux = 0, calculo = 0;
    for (let i = 0; i < expressoes.length; i++) {
      if (expressoes[i].match(verificacao) == null) { return console.error("A expressão inserida não é válida!"); }
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
      if (q % 2 == 0) { resultado.push(somatorio[q] / somatorio[0]); }
      if (q % 2 == 1) { resultado.push((-1 * somatorio[q]) / somatorio[0]); }
    }
    return resultado;
  }

  const formulasDosNumerosComplexos = (tipo: MathematicDefines["expressions"]["complexNumbers"], expressions: string[], potency?: number): string|void => {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let resultado = "";
    let resultadoPartImaginarias: number|string;
    let resultadoPartImaginariasPuras: number|string;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let valorTotalPartImaginarias = "";
    let valorTotalPartImaginariasPuras = "";

    for (let i = 0; i < expressions.length; i++) {
      if (expressions[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
      partesImaginarias.push(expressions[i].match(separadorT1).toString());
      partesImaginariasPuras.push(expressions[i].match(separadorT2).toString());
    }
    switch(tipo) {
      case "plus":
        resultadoPartImaginarias = 0;
        resultadoPartImaginariasPuras = 0;
        for (let i = 0; i < partesImaginarias.length; i++) {
          resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
        }
        for (let i = 0; i < partesImaginariasPuras.length; i++) {
          resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
        }
        break;
      case "minus":      
        resultadoPartImaginarias = "";
        resultadoPartImaginariasPuras = "";
        for (let i = 0; i < partesImaginarias.length; i++) {
          resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
        }
        for (let i = 0; i < partesImaginariasPuras.length; i++) {
          resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
        }
        resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) - parseFloat(resultadoPartImaginarias);
        resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) - parseFloat(resultadoPartImaginariasPuras);
      case "multip":
        resultadoPartImaginarias = "";
        resultadoPartImaginariasPuras = "";
        for (let i = 0; i < partesImaginarias.length; i++) {
          resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
        }
        for (let i = 0; i < partesImaginariasPuras.length; i++) {
          resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
        }
        resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) * parseFloat(resultadoPartImaginarias);
        resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) * parseFloat(resultadoPartImaginariasPuras);
      case "divisor":
        resultadoPartImaginarias = "";
        resultadoPartImaginariasPuras = "";
        for (let i = 0; i < partesImaginarias.length; i++) {
          resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
        }
        for (let i = 0; i < partesImaginariasPuras.length; i++) {
          resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
        }
        resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) / parseFloat(resultadoPartImaginarias);
        resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) / parseFloat(resultadoPartImaginariasPuras);
      case "power":
        resultadoPartImaginarias = "";
        resultadoPartImaginariasPuras = "";
        for (let i = 0; i < partesImaginarias.length; i++) {
          resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
        }
        for (let i = 0; i < partesImaginariasPuras.length; i++) {
          resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
        }
        resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) + parseFloat(resultadoPartImaginarias) ** potency;
        resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) + parseFloat(resultadoPartImaginariasPuras) ** potency;
    }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
    return resultado;
  }

  const formulaJurosSimples = (valor: number, taxa: number, tempo: number): number => {
    let resultado = valor * (1 + taxa * tempo);
    return resultado;
  }

  const formulaJurosCompostos = (valor: number, taxa: number, tempo: number, vezes: number): number => {
    let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
    return resultado;
  }

  const formulaVetorDaDistanciaEntreDoisPontosR2 = (x1: number, x2:number, y1: number, y2: number): Array<number> => {
    let xResultante = 0, yResultante = 0, resultado: number[] = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    resultado = [ xResultante, yResultante ];
    return resultado;
  }

  const formulaVetorDaDistanciaEntreDoisPontosR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
    let xResultante = 0, yResultante = 0, zResultante = 0, resultado: number[] = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    zResultante = z2 - z1;
    resultado = [ xResultante, yResultante, zResultante ];
    return resultado;
  }

  const formulaModuloDeUmVetorR2 = (x: number, y: number): number => {
    let resultado = 0;
    resultado = mathematic_corebase.sqrt(x ** 2 + y ** 2);
    return resultado;
  }

  const formulaModuloDeUmVetorR3 = (x: number, y: number, z: number): number => {
    let resultado = 0;
    resultado = mathematic_corebase.sqrt(x ** 2 + y ** 2 + z ** 2);
    return resultado;
  }

  const formulaVersorDeUmVetorR2 = (x: number, y:number): Array<number> => {
    let resultado = [];
    let modulo = formulaModuloDeUmVetorR2(x, y);
    resultado = [ x / modulo, y / modulo ];
    return resultado;
  }

  const formulaVersorDeUmvetorR3 = (x: number, y: number, z: number): Array<number> => {
    let resultado = [];
    let modulo = formulaModuloDeUmVetorR3(x, y, z);
    resultado = [ x / modulo, y / modulo, z / modulo ];
    return resultado;
  }

  const formulaProjecaoDeUmVetorSobreOutroVetorR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
    let resultado: number[];
    let expressoesVU = [x2 * x1, y2 * y1] 
    let expressoesUU = [x1 * x1, y1 * y1]
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
    resultado = contExpressaoP2;
    return resultado;
  }

  const formulaProjecaoDeUmVetorSobreOutroVetorR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
    let resultado: number[];
    let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
    let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
    resultado = contExpressaoP2;
    return resultado;
  }

  const formulaSomaDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 + x2, y1 + y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaSomaDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaSubtracaoDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 - x2, y1 - y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaSubtracaoDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaProdutoEscalarDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): number => {
    let resultado: number;
    let contExpressaoP1 = [x1 * x2, y1 * y2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1];
    return resultado;
  }

  const formulaProdutoEscalarDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number => {
    let resultado: number;
    let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
    return resultado;
  }

  const formulaDivisaoDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 / x2, y1 / y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaDivisaoDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaPontoMedioDeUmVetorR2 = (x: number, y: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x / 2, y / 2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaPontoMedioDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [x / 2, y / 2, z / 2];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaCossenosDiretoresDeUmVetorR2 = (x: number, y: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y)];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaCossenosDiretoresDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
    let resultado: number[];
    let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y), mathematic_corebase.cos(z)];
    resultado = contExpressaoP1;
    return resultado;
  }

  const formulaSinalizacaoQuadrantes = (x: number, y: number): string => {
    let resultado: string;
    if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
    if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
    if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
    if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
    return resultado;
  }

  const formulaSinalizacaoOctantes = (x: number, y: number, z: number): string => {
    let resultado: string = "";
    if(x > 0 && y > 0 && z > 0) { resultado = "1 Octante."; }
    if(x < 0 && y > 0 && z > 0) { resultado = "2 Octante."; }
    if(x < 0 && y < 0 && z > 0) { resultado = "3 Octante."; }
    if(x > 0 && y < 0 && z > 0) { resultado = "4 Octante."; }
    if(x > 0 && y > 0 && z < 0) { resultado = "5 Octante."; }
    if(x < 0 && y > 0 && z < 0) { resultado = "6 Octante."; }
    if(x < 0 && y < 0 && z < 0) { resultado = "7 Octante."; }
    if(x > 0 && y < 0 && z < 0) { resultado = "8 Octante."; }
    return resultado;
  }

  const formulaQuadradoDePunnet = (genotipo1: string, genotipo2: string): Array<string> => {
    
    if(genotipo1.length > 2 || genotipo2.length > 2) { return; }

    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);

    let resultado: string[];
    return resultado = [ 
      genDiv1 + genDiv3, 
      genDiv1 + genDiv4, 
      genDiv2 + genDiv3, 
      genDiv2 + genDiv4 
    ];

  }

  const formulaQuadradoDePunnetExpandido = (genotipo1: string, genotipo2: string): Array<string> => {

    if(genotipo2.length > 4 || genotipo2.length > 4) { return; }

    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);
    const genDiv5 = genotipo1.slice(2, 3);
    const genDiv6 = genotipo2.slice(2, 3);
    const genDiv7 = genotipo1.slice(3, 4);
    const genDiv8 = genotipo2.slice(3, 4);

    let resultado: string[];
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

const formulaCalculoDaEscalaGeografica = (tamanhoReal: number, tamanhoFicticio: number): number => {
  let resultado = tamanhoReal / tamanhoFicticio;
  return resultado;
}

const formulaCalculoDeIDH = (saude: number, educacao: number, renda: number, populacao: number, ppc: number): number => {
  let resultado = (saude + educacao + renda) / (populacao + ppc);
  return resultado;
}

const formulaCalculoDeGINI = (pnb: number, populacao: number): number => {
  let resultado = pnb / populacao;
  return resultado;
}

const formulaCalculoDeIMC = (peso: number, altura: number): number => {
  let resultado = peso / altura ** 2;
  return resultado;
}

const formulaCalculoDeDensidadePopulacional = (espaco: number, populacao: number): number => {
  let resultado = espaco / populacao;
  return resultado;
}

const formulaCalculoDosNumerosPares = (numero: number): number => {
  let resultado = numero / 2;
  if(resultado % 2 === 0) { console.info("eh par.") }
  else { console.info("eh impar.") }
  return resultado;
}

const formulaCalculoDosNumerosImpares = (numero: number): number => {
  let resultado = numero / 3;
  if(resultado % 3 === 0) { console.info("eh impar.") }
  else { console.info("eh par.") }
  return resultado;
}

const formulaNumeroDeConjuntos = (elementos: number): number => {
  let resultado = 2 ** elementos;
  return resultado;
}

const formulaCalculoDoDiagramaDeVennDe2Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoDoisNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
    nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
  };
  return resultados;
}

const formulaCalculoDoDiagramaDeVennDe3Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoTresNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
    nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
  };
  return resultados;
}

const formulaCalculoDoDiagramaDeVennDe4Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoQuatroNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
  };
  return resultados;
}

const formulaCalculoDosNumerosPrimos = (numeroPesquisados: number): Array<number> => {
  let numerosPrimos = [];
  for(let i = 0; i < numeroPesquisados; i++) {
    if(i % 2 !== 0) {
      numerosPrimos.push(i);
    }
  }
  return numerosPrimos;
}

const formulaAreaTrianguloQualquer = (lado: number): number => { 
  return lado * lado * mathematic_corebase.sqrt(3) / 4; 
}

const formulaApotemaDeUmTrianguloQualquer = (lado: number): number => {
  return lado * lado * mathematic_corebase.sqrt(3) / 2;
}

const formulaAreaQuadradoQualquer = (lado: number): number => { 
  return lado * lado; 
}

const formulaAreaRetanguloQualquer = (comp: number, larg: number): number => { 
  return comp * larg; 
}

const formulaAreaCirculoQualquer = (raio: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2); 
}

const formulaAreaElipseQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaAreaPiramideQualquer = (base: number, altura: number): number => { 
  return (base * altura) / 3; 
}

const formulaAreaTrapezioQualquer = (baseMaior: number, baseMenor: number, altura: number): number => { 
  return (baseMaior + baseMenor) * altura / 2; 
}

const formulaAreaLozangoQualquer = (diagonalMaior: number, diagonalMenor: number, altura: number): number => { 
  return (diagonalMaior + diagonalMenor) / 2; 
}

const formulaAreaDeUmaSuperficieQualquer = (comp: number, larg: number): number => {
  return comp * larg;
}

const formulaVolumeDeUmaSuperficieQualquer = (area: number, comp: number, larg: number): number => {
  return area * comp * larg;
}

const formulaAreaEsferaQualquer = (raio: number): number => { 
  return 4 * Component_math_corebase_pi_constant * (raio ** 2) / 2; 
}

const formulaAreaCilindroQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaAreaConeQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * (altura / 3); 
}

const formulaAreaDeUmPoligonoQualquer = (comp: number, larg: number, nLados: number): number => {
  return comp == larg ? nLados * ((comp * comp * mathematic_corebase.sqrt(3)) / 4) : nLados * (comp * larg / 2);
}

const formulaVolumeDeUmPoligonoFormatoLozangoQualquer = (diagonalMaior: number, diagonalMenor: number, altura: number): number => {
  return (diagonalMaior + diagonalMenor) / 2 * altura;
}

const formulaVolumeDeUmPoligonoFormatoTrapezioQualquer = (baseMaior: number, baseMenor: number, altura: number): number => {
  return (baseMaior + baseMenor) / 2 * altura;
}

const formulaAreaDeUmParalelogramoQualquer = (lado: number, altura: number): number => { 
  return lado * altura; 
}

const formulaAreaLateralDeUmPrismaQualquer = (comp: number, larg: number, nLados: number): number => {
  return nLados * (comp * larg);
}

const formulaVolumeDeUmPrismaQualquer = (area: number, comp: number, larg: number): number => {
  return area * comp * larg;
}

const formulaVolumeDeUmCuboQualquer = (aresta: number): number => { 
  return aresta * aresta * aresta; 
}

const formulaVolumeDeUmParalelepipedoQualquer = (comprimento: number, largura: number, altura: number): number => { 
  return comprimento * largura * altura; 
}

const formulaVolumeDeUmaPiramideQualquer = (base: number, altura: number): number => { 
  return (base * altura) / 3; 
}

const formulaVolumeDeUmTetraedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 4; 
}

const formulaVolumeDeUmHexaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 6; 
}

const formulaVolumeDeUmOctaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 8; 
}

const formulaVolumeDeUmDodecaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 12; 
}

const formulaVolumDeUmIcosaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 20; 
}

const formulaVolumeDeUmConeQualquer = (raio: number, altura: number): number => { 
  return (Component_math_corebase_pi_constant * (raio ** 2) * altura) / 3; 
}

const formulaVolumeDeUmCilindroQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaVolumeDeUmEsferaQualquer = (raio: number): number => { 
  return (4 * Component_math_corebase_pi_constant * (raio ** 3)) / 3; 
}

const formulaVolumeDeUmRombQualquer = (aresta: number): number => { 
  return (aresta * aresta) / 2; 
}

const formulaAreaCircunferenciaQualquer = (raio: number): number => { 
  return Component_math_corebase_pi_constant * (raio * 2); 
}
        
const formulaCalculoPrimeiroGrau = (exp) => { 
  let res = 0;
  let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi; 
  let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
  let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi; 
  let p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
  
  if (exp.match(verif) == null) { 
    return console.error("A expressão inserida não é uma função do 1º Grau!"); 
  } else { 
    res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1)); 
  } 
  
  return res; 
}

const formulaCalculoSegundoGrau = (a: number, b: number, c: number) => { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2]; 
  
  return res; 
}

const formulaCalculoTerceiroGrau = (a: number, b: number, c: number) => { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2, 0]; 
  
  return res; 
}

const formulaCalculoQuartoGrau = (a: number, b: number, c: number) => { 
  let res = [0];
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2]; 
  
  return res; 
}
