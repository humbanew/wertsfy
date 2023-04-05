//a Módulo da Humbanew RCalc
let rcalc = {

  //2 Calculadora Funções
  funcoes: {
    
    //3 Funções Normais
    normais: {

      //e F. Soma
      soma: (x1=0, x2=0) => { return x1 + x2; },

      //e F. Subtração
      subtracao: (x1=0, x2=0) => { return x1 - x2; },

      //e F. Multiplicação
      multiplicacao: (x1=0, x2=0) => { return x1 * x2; },

      //e F. Divisão
      divisao: (x1=0, x2=0) => { return x1 / x2; },

      //e F. Potência
      potencia: (x1=0, x2=0) => { return Math.pow(x1, x2); },

      //e F. Potência de Potência
      potenciapDePotencia: (x1=0, x2=[0]) => { var x3 = 0; for(let i = 0; i < x2.length; i++) { x3+=x2[i] }; return Math.pow(x1, x3); },

      //e F. Raiz Quadrada
      raizQuadrada: (x1=0) => { return Math.sqrt(x1); },

      //e F. Raiz Cúbica
      raizCubica: (x1=0) => { return Math.cbrt(x1); },

      //e F. Raiz Biquadrada
      raizBiquadrada: (x1=0) => { return Math.sqrt(Math.sqrt(x1)); },

      //e F. Raiz Bicúbica
      raizBicubica: (x1=0) => { return Math.cbrt(Math.cbrt(x1)); },

    },


    //3 Funções Trigonométricas
    trigonometricas: {

      //e F. Seno
      seno: (x1 = 0) => { return Math.sin(x1); },

      //e F. Cosseno
      cosseno: (x1 = 0) => { return Math.cos(x1); },

      //e F. Tangente
      tangente: (x1 = 0) => { return Math.tan(x1); },

      //e F. Secante
      secante: (x1 = 0) => { return 1 / Math.cos(x1); },

      //e F. Cosecante
      cosecante: (x1 = 0) => { return 1 / Math.sin(x1); },

      //e F. Cotangente
      cotangente: (x1 = 0) => { return 1 / Math.tan(x1); },

      //e F. Seno Inverso
      senoInverso: (x1 = 0) => { return Math.asin(x1); },

      //e F. Cosseno Inverso
      cossenoInverso: (x1 = 0) => { return Math.acos(x1); },

      //e F. Tangente Inverso
      tangenteInverso: (x1 = 0) => { return Math.atan(x1); },

      //e F. Secante Inverso
      secanteInverso: (x1 = 0) => { return Math.acos(1 / x1); },

      //e F. Cosecante Inverso
      cosecanteInverso: (x1 = 0) => { return Math.asin(1 / x1); },

      //e F. Cotangente Inverso
      cotangenteInverso: (x1 = 0) => { return Math.atan(1 / x1); },

      //e F. Seno Hiperbólico
      senoHiperbolico: (x1 = 0) => { return Math.sinh(x1); },

      //e F. Cosseno Hiperbólico
      cossenoHiperbolico: (x1 = 0) => { return Math.cosh(x1); },

      //e F. Tangente Hiperbólico
      tangenteHiperbolico: (x1 = 0) => { return Math.tanh(x1); },

      //e F. Secante Hiperbólico
      secanteHiperbolico: (x1 = 0) => { return 1 / Math.cosh(x1); },

      //e F. Cosecante Hiperbólico
      cosecanteHiperbolico: (x1 = 0) => { return 1 / Math.sinh(x1); },

      //e F. Cotangente Hiperbólico
      cotangenteHiperbolico: (x1 = 0) => { return 1 / Math.tanh(x1); },

      //e F. Seno Hiperbólico Inverso
      senoHiperbolicoInverso: (x1 = 0) => { return Math.asinh(x1); },

      //e F. Cosseno Hiperbólico Inverso
      cossenoHiperbolicoInverso: (x1 = 0) => { return Math.acosh(x1); },

      //e F. Tangente Hiperbólico Inverso
      tangenteHiperbolicoInverso: (x1 = 0) => { return Math.atanh(x1); },

      //e F. Secante Hiperbólico Inverso
      secanteHiperbolicoInverso: (x1 = 0) => { return Math.acosh(1 / x1); },

      //e F. Cosecante Hiperbólico Inverso
      cosecanteHiperbolicoInverso: (x1 = 0) => { return Math.asinh(1 / x1); },

      //e F. Cotangente Hiperbólico Inverso
      cotangenteHiperbolicoInverso: (x1 = 0) => { return Math.atanh(1 / x1); },

      //e F. Arco Seno
      arcoSeno: (x1 = 0) => { return Math.asin(x1); },

      //e F. Arco Cosseno
      arcoCosseno: (x1 = 0) => { return Math.acos(x1); },

      //e F. Arco Tangente
      arcoTangente: (x1 = 0) => { return Math.atan(x1); },

      //e F. Arco Secante
      arcoSecante: (x1 = 0) => { return Math.acos(1 / x1); },

      //e F. Arco Cosecante
      arcoCosecante: (x1 = 0) => { return Math.asin(1 / x1); },

      //e F. Arco Cotangente
      arcoCotangente: (x1 = 0) => { return Math.atan(1 / x1); },

      //e F. Arco Seno Hiperbólico
      arcoSenoHiperbolico: (x1 = 0) => { return Math.asinh(x1); },

      //e F. Arco Cosseno Hiperbólico
      arcoCossenoHiperbolico: (x1 = 0) => { return Math.acosh(x1); },

      //e F. Arco Tangente Hiperbólico
      arcoTangenteHiperbolico: (x1 = 0) => { return Math.atanh(x1); },

      //e F. Arco Secante Hiperbólico
      arcoSecanteHiperbolico: (x1 = 0) => { return Math.acosh(1 / x1); },

      //e F. Arco Cosecante Hiperbólico
      arcoCosecanteHiperbolico: (x1 = 0) => { return Math.asinh(1 / x1); },

      //e F. Arco Cotangente Hiperbólico
      arcoCotangenteHiperbolico: (x1 = 0) => { return Math.atanh(1 / x1); },

      //e F. Arco Seno Inverso
      arcoSenoInverso: (x1 = 0) => { return Math.asin(x1); },

      //e F. Arco Cosseno Inverso
      arcoCossenoInverso: (x1 = 0) => { return Math.acos(x1); },

      //e F. Arco Tangente Inverso
      arcoTangenteInverso: (x1 = 0) => { return Math.atan(x1); },

      //e F. Arco Secante Inverso
      arcoSecanteInverso: (x1 = 0) => { return Math.acos(1 / x1); },

      //e F. Arco Cosecante Inverso
      arcoCosecanteInverso: (x1 = 0) => { return Math.asin(1 / x1); },

      //e F. Arco Cotangente Inverso
      arcoCotangenteInverso: (x1 = 0) => { return Math.atan(1 / x1); },

      //e F. Arco Seno Hiperbólico Inverso
      arcoSenoHiperbolicoInverso: (x1 = 0) => { return Math.asinh(x1); },

      //e F. Arco Cosseno Hiperbólico Inverso
      arcoCossenoHiperbolicoInverso: (x1 = 0) => { return Math.acosh(x1); },

      //e F. Arco Tangente Hiperbólico Inverso
      arcoTangenteHiperbolicoInverso: (x1 = 0) => { return Math.atanh(x1); },

      //e F. Arco Secante Hiperbólico Inverso
      arcoSecanteHiperbolicoInverso: (x1 = 0) => { return Math.acosh(1 / x1); },

      //e F. Arco Cosecante Hiperbólico Inverso
      arcoCosecanteHiperbolicoInverso: (x1 = 0) => { return Math.asinh(1 / x1); },

      //e F. Arco Cotangente Hiperbólico Inverso
      arcoCotangenteHiperbolicoInverso: (x1 = 0) => { return Math.atanh(1 / x1); },

    },

    //3 Funções Logaritmicas
    logaritmicas: {

      //e F. Logaritmo Natural
      logaritmoNatural: (x1 = 0) => { return Math.log(x1); },

      //e F. Logaritmo Base 10
      logaritmoBase10: (x1 = 0) => { return Math.log10(x1); },

      //e F. Logaritmo Base 2
      logaritmoBase2: (x1 = 0) => { return Math.log2(x1); },

      //e F. Logaritmo Base Euler
      logaritmoBaseEuler: (x1 = 0) => { return Math.log(x1) / Math.LN10; },

      //e F. Logaritmo Base Euler Inverso
      logaritmoBaseEulerInverso: (x1 = 0) => { return Math.pow(10, x1); },

      //e F. Logaritmo Base Euler Hiperbólico
      logaritmoBaseEulerHiperbolico: (x1 = 0) => { return Math.log(x1) / Math.LN10; },

      //e F. Logaritmo Base Euler Hiperbólico Inverso
      logaritmoBaseEulerHiperbolicoInverso: (x1 = 0) => { return Math.pow(10, x1); },

      //e F. Logaritmo Base 2 Hiperbólico
      logaritmoBase2Hiperbolico: (x1 = 0) => { return Math.log2(x1); },

      //e F. Logaritmo Base 2 Hiperbólico Inverso
      logaritmoBase2HiperbolicoInverso: (x1 = 0) => { return Math.pow(2, x1); },

      //e F. Logaritmo Base 2 Inverso
      logaritmoBase2Inverso: (x1 = 0) => { return Math.pow(2, x1); },

      //e F. Logaritmo Base 10 Hiperbólico
      logaritmoBase10Hiperbolico: (x1 = 0) => { return Math.log10(x1); },

      //e F. Logaritmo Base 10 Hiperbólico Inverso
      logaritmoBase10HiperbolicoInverso: (x1 = 0) => { return Math.pow(10, x1); },

      //e F. Logaritmo Base 10 Inverso
      logaritmoBase10Inverso: (x1 = 0) => { return Math.pow(10, x1); },

      //e F. Logaritmo Base Qualquer
      logaritmoBaseQualquer: (x1 = 0, x2 = 0) => { return Math.log(x1) / Math.log(x2); }, 

      //e F. Logaritmo Natural Mais Um
      logaritmoNaturalMaisUm: (x1 = 0) => { return Math.log1p(x1); },

      //e F. Logaritmo Natural Mais Um Inverso
      logaritmoNaturalMaisUmInverso: (x1 = 0) => { return Math.expm1(x1); },

      //e F. Logaritmo Natural Hiperbólico Mais Um
      logaritmoNaturalHiperbolicoMaisUm: (x1 = 0) => { return 1 / Math.log1p(x1); },

      //e F. Logaritmo Natural Hiperbólico Mais Um Inverso
      logaritmoNaturalHiperbolicoMaisUmInverso: (x1 = 0) => { return 1 / Math.expm1(x1); },

      //e F. Logaritmo Natural Mais Número Qualquer
      logaritmoNaturalMaisQualquer: (x1 = 0) => { return Math.log1p(x1); },

      //e F. Logaritmo Natural Mais Número Qualquer Inverso
      logaritmoNaturalMaisQualquerInverso: (x1 = 0) => { return Math.expm1(x1); },

      //e F. Logaritmo Natural Hiperbólico Mais Número Qualquer
      logaritmoNaturalHiperbolicoMaisQualquer: (x1 = 0) => { return 1 / Math.log1p(x1); },

      //e F. Logaritmo Natural Hiperbólico Mais Número Qualquer Inverso
      logaritmoNaturalHiperbolicoMaisQualquerInverso: (x1 = 0) => { return 1 / Math.expm1(x1); },

      //e F. Antilogaritmo Natural
      antilogaritmoNatural: (x1 = 0) => {let base = 2.7182818284590452353602874; x1 = base ** Math.log(valor); return x1; },

      //e F. Antilogaritmo Base 10
      antilogaritmoBase10: (x1 = 0) => { let base = 10; x1 = base ** Math.log10(valor); return x1; },

      //e F. Antilogaritmo Base 2
      antilogaritmoBase2: (x1 = 0) => { let base = 2; x1 = base ** Math.log2(valor); return x1; },

      //e F. Antilogaritmo Base Euler
      antilogaritmoBaseEuler: (x1 = 0) => { let base = Math.E; x1 = base ** Math.log(valor); return x1; },

      //e F. Antilogaritmo Base Euler Hiperbólico
      antilogaritmoBaseEulerHiperbolico: (x1 = 0) => { let base = 1 / Math.E; x1 = base ** Math.log(valor); return x1; },

      //e F. Antilogaritmo Base 2 Hiperbólico
      antilogaritmoBase2Hiperbolico: (x1 = 0) => { let base = 1 / Math.E; x1 = base ** Math.log2(valor); return x1; },

      //e F. Antilogaritmo Base 2 Inverso
      antilogaritmoBase2Inverso: (x1 = 0) => { let base = 1 / Math.E; x1 = base ** (1 / Math.log2(valor)); return x1; },

      //e F. Antilogaritmo Base 10 Hiperbólico
      antilogaritmoBase10Hiperbolico: (x1 = 0) => { let base = 1 / Math.E; x1 = base ** Math.log10(valor); return x1; },

      //e F. Antilogaritmo Base 10 Inverso
      antilogaritmoBase10Inverso: (x1 = 0) => { let base = 1 / Math.E; x1 = base ** (1 / Math.log10(valor)); return x1; },

      //e F. Antilogaritmo Base Qualquer
      antilogaritmoBaseQualquer: (x1 = 0, x2 = 0) => { let base = x2; x1 = base ** Math.log(valor); return x1; },

      //e F. Antilogaritmo Natural Mais Um
      antilogaritmoNaturalMaisUm: (x1 = 0) => { let base = 2.7182818284590452353602874; x1 = base ** Math.log1p(valor); return x1; },

      //e F. Antilogaritmo Natural Mais Um Inverso
      antilogaritmoNaturalMaisUmInverso: (x1 = 0) => { let base = 1 / 2.7182818284590452353602874; x1 = base ** Math.expm1(valor); return x1; },

      //e F. Antilogaritmo Natural Hiperbólico Mais Um
      antilogaritmoNaturalHiperbolicoMaisUm: (x1 = 0) => { let base = 1 / 2.7182818284590452353602874; x1 = base ** Math.log1p(valor); return x1; },

      //e F. Antilogaritmo Natural Hiperbólico Mais Um Inverso
      antilogaritmoNaturalHiperbolicoMaisUmInverso: (x1 = 0) => { let base = 2.7182818284590452353602874; x1 = base ** Math.expm1(valor); return x1; },

      //e F. Antilogaritmo Natural Mais Número Qualquer
      antilogaritmoNaturalMaisQualquer: (x1 = 0) => { let base = 2.7182818284590452353602874; x1 = base ** Math.log1p(valor); return x1; },

      //e F. Antilogaritmo Natural Mais Número Qualquer Inverso
      antilogaritmoNaturalMaisQualquerInverso: (x1 = 0) => { let base = 1 / 2.7182818284590452353602874; x1 = base ** Math.expm1(valor); return x1; },

      //e F. Antilogaritmo Natural Hiperbólico Mais Número Qualquer
      antilogaritmoNaturalHiperbolicoMaisQualquer: (x1 = 0) => { let base = 1 / 2.7182818284590452353602874; x1 = base ** Math.log1p(valor); return x1; },

      //e F. Antilogaritmo Natural Hiperbólico Mais Número Qualquer Inverso
      antilogaritmoNaturalHiperbolicoMaisQualquerInverso: (x1 = 0) => { let base = 2.7182818284590452353602874; x1 = base ** Math.expm1(valor); return x1; },

      //e F. Cologaritmo Natural
      cologaritmoNatural: (x1 = 0) => { return Math.log(x1) * -1; },

      //e F. Cologaritmo Base 10
      cologaritmoBase10: (x1 = 0) => { return Math.log10(x1) * -1; },

      //e F. Cologaritmo Base 2
      cologaritmoBase2: (x1 = 0) => { return Math.log2(x1) * -1; },

      //e F. Cologaritmo Base Euler
      cologaritmoBaseEuler: (x1 = 0) => { return Math.log(x1) * -1; },

      //e F. Cologaritmo Base Euler Hiperbólico
      cologaritmoBaseEulerHiperbolico: (x1 = 0) => { return 1 / (1 / Math.log(x1)) * -1; },

      //e F. Cologaritmo Base 2 Hiperbólico
      cologaritmoBase2Hiperbolico: (x1 = 0) => { return 1 / (1 / Math.log2(x1)) * -1; },

      //e F. Cologaritmo Base 2 Inverso
      cologaritmoBase2Inverso: (x1 = 0) => { return 1 / Math.log2(x1) * -1; },

      //e F. Cologaritmo Base 10 Hiperbólico
      cologaritmoBase10Hiperbolico: (x1 = 0) => { return 1 / (1 / Math.log10(x1)) * -1; },

      //e F. Cologaritmo Base 10 Inverso
      cologaritmoBase10Inverso: (x1 = 0) => { return 1 / Math.log10(x1) * -1; },

      //e F. Cologaritmo Base Qualquer
      cologaritmoBaseQualquer: (x1 = 0) => { return Math.log(x1) * -1; },

    },

    //3 Funções Cartesianas
    funcoes: {

    },

    //3 Funções Formulacionais
    formulacionais: { 
    },

    //3 Funções Sistemáticas
    sistematicas: {
    },

    //3 Funções Polinomiais
    polinomiais: {
    },

    //3 Funções Geométricas
    geometricas: {

      areaTrianguloQualquer: (comp = 0, larg = 0) => { return comp == larg ? (comp * comp * Math.sqrt(3)) / 4 : comp * larg / 2; },

      areaQuadradoQualquer: (lado = 0) => { return lado * lado; },

      areaRetanguloQualquer: (comp = 0, larg = 0) => { return comp * larg; },

      areaCirculoQualquer: (raio = 0) => { return Math.PI * (raio ** 2); },

      areaElipseQualquer: (raio = 0, altura = 0) => { return Math.PI * (raio ** 2) * altura; },

      areaPiramideQualquer: (base = 0, altura = 0) => { return (base * altura) / 3; },

      areaCuboQualquer: (aresta = 0) => { return aresta * aresta * aresta; },

      areaParalelepipedoQualquer: (aresta = 0, altura = 0, largura = 0) => { return aresta * altura * largura; },

      areaEsferaQualquer: (raio = 0) => { return 4 * Math.PI * (raio ** 2); },

      areaCilindroQualquer: (raio = 0, altura = 0) => { return Math.PI * (raio ** 2) * altura; },

      areaConeQualquer: (raio = 0, altura = 0) => { return Math.PI * (raio ** 2) * (altura / 3); },

      areaPoligonoDe5Lados: (comp = 0, larg = 0) => { return comp == larg ? 5 * ((comp * comp * Math.sqrt(3)) / 4) : 5 * (comp * larg / 2); },

      areaPoligonoDe6Lados: (comp = 0, larg = 0) => { return comp == larg ? 6 * ((comp * comp * Math.sqrt(3)) / 4) : 6 * (comp * larg / 2); },

      areaPoligonoDe7Lados: (comp = 0, larg = 0) => { return comp == larg ? 7 * ((comp * comp * Math.sqrt(3)) / 4) : 7 * (comp * larg / 2); },

      areaPoligonoDe8Lados: (comp = 0, larg = 0) => { return comp == larg ? 8 * ((comp * comp * Math.sqrt(3)) / 4) : 8 * (comp * larg / 2); },

      areaPoligonoDe9Lados: (comp = 0, larg = 0) => { return comp == larg ? 9 * ((comp * comp * Math.sqrt(3)) / 4) : 9 * (comp * larg / 2); },

      areaPoligonoDe10Lados: (comp = 0, larg = 0) => { return comp == larg ? 10 * ((comp * comp * Math.sqrt(3)) / 4) : 10 * (comp * larg / 2); },

      areaPoligonoDe11Lados: (comp = 0, larg = 0) => { return comp == larg ? 11 * ((comp * comp * Math.sqrt(3)) / 4) : 11 * (comp * larg / 2); },

      areaPoligonoDe12Lados: (comp = 0, larg = 0) => { return comp == larg ? 12 * ((comp * comp * Math.sqrt(3)) / 4) : 12 * (comp * larg / 2); },

      areaPoligonoDe13Lados: (comp = 0, larg = 0) => { return comp == larg ? 13 * ((comp * comp * Math.sqrt(3)) / 4) : 13 * (comp * larg / 2); },

      areaPoligonoDe14Lados: (comp = 0, larg = 0) => { return comp == larg ? 14 * ((comp * comp * Math.sqrt(3)) / 4) : 14 * (comp * larg / 2); },

      areaPoligonoDe15Lados: (comp = 0, larg = 0) => { return comp == larg ? 15 * ((comp * comp * Math.sqrt(3)) / 4) : 15 * (comp * larg / 2); },

      areaPoligonoDe16Lados: (comp = 0, larg = 0) => { return comp == larg ? 16 * ((comp * comp * Math.sqrt(3)) / 4) : 16 * (comp * larg / 2); },

      areaPoligonoDe17Lados: (comp = 0, larg = 0) => { return comp == larg ? 17 * ((comp * comp * Math.sqrt(3)) / 4) : 17 * (comp * larg / 2); },

      areaPoligonoDe18Lados: (comp = 0, larg = 0) => { return comp == larg ? 18 * ((comp * comp * Math.sqrt(3)) / 4) : 18 * (comp * larg / 2); },

      areaPoligonoDe19Lados: (comp = 0, larg = 0) => { return comp == larg ? 19 * ((comp * comp * Math.sqrt(3)) / 4) : 19 * (comp * larg / 2); },

      areaPoligonoDe20Lados: (comp = 0, larg = 0) => { return comp == larg ? 20 * ((comp * comp * Math.sqrt(3)) / 4) : 20 * (comp * larg / 2); },

      areaPoligonoDe21Lados: (comp = 0, larg = 0) => { return comp == larg ? 21 * ((comp * comp * Math.sqrt(3)) / 4) : 21 * (comp * larg / 2); },

      areaPoligonoDe22Lados: (comp = 0, larg = 0) => { return comp == larg ? 22 * ((comp * comp * Math.sqrt(3)) / 4) : 22 * (comp * larg / 2); },

      areaPoligonoDe23Lados: (comp = 0, larg = 0) => { return comp == larg ? 23 * ((comp * comp * Math.sqrt(3)) / 4) : 23 * (comp * larg / 2); },

      areaPoligonoDe24Lados: (comp = 0, larg = 0) => { return comp == larg ? 24 * ((comp * comp * Math.sqrt(3)) / 4) : 24 * (comp * larg / 2); },

      areaPoligonoDe25Lados: (comp = 0, larg = 0) => { return comp == larg ? 25 * ((comp * comp * Math.sqrt(3)) / 4) : 25 * (comp * larg / 2); },

      areaPoligonoDe26Lados: (comp = 0, larg = 0) => { return comp == larg ? 26 * ((comp * comp * Math.sqrt(3)) / 4) : 26 * (comp * larg / 2); },

      areaPoligonoDe27Lados: (comp = 0, larg = 0) => { return comp == larg ? 27 * ((comp * comp * Math.sqrt(3)) / 4) : 27 * (comp * larg / 2); },

      areaPoligonoDe28Lados: (comp = 0, larg = 0) => { return comp == larg ? 28 * ((comp * comp * Math.sqrt(3)) / 4) : 28 * (comp * larg / 2); },

      areaPoligonoDe29Lados: (comp = 0, larg = 0) => { return comp == larg ? 29 * ((comp * comp * Math.sqrt(3)) / 4) : 29 * (comp * larg / 2); },

      areaPoligonoDe30Lados: (comp = 0, larg = 0) => { return comp == larg ? 30 * ((comp * comp * Math.sqrt(3)) / 4) : 30 * (comp * larg / 2); },

      areaDeUmTrapezioQualquer: (ladoMenor = 0, ladoMaior = 0, altura = 0) => { return ((ladoMaior + ladoMenor) * altura) / 2; },

      areaDeUmParalelogramoQualquer: (lado = 0, altura = 0) => { return lado * altura; },

      areaDeUmLosangoQualquer: (diagonalMaior = 0, diagonalMenor = 0) => { return (diagonalMaior * diagonalMenor) / 2; },

      areaLateralDeUmPrismaDe3LadosQualquer: (comp = 0, larg = 0) => { return 3 * (comp * larg); },

      areaLateralDeUmPrismaDe4LadosQualquer: (comp = 0, larg = 0) => { return 4 * (comp * larg); },

      areaLateralDeUmPrismaDe5LadosQualquer: (comp = 0, larg = 0) => { return 5 * (comp * larg); },

      areaLateralDeUmPrismaDe6LadosQualquer: (comp = 0, larg = 0) => { return 6 * (comp * larg); },

      areaLateralDeUmPrismaDe7LadosQualquer: (comp = 0, larg = 0) => { return 7 * (comp * larg); },

      areaLateralDeUmPrismaDe8LadosQualquer: (comp = 0, larg = 0) => { return 8 * (comp * larg); },

      areaLateralDeUmPrismaDe9LadosQualquer: (comp = 0, larg = 0) => { return 9 * (comp * larg); },

      areaLateralDeUmPrismaDe10LadosQualquer: (comp = 0, larg = 0) => { return 10 * (comp * larg); },

      areaLateralDeUmPrismaDe11LadosQualquer: (comp = 0, larg = 0) => { return 11 * (comp * larg); },

      areaLateralDeUmPrismaDe12LadosQualquer: (comp = 0, larg = 0) => { return 12 * (comp * larg); },

      areaLateralDeUmPrismaDe13LadosQualquer: (comp = 0, larg = 0) => { return 13 * (comp * larg); },

      areaLateralDeUmPrismaDe14LadosQualquer: (comp = 0, larg = 0) => { return 14 * (comp * larg); },

      areaLateralDeUmPrismaDe15LadosQualquer: (comp = 0, larg = 0) => { return 15 * (comp * larg); },

      areaLateralDeUmPrismaDe16LadosQualquer: (comp = 0, larg = 0) => { return 16 * (comp * larg); },

      areaLateralDeUmPrismaDe17LadosQualquer: (comp = 0, larg = 0) => { return 17 * (comp * larg); },

      areaLateralDeUmPrismaDe18LadosQualquer: (comp = 0, larg = 0) => { return 18 * (comp * larg); },

      areaLateralDeUmPrismaDe19LadosQualquer: (comp = 0, larg = 0) => { return 19 * (comp * larg); },

      areaLateralDeUmPrismaDe20LadosQualquer: (comp = 0, larg = 0) => { return 20 * (comp * larg); },

      areaLateralDeUmPrismaDe21LadosQualquer: (comp = 0, larg = 0) => { return 21 * (comp * larg); },

      areaLateralDeUmPrismaDe22LadosQualquer: (comp = 0, larg = 0) => { return 22 * (comp * larg); },

      areaLateralDeUmPrismaDe23LadosQualquer: (comp = 0, larg = 0) => { return 23 * (comp * larg); },

      areaLateralDeUmPrismaDe24LadosQualquer: (comp = 0, larg = 0) => { return 24 * (comp * larg); },

      areaLateralDeUmPrismaDe25LadosQualquer: (comp = 0, larg = 0) => { return 25 * (comp * larg); },

      areaLateralDeUmPrismaDe26LadosQualquer: (comp = 0, larg = 0) => { return 26 * (comp * larg); },

      areaLateralDeUmPrismaDe27LadosQualquer: (comp = 0, larg = 0) => { return 27 * (comp * larg); },

      areaLateralDeUmPrismaDe28LadosQualquer: (comp = 0, larg = 0) => { return 28 * (comp * larg); },

      areaLateralDeUmPrismaDe29LadosQualquer: (comp = 0, larg = 0) => { return 29 * (comp * larg); },

      areaLateralDeUmPrismaDe30LadosQualquer: (comp = 0, larg = 0) => { return 30 * (comp * larg); },


    },


  },


};


  //$ funcFormulas: { },
  
  //$ funcPolinomios: { },
  
  //$ funcGeometricos: { },
  
  //$ funcExperimentais: { },
  
  //$ funcFicticias: { },
  
  //$ funcSistemas: { },
  
  //$ funcMatrizes: { },

  //7 funcComplexas: { },
  
  //7 funcComplexasTrigonometricas: { },

  //0 funcJogosSorteios: { },
  
  //0 funcJogosLoteria: { },

  //6 funcConversoras: { },
  
  //6 funcConversaoBases: { },
