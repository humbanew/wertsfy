export function $formulaDeGirard(expressao: string) {
  let resultado = [], valores = [];
  let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
  let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
  let pegaTergosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
  let valoresConvertidos = [];
  if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }
  valores.push(expressao.match(pegaTermosComIcognita), expressao.match(pegaTergosSemIcognita).toString());
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

export function $calculoDoTeoremaDeTalesDeMileto(valorMultiplicadoPorX: number, valorNormal: number) {
  let resultado = valorNormal / valorMultiplicadoPorX;
  return resultado;
}

export function $calculoDoTeoremaDePitagoras(a: number, b: number) {
  let resultado = Math.sqrt(((a ** 2) + (b ** 2)));
  return resultado;
}

export function $calculoDaRelacaoPitagoricaT1(m: number, n: number) {
  let resultado = Math.sqrt(m * n);
  return resultado;
}

export function $calculoDaRelacaoPitagoricaT2(a: number, n: number) {
  let resultado = Math.sqrt(a * n);
  return resultado;
}

export function $calculoDaRelacaoPitagoricaT3(h: number, b: number, c: number) {
  let resultado = (b * c) / h;
  return resultado;
}

export function $calculoDoFatorial(valor: number) {
  let resultado = 1;
  for (let i = valor; i > 0; i--) { resultado = i * resultado; };
  return resultado;
}

export function $calculoDaCombinacao(total: number, divisor: number) {
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

export function $calculoDoArranjo(total: number, divisor: number) {
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

export function $calculoDaProbabilidade(valor: number, valorTotal: number) {
  let resultado = valor / valorTotal;
  return resultado;
}

export function $calculoDoConjugadoDeUmNumeroComplexo(expressao: string) {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { expressao.replace("-", ''); }
  resultado = expressao;
  return resultado;
}

export function $calculoDoTeoremaDeStirling(valor: number) {
  let resultado = 0;
  resultado = (Math.log(valor) * valor) / valor;
  return resultado;
}

export function $calculoDaRelacaoDeEuler(vertices: number, arestas: number, faces: number) {
  let resultado = (vertices - (arestas + faces)) - 2;
  return resultado;
}

export function $calculoDasPotenciasDeI(valor: number) {
  let resultado = '', divisor = valor % 4;
  if (divisor == 0) { resultado = 'i'; }
  if (divisor == 1) { resultado = '-1'; }
  if (divisor == 2) { resultado = '-i'; }
  if (divisor == 3) { resultado = '1'; }
  return resultado;
}

export function $calculoDaPorcentagem(valorParte: number, valorTotal: number) {
  let resultado = valorParte / valorTotal;
  return resultado;
}

export function $calculoDaDeterminante2x2(a00: number, a01: number, a10: number, a11: number) {
  let resultado = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
  resultado = vetorPrimario - vetorSecundario;
  return resultado;
}

export function $calculoDaDeterminante3x3(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number) {
  let resultado = 0;

  // 00 01 02  00 01
  // 10 11 12  10 11
  // 20 21 22  20 21

  let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;
  let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;
  resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
  return resultado;
}

export function $somaPolinomios(polinomio1: string, polinomio2: string) {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { polinomio1.replace("-", ''); }
  if (verificaSinal != null) { polinomio2.replace("-", ''); }
  resultado = polinomio1 + '+' + polinomio2;
  return resultado;
}

export function $subtracaoPolinomios(polinomio1: string, polinomio2: string) {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { polinomio1.replace("-", ''); }
  if (verificaSinal != null) { polinomio2.replace("-", ''); }
  resultado = polinomio1 + '-' + polinomio2;
  return resultado;
}

export function $multiplicacaoPolinomios(polinomio1: string, polinomio2: string) {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { polinomio1.replace("-", ''); }
  if (verificaSinal != null) { polinomio2.replace("-", ''); }
  resultado = polinomio1 + '*' + polinomio2;
  return resultado;
}

export function $divisaoPolinomios(polinomio1: string, polinomio2: string) {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { polinomio1.replace("-", ''); }
  if (verificaSinal != null) { polinomio2.replace("-", ''); }
  resultado = polinomio1 + '/' + polinomio2;
  return resultado;
}

export function $somaMatrizes(matriz: [][], matriz2: [][]) {
  let resultado = [];
  for (let i = 0; i < matriz.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      resultado[i][j] = matriz[i][j] + matriz2[i][j];
    }
  }
  return resultado;
}

export function $subtracaoMatrizes(matriz: [][], matriz2: [][]) {
  let resultado = [];
  for (let i = 0; i < matriz.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      resultado[i][j] = matriz[i][j] - matriz2[i][j];
    }
  }
  return resultado;
}

