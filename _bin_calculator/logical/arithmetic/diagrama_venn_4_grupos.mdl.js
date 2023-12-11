"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagramaVenn4Grupos = void 0;
var diagramaVenn4Grupos = (ng1, ng2, ng3, ng4) => {
    let resultado = { intersection: 0, group1: 0, group2: 0, group3: 0, group4: 0 };
    return resultado = { intersection: (ng1 - ng2) + (ng1 - ng3) + (ng1 - ng4) + (ng2 - ng3) + (ng2 - ng4) + (ng3 - ng4), group1: ng1 - resultado.intersection, group2: ng2 - resultado.intersection, group3: ng3 - resultado.intersection, group4: ng4 - resultado.intersection };
};
exports.diagramaVenn4Grupos = diagramaVenn4Grupos;
//# sourceMappingURL=diagrama_venn_4_grupos.mdl.js.map