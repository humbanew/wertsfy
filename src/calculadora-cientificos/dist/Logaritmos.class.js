"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logaritmos = void 0;
const constantes_1 = require("./constantes");
class Logaritmos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo usando uma Base Qualquer
     * @param expo valor real da base do logaritmo.
     * @param x valor real do logaritmando.
     * @returns retorna o valor do logarítmo encontrado.
     */
    logaritmo_base(expo, x) {
        let exp = expo, scan = x % exp;
        while (scan != 0) {
            scan = scan % exp;
            if (expo ** exp != x) {
                if (expo ** exp != x) {
                    if (expo ** exp != x) {
                        exp += 0.0001;
                    }
                    exp += 0.001;
                }
                exp += 0.01;
            }
            exp += 0.1;
        }
        return exp;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2 mais 1.
     */
    logaritmo_base_2_mais_1(x) {
        return this.logaritmo_base(2, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2 menos 1.
     */
    logaritmo_base_2_menos_1(x) {
        return this.logaritmo_base(2, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2.
     */
    logaritmo_base_2(x) {
        return this.logaritmo_base(2, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10 mais 1.
     */
    logaritmo_base_10_mais_1(x) {
        return this.logaritmo_base(10, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10 menos 1.
     */
    logaritmo_base_10_menos_1(x) {
        return this.logaritmo_base(10, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10.
     */
    logaritmo_base_10(x) {
        return this.logaritmo_base(10, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base natural mais 1.
     */
    logaritmo_base_natural_mais_1(x) {
        return this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base natural menos 1.
     */
    logaritmo_base_natural_menos_1(x) {
        return this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base natural.
     */
    logaritmo_base_natural(x) {
        return this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada mais 1.
     */
    logaritmo_base_qualquer_mais_1(base, x) {
        return this.logaritmo_base(base, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada menos 1.
     */
    logaritmo_base_qualquer_menos_1(base, x) {
        return this.logaritmo_base(base, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
     * ___
     * Módulo do Logaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada.
     */
    logaritmo_base_qualquer(base, x) {
        return this.logaritmo_base(base, x);
    }
}
exports.Logaritmos = Logaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nYXJpdG1vcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0xvZ2FyaXRtb3MuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFDO0FBRXJDLE1BQXNCLFVBQVU7SUFFOUI7Ozs7Ozs7OztPQVNHO0lBQ08sY0FBYyxDQUFDLElBQVksRUFBRSxDQUFTO1FBRTlDLElBQUksR0FBRyxHQUFHLElBQUksRUFDWixJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFDbEIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTt3QkFDcEIsR0FBRyxJQUFJLE1BQU0sQ0FBQztxQkFDZjtvQkFDRCxHQUFHLElBQUksS0FBSyxDQUFDO2lCQUNkO2dCQUNELEdBQUcsSUFBSSxJQUFJLENBQUM7YUFDYjtZQUNELEdBQUcsSUFBSSxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksdUJBQXVCLENBQUMsQ0FBUztRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSx3QkFBd0IsQ0FBQyxDQUFTO1FBRXZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGdCQUFnQixDQUFDLENBQVM7UUFFL0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSx3QkFBd0IsQ0FBQyxDQUFTO1FBRXZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHlCQUF5QixDQUFDLENBQVM7UUFFeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksaUJBQWlCLENBQUMsQ0FBUztRQUVoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDZCQUE2QixDQUFDLENBQVM7UUFFNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDhCQUE4QixDQUFDLENBQVM7UUFFN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHNCQUFzQixDQUFDLENBQVM7UUFFckMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLDhCQUE4QixDQUFDLElBQVksRUFBRSxDQUFTO1FBRTNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSwrQkFBK0IsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUU1RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksdUJBQXVCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFcEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUExTUQsZ0NBME1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVVMRVIgfSBmcm9tIFwiLi9jb25zdGFudGVzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nYXJpdG1vcyBcclxue1xyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIHVzYW5kbyB1bWEgQmFzZSBRdWFscXVlclxyXG4gICAqIEBwYXJhbSBleHBvIHZhbG9yIHJlYWwgZGEgYmFzZSBkbyBsb2dhcml0bW8uXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0bWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2Fyw610bW8gZW5jb250cmFkby5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgbG9nYXJpdG1vX2Jhc2UoZXhwbzogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgbGV0IGV4cCA9IGV4cG8sXHJcbiAgICAgIHNjYW4gPSB4ICUgZXhwO1xyXG4gICAgd2hpbGUgKHNjYW4gIT0gMCkge1xyXG4gICAgICBzY2FuID0gc2NhbiAlIGV4cDtcclxuICAgICAgaWYgKGV4cG8gKiogZXhwICE9IHgpIHtcclxuICAgICAgICBpZiAoZXhwbyAqKiBleHAgIT0geCkge1xyXG4gICAgICAgICAgaWYgKGV4cG8gKiogZXhwICE9IHgpIHtcclxuICAgICAgICAgICAgZXhwICs9IDAuMDAwMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4cCArPSAwLjAwMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwICs9IDAuMDE7XHJcbiAgICAgIH1cclxuICAgICAgZXhwICs9IDAuMTtcclxuICAgIH1cclxuICAgIHJldHVybiBleHA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIDIgbWFpcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIgbWFpcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8yX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMiBtZW5vcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8yX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8yKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMTAgbWFpcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwIG1haXMgMS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMTBfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAxMCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwIG1lbm9zIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlXzEwX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKDEwLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIDEwXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8xMCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gTmF0dXJhbCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgbmF0dXJhbCBtYWlzIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX25hdHVyYWxfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gTmF0dXJhbCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIG5hdHVyYWwgbWVub3MgMS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gTmF0dXJhbFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBuYXR1cmFsLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV9uYXR1cmFsKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyIG1haXMgMVxyXG4gICAqIEBwYXJhbSBiYXNlIHZhbG9yIHJlYWwgZGEgYmFzZSBsb2dhcml0bWljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBzZWxlY2lvbmFkYSBtYWlzIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX3F1YWxxdWVyX21haXNfMShiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEgbWVub3MgMS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXJfbWVub3NfMShiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1sb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV9xdWFscXVlcihiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4KTtcclxuICB9XHJcbn1cclxuIl19