export function $multiplicacaoMatrizes(matriz: [][], matriz2: [][]) {
  let resultado = [];
  for (let i = 0; i < matriz.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      if(matriz[0][j] != matriz2[i]){ return "Matrizes não podem ser multiplicadas"; }
      resultado[i][j] = matriz[i][j] * matriz2[i][j];
    }
  }
  return resultado;
}

export function $divisaoMatrizes(matriz: [][], matriz2: [][]) {
  let resultado = [];
  for (let i = 0; i < matriz.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      resultado[i][j] = matriz[i][j] / matriz2[i][j];
    }
  }
  return resultado;
}

export function $calculoDaVelocidade(espaco: number, tempo: number) {
  let resultado = espaco / tempo;

  return resultado;
}

export function $calculoDoEspaco(velocidade: number, tempo: number) {
  let resultado = velocidade * tempo;
  return resultado;
}

export function $calculoDoTempo(velocidade: number, espaco: number) {
  let resultado = espaco / velocidade;
  return resultado;
}

export function $calculoDaAceleracao(velocidade: number, tempo: number) {
  let resultado = velocidade / tempo;
  return resultado;
}

export function $calculoDaEqHorariaDoTempo(tempo: number, tempoInicial: number, velocidade: number, aceleracao: number) {
  let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
  return resultado;
}

export function $calculoDaEqHorariaDoEspaco(espaco: number, espacoInicial: number, aceleracao: number) {
  let resultado = espacoInicial + aceleracao * espaco;
  return resultado;
}

export function $calculoDaEqHorariaDaVelocidade(velocidade: number, tempo: number, aceleracao: number) {
  let resultado = velocidade + aceleracao * tempo;
  return resultado;
}

export function $calculoDaEqHorariaDaAceleracao(aceleracao: number, tempo: number, velocidade: number) {
  let resultado = aceleracao + (velocidade * tempo);
  return resultado;
}

export function $calculoDaEqHorariaDaForca(forca: number, tempo: number, aceleracao: number) {
  let resultado = forca + (aceleracao * tempo);
  return resultado;
}

export function $calculoDaEqHorariaDoTempoEspaco(tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number) {
  let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
  return resultado;
}

export function $calculoDaEnergiaCinetica(massa: number, velocidade: number) {
  let resultado = (massa * velocidade ** 2) / 2;
  return resultado;
}

export function $calculoDaEnergiaPotencialElastica(constanteElastica: number, distancia: number) {
  let resultado = (constanteElastica * distancia ** 2) / 2;
  return resultado;
}

export function $calculoDaEnergiaPotencialGravitacional(massa: number, gravidade: number, altura: number) {
  let resultado = massa * gravidade * altura;
  return resultado;
}

export function $calculoDoPotencialMecanico(velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean) {
  let resultado = 0;
  if (energPotElas == true) { resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia); }
  if (energPotGrav == true) { resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialGravitacional(massa, gravidade, altura); }
  return resultado;
}

export function $calculoDoPotencialElastico(constanteElastica: number, distancia: number) {
  let resultado = this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia);
  return resultado;
}

export function $calculoDoPlanoInclinadoSemAtrito(massa: number, gravidade: number) {
  let resultado = massa * gravidade;
  return resultado;
}

export function $calculoDoPlanoInclinadoComAtrito(forcaDeAtrito: number, massa: number, gravidade: number, angulo: number) {
  let resultado = forcaDeAtrito * massa * gravidade * angulo;
  return resultado;
}

export function $calculoDaAceleracaoNoPlanoInclinadoEixoX(massa: number, gravidade: number, angulo: number) {
  let resultado = massa * gravidade * Math.sin(angulo);
  return resultado;
}

export function $calculoDaAceleracaoNoPlanoInclinadoEixoY(massa: number, gravidade: number, angulo: number) {
  let resultado = massa * gravidade * Math.cos(angulo);
  return resultado;
}

export function $calculoDoLancamentoHorizontal(gravidade: number, tempo: number) {
  let resultado = (gravidade * tempo ** 2) / 2;
  return resultado;
}

export function $calculoDaEquacaoDeTorricelli(velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number) {
  let resultado = Math.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
  return resultado;
}

export function $calculoDaAlturaMaximaDeUmLancamentoVertical(velocidadeInicial: number, gravidade: number, angulo: number) {
  let resultado = (velocidadeInicial ** 2) * ((Math.sin(angulo) ** 2) / 2) * gravidade;
  return resultado;
}

