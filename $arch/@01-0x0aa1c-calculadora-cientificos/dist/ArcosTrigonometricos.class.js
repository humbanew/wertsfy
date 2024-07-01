"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcosTrigonometricos = void 0;
const Logaritmos_class_1 = require("./Logaritmos.class");
const Trigonometricos_class_1 = require("./Trigonometricos.class");
class ArcosTrigonometricos extends Trigonometricos_class_1.Trigonometricos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Seno
     * @param x valor real numérico.
     * @returns retorna o valor do arco seno entre 0 e 1.
     */
    arco_seno(x) {
        return 1 / this.seno(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cosseno
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosseno entre 0 e 1.
     */
    arco_cosseno(x) {
        return 1 / this.cosseno(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Tangente
     * @param x valor real numérico.
     * @returns retorna o valor do arco tangente entre 0 e 1.
     */
    arco_tangente(x) {
        return 1 / this.tangente(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Secante
     * @param x valor real numérico.
     * @returns retorna o valor do arco secante entre 0 e 1.
     */
    arco_secante(x) {
        return 1 / this.secante(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cosecante
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosecante entre 0 e 1.
     */
    arco_cosecante(x) {
        return 1 / this.cosecante(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cotangente
     * @param x valor real numérico.
     * @returns retorna o valor do arco cotangente entre 0 e 1.
     */
    arco_cotangente(x) {
        return 1 / this.cotangente(x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Seno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco seno hiperbólico.
     */
    arco_seno_hiperbolico(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 + 1) ** 1 / 2);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cosseno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosseno hiperbólico.
     */
    arco_cosseno_hiperbolico(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 - 1) ** 1 / 2);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Tangente Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco tangente hiperbólico.
     */
    arco_tangente_hiperbolica(x) {
        return 1 / 2 * Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural((1 + x) / (1 - x));
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Secante Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco secante hiperbólico.
     */
    arco_secante_hiperbolica(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(1 + (1 - x ** 2) ** 1 / 2);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cosecante Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosecante hiperbólico.
     */
    arco_cosecante_hiperbolica(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(1 + (1 + x ** 2) ** 1 / 2);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
     * ___
     * Módulo do Arco Cotangente Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cotangente hiperbólico.
     */
    arco_cotangente_hiperbolico(x) {
        return 1 / 2 * Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural((x + 1) / (x - 1));
    }
}
exports.ArcosTrigonometricos = ArcosTrigonometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJjb3NUcmlnb25vbWV0cmljb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BcmNvc1RyaWdvbm9tZXRyaWNvcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0Q7QUFDaEQsbUVBQTBEO0FBRTFELE1BQXNCLG9CQUFxQixTQUFRLHVDQUFlO0lBRWhFOzs7Ozs7OztPQVFHO0lBQ0ksU0FBUyxDQUFDLENBQVM7UUFFeEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxZQUFZLENBQUMsQ0FBUztRQUUzQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGFBQWEsQ0FBQyxDQUFTO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksWUFBWSxDQUFDLENBQVM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxjQUFjLENBQUMsQ0FBUztRQUU3QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGVBQWUsQ0FBQyxDQUFTO1FBRTlCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0kscUJBQXFCLENBQUMsQ0FBUztRQUVwQyxPQUFPLDZCQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHdCQUF3QixDQUFDLENBQVM7UUFFdkMsT0FBTyw2QkFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSx5QkFBeUIsQ0FBQyxDQUFTO1FBRXhDLE9BQU8sQ0FBQyxHQUFDLENBQUMsR0FBRyw2QkFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHdCQUF3QixDQUFDLENBQVM7UUFFdkMsT0FBTyw2QkFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSwwQkFBMEIsQ0FBQyxDQUFTO1FBRXpDLE9BQU8sNkJBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksMkJBQTJCLENBQUMsQ0FBUztRQUUxQyxPQUFPLENBQUMsR0FBQyxDQUFDLEdBQUcsNkJBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0NBRUY7QUExS0Qsb0RBMEtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuaW1wb3J0IHsgVHJpZ29ub21ldHJpY29zIH0gZnJvbSBcIi4vVHJpZ29ub21ldHJpY29zLmNsYXNzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXJjb3NUcmlnb25vbWV0cmljb3MgZXh0ZW5kcyBUcmlnb25vbWV0cmljb3MgXHJcbntcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hcmN0cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQXJjbyBTZW5vXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFyY28gc2VubyBlbnRyZSAwIGUgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19zZW5vKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMuc2Vubyh4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWFyY3RyaWdvbm9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIENvc3Nlbm9cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBjb3NzZW5vIGVudHJlIDAgZSAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmNvX2Nvc3Nlbm8oeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5jb3NzZW5vKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYXJjdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFyY28gVGFuZ2VudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyB0YW5nZW50ZSBlbnRyZSAwIGUgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb190YW5nZW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLnRhbmdlbnRlKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYXJjdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFyY28gU2VjYW50ZVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIHNlY2FudGUgZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fc2VjYW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLnNlY2FudGUoeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hcmN0cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQXJjbyBDb3NlY2FudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBjb3NlY2FudGUgZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fY29zZWNhbnRlKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMuY29zZWNhbnRlKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYXJjdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFyY28gQ290YW5nZW50ZVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIGNvdGFuZ2VudGUgZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fY290YW5nZW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLmNvdGFuZ2VudGUoeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hcmN0cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQXJjbyBTZW5vIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIHNlbm8gaGlwZXJiw7NsaWNvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmNvX3Nlbm9faGlwZXJib2xpY28oeDogbnVtYmVyKTogbnVtYmVyXHJcbiAge1xyXG4gICAgcmV0dXJuIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoeCArICh4ICoqIDIgKyAxKSAqKiAxLzIpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hcmN0cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQXJjbyBDb3NzZW5vIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIGNvc3Nlbm8gaGlwZXJiw7NsaWNvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmNvX2Nvc3Nlbm9faGlwZXJib2xpY28oeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiBMb2dhcml0bW9zLnByb3RvdHlwZS5sb2dhcml0bW9fYmFzZV9uYXR1cmFsKHggKyAoeCAqKiAyIC0gMSkgKiogMS8yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWFyY3RyaWdvbm9tZXRyaWNvcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIFRhbmdlbnRlIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIHRhbmdlbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb190YW5nZW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEvMiAqIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoKDEgKyB4KSAvICgxIC0geCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYXJjdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFyY28gU2VjYW50ZSBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBzZWNhbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19zZWNhbnRlX2hpcGVyYm9saWNhKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gTG9nYXJpdG1vcy5wcm90b3R5cGUubG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCgxICsgKDEgLSB4ICoqIDIpICoqIDEvMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hcmN0cmlnb25vbWV0cmljb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQXJjbyBDb3NlY2FudGUgSGlwZXJiw7NsaWNvXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFyY28gY29zZWNhbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19jb3NlY2FudGVfaGlwZXJib2xpY2EoeDogbnVtYmVyKTogbnVtYmVyXHJcbiAge1xyXG4gICAgcmV0dXJuIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoMSArICgxICsgeCAqKiAyKSAqKiAxLzIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYXJjdHJpZ29ub21ldHJpY29zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFyY28gQ290YW5nZW50ZSBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBjb3RhbmdlbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19jb3RhbmdlbnRlX2hpcGVyYm9saWNvKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMS8yICogTG9nYXJpdG1vcy5wcm90b3R5cGUubG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCgoeCsgMSkgLyAoeCAtIDEpKTsgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==