"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometricos = void 0;
const constantes_1 = require("./constantes");
class Geometricos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Quadrado
     * @param l valor real do lado.
     * @returns retorna o valor da área do quadrado.
     */
    area_quadrado(l) {
        return l ** 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Retângulo
     * @param l valor real da largura.
     * @param c valor real do comprimento.
     * @returns retorna o valor da área do retângulo.
     */
    area_retangulo(l, c) {
        return l * c;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área da Circunferência
     * @param r valor do raio da circunferência.
     * @returns retorna o valor da área da circunferência.
     */
    area_circunferencia(r) {
        return 2 * constantes_1.PI * r;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Círculo
     * @param r valor do raio do círculo.
     * @returns retorna o valor da área do círculo.
     */
    area_circulo(r) {
        return constantes_1.PI * r ** 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Triângulo
     * @param b valor real da base.
     * @param h valor real da altura.
     * @returns retorna o valor da área do triângulo.
     */
    area_triangulo(b, h) {
        return (b * h) / 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Triângulo Equilátero
     * @param l valor real do lado.
     * @returns retorna o valor da área do triângulo equilátero.
     */
    area_triangulo_equilatero(l) {
        return (l ** 2 * constantes_1.SQRT_03) / 4;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Apótema do Triângulo Equilátero
     * @param l valor real do lado.
     * @returns retorna o valor do apótema do triângulo equilátero.
     */
    apotema_triangulo_equilatero(l) {
        return (l * constantes_1.SQRT_03) / 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área da Esfera
     * @param r valor real do raio.
     * @returns retorna o valor da área da esfera.
     */
    area_esfera(r) {
        return (4 * constantes_1.PI * r ** 2) / 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Volume da Esfera
     * @param r valor real do raio.
     * @returns retorna o valor do volume da esfera.
     */
    volume_esfera(r) {
        return (4 * constantes_1.PI * r ** 3) / 3;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Volume do Cubo
     * @param l valor real do lado.
     * @returns retorna o valor do volume do cubo.
     */
    volume_cubo(l) {
        return l ** 3;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Volume do Paralelepípedo
     * @param l valor real da largura.
     * @param h valor real da altura.
     * @param c valor real do comprimento.
     * @returns retorna o valor do volume do paralelepípedo.
     */
    volume_paralelepipedo(l, h, c) {
        return l * h * c;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Losango
     * @param D valor real da diagonal maior.
     * @param d valor real da diagonal menor.
     * @returns retorna o valor da área do losango.
     */
    area_lozango(D, d) {
        return (D * d) / 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Trapézio
     * @param B valor real da base maior.
     * @param b valor real da base menor.
     * @param h valor real da altura.
     * @returns retorna o valor da área do trapézio.
     */
    area_trapezio(B, b, h) {
        return ((B + b) * h) / 2;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo da Área do Cilindro
     * @param r valor real do raio.
     * @param h valor real da altura.
     * @returns retorna o valor da área do cilindro.
     */
    area_cilindro(r, h) {
        return (2 * constantes_1.PI * r * h) + this.area_circulo(r);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Volume do Cone e/ou da Pirâmide
     * @param b valor real da base.
     * @param h valor real da altura.
     * @returns retorna o valor do volume do cone e/ou pirâmide.
     */
    cone_piramide(b, h) {
        return (b * h) / 3;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supremos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-supr-geometricos.png)
     * ___
     * Módulo do Polígono Regular Enésimo
     * @param n valor real da quantidade de lados.
     * @param l valor real do lado.
     * @returns retorna o valor da área do polígono regular.
     */
    poligono_enesimo(n, l) {
        return n * this.area_triangulo_equilatero(l);
    }
}
exports.Geometricos = Geometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvbWV0cmljb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9HZW9tZXRyaWNvcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMkM7QUFFM0MsTUFBc0IsV0FBVztJQUMvQjs7Ozs7Ozs7T0FRRztJQUNJLGFBQWEsQ0FBQyxDQUFTO1FBRTVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLG1CQUFtQixDQUFDLENBQVM7UUFFbEMsT0FBTyxDQUFDLEdBQUcsZUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxZQUFZLENBQUMsQ0FBUztRQUUzQixPQUFPLGVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFFeEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0kseUJBQXlCLENBQUMsQ0FBUztRQUV4QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDRCQUE0QixDQUFDLENBQVM7UUFFM0MsT0FBTyxDQUFDLENBQUMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLFdBQVcsQ0FBQyxDQUFTO1FBRTFCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsZUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksYUFBYSxDQUFDLENBQVM7UUFFNUIsT0FBTyxDQUFDLENBQUMsR0FBRyxlQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxXQUFXLENBQUMsQ0FBUztRQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxxQkFBcUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksWUFBWSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRXRDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUVsRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFFdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxlQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLGFBQWEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUV2QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksZ0JBQWdCLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFFMUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQTFPRCxrQ0EwT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQSSwgU1FSVF8wMyB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW9tZXRyaWNvcyB7XHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHJlbW9zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHItZ2VvbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gUXVhZHJhZG9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRvIGxhZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRvIHF1YWRyYWRvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX3F1YWRyYWRvKGw6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gbCAqKiAyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHJlbW9zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHItZ2VvbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gUmV0w6JuZ3Vsb1xyXG4gICAqIEBwYXJhbSBsIHZhbG9yIHJlYWwgZGEgbGFyZ3VyYS5cclxuICAgKiBAcGFyYW0gYyB2YWxvciByZWFsIGRvIGNvbXByaW1lbnRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkbyByZXTDom5ndWxvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX3JldGFuZ3VsbyhsOiBudW1iZXIsIGM6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gbCAqIGM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkYSBDaXJjdW5mZXLDqm5jaWFcclxuICAgKiBAcGFyYW0gciB2YWxvciBkbyByYWlvIGRhIGNpcmN1bmZlcsOqbmNpYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZGEgY2lyY3VuZmVyw6puY2lhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX2NpcmN1bmZlcmVuY2lhKHI6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMiAqIFBJICogcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByZW1vcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByLWdlb21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIMOBcmVhIGRvIEPDrXJjdWxvXHJcbiAgICogQHBhcmFtIHIgdmFsb3IgZG8gcmFpbyBkbyBjw61yY3Vsby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gY8OtcmN1bG8uXHJcbiAgICovXHJcbiAgcHVibGljIGFyZWFfY2lyY3VsbyhyOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIFBJICogciAqKiAyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHJlbW9zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHItZ2VvbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gVHJpw6JuZ3Vsb1xyXG4gICAqIEBwYXJhbSBiIHZhbG9yIHJlYWwgZGEgYmFzZS5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gdHJpw6JuZ3Vsby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV90cmlhbmd1bG8oYjogbnVtYmVyLCBoOiBudW1iZXIpIFxyXG4gIHtcclxuICAgIHJldHVybiAoYiAqIGgpIC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByZW1vcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByLWdlb21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIMOBcmVhIGRvIFRyacOibmd1bG8gRXF1aWzDoXRlcm9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRvIGxhZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRvIHRyacOibmd1bG8gZXF1aWzDoXRlcm8uXHJcbiAgICovXHJcbiAgcHVibGljIGFyZWFfdHJpYW5ndWxvX2VxdWlsYXRlcm8obDogbnVtYmVyKSBcclxuICB7XHJcbiAgICByZXR1cm4gKGwgKiogMiAqIFNRUlRfMDMpIC8gNDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByZW1vcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByLWdlb21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFww7N0ZW1hIGRvIFRyacOibmd1bG8gRXF1aWzDoXRlcm9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRvIGxhZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFww7N0ZW1hIGRvIHRyacOibmd1bG8gZXF1aWzDoXRlcm8uXHJcbiAgICovXHJcbiAgcHVibGljIGFwb3RlbWFfdHJpYW5ndWxvX2VxdWlsYXRlcm8obDogbnVtYmVyKSBcclxuICB7XHJcbiAgICByZXR1cm4gKGwgKiBTUVJUXzAzKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkYSBFc2ZlcmFcclxuICAgKiBAcGFyYW0gciB2YWxvciByZWFsIGRvIHJhaW8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRhIGVzZmVyYS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV9lc2ZlcmEocjogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoNCAqIFBJICogciAqKiAyKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBWb2x1bWUgZGEgRXNmZXJhXHJcbiAgICogQHBhcmFtIHIgdmFsb3IgcmVhbCBkbyByYWlvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyB2b2x1bWUgZGEgZXNmZXJhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2b2x1bWVfZXNmZXJhKHI6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gKDQgKiBQSSAqIHIgKiogMykgLyAzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHJlbW9zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHItZ2VvbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gVm9sdW1lIGRvIEN1Ym9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRvIGxhZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIHZvbHVtZSBkbyBjdWJvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2b2x1bWVfY3VibyhsOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGwgKiogMztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByZW1vcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByLWdlb21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIFZvbHVtZSBkbyBQYXJhbGVsZXDDrXBlZG9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRhIGxhcmd1cmEuXHJcbiAgICogQHBhcmFtIGggdmFsb3IgcmVhbCBkYSBhbHR1cmEuXHJcbiAgICogQHBhcmFtIGMgdmFsb3IgcmVhbCBkbyBjb21wcmltZW50by5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gdm9sdW1lIGRvIHBhcmFsZWxlcMOtcGVkby5cclxuICAgKi9cclxuICBwdWJsaWMgdm9sdW1lX3BhcmFsZWxlcGlwZWRvKGw6IG51bWJlciwgaDogbnVtYmVyLCBjOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGwgKiBoICogYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByZW1vcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1zdXByLWdlb21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIMOBcmVhIGRvIExvc2FuZ29cclxuICAgKiBAcGFyYW0gRCB2YWxvciByZWFsIGRhIGRpYWdvbmFsIG1haW9yLlxyXG4gICAqIEBwYXJhbSBkIHZhbG9yIHJlYWwgZGEgZGlhZ29uYWwgbWVub3IuXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRvIGxvc2FuZ28uXHJcbiAgICovXHJcbiAgcHVibGljIGFyZWFfbG96YW5nbyhEOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gKEQgKiBkKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkbyBUcmFww6l6aW9cclxuICAgKiBAcGFyYW0gQiB2YWxvciByZWFsIGRhIGJhc2UgbWFpb3IuXHJcbiAgICogQHBhcmFtIGIgdmFsb3IgcmVhbCBkYSBiYXNlIG1lbm9yLlxyXG4gICAqIEBwYXJhbSBoIHZhbG9yIHJlYWwgZGEgYWx0dXJhLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkbyB0cmFww6l6aW8uXHJcbiAgICovXHJcbiAgcHVibGljIGFyZWFfdHJhcGV6aW8oQjogbnVtYmVyLCBiOiBudW1iZXIsIGg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gKChCICsgYikgKiBoKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkbyBDaWxpbmRyb1xyXG4gICAqIEBwYXJhbSByIHZhbG9yIHJlYWwgZG8gcmFpby5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gY2lsaW5kcm8uXHJcbiAgICovIFxyXG4gIHB1YmxpYyBhcmVhX2NpbGluZHJvKHI6IG51bWJlciwgaDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoMiAqIFBJICogciAqIGgpICsgdGhpcy5hcmVhX2NpcmN1bG8ocik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3VwcmVtb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctc3Vwci1nZW9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBWb2x1bWUgZG8gQ29uZSBlL291IGRhIFBpcsOibWlkZVxyXG4gICAqIEBwYXJhbSBiIHZhbG9yIHJlYWwgZGEgYmFzZS5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gdm9sdW1lIGRvIGNvbmUgZS9vdSBwaXLDom1pZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmVfcGlyYW1pZGUoYjogbnVtYmVyLCBoOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIChiICogaCkgLyAzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHJlbW9zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLXN1cHItZ2VvbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gUG9sw61nb25vIFJlZ3VsYXIgRW7DqXNpbW9cclxuICAgKiBAcGFyYW0gbiB2YWxvciByZWFsIGRhIHF1YW50aWRhZGUgZGUgbGFkb3MuXHJcbiAgICogQHBhcmFtIGwgdmFsb3IgcmVhbCBkbyBsYWRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkbyBwb2zDrWdvbm8gcmVndWxhci5cclxuICAgKi9cclxuICBwdWJsaWMgcG9saWdvbm9fZW5lc2ltbyhuOiBudW1iZXIsIGw6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gbiAqIHRoaXMuYXJlYV90cmlhbmd1bG9fZXF1aWxhdGVybyhsKTtcclxuICB9XHJcbn1cclxuIl19