export function $calculoDoAlcanceDeUmLancamentoVertical(velocidade: number, tempo: number, angulo: number) {
  let resultado = velocidade * Math.cos(angulo) * tempo;
  return resultado;
}

export function $calculoDoAlcanceMaximoDeUmLancamentoVertical(velocidade: number, angulo: number, gravidade: number) {
  let resultado = (velocidade ** 2 * (Math.sin(angulo) ** 2)) / gravidade;
  return resultado;
}

export function $calculoDoCalorSensivel(massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number) {
  let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
  return resultado;
}

export function $calculoDoCalorLatente(quantidadeDeCalor: number, massa: number) {
  let resultado = quantidadeDeCalor / massa;
  return resultado;
}

export function $calculoDasLeisDeNewton(massa: number, aceleracao: number) {
  let resultado = massa * aceleracao;
  return resultado;
}

export function $calculoDoTrabalho(massa: number, gravidade: number, altura: number) {
  let resultado = massa * gravidade * altura;
  return resultado;
}

export function $calculoDoConsumoDeEnergia(tempo: number, correnteEletrica: number, ddp: number) {
  let resultado = correnteEletrica * ddp * tempo;
  return resultado;
}

export function $calculoDoTeoremaDePascal(forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean) {
  let resultado = 0;
  if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }
  if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }
  if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }
  if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }
  return resultado;
}

export function $calculoDoTeoremaDeStevin(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
  let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
  return resultado;
}

export function $calculoDoTeoremaDeBoltzmann(temperatura: number, constante: number) {
  let resultado = constante * (temperatura ** 4);
  return resultado;
}

export function $calculoDoTeoremaDeCoulomb(correnteEletrica: number, distancia: number) {
  let resultado = correnteEletrica * distancia;
  return resultado;
}

export function $calculoDoTeoremaDePlanck(energia: number, constante: number) {
  let resultado = constante * (energia ** 2);
  return resultado;
}

export function $calculoDaForcaGravitacional(gravidade: number, massaPlaneta: number, distancia: number) {
  let resultado = gravidade * (massaPlaneta / distancia ** 2);
  return resultado;
}

export function $calculoDoAceleracaoCentripetaMovimentoCircularUniforme(velocidade: number, raio: number) {
  let resultado = (velocidade ** 2) / raio;
  return resultado;
}

export function $calculoDoVelocidadeAngularMovimentoCircularUniforme(anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number) {
  let resultado = (anguloFinal - anguloInicial) / (anguloFinal - anguloInicial);
  return resultado;
}

export function $calculoDoVelocidadeLinearMovimentoCircularUniforme(frequencia: number, raio: number) {
  let resultado = (2 * Math.PI * frequencia) * raio;
  return resultado;
}

export function $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado(velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
  let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
  return resultado;
}

export function $calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado(posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
  let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
  return resultado;
}

export function $calculoDeToricelliMovimentoCircularUnifVariado(velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number) {
  let resultado = Math.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
  return resultado;
}

export function $calculoDaAceleracaoAngularMovimentoCircularUnifVariado(velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number) {
  let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
  return resultado;
}

export function $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
  let resultado = velocidadeAngular * amplitude * Math.cos(tempo + faseInicial);
  return resultado;
}

export function $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
  let resultado = -1 * velocidadeAngular * amplitude * Math.sin(tempo + faseInicial);
  return resultado;
}

export function $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
  let resultado = -1 * velocidadeAngular ** 2 * amplitude * Math.cos(tempo + faseInicial);
  return resultado;
}

export function $calculoDoPeriodo(frequencia: number) {
  let resultado = 1 / frequencia;
  return resultado;
}

export function $calculoDaFrequencia(periodo: number) {
  let resultado = 1 / periodo;
  return resultado;
}

export function $calculoDaTemperatura(valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean) {
  let resultado = 0;
  if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }
  if (deCelsiusParaKelvin == true) { resultado = valor - 273; }
  if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }
  if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }
  if (deKelvinParaCelsius == true) { resultado = valor + 273; }
  if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }
  return resultado;
}

export function $calculoDaDilatacaoLinear(comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number) {
  let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
  return resultado;
}

export function $calculoDaDilatacaoSuperficial(areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number) {
  let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
  return resultado;
}

export function $calculoDaDilatacaoVolumetrica(volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number) {
  let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
  return resultado;
}

export function $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
  let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
  return resultado;
}

export function $calculoDoEmpuxoDaHidroestaticaHidrodinamica(densidade: number, gravidade: number, volume: number) {
  let resultado = densidade * gravidade * volume;
  return resultado;
}

