type TOperacoes = "+" | "-" | "*" | "/" | "%";

export default class RaxCalc {
  protected readonly funcionalidades_constantes: object = {
    /**
     * # Constante de avogadro
     * @readonly
     */
    AVOGADRO: 6.022e23,

    /**
     * # Constante da raiz cúbica de 1/2
     * @readonly
     */
    CBRT_01B02: 0.707106,

    /**
     * # Constante da raiz cúbica de 1/4
     * @readonly
     */
    CBRT_01B04: 0.5,

    /**
     * # Constante da raiz cúbica de 1/6
     * @readonly
     */
    CBRT_01B06: 0.408248,

    /**
     * # Constante da raiz cúbica de 1/8
     * @readonly
     */
    CBRT_01B08: 0.353553,

    /**
     * # Constante da raiz cúbica de 1
     * @readonly
     */
    CBRT_01: 1.0,

    /**
     * # Constante da raiz cúbica de 2
     * @readonly
     */
    CBRT_02: 1.259921,

    /**
     * # Constante da raiz cúbica de 3
     * @readonly
     */
    CBRT_03: 1.587401,

    /**
     * # Constante da raiz cúbica de 4
     * @readonly
     */
    CBRT_04: 1.999999,

    /**
     * # Constante da raiz cúbica de 5
     * @readonly
     */
    CBRT_05: 2.236067,

    /**
     * # Constante da raiz cúbica de 6
     * @readonly
     */
    CBRT_06: 2.581988,

    /**
     * # Constante da raiz cúbica de 7
     * @readonly
     */
    CBRT_07: 2.912931,

    /**
     * # Constante da raiz cúbica de 8
     * @readonly
     */
    CBRT_08: 3.262495,

    /**
     * # Constante da raiz cúbica de 9
     * @readonly
     */
    CBRT_09: 3.624499,

    /**
     * # Constante da raiz cúbica de 10
     * @readonly
     */
    CBRT_10: 3.999999,

    /**
     * # Constante de coulomb
     * @readonly
     */
    COULOMB: 1.601e-19,

    /**
     * # Constante de euler
     * @readonly
     */
    EULER: 2.718281,

    /**
     * # Constante do logarítmo de 2
     * @readonly
     */
    LOG2: 0.693147,

    /**
     * # Constante do logarítmo de 2 na base Euler
     * @readonly
     */
    LOG2E: 1.442695,

    /**
     * # Constante do logarítmo de 10
     * @readonly
     */
    LOG10: 2.302585,

    /**
     * # Constante do logarítmo de 10 na base euler
     * @readonly
     */
    LOG10E: 0.434294,

    /**
     * # Constante de valor máximo
     * @readonly
     */
    MAXVALUE: 999999,

    /**
     * # Constante do valor mínimo
     * @readonly
     */
    MINVALUE: -999999,

    /**
     * # Constante de newton
     * @readonly
     */
    NEWTON: 6.674e-11,

    /**
     * # Constante de pi
     * @readonly
     */
    PI: 3.141592,

    /**
     * # Constante de plank
     * @readonly
     */
    PLANK: 6.626e-34,

    /**
     * # Constante da raiz quadrada de 1/2
     * @readonly
     */
    SQRT_01B02: 0.7937,

    /**
     * # Constante da raiz quadrada de 1/4
     * @readonly
     */
    SQRT_01B04: 0.62996,

    /**
     * # Constante da raiz quadrada de 1/6
     * @readonly
     */
    SQRT_01B06: 0.550321,

    /**
     * # Constante da raiz quadrada de 1/8
     * @readonly
     */
    SQRT_01B08: 0.5,

    /**
     * # Constante da raiz quadrada de 1
     * @readonly
     */
    SQRT_01: 1.0,

    /**
     * # Constante da raiz quadrada de 2
     * @readonly
     */
    SQRT_02: 1.414213,

    /**
     * # Constante da raiz quadrada de 3
     * @readonly
     */
    SQRT_03: 1.73205,

    /**
     * # Constante da raiz quadrada de 4
     * @readonly
     */
    SQRT_04: 2.0,

    /**
     * # Constante da raiz quadrada de 5
     * @readonly
     */
    SQRT_05: 2.236067,

    /**
     * # Constante da raiz quadrada de 6
     * @readonly
     */
    SQRT_06: 2.449489,

    /**
     * # Constante da raiz quadrada de 7
     * @readonly
     */
    SQRT_07: 2.645751,

    /**
     * # Constante da raiz quadrada de 8
     * @readonly
     */
    SQRT_08: 2.828427,

    /**
     * # Constante da raiz quadrada de 9
     * @readonly
     */
    SQRT_09: 3.0,

    /**
     * # Constante da raiz quadrada de 10
     * @readonly
     */
    SQRT_10: 3.162277,

    /**
     * # Constante de tesla
     * @readonly
     */
    TESLA: 1.602e-19,

    /**
     * # Constante zero
     * @readonly
     */
    ZERO: 0.0,
  };
  private funcionalidades_modulos = {
    /**
     * # Funcionalidade do Valor Absoluto
     * @param x valor atribuído.
     * @returns valor absoluto de x.
     */
    absoluto(x: number): number {
      return x < 0 ? -1 * x : x;
    },

    /**
     * # Funcionalidade de Soma, Subtração, Multiplicação, Divisão e Resto
     * @param op operação que será usada na lista de números.
     * @param valores a lista de números submetidos para a operação selecionada.
     * @returns o valor numérico final da operação fundamental realizada.
     */
    essenciais(op: TOperacoes[], ...valores: number[]): number {
      let total: number = 0;

      total = valores[0];
      for (let i = 1, j = 0; i < valores.length, j < op.length; i++, j++) {
        op[j] == "-" ? (total = total * -1) : total;
        j++;
        switch (op[j]) {
          case "+":
            total += valores[i];
            break;
          case "-":
            total -= valores[i];
            break;
          case "*":
            total *= valores[i];
            break;
          case "/":
            total /= valores[i];
            break;
          case "%":
            total %= valores[i];
            break;
        }
      }
      return total;
    },

    /**
     * # Funcionalidade da Potência
     * @param a valor 1 - base
     * @param b valor 2 - expoente
     * @param M1 habilita a potência usando mais 1 no resultado
     * @param m1 habilita a potência usando menos 1 no resultado
     * @returns retorna o valor da potência de um número.
     * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
     */
    potencia(a: number, b: number, M1?: boolean, m1?: boolean): number {
      if (M1 == true && m1 == true) {
        throw new Error(
          "Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]",
        );
      }
      if (M1 == true) {
        return a ** b + 1;
      }
      if (m1 == true) {
        return a ** b - 1;
      }
      return a ** b;
    },

    /**
     * # Funcionalidade da Potência de 2
     * @param x valor da potência de 2.
     * @returns retorna o valor real da potência de 2 calculada.
     */
    potencia2x(x: number): number {
      return 2 ** x;
    },

    /**
     * # Funcionalidade da Potência de 10
     * @param x valor da potência de 10.
     * @returns retorna o valor real da potência de 10 calculada.
     */
    potencia10x(x: number): number {
      return 10 ** x;
    },

    /**
     * # Funcionalidade da Potência de Potência
     * @param a valor 1 - base
     * @param b valor 2 - sequência de expoentes
     * @param M1 habilita a potência usando mais 1 no resultado
     * @param m1 habilita a potência usando menos 1 no resultado
     * @returns retorna o valor da potência de um número.
     * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
     */
    potenciaDePotencia(
      a: number = 1,
      b: number[],
      M1?: boolean,
      m1?: boolean,
    ): number {
      let i: number = 0,
        r: number = 0;
      while (i < b.length) {
        if (M1 == true && m1 == true) {
          throw new Error(
            "Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]",
          );
        }
        if (M1 == true) {
          r = a ** b[i] + 1;
          i++;
        }
        if (m1 == true) {
          r = a ** b[i] - 1;
          i++;
        }
        r = a ** b[i];
        i++;
      }
      return r;
    },

    /**
     * # Funcionalidade da Raiz Cúbica
     * @param a valor
     * @returns retorna o valor da raiz cúbica.
     */
    raizCubica(a: number): number {
      return a ** (1 / 3);
    },

    /**
     * # Funcionalidade da Raiz Enésima
     * @param a valor
     * @param n valor do índice da raiz
     * @returns retorna o valor da raiz enésima.
     */
    raizEnesima(a: number, n: number): number {
      return a ** (1 / n);
    },

    /**
     * # Funcionalidade da Raiz Quadrada
     * @param a valor
     * @returns retorna o valor da raiz quadrada.
     */
    raizQuadrada(a: number): number {
      return a ** (1 / 2);
    },

    /**
     * # Funcionalidade do Valor Máximo
     * @param valores numerais reais.
     * @returns o maior valor entre os valores passados.
     */
    valorMaximo(...valores: number[]): number {
      let max = 0;
      for (let i = 0; i < valores.length; i++) {
        if (valores[i] > max) max = valores[i];
      }
      return max;
    },

    /**
     * # Funcionalidade do Valor Mínimo
     * @param valores numerais reais.
     * @returns o menor valor entre os valores passados.
     */
    valorMinimo(...valores: number[]): number {
      let min = Infinity;
      for (let i = 0; i < valores.length; i++) {
        if (valores[i] < min) min = valores[i];
      }
      return min;
    },
  };
}
