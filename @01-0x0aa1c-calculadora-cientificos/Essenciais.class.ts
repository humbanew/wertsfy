/**
 * @todo Componente com necessidade de atualizações, módulos incompletos ou não implementados.
 */
export abstract class Essenciais {
  
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Módulo do maior valor entre os valores fornecidos.
   * @param values Numeric expressions to be evaluated.
   * @returns O maior dos valores numéricos fornecidos.
   */
  public max(...values: number[]) {
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
      if (values[i] > max) {
        max = values[i];
      }
    }
    return max;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Módulo do menor valor entre os valores fornecidos.
   * @param values Expressões numéricas a serem avaliadas.
   * @returns O menor dos valores numéricos fornecidos.
   */
  public min(...values: number[]) {
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
      if (values[i] < min) {
        min = values[i];
      }
    }
    return min;
  }

  readonly [Symbol.toStringTag]: string;
  private floor(x: number): number {
    return 0;
  }
  private random(): number {
    return 0;
  }
  private round(x: number): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  private clz32(x: number): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the result of 32-bit multiplication of two numbers.
   * @param x First number
   * @param y Second number
   */
  private imul(x: number, y: number): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x The numeric expression to test
   */
  private sign(x: number): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the square root of the sum of squares of its arguments.
   * @param values Values to compute the square root for.
   *     If no arguments are passed, the result is +0.
   *     If there is only one argument, the result is the absolute value.
   *     If any argument is +Infinity or -Infinity, the result is +Infinity.
   *     If any argument is NaN, the result is NaN.
   *     If all arguments are either +0 or −0, the result is +0.
   */
  private hypot(...values: number[]): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the integral part of the a numeric expression, x, removing any fractional digits.
   * If x is already an integer, the result is x.
   * @param x A numeric expression.
   */
  private trunc(x: number): number {
    return 0;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
   * ___
   * Returns the nearest single precision float representation of a number.
   * @param x A numeric expression.
   */
  private fround(x: number): number {
    return 0;
  }
}
