export var quadradoDePunnet = (genotipo1: string, genotipo2: string): Array<string> => {
  
  if(genotipo1.length > 2 || genotipo2.length > 2) { return; }

  const genDiv1 = genotipo1.slice(0, 1);
  const genDiv2 = genotipo2.slice(0, 1);
  const genDiv3 = genotipo1.slice(1, 2);
  const genDiv4 = genotipo2.slice(1, 2);

  let resultado: string[];
  return resultado = [ 
    genDiv1 + genDiv3, 
    genDiv1 + genDiv4, 
    genDiv2 + genDiv3, 
    genDiv2 + genDiv4 
  ];

};
