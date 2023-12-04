export var jurosCompostos = (valor: number, taxa: number, tempo: number, vezes: number): number => {
  return (valor * (1 + taxa * tempo)) ** vezes; 
};
