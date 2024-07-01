"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Essenciais = void 0;
/**
 * @todo Componente com necessidade de atualizações, módulos incompletos ou não implementados.
 */
class Essenciais {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-essenciais.png)
     * ___
     * Módulo do maior valor entre os valores fornecidos.
     * @param values Numeric expressions to be evaluated.
     * @returns O maior dos valores numéricos fornecidos.
     */
    max(...values) {
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
    min(...values) {
        let min = values[0];
        for (let i = 0; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        return min;
    }
    [Symbol.toStringTag];
    floor(x) {
        return 0;
    }
    random() {
        return 0;
    }
    round(x) {
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
    clz32(x) {
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
    imul(x, y) {
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
    sign(x) {
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
    hypot(...values) {
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
    trunc(x) {
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
    fround(x) {
        return 0;
    }
}
exports.Essenciais = Essenciais;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNzZW5jaWFpcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0Vzc2VuY2lhaXMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0dBRUc7QUFDSCxNQUFzQixVQUFVO0lBRTlCOzs7Ozs7OztPQVFHO0lBQ0ksR0FBRyxDQUFDLEdBQUcsTUFBZ0I7UUFDNUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDbkIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxHQUFHLENBQUMsR0FBRyxNQUFnQjtRQUM1QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUNuQixHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBUztJQUM5QixLQUFLLENBQUMsQ0FBUztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxNQUFNO1FBQ1osT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ08sS0FBSyxDQUFDLENBQVM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLEtBQUssQ0FBQyxDQUFTO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssSUFBSSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQy9CLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxJQUFJLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSyxLQUFLLENBQUMsR0FBRyxNQUFnQjtRQUMvQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLEtBQUssQ0FBQyxDQUFTO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxNQUFNLENBQUMsQ0FBUztRQUN0QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRjtBQWpJRCxnQ0FpSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHRvZG8gQ29tcG9uZW50ZSBjb20gbmVjZXNzaWRhZGUgZGUgYXR1YWxpemHDp8O1ZXMsIG3Ds2R1bG9zIGluY29tcGxldG9zIG91IG7Do28gaW1wbGVtZW50YWRvcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc3NlbmNpYWlzIHtcclxuICBcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIG1haW9yIHZhbG9yIGVudHJlIG9zIHZhbG9yZXMgZm9ybmVjaWRvcy5cclxuICAgKiBAcGFyYW0gdmFsdWVzIE51bWVyaWMgZXhwcmVzc2lvbnMgdG8gYmUgZXZhbHVhdGVkLlxyXG4gICAqIEByZXR1cm5zIE8gbWFpb3IgZG9zIHZhbG9yZXMgbnVtw6lyaWNvcyBmb3JuZWNpZG9zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IG1heCA9IHZhbHVlc1swXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNbaV0gPiBtYXgpIHtcclxuICAgICAgICBtYXggPSB2YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIG1lbm9yIHZhbG9yIGVudHJlIG9zIHZhbG9yZXMgZm9ybmVjaWRvcy5cclxuICAgKiBAcGFyYW0gdmFsdWVzIEV4cHJlc3PDtWVzIG51bcOpcmljYXMgYSBzZXJlbSBhdmFsaWFkYXMuXHJcbiAgICogQHJldHVybnMgTyBtZW5vciBkb3MgdmFsb3JlcyBudW3DqXJpY29zIGZvcm5lY2lkb3MuXHJcbiAgICovXHJcbiAgcHVibGljIG1pbiguLi52YWx1ZXM6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgbWluID0gdmFsdWVzWzBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHZhbHVlc1tpXSA8IG1pbikge1xyXG4gICAgICAgIG1pbiA9IHZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IFtTeW1ib2wudG9TdHJpbmdUYWddOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmbG9vcih4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIHByaXZhdGUgcmFuZG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgcHJpdmF0ZSByb3VuZCh4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvIGJpdHMgaW4gdGhlIDMyLWJpdCBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgYSBudW1iZXIuXHJcbiAgICogQHBhcmFtIHggQSBudW1lcmljIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbHozMih4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgMzItYml0IG11bHRpcGxpY2F0aW9uIG9mIHR3byBudW1iZXJzLlxyXG4gICAqIEBwYXJhbSB4IEZpcnN0IG51bWJlclxyXG4gICAqIEBwYXJhbSB5IFNlY29uZCBudW1iZXJcclxuICAgKi9cclxuICBwcml2YXRlIGltdWwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBSZXR1cm5zIHRoZSBzaWduIG9mIHRoZSB4LCBpbmRpY2F0aW5nIHdoZXRoZXIgeCBpcyBwb3NpdGl2ZSwgbmVnYXRpdmUgb3IgemVyby5cclxuICAgKiBAcGFyYW0geCBUaGUgbnVtZXJpYyBleHByZXNzaW9uIHRvIHRlc3RcclxuICAgKi9cclxuICBwcml2YXRlIHNpZ24oeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tZXNzZW5jaWFpcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogUmV0dXJucyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhlIHN1bSBvZiBzcXVhcmVzIG9mIGl0cyBhcmd1bWVudHMuXHJcbiAgICogQHBhcmFtIHZhbHVlcyBWYWx1ZXMgdG8gY29tcHV0ZSB0aGUgc3F1YXJlIHJvb3QgZm9yLlxyXG4gICAqICAgICBJZiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCwgdGhlIHJlc3VsdCBpcyArMC5cclxuICAgKiAgICAgSWYgdGhlcmUgaXMgb25seSBvbmUgYXJndW1lbnQsIHRoZSByZXN1bHQgaXMgdGhlIGFic29sdXRlIHZhbHVlLlxyXG4gICAqICAgICBJZiBhbnkgYXJndW1lbnQgaXMgK0luZmluaXR5IG9yIC1JbmZpbml0eSwgdGhlIHJlc3VsdCBpcyArSW5maW5pdHkuXHJcbiAgICogICAgIElmIGFueSBhcmd1bWVudCBpcyBOYU4sIHRoZSByZXN1bHQgaXMgTmFOLlxyXG4gICAqICAgICBJZiBhbGwgYXJndW1lbnRzIGFyZSBlaXRoZXIgKzAgb3Ig4oiSMCwgdGhlIHJlc3VsdCBpcyArMC5cclxuICAgKi9cclxuICBwcml2YXRlIGh5cG90KC4uLnZhbHVlczogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBSZXR1cm5zIHRoZSBpbnRlZ3JhbCBwYXJ0IG9mIHRoZSBhIG51bWVyaWMgZXhwcmVzc2lvbiwgeCwgcmVtb3ZpbmcgYW55IGZyYWN0aW9uYWwgZGlnaXRzLlxyXG4gICAqIElmIHggaXMgYWxyZWFkeSBhbiBpbnRlZ2VyLCB0aGUgcmVzdWx0IGlzIHguXHJcbiAgICogQHBhcmFtIHggQSBudW1lcmljIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0cnVuYyh4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1lc3NlbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBSZXR1cm5zIHRoZSBuZWFyZXN0IHNpbmdsZSBwcmVjaXNpb24gZmxvYXQgcmVwcmVzZW50YXRpb24gb2YgYSBudW1iZXIuXHJcbiAgICogQHBhcmFtIHggQSBudW1lcmljIGV4cHJlc3Npb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmcm91bmQoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxyXG4iXX0=