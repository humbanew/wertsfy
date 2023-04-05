import { WMath } from "wertsfy";

class Equacionais {

  public funcao_formula_de_girard(expressao: string): number[]|string[]|void {
    let resultado, valores;
    let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
    let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
    let pegaTermosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
    let valoresConvertidos;
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

  public funcao_calculo_do_teorema_de_tales_de_mileto(n1: number, n2: number) {
    return n2 / n1;
  }

  public funcao_calculo_do_teorema_de_pitagoras(a: number, b: number) {
    return WMath.sqrt(((a ** 2) + (b ** 2)));
  }

  public funcao_calculo_da_relacao_pitagorica_t1(m: number, n: number) {
    return WMath.sqrt(m * n);
  }
  
  public funcao_calculo_da_relacao_pitagorica_t2(a: number, n: number) {
    return WMath.sqrt(a * n);
  }
  
  public funcao_calculo_da_relacao_pitagorica_t3(h: number, b: number, c: number) {
    return (b * c) / h;
  }
  
  public funcao_calculo_do_fatorial(valor: number) {
    let resultado = 1;
    for (let i = valor; i > 0; i--) { resultado = i * resultado; };
    return resultado;
  }

  public funcao_calculo_da_combinacao(total: number, divisor: number) {
    let resultado = 0;
    let totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
    for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
    resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
    return resultado;
  }

  public funcao_calculo_do_arranjo(total: number, divisor: number) {
    let resultado = 0;
    let totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
    for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
    resultado = totalConvertido / (totalConvertido - divisorConvertido);
    return resultado;
  }

  public funcao_calculo_da_probabilidade(valor: number, valorTotal: number) {
    return valor / valorTotal;
  }

  public funcao_calculo_do_conjugado_de_um_numero_complexo(expressao: string) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { expressao.replace("-", ''); }
    resultado = expressao;
    return resultado;
  }

  public funcao_calculo_do_teorema_de_stirling(valor: number) {
    let resultado = 0;
    resultado = (WMath.log(valor) * valor) / valor;
    return resultado;
  }

  public funcao_calculo_da_relacao_de_euler(vertices: number, arestas: number, faces: number) {
    return (vertices - (arestas + faces)) - 2;
  }

  public funcao_calculo_das_potencias_de_i(valor: number) {
    let resultado = '', divisor = valor % 4;
    if (divisor == 0) { resultado = 'i'; }
    if (divisor == 1) { resultado = '-1'; }
    if (divisor == 2) { resultado = '-i'; }
    if (divisor == 3) { resultado = '1'; }
    return resultado;
  }

  public funcao_calculo_da_porcentagem(valorParte: number): number {
    return valorParte / 100;
  }

  public funcao_calculo_da_porcentagem_1000(valorParte: number): number {
    return valorParte / 1000;
  }

  public funcao_calculo_da_porcentagem_10000(valorParte: number): number {
    return valorParte / 10000;
  }

  public funcao_calculo_da_porcentagem_x(valorParte: number, valorTotal: number) {
    return valorParte / valorTotal;
  }

  public funcao_calculo_da_determinante_2x2(a00: number, a01: number, a10: number, a11: number) {
    let resultado = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
    resultado = vetorPrimario - vetorSecundario;
    return resultado;
  }

  public funcao_calculo_da_determinante_3x3(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number) {
    let resultado = 0;
    let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;
    let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;
    resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
    return resultado;
  }

