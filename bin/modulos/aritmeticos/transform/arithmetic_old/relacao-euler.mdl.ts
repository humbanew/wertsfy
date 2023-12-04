export var relacaoDeEuler = (vertices: number, arestas: number, faces: number): number => {
  return (vertices - (arestas + faces)) - 2;
};
