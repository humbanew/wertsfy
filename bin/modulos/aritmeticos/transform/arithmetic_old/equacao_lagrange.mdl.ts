export var equacaoDeLagrange = (x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number): number => {
  return (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
};
