"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigonometricos = void 0;
const constantes_1 = require("./constantes");
const Exponenciais_class_1 = require("./Exponenciais.class");
class Trigonometricos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo do Seno
     * @param x valor real numérico.
     * @returns retorna o valor do seno da entrada submetida.
     */
    seno(x) {
        return ((2 * constantes_1.PI * 1) / 4 / 90) * x;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo do Cosseno
     * @param x valor real numérico.
     * @returns retorna o valor do cosseno da entrada submetida.
     */
    cosseno(x) {
        return -1 * (((2 * constantes_1.PI * 1) / 4 / 90) * x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Tangente
     * @param x valor real numérico.
     * @returns retorna o valor da tangente da entrada submetida.
     */
    tangente(x) {
        return this.seno(x) / this.cosseno(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Secante
     * @param x valor real numérico.
     * @returns retorna o valor da secante da entrada submetida.
     */
    secante(x) {
        return 1 / this.cosseno(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Cosecante
     * @param x valor real numérico.
     * @returns retorna o valor da cosecante da entrada submetida.
     */
    cosecante(x) {
        return 1 / this.seno(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Cotangente
     * @param x valor real numérico.
     * @returns retorna o valor da cotangente da entrada submetida.
     */
    cotangente(x) {
        return 1 / this.tangente(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo do Seno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do seno hiperbólico da entrada submetida.
     */
    seno_hiperbolico(x) {
        return (Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, x) - Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, -x)) / 2;
    }
    ;
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo do Cosseno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do cosseno hiperbólico da entrada submetida.
     */
    cosseno_hiperbolico(x) {
        return (Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, x) + Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, -x)) / 2;
    }
    ;
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Tangente Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da tangente hiperbólica da entrada submetida.
     */
    tangente_hiperbolica(x) {
        return this.seno_hiperbolico(x) / this.cosseno_hiperbolico(x);
    }
    ;
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Secante Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da secante hiperbólica da entrada submetida.
     */
    secante_hiperbolica(x) {
        return 1 / this.cosseno_hiperbolico(x);
    }
    ;
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Cosecante Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da cosecante hiperbólica da entrada submetida.
     */
    cosecante_hiperbolica(x) {
        return 1 / this.seno_hiperbolico(x);
    }
    ;
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
     * ___
     * Módulo da Cotangente Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da cotangente hiperbólica da entrada submetida.
     */
    cotangente_hiperbolica(x) {
        return 1 / this.tangente_hiperbolica(x);
    }
    ;
}
exports.Trigonometricos = Trigonometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ29ub21ldHJpY29zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVHJpZ29ub21ldHJpY29zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF5QztBQUN6Qyw2REFBb0Q7QUFFcEQsTUFBc0IsZUFBZTtJQUVuQzs7Ozs7Ozs7T0FRRztJQUNJLElBQUksQ0FBQyxDQUFTO1FBRW5CLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxPQUFPLENBQUMsQ0FBUztRQUV0QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLFFBQVEsQ0FBQyxDQUFTO1FBRXZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE9BQU8sQ0FBQyxDQUFTO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksU0FBUyxDQUFDLENBQVM7UUFFeEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxVQUFVLENBQUMsQ0FBUztRQUV6QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGdCQUFnQixDQUFDLENBQVM7UUFFL0IsT0FBTyxDQUFDLGlDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLGlDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7Ozs7T0FRRztJQUNJLG1CQUFtQixDQUFDLENBQVM7UUFFbEMsT0FBTyxDQUFDLGlDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLGlDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7Ozs7T0FRRztJQUNJLG9CQUFvQixDQUFDLENBQVM7UUFFbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7Ozs7O09BUUc7SUFDSSxtQkFBbUIsQ0FBQyxDQUFTO1FBRWxDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQUEsQ0FBQztJQUVGOzs7Ozs7OztPQVFHO0lBQ0kscUJBQXFCLENBQUMsQ0FBUztRQUVwQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7Ozs7T0FRRztJQUNJLHNCQUFzQixDQUFDLENBQVM7UUFFckMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFBQSxDQUFDO0NBRUg7QUExS0QsMENBMEtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVVMRVIsIFBJIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBFeHBvbmVuY2lhaXMgfSBmcm9tIFwiLi9FeHBvbmVuY2lhaXMuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmlnb25vbWV0cmljb3MgXHJcbntcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi10cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gU2Vub1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBzZW5vIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZW5vKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gKCgyICogUEkgKiAxKSAvIDQgLyA5MCkgKiB4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvc3Nlbm9cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29zc2VubyBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgY29zc2Vubyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogKCgoMiAqIFBJICogMSkgLyA0IC8gOTApICogeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi10cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgVGFuZ2VudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgdGFuZ2VudGUgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIHRhbmdlbnRlKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5vKHgpIC8gdGhpcy5jb3NzZW5vKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIFNlY2FudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgc2VjYW50ZSBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VjYW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLmNvc3Nlbm8oeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi10cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgQ29zZWNhbnRlXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvc2VjYW50ZSBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgY29zZWNhbnRlKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMuc2Vubyh4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLXRyaWdvbm9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSBDb3RhbmdlbnRlXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvdGFuZ2VudGUgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvdGFuZ2VudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy50YW5nZW50ZSh4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLXRyaWdvbm9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBTZW5vIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBzZW5vIGhpcGVyYsOzbGljbyBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgc2Vub19oaXBlcmJvbGljbyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIChFeHBvbmVuY2lhaXMucHJvdG90eXBlLmV4cG9uZW5jaWFsKEVVTEVSLCB4KSAtIEV4cG9uZW5jaWFpcy5wcm90b3R5cGUuZXhwb25lbmNpYWwoRVVMRVIsIC14KSkgLyAyO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLXRyaWdvbm9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb3NzZW5vIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb3NzZW5vIGhpcGVyYsOzbGljbyBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgY29zc2Vub19oaXBlcmJvbGljbyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAgeyBcclxuICAgIHJldHVybiAoRXhwb25lbmNpYWlzLnByb3RvdHlwZS5leHBvbmVuY2lhbChFVUxFUiwgeCkgKyBFeHBvbmVuY2lhaXMucHJvdG90eXBlLmV4cG9uZW5jaWFsKEVVTEVSLCAteCkpIC8gMjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi10cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgVGFuZ2VudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHRhbmdlbnRlIGhpcGVyYsOzbGljYSBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgdGFuZ2VudGVfaGlwZXJib2xpY2EoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnNlbm9faGlwZXJib2xpY28oeCkgLyB0aGlzLmNvc3Nlbm9faGlwZXJib2xpY28oeCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIFNlY2FudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHNlY2FudGUgaGlwZXJiw7NsaWNhIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWNhbnRlX2hpcGVyYm9saWNhKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMuY29zc2Vub19oaXBlcmJvbGljbyh4KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi10cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgQ29zZWNhbnRlIEhpcGVyYsOzbGljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBjb3NlY2FudGUgaGlwZXJiw7NsaWNhIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3NlY2FudGVfaGlwZXJib2xpY2EoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5zZW5vX2hpcGVyYm9saWNvKHgpO1xyXG4gIH07XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIENvdGFuZ2VudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvdGFuZ2VudGUgaGlwZXJiw7NsaWNhIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3RhbmdlbnRlX2hpcGVyYm9saWNhKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMudGFuZ2VudGVfaGlwZXJib2xpY2EoeCk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19