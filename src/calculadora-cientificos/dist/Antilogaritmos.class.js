"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Antilogaritmos = void 0;
const constantes_1 = require("./constantes");
const Logaritmos_class_1 = require("./Logaritmos.class");
class Antilogaritmos extends Logaritmos_class_1.Logaritmos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2 mais 1.
     */
    antilogaritmo_base_2_mais_1(x) {
        return 1 ** this.logaritmo_base(2, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2 menos 1.
     */
    antilogaritmo_base_2_menos_1(x) {
        return 1 ** this.logaritmo_base(2, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_2(x) {
        return 1 ** this.logaritmo_base(2, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 10 mais 1.
     */
    antilogaritmo_base_10_mais_1(x) {
        return 1 ** this.logaritmo_base(10, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 10 menos 1.
     */
    antilogaritmo_base_10_menos_1(x) {
        return 1 ** this.logaritmo_base(10, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 10.
     */
    antilogaritmo_base_10(x) {
        return 1 ** this.logaritmo_base(10, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base natural mais 1.
     */
    antilogaritmo_base_natural_mais_1(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base natural menos 1.
     */
    antilogaritmo_base_natural_menos_1(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base natural.
     */
    antilogaritmo_base_natural(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada mais 1.
     */
    antilogaritmo_base_qualquer_mais_1(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada menos 1.
     */
    antilogaritmo_base_qualquer_menos_1(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-antilogaritmos.png)
     * ___
     * Módulo do Antilogaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
     */
    antilogaritmo_base_qualquer(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
}
exports.Antilogaritmos = Antilogaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW50aWxvZ2FyaXRtb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbnRpbG9nYXJpdG1vcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUM7QUFDckMseURBQWdEO0FBRWhELE1BQXNCLGNBQWUsU0FBUSw2QkFBVTtJQUVyRDs7Ozs7Ozs7T0FRRztJQUNJLDJCQUEyQixDQUFDLENBQVM7UUFFMUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDRCQUE0QixDQUFDLENBQVM7UUFFM0MsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLG9CQUFvQixDQUFDLENBQVM7UUFFbkMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksNEJBQTRCLENBQUMsQ0FBUztRQUUzQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksNkJBQTZCLENBQUMsQ0FBUztRQUU1QyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0kscUJBQXFCLENBQUMsQ0FBUztRQUVwQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxpQ0FBaUMsQ0FBQyxDQUFTO1FBRWhELE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksa0NBQWtDLENBQUMsQ0FBUztRQUVqRCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDBCQUEwQixDQUFDLENBQVM7UUFFekMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxrQ0FBa0MsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUUvRCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLG1DQUFtQyxDQUFDLElBQVksRUFBRSxDQUFTO1FBRWhFLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksMkJBQTJCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFeEQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQTVLRCx3Q0E0S0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVUxFUiB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnRpbG9nYXJpdG1vcyBleHRlbmRzIExvZ2FyaXRtb3MgXHJcbntcclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgMiBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIgbWFpcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMl9tYWlzXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYW50aWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIDIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMiBtZW5vcyAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMl9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAqKiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWFudGlsb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSAyXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMih4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWFudGlsb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSAxMCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwIG1haXMgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlXzEwX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYW50aWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIDEwIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwIG1lbm9zIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFudGlsb2dhcml0bW9fYmFzZV8xMF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAqKiB0aGlzLmxvZ2FyaXRtb19iYXNlKDEwLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgMTBcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMTAoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tYW50aWxvZ2FyaXRtb3MucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIE5hdHVyYWwgbWFpcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBuYXR1cmFsIG1haXMgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlX25hdHVyYWxfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAqKiB0aGlzLmxvZ2FyaXRtb19iYXNlKEVVTEVSLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBuYXR1cmFsIG1lbm9zIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFudGlsb2dhcml0bW9fYmFzZV9uYXR1cmFsX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoRVVMRVIsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L21pbmliYW5uZXItY2FsY3VsYWRvcmEucG5nKVxyXG4gICAqIF9fX1xyXG4gICAqICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jYWxjdWxhZG9yYS5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVudGlmaWNvcy5wbmcpICFbXShodHRwczovL3d3dy5zdHJnLmh1bWJhbmV3LmNvbS5ici9kb2NzL3d0c2Z5L3RhZy1jaWVuLWFudGlsb2dhcml0bW9zLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSBOYXR1cmFsXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBuYXR1cmFsLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWFpcyAxXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBzZWxlY2lvbmFkYSBtYWlzIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFudGlsb2dhcml0bW9fYmFzZV9xdWFscXVlcl9tYWlzXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSBiYXNlIHZhbG9yIHJlYWwgZGEgYmFzZSBsb2dhcml0bWljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEgbWVub3MgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlX3F1YWxxdWVyX21lbm9zXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS9taW5pYmFubmVyLWNhbGN1bGFkb3JhLnBuZylcclxuICAgKiBfX19cclxuICAgKiAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2FsY3VsYWRvcmEucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbnRpZmljb3MucG5nKSAhW10oaHR0cHM6Ly93d3cuc3RyZy5odW1iYW5ldy5jb20uYnIvZG9jcy93dHNmeS90YWctY2llbi1hbnRpbG9nYXJpdG1vcy5wbmcpXHJcbiAgICogX19fXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXJcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==