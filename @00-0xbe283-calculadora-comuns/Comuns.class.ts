type OperadoresBinarios = "SOMA" | "SUBTRACAO" | "DIVISAO" | "MULTIPLICACAO" | "RESTO";

export class Comuns 
{
  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo de Soma, Subtração, Multiplicação, Divisão e Resto de Numerais Reais
   * @param op operação que será usada na lista de números.
   * @param valores a lista de números submetidos para a operação selecionada.
   * @returns o valor numérico final da operação fundamental realizada.
   */
  public operacoes_fundamentais(
    op: OperadoresBinarios,
    ...valores: number[]
  ): number 
  {
    let total: number = 0;

    for (let i = 0; i < valores.length; i += 2) {
      switch (op) {
        case "SOMA":
          if (valores[i + 1] == null) total = valores[i] + 0;
          total = valores[i] + valores[i + 1];
        case "SUBTRACAO":
          if (valores[i + 1] == null) total = valores[i] - 0;
          total = valores[i] - valores[i + 1];
        case "MULTIPLICACAO":
          if (valores[i + 1] == null) total = valores[i] * 1;
          total = valores[i] * valores[i + 1];
        case "DIVISAO":
          if (valores[i + 1] == null) total = valores[i] / 1;
          total = valores[i] / valores[i + 1];
        case "RESTO":
          if (valores[i + 1] == null) total = valores[i] % 1;
          total = valores[i] / valores[i + 1];
      }
    }
    return total;
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Potência Numérica
   * @param a valor 1 - base
   * @param b valor 2 - expoente
   * @param M1 habilita a potência usando mais 1 no resultado
   * @param m1 habilita a potência usando menos 1 no resultado
   * @returns retorna o valor da potência de um número.
   * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
   */
  public potencia(a: number, b: number, M1?: boolean, m1?: boolean): number 
  {
    if (M1 == true && m1 == true) {
      throw new Error(
        "Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]"
      );
    }
    if (M1 == true) {
      return a ** b + 1;
    }
    if (m1 == true) {
      return a ** b - 1;
    }
    return a ** b;
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Potência de Potência Numérica
   * @param a valor 1 - base
   * @param b valor 2 - sequência de expoentes
   * @param M1 habilita a potência usando mais 1 no resultado
   * @param m1 habilita a potência usando menos 1 no resultado
   * @returns retorna o valor da potência de um número.
   * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
   */
  public potencia_de_potencia(
    a: number = 1,
    b: number[],
    M1?: boolean,
    m1?: boolean
  ): number 
  {
    let i: number = 0,
      r: number = 0;
    while (i < b.length) {
      if (M1 == true && m1 == true) {
        throw new Error(
          "Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]"
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
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Potência de 2
   * @param x valor da potência de 2.
   * @returns retorna o valor real da potência de 2 calculada.
   */
  protected potencia_2_x(x: number): number 
  {
    return 2 ** x;
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Potência de 10
   * @param x valor da potência de 10.
   * @returns retorna o valor real da potência de 10 calculada.
   */
  protected potencia_10_x(x: number): number 
  {
    return 10 ** x;
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Raiz Quadrada Numérica
   * @param a valor
   * @returns retorna o valor da raiz quadrada numérica.
   */
  public raiz_quadrada(a: number): number 
  {
    return a ** (1 / 2);
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Raiz Cúbica Numérica
   * @param a valor
   * @returns retorna o valor da raiz cúbica numérica.
   */
  public raiz_cubica(a: number): number 
  {
    return a ** (1 / 3);
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo da Raiz Enésima Numérica
   * @param a valor
   * @param n valor do índice da raiz
   * @returns retorna o valor da raiz enésima numérica.
   */
  public raiz_enesima(a: number, n: number): number 
  {
    return a ** (1 / n);
  }

  /**
   * ![minibanner-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![tag-calculadora](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![tag-comuns](https://www.strg.humbanew.com.br/docs/wtsfy/tag-comuns.png)
   * ___
   * Módulo do Valor Absoluto Numérico
   * @param x valor
   * @returns retorna o valor absoluto.
   */
  public absoluto(x: number): number 
  {
    return x < 0 ? -1 * x : x;
  }
}
