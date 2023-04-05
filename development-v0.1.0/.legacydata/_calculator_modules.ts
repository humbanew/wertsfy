
const formulaCriaJogoDaMegaSena = (aposta: number[]): Array<number> => {
  let numeros: number[] = [];
  for(let i: number = 0; i < 6; i++) {
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

const formulaCriaJogoDaQuina = (aposta: number[]): Array<number> => {
  let numeros: number[] = [];
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

const formulaCriaJogoDaQuadra = (aposta: number[]): Array<number> => {
  let numeros: number[] = [];
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

const formulaCriaJogoDaLotofacil = (aposta: number[]): Array<number> => {
  let numeros: number[] = [];
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

const formulaCriaJogoDaLotomania = (aposta: number[]): Array<number> => {
  let numeros: number[] = [];
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
