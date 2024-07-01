/**
 * @todo Componente com necessidade de atualizações, módulos incompletos ou não implementados.
 */
export abstract class Complexos 
{
// ainda em revisão de construção
  public soma_num_complexos(expressao_a: string, expressao_b: string): string
  {
    let a = expressao_a.split('+');
    let b = expressao_b.split('+');
    let real_a = parseInt(a[0]);
    let real_b = parseInt(b[0]);
    let imag_a = parseInt(a[1]);
    let imag_b = parseInt(b[1]);
    let real = real_a + real_b;
    let imag = imag_a + imag_b;
    return real + '+' + imag + 'i';
  }

  public subtracao_num_complexos(expressao_a: string, expressao_b: string): string
  {
    let a = expressao_a.split('+');
    let b = expressao_b.split('+');
    let real_a = parseInt(a[0]);
    let real_b = parseInt(b[0]);
    let imag_a = parseInt(a[1]);
    let imag_b = parseInt(b[1]);
    let real = real_a - real_b;
    let imag = imag_a - imag_b;
    return real + '+' + imag + 'i';
  }

  public multiplicacao_num_complexos(expressao_a: string, expressao_b: string): string
  {
    let a = expressao_a.split('+');
    let b = expressao_b.split('+');
    let real_a = parseInt(a[0]);
    let real_b = parseInt(b[0]);
    let imag_a = parseInt(a[1]);
    let imag_b = parseInt(b[1]);
    let real = real_a * real_b - imag_a * imag_b;
    let imag = real_a * imag_b + imag_a * real_b;
    return real + '+' + imag + 'i';
  }

  public divisao_num_complexos(expressao_a: string, expressao_b: string): string
  {
    let a = expressao_a.split('+');
    let b = expressao_b.split('+');
    let real_a = parseInt(a[0]);
    let real_b = parseInt(b[0]);
    let imag_a = parseInt(a[1]);
    let imag_b = parseInt(b[1]);
    let real = (real_a * real_b + imag_a * imag_b) / (real_b * real_b + imag_b * imag_b);
    let imag = (imag_a * real_b - real_a * imag_b) / (real_b * real_b + imag_b * imag_b);
    return real + '+' + imag + 'i';
  }

  public modulo_num_complexos(expressao: string): number
  {
    let a = expressao.split('+');
    let real = parseInt(a[0]);
    let imag = parseInt(a[1]);
    return Math.sqrt(real * real + imag * imag);
  }

  public conjugado_num_complexos(expressao: string): string
  {
    let a = expressao.split('+');
    let real = parseInt(a[0]);
    let imag = parseInt(a[1]);
    return real + '+' + (-imag) + 'i';
  }

}
