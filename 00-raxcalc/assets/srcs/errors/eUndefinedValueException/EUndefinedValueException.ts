/**
 * Exceção para valores indefinidos.
 */
export default class UndefinedValueException extends Error {
  constructor() {
    super("Valor indefinido!");
  }
}
