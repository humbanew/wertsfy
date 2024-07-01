import absoluto from "./modules/func_absoluto/absoluto";
import essenciais from "./modules/func_essenciais/essenciais";
import valorMaximo from "./modules/func_valorMaximo/valorMaximo";
import valorMinimo from "./modules/func_valorMinimo/valorMinimo";

/**
 * @module RaxCalcModules
 */
export let RaxCalcModules = {
  assets: {
    fnc_absoluto: absoluto,
    fnc_essenciais: essenciais,
    fnc_valorMaximo: valorMaximo,
    fnc_valorMinimo: valorMinimo,
  },
};

//   private floor(x: number): number {
//     return 0;
//   }

//   private random(): number {
//     return 0;
//   }

//   private round(x: number): number {
//     // 0.5
//     // 0.05
//     // 0.005
//     // 0.0005
//     // 0.00005
//     // 0.000005

//     // 2.67
//     // 2.7
//     return 0;
//   }

//   /**
//    * Returns the number of leading zero bits in the 32-bit binary representation of a number.
//    * @param x A numeric expression.
//    */
//   private clz32(x: number): number {
//     return 0;
//   }

//   /**
//    * Returns the result of 32-bit multiplication of two numbers.
//    * @param x First number
//    * @param y Second number
//    */
//   private imul(x: number, y: number): number {
//     return 0;
//   }

//   /**
//    * Returns the sign of the x, indicating whether x is positive, negative or zero.
//    * @param x The numeric expression to test
//    */
//   private sign(x: number): number {
//     return 0;
//   }

//   /**
//    * Returns the square root of the sum of squares of its arguments.
//    * @param values Values to compute the square root for.
//    *     If no arguments are passed, the result is +0.
//    *     If there is only one argument, the result is the absolute value.
//    *     If any argument is +Infinity or -Infinity, the result is +Infinity.
//    *     If any argument is NaN, the result is NaN.
//    *     If all arguments are either +0 or −0, the result is +0.
//    */
//   private hypot(...values: number[]): number {
//     return 0;
//   }

//   /**
//    * Returns the integral part of the a numeric expression, x, removing any fractional digits.
//    * If x is already an integer, the result is x.
//    * @param x A numeric expression.
//    */
//   private trunc(x: number): number {
//     return 0;
//   }

//   /**
//    * Returns the nearest single precision float representation of a number.
//    * @param x A numeric expression.
//    */
//   private fround(x: number): number {
//     return 0;
//   }
