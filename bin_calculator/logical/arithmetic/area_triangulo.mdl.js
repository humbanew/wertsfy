"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaTriangulo = void 0;
const raiz_quadrada_mdl_1 = require("./raiz_quadrada.mdl");
var areaTriangulo = (lado) => {
    return (lado ** 2) * (0, raiz_quadrada_mdl_1.raizQuadrada)(3) / 4;
};
exports.areaTriangulo = areaTriangulo;
//# sourceMappingURL=area_triangulo.mdl.js.map