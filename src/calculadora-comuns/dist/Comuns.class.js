"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comuns = void 0;
class Comuns {
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
    operacoes_fundamentais(op, ...valores) {
        let total = 0;
        for (let i = 0; i < valores.length; i += 2) {
            switch (op) {
                case "SOMA":
                    if (valores[i + 1] == null)
                        total = valores[i] + 0;
                    total = valores[i] + valores[i + 1];
                case "SUBTRACAO":
                    if (valores[i + 1] == null)
                        total = valores[i] - 0;
                    total = valores[i] - valores[i + 1];
                case "MULTIPLICACAO":
                    if (valores[i + 1] == null)
                        total = valores[i] * 1;
                    total = valores[i] * valores[i + 1];
                case "DIVISAO":
                    if (valores[i + 1] == null)
                        total = valores[i] / 1;
                    total = valores[i] / valores[i + 1];
                case "RESTO":
                    if (valores[i + 1] == null)
                        total = valores[i] % 1;
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
    potencia(a, b, M1, m1) {
        if (M1 == true && m1 == true) {
            throw new Error("Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]");
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
    potencia_de_potencia(a = 1, b, M1, m1) {
        let i = 0, r = 0;
        while (i < b.length) {
            if (M1 == true && m1 == true) {
                throw new Error("Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]");
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
    potencia_2_x(x) {
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
    potencia_10_x(x) {
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
    raiz_quadrada(a) {
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
    raiz_cubica(a) {
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
    raiz_enesima(a, n) {
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
    absoluto(x) {
        return x < 0 ? -1 * x : x;
    }
}
exports.Comuns = Comuns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tdW5zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29tdW5zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsTUFBTTtJQUVqQjs7Ozs7Ozs7O09BU0c7SUFDSSxzQkFBc0IsQ0FDM0IsRUFBc0IsRUFDdEIsR0FBRyxPQUFpQjtRQUdwQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxRQUFRLEVBQUUsRUFBRTtnQkFDVixLQUFLLE1BQU07b0JBQ1QsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25ELEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxXQUFXO29CQUNkLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJO3dCQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuRCxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssZUFBZTtvQkFDbEIsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25ELEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxTQUFTO29CQUNaLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJO3dCQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuRCxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssT0FBTztvQkFDVixJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSTt3QkFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSSxRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFZLEVBQUUsRUFBWTtRQUU5RCxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksb0JBQW9CLENBQ3pCLElBQVksQ0FBQyxFQUNiLENBQVcsRUFDWCxFQUFZLEVBQ1osRUFBWTtRQUdaLElBQUksQ0FBQyxHQUFXLENBQUMsRUFDZixDQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMkRBQTJELENBQzVELENBQUM7YUFDSDtZQUNELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDZCxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDO2FBQ0w7WUFDRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDTyxZQUFZLENBQUMsQ0FBUztRQUU5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ08sYUFBYSxDQUFDLENBQVM7UUFFL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGFBQWEsQ0FBQyxDQUFTO1FBRTVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLFdBQVcsQ0FBQyxDQUFTO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFFdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksUUFBUSxDQUFDLENBQVM7UUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFwTUQsd0JBb01DIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBPcGVyYWRvcmVzQmluYXJpb3MgPSBcIlNPTUFcIiB8IFwiU1VCVFJBQ0FPXCIgfCBcIkRJVklTQU9cIiB8IFwiTVVMVElQTElDQUNBT1wiIHwgXCJSRVNUT1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXVucyBcclxue1xyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkZSBTb21hLCBTdWJ0cmHDp8OjbywgTXVsdGlwbGljYcOnw6NvLCBEaXZpc8OjbyBlIFJlc3RvIGRlIE51bWVyYWlzIFJlYWlzXHJcbiAgICogQHBhcmFtIG9wIG9wZXJhw6fDo28gcXVlIHNlcsOhIHVzYWRhIG5hIGxpc3RhIGRlIG7Dum1lcm9zLlxyXG4gICAqIEBwYXJhbSB2YWxvcmVzIGEgbGlzdGEgZGUgbsO6bWVyb3Mgc3VibWV0aWRvcyBwYXJhIGEgb3BlcmHDp8OjbyBzZWxlY2lvbmFkYS5cclxuICAgKiBAcmV0dXJucyBvIHZhbG9yIG51bcOpcmljbyBmaW5hbCBkYSBvcGVyYcOnw6NvIGZ1bmRhbWVudGFsIHJlYWxpemFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgb3BlcmFjb2VzX2Z1bmRhbWVudGFpcyhcclxuICAgIG9wOiBPcGVyYWRvcmVzQmluYXJpb3MsXHJcbiAgICAuLi52YWxvcmVzOiBudW1iZXJbXVxyXG4gICk6IG51bWJlciBcclxuICB7XHJcbiAgICBsZXQgdG90YWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxvcmVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgIHN3aXRjaCAob3ApIHtcclxuICAgICAgICBjYXNlIFwiU09NQVwiOlxyXG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSArIDA7XHJcbiAgICAgICAgICB0b3RhbCA9IHZhbG9yZXNbaV0gKyB2YWxvcmVzW2kgKyAxXTtcclxuICAgICAgICBjYXNlIFwiU1VCVFJBQ0FPXCI6XHJcbiAgICAgICAgICBpZiAodmFsb3Jlc1tpICsgMV0gPT0gbnVsbCkgdG90YWwgPSB2YWxvcmVzW2ldIC0gMDtcclxuICAgICAgICAgIHRvdGFsID0gdmFsb3Jlc1tpXSAtIHZhbG9yZXNbaSArIDFdO1xyXG4gICAgICAgIGNhc2UgXCJNVUxUSVBMSUNBQ0FPXCI6XHJcbiAgICAgICAgICBpZiAodmFsb3Jlc1tpICsgMV0gPT0gbnVsbCkgdG90YWwgPSB2YWxvcmVzW2ldICogMTtcclxuICAgICAgICAgIHRvdGFsID0gdmFsb3Jlc1tpXSAqIHZhbG9yZXNbaSArIDFdO1xyXG4gICAgICAgIGNhc2UgXCJESVZJU0FPXCI6XHJcbiAgICAgICAgICBpZiAodmFsb3Jlc1tpICsgMV0gPT0gbnVsbCkgdG90YWwgPSB2YWxvcmVzW2ldIC8gMTtcclxuICAgICAgICAgIHRvdGFsID0gdmFsb3Jlc1tpXSAvIHZhbG9yZXNbaSArIDFdO1xyXG4gICAgICAgIGNhc2UgXCJSRVNUT1wiOlxyXG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAlIDE7XHJcbiAgICAgICAgICB0b3RhbCA9IHZhbG9yZXNbaV0gLyB2YWxvcmVzW2kgKyAxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVttaW5pYmFubmVyLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbdGFnLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbdGFnLWNvbXVuc10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY29tdW5zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIFBvdMOqbmNpYSBOdW3DqXJpY2FcclxuICAgKiBAcGFyYW0gYSB2YWxvciAxIC0gYmFzZVxyXG4gICAqIEBwYXJhbSBiIHZhbG9yIDIgLSBleHBvZW50ZVxyXG4gICAqIEBwYXJhbSBNMSBoYWJpbGl0YSBhIHBvdMOqbmNpYSB1c2FuZG8gbWFpcyAxIG5vIHJlc3VsdGFkb1xyXG4gICAqIEBwYXJhbSBtMSBoYWJpbGl0YSBhIHBvdMOqbmNpYSB1c2FuZG8gbWVub3MgMSBubyByZXN1bHRhZG9cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgcG90w6puY2lhIGRlIHVtIG7Dum1lcm8uXHJcbiAgICogQHNlZSBOw6NvIHVzYXIgYGBtMWBgIGUgYGBNMWBgIGFvIG1lc21vIHRlbXBvLCByZXRvcm5hcsOhIHVtIGVycm8gY2FzbyBvY29ycmEuXHJcbiAgICovXHJcbiAgcHVibGljIHBvdGVuY2lhKGE6IG51bWJlciwgYjogbnVtYmVyLCBNMT86IGJvb2xlYW4sIG0xPzogYm9vbGVhbik6IG51bWJlciBcclxuICB7XHJcbiAgICBpZiAoTTEgPT0gdHJ1ZSAmJiBtMSA9PSB0cnVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIk7Do28gw6kgcG9zc8OtdmVsIGhhYmlsaXRhciBhbWJvcyBhbyBtZXNtbyB0ZW1wbyBbTTFdIGUgW20xXVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoTTEgPT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gYSAqKiBiICsgMTtcclxuICAgIH1cclxuICAgIGlmIChtMSA9PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiBhICoqIGIgLSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGEgKiogYjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgZGUgUG90w6puY2lhIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yIDEgLSBiYXNlXHJcbiAgICogQHBhcmFtIGIgdmFsb3IgMiAtIHNlcXXDqm5jaWEgZGUgZXhwb2VudGVzXHJcbiAgICogQHBhcmFtIE0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtYWlzIDEgbm8gcmVzdWx0YWRvXHJcbiAgICogQHBhcmFtIG0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtZW5vcyAxIG5vIHJlc3VsdGFkb1xyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBwb3TDqm5jaWEgZGUgdW0gbsO6bWVyby5cclxuICAgKiBAc2VlIE7Do28gdXNhciBgYG0xYGAgZSBgYE0xYGAgYW8gbWVzbW8gdGVtcG8sIHJldG9ybmFyw6EgdW0gZXJybyBjYXNvIG9jb3JyYS5cclxuICAgKi9cclxuICBwdWJsaWMgcG90ZW5jaWFfZGVfcG90ZW5jaWEoXHJcbiAgICBhOiBudW1iZXIgPSAxLFxyXG4gICAgYjogbnVtYmVyW10sXHJcbiAgICBNMT86IGJvb2xlYW4sXHJcbiAgICBtMT86IGJvb2xlYW5cclxuICApOiBudW1iZXIgXHJcbiAge1xyXG4gICAgbGV0IGk6IG51bWJlciA9IDAsXHJcbiAgICAgIHI6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IGIubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChNMSA9PSB0cnVlICYmIG0xID09IHRydWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBcIk7Do28gw6kgcG9zc8OtdmVsIGhhYmlsaXRhciBhbWJvcyBhbyBtZXNtbyB0ZW1wbyBbTTFdIGUgW20xXVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTTEgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHIgPSBhICoqIGJbaV0gKyAxO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAobTEgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHIgPSBhICoqIGJbaV0gLSAxO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICByID0gYSAqKiBiW2ldO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgZGUgMlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIGRhIHBvdMOqbmNpYSBkZSAyLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciByZWFsIGRhIHBvdMOqbmNpYSBkZSAyIGNhbGN1bGFkYS5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgcG90ZW5jaWFfMl94KHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMiAqKiB4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVttaW5pYmFubmVyLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbdGFnLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbdGFnLWNvbXVuc10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY29tdW5zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIFBvdMOqbmNpYSBkZSAxMFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIGRhIHBvdMOqbmNpYSBkZSAxMC5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgcmVhbCBkYSBwb3TDqm5jaWEgZGUgMTAgY2FsY3VsYWRhLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBwb3RlbmNpYV8xMF94KHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMTAgKiogeDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSBSYWl6IFF1YWRyYWRhIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHJhaXogcXVhZHJhZGEgbnVtw6lyaWNhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYWl6X3F1YWRyYWRhKGE6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gYSAqKiAoMSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVttaW5pYmFubmVyLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbdGFnLWNhbGN1bGFkb3JhXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbdGFnLWNvbXVuc10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY29tdW5zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIFJhaXogQ8O6YmljYSBOdW3DqXJpY2FcclxuICAgKiBAcGFyYW0gYSB2YWxvclxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSByYWl6IGPDumJpY2EgbnVtw6lyaWNhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYWl6X2N1YmljYShhOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGEgKiogKDEgLyAzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSBSYWl6IEVuw6lzaW1hIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yXHJcbiAgICogQHBhcmFtIG4gdmFsb3IgZG8gw61uZGljZSBkYSByYWl6XHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHJhaXogZW7DqXNpbWEgbnVtw6lyaWNhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYWl6X2VuZXNpbWEoYTogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGEgKiogKDEgLyBuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbbWluaWJhbm5lci1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW3RhZy1jYWxjdWxhZG9yYV0oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW3RhZy1jb211bnNdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNvbXVucy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBWYWxvciBBYnNvbHV0byBOdW3DqXJpY29cclxuICAgKiBAcGFyYW0geCB2YWxvclxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBhYnNvbHV0by5cclxuICAgKi9cclxuICBwdWJsaWMgYWJzb2x1dG8oeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB4IDwgMCA/IC0xICogeCA6IHg7XHJcbiAgfVxyXG59XHJcbiJdfQ==