export function $calculoDoPesoAparenteDaHidroestaticaHidrodinamica(peso: number, densidade: number, gravidade: number, volume: number) {
  let resultado = peso - this.calculoDoEmpuxoDaHidroestatica(densidade, gravidade, volume);
  return resultado;
}

export function $calculoDaEquacaoDeLagrange(x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number) {
  let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
  return resultado;
}

export function $calculoDoAtrito(coeficienteDeAtrito: number, massa: number) {
  let resultado = coeficienteDeAtrito * massa;
  return resultado;
}

export function $calculoDaLeiDeCoulomb(carga1: number, carga2: number, distancia: number) {
  let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
  return resultado;
}

export function $calculoDaLeiDeOhm(resistencia: number, corrente: number) {
  let resultado = resistencia * corrente;
  return resultado;
}

export function $calculoDoEfeitoJoule(corrente: number, resistencia: number, tempo: number) {
  let resultado = (corrente ** 2) * resistencia * tempo;
  return resultado;
}

export function $calculoDaLeiDeLenz(intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number) {
  let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Math.cos(cosAngulo);
  return resultado;
}

export function $calculoDaForcaEletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
  let resultado = potenciaTotalGerador / intensidadeDaCorrente;
  return resultado;
}

export function $calculoDaContraForcaEletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
  let resultado = -1 * this.calculoDaForcaEletromotriz;
  return resultado;
}

export function $calculoDoEfeitoFotoeletrico(frequenciaDaLuz: number) {
  let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
  return resultado;
}

export function $calculoDaDensidade(massa: number, volume: number) {
  let resultado = massa / volume;
  return resultado;
}

export function $calculoDaTitulacao(massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean) {
  let resultado = 0;
  if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
  if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
  if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
  if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
  return resultado;
}

export function $calculoDaConcentracao(massaSoluto: number, volume: number) {
  let resultado = massaSoluto / volume;
  return resultado;
}

export function $calculoDoRendimento(valorParte: number, valorTotal: number) {
  let resultado = this.calculoDaPorcentagem(valorParte, valorTotal);
  return resultado;
}

export function $calculoDaLeiGeralDosGases(pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string) {
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

export function $regraDeTresSimples(valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")) {
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

export function $regraDeTresComposta(valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")) {
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

export function $sistemaDeEquacoes(expressao1: string, expressao2: string) {
  let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;
  if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
  let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
    pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
    pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
  let parteAA = expressao1.match(pegaParteA).toString(); 
  let parteAB = expressao2.match(pegaParteA).toString();
  let parteBA = expressao1.match(pegaParteB).toString();
  let parteBB = expressao2.match(pegaParteB).toString();
  let parteCA = expressao1.match(pegaParteC).toString(); 
  let parteCB = expressao2.match(pegaParteC).toString();
  resultado = `${parseFloat(parteAA+parteAB)}x${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`;
  if (parseFloat(parteBA+parteBB) > 0) { 
    resultado = `${parseFloat(parteAA+parteAB)}x+${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`; 
  }
  return resultado;
}

export function $sistemaDeInequacoes(expressao1: string, expressao2: string) {
  let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
  if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
  let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
    pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
    pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
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

export function $sistemasLineares(expressoes: string[]) {
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

export function $somaNumerosComplexos(valores: string[]) {
  let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
  let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
  let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
  let resultado = "";
  let resultadoPartImaginarias = 0;
  let resultadoPartImaginariasPuras = 0;
  let partesImaginarias = [];
  let partesImaginariasPuras = [];
  for (let i = 0; i < valores.length; i++) {
    if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(valores[i].match(separadorT1).toString());
    partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
  }
  for (let i = 0; i < partesImaginarias.length; i++) {
    resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
  }
  for (let i = 0; i < partesImaginariasPuras.length; i++) {
    resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
  }
  if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
  return resultado;
}

export function $subtracaoNumerosComplexos(valorTotal: string, valores: string[]) {
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
    if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(valores[i].match(separadorT1).toString());
    partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
  }

  if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

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

  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }

  return resultado;
}

export function $multiplicacaoNumerosComplexos(valorTotal: string, valores: string[]) {
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
    if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(valores[i].match(separadorT1).toString());
    partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
  }
  if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
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
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  return resultado;
  // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}

export function $divisaoNumerosComplexos(valorTotal: string, valores: string[]) {
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
    if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(valores[i].match(separadorT1).toString());
    partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
  }
  if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
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
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  return resultado;
  // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}

export function $potenciaNumerosComplexos(valorTotal: string, valores: string[], potencia: number) {
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
    if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(valores[i].match(separadorT1).toString());
    partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
  }
  if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
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
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
  return resultado;
  // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
}

export function $jurosSimples(valor: number, taxa: number, tempo: number) {
  let resultado = valor * (1 + taxa * tempo);
  return resultado;
}

export function $jurosCompostos(valor: number, taxa: number, tempo: number, vezes: number) {
  let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
  return resultado;
}

export function $vetorDaDistanciaEntreDoisPontosR2(x1: number, x2:number, y1: number, y2: number) {
  let xResultante = 0, yResultante = 0, resultado = [];
  xResultante = x2 - x1;
  yResultante = y2 - y1;
  resultado = [ xResultante, yResultante ];
  return resultado;
}

export function $vetorDaDistanciaEntreDoisPontosR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let xResultante = 0, yResultante = 0, zResultante = 0, resultado = [];
  xResultante = x2 - x1;
  yResultante = y2 - y1;
  zResultante = z2 - z1;
  resultado = [ xResultante, yResultante, zResultante ];
  return resultado;
}

export function $moduloDeUmVetorR2(x: number, y: number) {
  let resultado = 0;
  resultado = Math.sqrt(x ** 2 + y ** 2);
  return resultado;
}

export function $moduloDeUmVetorR3(x: number, y: number, z: number) {
  let resultado = 0;
  resultado = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  return resultado;
}

export function $versorDeUmVetorR2(x: number, y:number) {
  let resultado = [];
  let modulo = $moduloDeUmVetorR2(x, y);
  resultado = [ x / modulo, y / modulo ];
  return resultado;
}

export function $versorDeUmVetorR3(x: number, y: number, z: number) {
  let resultado = [];
  let modulo = $moduloDeUmVetorR3(x, y, z);
  resultado = [ x / modulo, y / modulo, z / modulo ];
  return resultado;
}

export function $projecaoDeUmVetorSobreOutroVetorR2(x1: number, x2: number, y1: number, y2: number) {
  let resultado: number[];
  let expressoesVU = [x2 * x1, y2 * y1] 
  let expressoesUU = [x1 * x1, y1 * y1]
  let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
  let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
  resultado = contExpressaoP2;
  return resultado;
}

export function $projecaoDeUmVetorSobreOutroVetorR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let resultado: number[];
  let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
  let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
  let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
  let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
  resultado = contExpressaoP2;
  return resultado;
}

