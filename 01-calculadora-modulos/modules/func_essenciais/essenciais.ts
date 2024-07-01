/**
 * # Funcionalidade de Soma, Subtração, Multiplicação, Divisão e Resto
 * @param op operação que será usada na lista de números.
 * @param valores a lista de números submetidos para a operação selecionada.
 * @returns o valor numérico final da operação fundamental realizada.
 */
export default function essenciais(
  op: "+"|"-"|"*"|"/"|"%",
  ...valores: number[]
): number {
  let total: number = 0;

  for (let i = 0; i < valores.length; i += 2) {
    switch (op) {
      case "+":
        if (valores[i + 1] == null) total = valores[i] + 0;
        total = valores[i] + valores[i + 1];
      case "-":
        if (valores[i + 1] == null) total = valores[i] - 0;
        total = valores[i] - valores[i + 1];
      case "*":
        if (valores[i + 1] == null) total = valores[i] * 1;
        total = valores[i] * valores[i + 1];
      case "/":
        if (valores[i + 1] == null) total = valores[i] / 1;
        total = valores[i] / valores[i + 1];
      case "%":
        if (valores[i + 1] == null) total = valores[i] % 1;
        total = valores[i] / valores[i + 1];
    }
  }
  return total;
}
