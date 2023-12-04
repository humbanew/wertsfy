export var diagramaVenn3Grupos = (ng1: number, ng2: number, ng3: number) => {
  let resultado = { intersection: 0, group1: 0, group2: 0, group3: 0 };
  return resultado = { intersection: (ng1-ng2)+(ng1-ng3)+(ng2-ng3), group1: ng1-resultado.intersection, group2: ng2-resultado.intersection, group3: ng3-resultado.intersection };
};