export function $somaDeVetoresR2(x1: number, x2: number, y1: number, y2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 + x2, y1 + y2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $somaDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $subtracaoDeVetoresR2(x1: number, x2: number, y1: number, y2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 - x2, y1 - y2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $subtracaoDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $produtoEscalarDeVetoresR2(x1: number, x2: number, y1: number, y2: number) {
  let resultado: number;
  let contExpressaoP1 = [x1 * x2, y1 * y2];
  resultado = contExpressaoP1[0] + contExpressaoP1[1];
  return resultado;
}

export function $produtoEscalarDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let resultado: number;
  let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
  resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
  return resultado;
}

export function $divisaoDeVetoresR2(x1: number, x2: number, y1: number, y2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 / x2, y1 / y2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $divisaoDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
  let resultado: number[];
  let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $pontoMedioDeUmVetorR2(x: number, y: number) {
  let resultado: number[];
  let contExpressaoP1 = [x / 2, y / 2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $pontoMedioDeUmVetorR3(x: number, y: number, z: number) {
  let resultado: number[];
  let contExpressaoP1 = [x / 2, y / 2, z / 2];
  resultado = contExpressaoP1;
  return resultado;
}

export function $cossenosDiretoresDeUmVetorR2(x: number, y: number) {
  let resultado: number[];
  let contExpressaoP1 = [Math.cos(x), Math.cos(y)];
  resultado = contExpressaoP1;
  return resultado;
}

export function $cossenosDiretoresDeUmVetorR3(x: number, y: number, z: number) {
  let resultado: number[];
  let contExpressaoP1 = [Math.cos(x), Math.cos(y), Math.cos(z)];
  resultado = contExpressaoP1;
  return resultado;
}

export function $sinalizacaoQuadrantes(x: number, y: number) {
  let resultado: string;
  if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
  if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
  if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
  if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
  return resultado;
}

export function $sinalizacaoOctantes(x: number, y: number, z: number) {
  let resultado: string;
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


export function $quadradoDePunnet(genotipo1: string, genotipo2: string) {
  
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

export function $quadradoDePunnetExpandido(genotipo1: string, genotipo2: string) {

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

//# calcula uma derivada de uma função

//# calcula uma integral de uma função

//# calcula o limite de uma função

//# calcula a expressao de la precce de uma função
