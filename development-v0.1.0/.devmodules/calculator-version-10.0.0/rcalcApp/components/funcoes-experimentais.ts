export function $calculoDaEscalaGeografica(tamanhoReal: number, tamanhoFicticio: number) {
  let resultado = tamanhoReal / tamanhoFicticio;
  return resultado;
}

export function $calculoDeIDH(saude: number, educacao: number, renda: number, populacao: number, ppc: number) {
  let resultado = (saude + educacao + renda) / (populacao + ppc);
  return resultado;
}

export function $calculoDeGINI(pnb: number, populacao: number) {
  let resultado = pnb / populacao;
  return resultado;
}

export function $calculoDeIMC(peso: number, altura: number) {
  let resultado = peso / altura ** 2;
  return resultado;
}

export function $calculoDeDensidadePopulacional(espaco: number, populacao: number) {
  let resultado = espaco / populacao;
  return resultado;
}

export function $calculoDosNumerosPares(numero: number) {
  let resultado = numero / 2;
  if(resultado % 2 === 0) { console.info("eh par.") }
  else { console.info("eh impar.") }
  return resultado;
}

export function $calculoDosNumerosImpares(numero: number) {
  let resultado = numero / 3;
  if(resultado % 3 === 0) { console.info("eh impar.") }
  else { console.info("eh par.") }
  return resultado;
}

export function $numeroDeConjuntos(elementos: number) {
  let resultado = 2 ** elementos;
  return resultado;
}

export function $criaJogoDaMegaSena(aposta: number[]) {
  let numeros = [];
  for(let i = 0; i < 6; i++) {
    numeros.push(Math.floor(Math.random() * 60) + 1);
  }
  if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
    console.info("Você ganhou!");
  }
  else {
    console.info("Você perdeu!");
  }
  return numeros;
}

export function $criaJogoDaQuina(aposta: number[]) {
  let numeros = [];
  for(let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 80) + 1);
  }
  if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4]) {
    console.info("Você ganhou!");
  }
  else {
    console.info("Você perdeu!");
  }
  return numeros;
}

export function $criaJogoDaQuadra(aposta: number[]) {
  let numeros = [];
  for(let i = 0; i < 4; i++) {
    numeros.push(Math.floor(Math.random() * 80) + 1);
  }
  if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3]) {
    console.info("Você ganhou!");
  }
  else {
    console.info("Você perdeu!");
  }
  return numeros;
}

export function $criaJogoDaLotoFacil(aposta: number[]) {
  let numeros = [];
  for(let i = 0; i < 6; i++) {
    numeros.push(Math.floor(Math.random() * 80) + 1);
  }
  if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
    console.info("Você ganhou!");
  }
  else {
    console.info("Você perdeu!");
  }
  return numeros;
}

export function $criaJogoDaLotoMania(aposta: number[]) {
  let numeros = [];
  for(let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 80) + 1);
  }
  if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5] && aposta[6] === numeros[6] && aposta[7] === numeros[7] && aposta[8] === numeros[8] && aposta[9] === numeros[9] && aposta[10] === numeros[10] && aposta[11] === numeros[11] && aposta[12] === numeros[12] && aposta[13] === numeros[13] && aposta[14] === numeros[14]) {
    console.info("Você ganhou!");
  }
  else {
    console.info("Você perdeu!");
  }
  return numeros;
}


export function $calculoDoDiagramaDeVennDe2Grupos(numeroPesquisados: number, numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number) {
  let resultados = { 
    intecessao: numerosGrupoDoisNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
    nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
  };
  return resultados;
}

export function $calculoDoDiagramaDeVennDe3Grupos(numeroPesquisados: number, numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number) {
  let resultados = { 
    intecessao: numerosGrupoTresNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
    nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
  };
  return resultados;
}

export function $calculoDoDiagramaDeVennDe4Grupos(numeroPesquisados: number, numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number) {
  let resultados = { 
    intecessao: numerosGrupoQuatroNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
  };
  return resultados;
}

export function $calculoDosNumerosPrimos(numeroPesquisados: number) {
  let numerosPrimos = [];
  for(let i = 0; i < numeroPesquisados; i++) {
    if(i % 2 !== 0) {
      numerosPrimos.push(i);
    }
  }
  return numerosPrimos;
}
