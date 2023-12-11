"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaPoligono = void 0;
const raiz_quadrada_mdl_1 = require("./raiz_quadrada.mdl");
var areaPoligono = (lados, comprimento, largura) => {
    return comprimento == largura ? lados * ((comprimento * comprimento * (0, raiz_quadrada_mdl_1.raizQuadrada)(3)) / 4) : lados * (comprimento * largura / 2);
};
exports.areaPoligono = areaPoligono;
//# sourceMappingURL=area_poligono.mdl.js.map