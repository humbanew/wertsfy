"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cologaritmos = void 0;
const constantes_1 = require("./constantes");
const Logaritmos_class_1 = require("./Logaritmos.class");
class Cologaritmos extends Logaritmos_class_1.Logaritmos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2 mais 1.
     */
    cologaritmo_base_2_mais_1(x) {
        return -1 * this.logaritmo_base(2, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2 menos 1.
     */
    cologaritmo_base_2_menos_1(x) {
        return -1 * this.logaritmo_base(2, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_2(x) {
        return -1 * this.logaritmo_base(2, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 10 mais 1.
     */
    cologaritmo_base_10_mais_1(x) {
        return -1 * this.logaritmo_base(10, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 10 menos 1.
     */
    cologaritmo_base_10_menos_1(x) {
        return -1 * this.logaritmo_base(10, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 10.
     */
    cologaritmo_base_10(x) {
        return -1 * this.logaritmo_base(10, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base natural mais 1.
     */
    cologaritmo_base_natural_mais_1(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base natural menos 1.
     */
    cologaritmo_base_natural_menos_1(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base natural.
     */
    cologaritmo_base_natural(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada mais 1.
     */
    cologaritmo_base_qualquer_mais_1(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada menos 1.
     */
    cologaritmo_base_qualquer_menos_1(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
     * ___
     * Módulo do Cologaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada.
     */
    cologaritmo_base_qualquer(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
}
exports.Cologaritmos = Cologaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb2dhcml0bW9zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29sb2dhcml0bW9zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxQztBQUNyQyx5REFBZ0Q7QUFFaEQsTUFBc0IsWUFBYSxTQUFRLDZCQUFVO0lBRW5EOzs7Ozs7OztPQVFHO0lBQ0kseUJBQXlCLENBQUMsQ0FBUztRQUV4QyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSwwQkFBMEIsQ0FBQyxDQUFTO1FBRXpDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGtCQUFrQixDQUFDLENBQVM7UUFFakMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSwwQkFBMEIsQ0FBQyxDQUFTO1FBRXpDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDJCQUEyQixDQUFDLENBQVM7UUFFMUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksbUJBQW1CLENBQUMsQ0FBUztRQUVsQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLCtCQUErQixDQUFDLENBQVM7UUFFOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGdDQUFnQyxDQUFDLENBQVM7UUFFL0MsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHdCQUF3QixDQUFDLENBQVM7UUFFdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLGdDQUFnQyxDQUFDLElBQVksRUFBRSxDQUFTO1FBRTdELE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxpQ0FBaUMsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUU5RCxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0kseUJBQXlCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFdEQsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBNUtELG9DQTRLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVVTEVSIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBMb2dhcml0bW9zIH0gZnJvbSBcIi4vTG9nYXJpdG1vcy5jbGFzc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbG9nYXJpdG1vcyBleHRlbmRzIExvZ2FyaXRtb3MgXHJcbntcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1jb2xvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQ29sb2dhcml0bW8gbmEgQmFzZSAyIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIgbWFpcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzJfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gLTEgKiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWNvbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIDIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIgbWVub3MgMS5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb2dhcml0bW9fYmFzZV8yX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tY29sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgMlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfMih4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWNvbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIDEwIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwIG1haXMgMS5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb2dhcml0bW9fYmFzZV8xMF9tYWlzXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWNvbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIDEwIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAxMCBtZW5vcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzEwX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWNvbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIDEwXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMTAuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfMTAoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tY29sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBuYXR1cmFsIG1haXMgMS5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb2dhcml0bW9fYmFzZV9uYXR1cmFsX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tY29sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgbmF0dXJhbCBtZW5vcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlX25hdHVyYWxfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tY29sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIG5hdHVyYWwuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1jb2xvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQ29sb2dhcml0bW8gbmEgQmFzZSBRdWFscXVlciBtYWlzIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBzZWxlY2lvbmFkYSBtYWlzIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXJfbWFpc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tY29sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSBiYXNlIHZhbG9yIHJlYWwgZGEgYmFzZSBsb2dhcml0bWljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhIG1lbm9zIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXJfbWVub3NfMShiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gLTEgKiB0aGlzLmxvZ2FyaXRtb19iYXNlKGJhc2UsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWNvbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==