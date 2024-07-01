type operacoes_basicas =
  | {nome: "#soma", simbolo: "+"}
  | {nome: "#subtracao", simbolo: "-"}
  | {nome: "#multiplicacao", simbolo: "*"}
  | {nome: "#divisao", simbolo: "/"}
  | {nome: "#resto", simbolo: "%"};

class Core {
  public absoluto(x: number): number 
  {
    return x < 0 ? -1 * x : x;
  }

  public valorMaximo(...valores: number[]): number {
    let max = 0;
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] > max) max = valores[i];
    }
    return max;
  }

  public valorMinimo(...valores: number[]): number {
    let min = Infinity;
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] < min) min = valores[i];
    }
    return min;
  }

  protected foo(n: operacoes_basicas["nome"]){}
  readonly [Symbol.toStringTag]: string;

  private floor(x: number): number {
    return 0;
  }
  
  private random(): number {
    return 0;
  }
  
  private round(x: number): number {
    // 0.5
    // 0.05
    // 0.005
    // 0.0005
    // 0.00005
    // 0.000005

    // 2.67
    // 2.7
    return 0;
  }

  /**
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  private clz32(x: number): number {
    return 0;
  }

  /**
   * Returns the result of 32-bit multiplication of two numbers.
   * @param x First number
   * @param y Second number
   */
  private imul(x: number, y: number): number {
    return 0;
  }

  /**
   * Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x The numeric expression to test
   */
  private sign(x: number): number {
    return 0;
  }

  /**
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
   * Returns the integral part of the a numeric expression, x, removing any fractional digits.
   * If x is already an integer, the result is x.
   * @param x A numeric expression.
   */
  private trunc(x: number): number {
    return 0;
  }

  /**
   * Returns the nearest single precision float representation of a number.
   * @param x A numeric expression.
   */
  private fround(x: number): number {
    return 0;
  }

}

console.log(
  new Core().absoluto(-20),
  new Core().valorMaximo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  new Core().valorMinimo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);
