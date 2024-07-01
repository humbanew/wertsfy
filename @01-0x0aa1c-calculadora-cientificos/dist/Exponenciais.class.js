"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exponenciais = void 0;
const Logaritmos_class_1 = require("./Logaritmos.class");
class Exponenciais extends Logaritmos_class_1.Logaritmos {
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
     * ___
     * Módulo da Exponencial mais 1
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial mais 1 encontrada.
     */
    exponencial_mais_1(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base) + 1;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
     * ___
     * Módulo da Exponencial menos 1
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial menos 1 encontrada.
     */
    exponencial_menos_1(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base) - 1;
    }
    /**
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
     * ___
     * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
     * ___
     * Módulo da Exponencial
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial encontrada.
     */
    exponencial(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base);
    }
}
exports.Exponenciais = Exponenciais;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb25lbmNpYWlzLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vRXhwb25lbmNpYWlzLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFnRDtBQUVoRCxNQUFzQixZQUFhLFNBQVEsNkJBQVU7SUFFbkQ7Ozs7Ozs7OztPQVNHO0lBQ0ksa0JBQWtCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFL0MsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUVoRCxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLFdBQVcsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUV4QyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUF2REQsb0NBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHBvbmVuY2lhaXMgZXh0ZW5kcyBMb2dhcml0bW9zIFxyXG57XHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tZXhwb25lbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIEV4cG9uZW5jaWFsIG1haXMgMVxyXG4gICAqIEBwYXJhbSBiYXNlIGJhc2UgZGEgZXhwb25lbmNpYWwuXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGV4cG9uZW5jaWFsIG1haXMgMSBlbmNvbnRyYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHBvbmVuY2lhbF9tYWlzXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgaWYgKGJhc2UgPT0gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlICoqIHRoaXMubG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoeCwgYmFzZSkgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tZXhwb25lbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIEV4cG9uZW5jaWFsIG1lbm9zIDFcclxuICAgKiBAcGFyYW0gYmFzZSBiYXNlIGRhIGV4cG9uZW5jaWFsLlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBleHBvbmVuY2lhbCBtZW5vcyAxIGVuY29udHJhZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cG9uZW5jaWFsX21lbm9zXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgaWYgKGJhc2UgPT0gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlICoqIHRoaXMubG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoeCwgYmFzZSkgLSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvbWluaWJhbm5lci1jYWxjdWxhZG9yYS5wbmcpXHJcbiAgICogX19fXHJcbiAgICogIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNhbGN1bGFkb3JhLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW50aWZpY29zLnBuZykgIVtdKGh0dHBzOi8vd3d3LnN0cmcuaHVtYmFuZXcuY29tLmJyL2RvY3Mvd3RzZnkvdGFnLWNpZW4tZXhwb25lbmNpYWlzLnBuZylcclxuICAgKiBfX19cclxuICAgKiBNw7NkdWxvIGRhIEV4cG9uZW5jaWFsXHJcbiAgICogQHBhcmFtIGJhc2UgYmFzZSBkYSBleHBvbmVuY2lhbC5cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgZXhwb25lbmNpYWwgZW5jb250cmFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgZXhwb25lbmNpYWwoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgaWYgKGJhc2UgPT0gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlICoqIHRoaXMubG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoeCwgYmFzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==