  public funcao_soma_polinomios(polinomio1: string, polinomio2: string) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { polinomio1.replace("-", ''); }
    if (verificaSinal != null) { polinomio2.replace("-", ''); }
    resultado = polinomio1 + '+' + polinomio2;
    return resultado;
  }

  public funcao_subtracao_polinomios(polinomio1: string, polinomio2: string) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { polinomio1.replace("-", ''); }
    if (verificaSinal != null) { polinomio2.replace("-", ''); }
    resultado = polinomio1 + '-' + polinomio2;
    return resultado;
  }

  public funcao_multiplicacao_polinomios(polinomio1: string, polinomio2: string) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { polinomio1.replace("-", ''); }
    if (verificaSinal != null) { polinomio2.replace("-", ''); }
    resultado = polinomio1 + '*' + polinomio2;
    return resultado;
  }

  public funcao_divisao_polinomios(polinomio1: string, polinomio2: string) {
    let resultado = '', verificaSinal = /^(\-)/gi;
    if (verificaSinal != null) { polinomio1.replace("-", ''); }
    if (verificaSinal != null) { polinomio2.replace("-", ''); }
    resultado = polinomio1 + '/' + polinomio2;
    return resultado;
  }

  public funcao_soma_matrizes(matriz: [][], matriz2: [][]): number[][] {
    let resultado;
    for (let i = 0; i < matriz.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz[i].length; j++) {
        resultado[i][j] = matriz[i][j] + matriz2[i][j];
      }
    }
    return resultado;
  }

  public funcao_subtracao_matrizes(matriz: [][], matriz2: [][]) {
    let resultado;
    for (let i = 0; i < matriz.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz[i].length; j++) {
        resultado[i][j] = matriz[i][j] - matriz2[i][j];
      }
    }
    return resultado;
  }

  public funcao_multiplicacao_matrizes(matriz: [][], matriz2: [][]) {
    let resultado;
    for (let i = 0; i < matriz.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz[i].length; j++) {
        if(matriz[0][j] != matriz2[i]){ return "Matrizes não podem ser multiplicadas"; }
        resultado[i][j] = matriz[i][j] * matriz2[i][j];
      }
    }
    return resultado;
  }

  public funcao_divisao_matrizes(matriz: [][], matriz2: [][]) {
    let resultado;
    for (let i = 0; i < matriz.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz[i].length; j++) {
        resultado[i][j] = matriz[i][j] / matriz2[i][j];
      }
    }
    return resultado;
  }

  public funcao_calculo_da_velocidade(espaco: number, tempo: number) {
    return espaco / tempo;
  }

  public funcao_calculo_do_espaco(velocidade: number, tempo: number) {
    return velocidade * tempo;
  }

  public funcao_calculo_do_tempo(velocidade: number, espaco: number) {
    return espaco / velocidade;
  }

  public funcao_calculo_da_aceleracao(velocidade: number, tempo: number) {
    return velocidade / tempo;
  }

  public funcao_calculo_da_equacao_horaria_do_tempo(tempo: number, tempoInicial: number, velocidade: number, aceleracao: number) {
    return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
  }

  public funcao_calculo_da_equacao_horaria_do_espaco(espaco: number, espacoInicial: number, aceleracao: number) {
    return espacoInicial + aceleracao * espaco;
  }

  public funcao_calculo_da_equacao_horaria_da_velocidade(velocidade: number, tempo: number, aceleracao: number) {
    return velocidade + aceleracao * tempo;
  }

  public funcao_calculo_da_equacao_horaria_da_aceleracao(aceleracao: number, tempo: number, velocidade: number) {
    return aceleracao + (velocidade * tempo);
  }

  public funcao_calculo_da_equacao_horaria_da_forca(forca: number, tempo: number, aceleracao: number) {
    return forca + (aceleracao * tempo);
  }

  public funcao_calculo_da_equacao_horaria_do_tempo_espaco(tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number) {
    return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
  }

  public funcao_calculo_da_energia_cinetica(massa: number, velocidade: number) {
    return (massa * velocidade ** 2) / 2;
  }

  public funcao_calculo_da_energia_potencial_elastica(constanteElastica: number, distancia: number) {
    return (constanteElastica * distancia ** 2) / 2;
  }

  public funcao_calculo_da_energia_potencial_gravitacional(massa: number, gravidade: number, altura: number) {
    return massa * gravidade * altura;
  }

  public funcao_calculo_do_potencial_mecanico(velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean) {
    let resultado = 0;
    if (energPotElas == true) { resultado = this.funcao_calculo_da_energia_cinetica(massa, velocidade) + this.funcao_calculo_da_energia_potencial_elastica(constanteElastica, distancia); }
    if (energPotGrav == true) { resultado = this.funcao_calculo_da_energia_cinetica(massa, velocidade) + this.funcao_calculo_da_energia_potencial_gravitacional(massa, gravidade, altura); }
    return resultado;
  }

  public funcao_calculo_do_potencial_elastico(constanteElastica: number, distancia: number) {
    let resultado = this.funcao_calculo_da_energia_potencial_elastica(constanteElastica, distancia);
    return resultado;
  }

  public funcao_calculo_do_plano_inclinado_sem_atrito(massa: number, gravidade: number) {
    let resultado = massa * gravidade;
    return resultado;
  }

  public funcao_calculo_do_plano_inclinado_com_atrito(forcaDeAtrito: number, massa: number, gravidade: number, angulo: number) {
    let resultado = forcaDeAtrito * massa * gravidade * angulo;
    return resultado;
  }

  public funcao_calculo_da_aceleracao_no_plano_inclinado_eixo_x(massa: number, gravidade: number, angulo: number) {
    let resultado = massa * gravidade * WMath.sin(angulo);
    return resultado;
  }

  public funcao_calculo_da_aceleracao_no_plano_inclinado_eixo_y(massa: number, gravidade: number, angulo: number) {
    let resultado = massa * gravidade * WMath.cos(angulo);
    return resultado;
  }

  public funcao_calculo_do_lancamento_horizontal(gravidade: number, tempo: number) {
    let resultado = (gravidade * tempo ** 2) / 2;
    return resultado;
  }

  public funcao_calculo_da_equacao_de_torricelli(velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number) {
    let resultado = WMath.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
    return resultado;
  }

  public funcao_calculo_da_altura_maxima_de_um_lancamento_vertical(velocidadeInicial: number, gravidade: number, angulo: number) {
    let resultado = (velocidadeInicial ** 2) * ((WMath.sin(angulo) ** 2) / 2) * gravidade;
    return resultado;
  }

  public funcao_calculo_do_alcance_de_um_lancamento_vertical(velocidade: number, tempo: number, angulo: number) {
    let resultado = velocidade * WMath.cos(angulo) * tempo;
    return resultado;
  }

  public funcao_calculo_do_alcance_maximo_de_um_lancamento_vertical(velocidade: number, angulo: number, gravidade: number) {
    let resultado = (velocidade ** 2 * (WMath.sin(angulo) ** 2)) / gravidade;
    return resultado;
  }

  public funcao_calculo_do_calor_sensivel(massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number) {
    let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  public funcao_calculo_do_calor_latente(quantidadeDeCalor: number, massa: number) {
    let resultado = quantidadeDeCalor / massa;
    return resultado;
  }

  public funcao_calculo_das_leis_de_newton(massa: number, aceleracao: number) {
    let resultado = massa * aceleracao;
    return resultado;
  }

  public funcao_calculo_do_trabalho(massa: number, gravidade: number, altura: number) {
    let resultado = massa * gravidade * altura;
    return resultado;
  }

  public funcao_calculo_do_consumo_de_energia(tempo: number, correnteEletrica: number, ddp: number) {
    let resultado = correnteEletrica * ddp * tempo;
    return resultado;
  }

  public funcao_calculo_do_teorema_de_pascal(forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean) {
    let resultado = 0;
    if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }
    if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }
    if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }
    if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }
    return resultado;
  }

  public funcao_calculo_do_teorema_de_stevin(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
  }

  public funcao_calculo_do_teorema_de_boltzmann(temperatura: number, constante: number) {
    let resultado = constante * (temperatura ** 4);
    return resultado;
  }

  public funcao_calculo_do_teorema_de_coulomb(correnteEletrica: number, distancia: number) {
    let resultado = correnteEletrica * distancia;
    return resultado;
  }

  public funcao_calculo_do_teorema_de_planck(energia: number, constante: number) {
    let resultado = constante * (energia ** 2);
    return resultado;
  }

  public funcao_calculo_da_forca_gravitacional(gravidade: number, massaPlaneta: number, distancia: number) {
    let resultado = gravidade * (massaPlaneta / distancia ** 2);
    return resultado;
  }

  public funcao_calculo_do_aceleracao_centripeta_movimento_circular_uniforme(velocidade: number, raio: number) {
    let resultado = (velocidade ** 2) / raio;
    return resultado;
  }

  public funcao_calculo_do_velocidade_angular_movimento_circular_uniforme(anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number) {
    let resultado = (anguloFinal - anguloInicial) / (tempoFinal - tempoInicial);
    return resultado;
  }

  public funcao_calculo_do_velocidade_linear_movimento_circular_uniforme(frequencia: number, raio: number) {
    let resultado = (2 * WMath.PI * frequencia) * raio;
    return resultado;
  }

  public funcao_calculo_da_equacao_horaria_do_tempo_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
    let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
    return resultado;
  }

  public funcao_calculo_da_equacao_horaria_do_espaco_movimento_circular_uniformente_Variado(posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
    let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
    return resultado;
  }

  public funcao_calculo_de_toricelli_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number) {
    let resultado = WMath.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
    return resultado;
  }

  public funcao_calculo_da_aceleracao_angular_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number) {
    let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
    return resultado;
  }

  public funcao_calculo_da_equacao_horaria_de_posicao_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
    let resultado = velocidadeAngular * amplitude * WMath.cos(tempo + faseInicial);
    return resultado;
  }

  public funcao_calculo_da_equacao_horaria_de_velocidade_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
    let resultado = -1 * velocidadeAngular * amplitude * WMath.sin(tempo + faseInicial);
    return resultado;
  }

  public funcao_calculo_da_equacao_horaria_de_aceleracao_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
    let resultado = -1 * velocidadeAngular ** 2 * amplitude * WMath.cos(tempo + faseInicial);
    return resultado;
  }

  public funcao_calculo_do_periodo(frequencia: number) {
    let resultado = 1 / frequencia;
    return resultado;
  }

  public funcao_calculo_da_frequencia(periodo: number) {
    let resultado = 1 / periodo;
    return resultado;
  }

  public funcao_calculo_da_temperatura(valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean) {
    let resultado = 0;
    if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }
    if (deCelsiusParaKelvin == true) { resultado = valor - 273; }
    if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }
    if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }
    if (deKelvinParaCelsius == true) { resultado = valor + 273; }
    if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }
    return resultado;
  }

  public funcao_calculo_da_dilatacao_linear(comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number) {
    let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  public funcao_calculo_da_dilatacao_superficial(areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number) {
    let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  public funcao_calculo_da_dilatacao_volumetrica(volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number) {
    let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
    return resultado;
  }

  public funcao_calculo_do_principio_fundamental_da_hidroestatica_hidrodinamica(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
    return resultado;
  }

  public funcao_calculo_do_empuxo_da_hidroestatica_hidrodinamica(densidade: number, gravidade: number, volume: number) {
    let resultado = densidade * gravidade * volume;
    return resultado;
  }

  public funcao_calculoDoPesoAparenteDaHidroestaticaHidrodinamica(peso: number, densidade: number, gravidade: number, volume: number) {
    let resultado = peso - this.funcao_calculo_do_empuxo_da_hidroestatica_hidrodinamica(densidade, gravidade, volume);
    return resultado;
  }

  public funcao_calculo_da_equacao_de_lagrange(x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number) {
    let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
    return resultado;
  }

  public funcao_calculo_do_atrito(coeficienteDeAtrito: number, massa: number) {
    let resultado = coeficienteDeAtrito * massa;
    return resultado;
  }

  public funcao_calculo_da_lei_de_coulomb(carga1: number, carga2: number, distancia: number) {
    let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
    return resultado;
  }

  public funcao_calculo_da_lei_de_ohm(resistencia: number, corrente: number) {
    let resultado = resistencia * corrente;
    return resultado;
  }

  public funcao_calculo_do_efeito_joule(corrente: number, resistencia: number, tempo: number) {
    let resultado = (corrente ** 2) * resistencia * tempo;
    return resultado;
  }

  public funcao_calculo_da_lei_de_lenz(intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number) {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * WMath.cos(cosAngulo);
    return resultado;
  }

  public funcao_calculo_da_forca_eletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
    let resultado = potenciaTotalGerador / intensidadeDaCorrente;
    return resultado;
  }

  public funcao_calculo_da_contra_forca_eletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
    let resultado = -1 * this.funcao_calculo_da_forca_eletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
    return resultado;
  }

  public funcao_calculo_do_efeito_fotoeletrico(frequenciaDaLuz: number) {
    let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
    return resultado;
  }

  public funcao_calculo_da_densidade(massa: number, volume: number) {
    let resultado = massa / volume;
    return resultado;
  }

  public funcao_calculo_da_titulacao(massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean) {
    let resultado = 0;
    if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
    if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
    if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
    if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
    return resultado;
  }

  public funcao_calculo_da_concentracao(massaSoluto: number, volume: number) {
    let resultado = massaSoluto / volume;
    return resultado;
  }

  public funcao_calculo_do_rendimento(valorParte: number, valorTotal: number) {
    let resultado = this.funcao_calculo_da_porcentagem_x(valorParte, valorTotal);
    return resultado;
  }

  public funcao_calculo_da_lei_geral_dos_gases(pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string) {
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

  public funcao_regra_de_tres_simples(valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")) {
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

  public funcao_regra_de_tres_composta(valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")) {
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

  public funcao_sistema_de_equacoes(expressao1: string, expressao2: string) {
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

  public funcao_sistema_de_inequacoes(expressao1: string, expressao2: string) {
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

  public funcao_sistemas_lineares(expressoes: string[]) {
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

  public funcao_soma_numeros_complexos(valores: string[]) {
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

  public funcao_subtracao_numeros_complexos(valorTotal: string, valores: string[]) {
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

  public funcao_multiplicacao_numeros_complexos(valorTotal: string, valores: string[]) {
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

  public funcao_divisao_numeros_complexos(valorTotal: string, valores: string[]) {
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

  public funcao_potencia_numeros_complexos(valorTotal: string, valores: string[], potencia: number) {
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

  public funcao_juros_simples(valor: number, taxa: number, tempo: number) {
    let resultado = valor * (1 + taxa * tempo);
    return resultado;
  }

  public funcao_juros_compostos(valor: number, taxa: number, tempo: number, vezes: number) {
    let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
    return resultado;
  }

  public funcao_vetor_da_distancia_entre_dois_pontos_r2(x1: number, x2:number, y1: number, y2: number) {
    let xResultante = 0, yResultante = 0, resultado = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    resultado = [ xResultante, yResultante ];
    return resultado;
  }

  public funcao_vetor_da_distancia_entre_dois_pontos_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let xResultante = 0, yResultante = 0, zResultante = 0, resultado = [];
    xResultante = x2 - x1;
    yResultante = y2 - y1;
    zResultante = z2 - z1;
    resultado = [ xResultante, yResultante, zResultante ];
    return resultado;
  }

  public funcao_modulo_de_um_vetor_r2(x: number, y: number) {
    let resultado = 0;
    resultado = WMath.sqrt(x ** 2 + y ** 2);
    return resultado;
  }

  public funcao_modulo_de_um_vetor_r3(x: number, y: number, z: number) {
    let resultado = 0;
    resultado = WMath.sqrt(x ** 2 + y ** 2 + z ** 2);
    return resultado;
  }

  public funcao_versor_de_um_vetor_r2(x: number, y:number) {
    let resultado = [];
    let modulo = this.funcao_modulo_de_um_vetor_r2(x, y);
    resultado = [ x / modulo, y / modulo ];
    return resultado;
  }

  public funcao_versor_de_um_vetor_r3(x: number, y: number, z: number) {
    let resultado = [];
    let modulo = this.funcao_modulo_de_um_vetor_r3(x, y, z);
    resultado = [ x / modulo, y / modulo, z / modulo ];
    return resultado;
  }

  public funcao_projecao_de_um_vetor_sobre_outro_vetor_r2(x1: number, x2: number, y1: number, y2: number) {
    let resultado: number[];
    let expressoesVU = [x2 * x1, y2 * y1] 
    let expressoesUU = [x1 * x1, y1 * y1]
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
    resultado = contExpressaoP2;
    return resultado;
  }

  public funcao_projecao_de_um_vetor_sobre_outro_vetor_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let resultado: number[];
    let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
    let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
    let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
    let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
    resultado = contExpressaoP2;
    return resultado;
  }

  public funcao_soma_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 + x2, y1 + y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_soma_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_subtracao_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 - x2, y1 - y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_subtracao_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_produto_escalar_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
    let resultado: number;
    let contExpressaoP1 = [x1 * x2, y1 * y2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1];
    return resultado;
  }

  public funcao_produto_escalar_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let resultado: number;
    let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
    resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
    return resultado;
  }

  public funcao_divisao_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 / x2, y1 / y2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_divisao_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
    let resultado: number[];
    let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_ponto_medio_de_um_vetor_r2(x: number, y: number) {
    let resultado: number[];
    let contExpressaoP1 = [x / 2, y / 2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_ponto_medio_de_um_vetor_r3(x: number, y: number, z: number) {
    let resultado: number[];
    let contExpressaoP1 = [x / 2, y / 2, z / 2];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_cossenos_diretores_de_um_vetor_r2(x: number, y: number) {
    let resultado: number[];
    let contExpressaoP1 = [WMath.cos(x), WMath.cos(y)];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_cossenos_diretores_de_um_vetor_r3(x: number, y: number, z: number) {
    let resultado: number[];
    let contExpressaoP1 = [WMath.cos(x), WMath.cos(y), WMath.cos(z)];
    resultado = contExpressaoP1;
    return resultado;
  }

  public funcao_sinalizacao_quadrantes(x: number, y: number) {
    let resultado: string;
    if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
    if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
    if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
    if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
    return resultado;
  }

  public funcao_sinalizacao_octantes(x: number, y: number, z: number) {
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

  public funcao_quadrado_de_punnet(genotipo1: string, genotipo2: string) {
    
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

  public funcao_quadrado_de_punnet_expandido(genotipo1: string, genotipo2: string) {

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

  public funcao_calculo_da_escala_geografica(tamanhoReal: number, tamanhoFicticio: number) {
    let resultado = tamanhoReal / tamanhoFicticio;
    return resultado;
  }

  public funcao_calculo_de_IDH(saude: number, educacao: number, renda: number, populacao: number, ppc: number) {
    let resultado = (saude + educacao + renda) / (populacao + ppc);
    return resultado;
  }

  public funcao_calculo_de_GINI(pnb: number, populacao: number) {
    let resultado = pnb / populacao;
    return resultado;
  }

  public funcao_calculo_de_IMC(peso: number, altura: number) {
    let resultado = peso / altura ** 2;
    return resultado;
  }

  public funcao_calculo_de_densidade_populacional(espaco: number, populacao: number) {
    let resultado = espaco / populacao;
    return resultado;
  }

  public funcao_calculo_dos_numeros_pares(numero: number) {
    let resultado = numero / 2;
    if(resultado % 2 === 0) { console.info("eh par.") }
    else { console.info("eh impar.") }
    return resultado;
  }

  public funcao_calculo_dos_numeros_impares(numero: number) {
    let resultado = numero / 3;
    if(resultado % 3 === 0) { console.info("eh impar.") }
    else { console.info("eh par.") }
    return resultado;
  }

  public funcao_numero_de_conjuntos(elementos: number) {
    let resultado = 2 ** elementos;
    return resultado;
  }

  public funcao_cria_jogo_da_mega_sena(aposta: number[]) {
    let numeros = [];
    for(let i = 0; i < 6; i++) {
      numeros.push(WMath.floor(WMath.random(i) * 60) + 1);
    }
    if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
      console.info("Você ganhou!");
    }
    else {
      console.info("Você perdeu!");
    }
    return numeros;
  }

  public funcao_cria_jogo_da_quina(aposta: number[]) {
    let numeros = [];
    for(let i = 0; i < 5; i++) {
      numeros.push(WMath.floor(WMath.random(i) * 80) + 1);
    }
    if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4]) {
      console.info("Você ganhou!");
    }
    else {
      console.info("Você perdeu!");
    }
    return numeros;
  }

  public funcao_cria_jogo_da_quadra(aposta: number[]) {
    let numeros = [];
    for(let i = 0; i < 4; i++) {
      numeros.push(WMath.floor(WMath.random(i) * 80) + 1);
    }
    if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3]) {
      console.info("Você ganhou!");
    }
    else {
      console.info("Você perdeu!");
    }
    return numeros;
  }

  public funcao_cria_jogo_da_lotofacil(aposta: number[]) {
    let numeros = [];
    for(let i = 0; i < 6; i++) {
      numeros.push(WMath.floor(WMath.random(i) * 80) + 1);
    }
    if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
      console.info("Você ganhou!");
    }
    else {
      console.info("Você perdeu!");
    }
    return numeros;
  }

  public funcao_cria_jogo_da_Lotomania(aposta: number[]) {
    let numeros = [];
    for(let i = 0; i < 15; i++) {
      numeros.push(WMath.floor(WMath.random(i) * 80) + 1);
    }
    if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5] && aposta[6] === numeros[6] && aposta[7] === numeros[7] && aposta[8] === numeros[8] && aposta[9] === numeros[9] && aposta[10] === numeros[10] && aposta[11] === numeros[11] && aposta[12] === numeros[12] && aposta[13] === numeros[13] && aposta[14] === numeros[14]) {
      console.info("Você ganhou!");
    }
    else {
      console.info("Você perdeu!");
    }
    return numeros;
  }


  public funcao_calculo_do_diagrama_de_venn_de_2_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number) {
    let resultados = { 
      intecessao: numerosGrupoDoisNucleos, 
      nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
      nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
    };
    return resultados;
  }

  public funcao_calculo_do_diagrama_de_venn_de_3_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number) {
    let resultados = { 
      intecessao: numerosGrupoTresNucleos, 
      nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
      nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
      nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
    };
    return resultados;
  }

  public funcao_calculo_do_diagrama_de_venn_de_4_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number) {
    let resultados = { 
      intecessao: numerosGrupoQuatroNucleos, 
      nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
      nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
      nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
      nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
    };
    return resultados;
  }

  public funcao_calculo_dos_numeros_primos(numeroPesquisados: number) {
    let numerosPrimos = [];
    for(let i = 0; i < numeroPesquisados; i++) {
      if(i % 2 !== 0) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }

  public funcao_area_triangulo_qualquer(lado) { 
    return lado * lado * WMath.sqrt(3) / 4; 
  }

  public funcao_apotema_de_um_triangulo_qualquer(lado) {
    return lado * lado * WMath.sqrt(3) / 2;
  }

  public funcao_area_quadrado_qualquer(lado: number) { 
    return lado * lado; 
  }

  public funcao_area_retangulo_qualquer(comp: number, larg: number) { 
    return comp * larg; 
  }

  public funcao_area_circulo_qualquer(raio: number) { 
    return WMath.PI * (raio ** 2); 
  }

  public funcao_area_elipse_qualquer(raio: number, altura: number) { 
    return WMath.PI * (raio ** 2) * altura; 
  }

  public funcao_area_piramide_qualquer(base: number, altura: number) { 
    return (base * altura) / 3; 
  }

  public funcao_area_trapezio_qualquer(baseMaior: number, baseMenor: number, altura: number) { 
    return (baseMaior + baseMenor) * altura / 2; 
  }

  public funcao_area_lozango_qualquer(diagonalMaior: number, diagonalMenor: number, altura: number) { 
    return (diagonalMaior + diagonalMenor) / 2; 
  }

  public funcao_area_de_uma_superficie_qualquer(comp: number, larg: number) {
    return comp * larg;
  }

  public funcao_volume_de_uma_superficie_qualquer(area: number, comp: number, larg: number) {
    return area * comp * larg;
  }

  public funcao_area_esfera_qualquer(raio: number) { 
    return 4 * WMath.PI * (raio ** 2) / 2; 
  }

  public funcao_area_cilindro_qualquer(raio: number, altura: number) { 
    return WMath.PI * (raio ** 2) * altura; 
  }

  public funcao_area_cone_qualquer(raio: number, altura: number) { 
    return WMath.PI * (raio ** 2) * (altura / 3); 
  }

  public funcao_area_de_um_poligono_qualquer(comp: number, larg: number, nLados: number) {
    return comp == larg ? nLados * ((comp * comp * WMath.sqrt(3)) / 4) : nLados * (comp * larg / 2);
  }

  public funcao_volume_de_um_poligono_formato_lozango_qualquer(diagonalMaior: number, diagonalMenor: number, altura: number) {
    return (diagonalMaior + diagonalMenor) / 2 * altura;
  }

  public funcao_volume_de_um_poligono_formato_trapezio_qualquer(baseMaior: number, baseMenor: number, altura: number) {
    return (baseMaior + baseMenor) / 2 * altura;
  }

  public funcao_area_de_um_paralelogramo_qualquer(lado: number, altura: number) { 
    return lado * altura; 
  }

  public funcao_area_lateral_de_um_prisma_qualquer(comp: number, larg: number, nLados: number) {
    return nLados * (comp * larg);
  }

  public funcao_volume_de_um_prisma_qualquer(area: number, comp: number, larg: number) {
    return area * comp * larg;
  }

  public funcao_volume_de_um_cubo_qualquer(aresta: number) { 
    return aresta * aresta * aresta; 
  }

  public funcao_volume_de_um_paralelepipedo_qualquer(comprimento: number, largura: number, altura: number) { 
    return comprimento * largura * altura; 
  }

  public funcao_volume_de_uma_piramide_qualquer(base: number, altura: number) { 
    return (base * altura) / 3; 
  }

  public funcao_volume_de_um_tetraedro_qualquer(aresta: number) { 
    return (aresta * aresta * aresta) / 4; 
  }

  public funcao_volume_de_um_hexaedro_qualquer(aresta: number) { 
    return (aresta * aresta * aresta) / 6; 
  }

  public funcao_volume_de_um_octaedro_qualquer(aresta: number) { 
    return (aresta * aresta * aresta) / 8; 
  }

  public funcao_volume_de_um_dodecaedro_qualquer(aresta: number) { 
    return (aresta * aresta * aresta) / 12; 
  }

  public funcao_volume_de_um_icosaedro_qualquer(aresta: number) { 
    return (aresta * aresta * aresta) / 20; 
  }

  public funcao_volume_de_um_cone_qualquer(raio: number, altura: number) { 
    return (WMath.PI * (raio ** 2) * altura) / 3; 
  }

  public funcao_volum_de_um_cilindro_qualquer(raio: number, altura: number) { 
    return WMath.PI * (raio ** 2) * altura; 
  }

  public funcao_volume_de_um_esfera_qualquer(raio: number) { 
    return (4 * WMath.PI * (raio ** 3)) / 3; 
  }

  public funcao_volume_de_um_romb_qualquer(aresta: number) { 
    return (aresta * aresta) / 2; 
  }

  public funcao_area_circunferencia_qualquer(raio: number) { 
    return WMath.PI * (raio * 2); 
  }

} export var ModuloEquacionais = new Equacionais();