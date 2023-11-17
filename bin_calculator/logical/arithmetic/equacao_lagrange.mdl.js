"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoDeLagrange = void 0;
var equacaoDeLagrange = (x, y, xi, yi, xii, yii, xiii, yiii) => {
    return (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
};
exports.equacaoDeLagrange = equacaoDeLagrange;
//# sourceMappingURL=equacao_lagrange.mdl.js.map