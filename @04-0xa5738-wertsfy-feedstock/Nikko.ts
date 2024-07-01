export let Nikko =
{

  /**
   * ![](./~srcs/feedstock-logo.png)
   * # Descrição de teste
   * @param description Descrição sobre o teste.
   * @returns retorna um objeto com a função it.
   * ----
   */
  describe: function (description: string) {

    console.log(description);

    return (
      {

        /**
         * ![](./~srcs/feedstock-logo.png)
         * ## Caso de teste
         * @param description Descrição sobre o caso de teste.
         * @returns retorna um objeto com a função expect.
         * ----
         */
        it: function (description: string) {

          console.log("\t" + description);

          return (
            {

              /**
               * ![](./~srcs/feedstock-logo.png)
               * ### Expectativa
               * @param value Valor a ser comparado.
               * @returns retorna um objeto com as funções de comparação.
               * ----
               */
              expect: function (value: unknown) {

                console.log("\t\t" + value);

                return (
                  {
                    /**
                     * ![](./~srcs/feedstock-logo.png)
                     * #### Comparação de igualdade
                     * @param sentence Valor a ser comparado.
                     * @returns retorna um booleano.
                     * ----
                     */
                    toBe: {

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade
                       * @param sentence resultado esperado.
                       * @returns o resultado do teste
                       * ----
                       */
                      equal: function (sentence: unknown): boolean {
                        if (value == sentence) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de diferença
                       * @param sentence resultado esperado.
                       * @returns o resultado do teste
                       * ----
                       */
                      notEqual: function (sentence: unknown): boolean {
                        if (value != sentence) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns o resultado do teste
                       * ----
                       */
                      isNumber: function (): boolean {
                        if (typeof value == "number") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isString: function (): boolean {
                        if (typeof value == "string") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isBoolean: function (): boolean {
                        if (typeof value == "boolean") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isObject: function (): boolean {
                        if (typeof value == "object") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isArray: function (): boolean {
                        if (Array.isArray(value)) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isNull: function (): boolean {
                        if (value == null) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isUndefined: function (): boolean {
                        if (value == undefined) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isFunction: function (): boolean {
                        if (typeof value == "function") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isSymbol: function (): boolean {
                        if (typeof value == "symbol") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isBigInt: function (): boolean {
                        if (typeof value == "bigint") {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isDate: function (): boolean {
                        if (value instanceof Date) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isRegExp: function (): boolean {
                        if (value instanceof RegExp) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isMap: function (): boolean {
                        if (value instanceof Map) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isSet: function (): boolean {
                        if (value instanceof Set) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isWeakMap: function (): boolean {
                        if (value instanceof WeakMap) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isWeakSet: function (): boolean {
                        if (value instanceof WeakSet) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isPromise: function (): boolean {
                        if (value instanceof Promise) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isError: function (): boolean {
                        if (value instanceof Error) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isTypeError: function (): boolean {
                        if (value instanceof TypeError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isSyntaxError: function (): boolean {
                        if (value instanceof SyntaxError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isReferenceError: function (): boolean {
                        if (value instanceof ReferenceError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isRangeError: function (): boolean {
                        if (value instanceof RangeError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isURIError: function (): boolean {
                        if (value instanceof URIError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isEvalError: function (): boolean {
                        if (value instanceof EvalError) {
                          return true;
                        } else {
                          return false;
                        }
                      },

                      /**
                       * ![](./~srcs/feedstock-logo.png)
                       * ##### Verificação de igualdade estrita
                       * @returns resultado do teste
                       * ----
                       */
                      isAggregateError: function (): boolean {
                        if (value instanceof AggregateError) {
                          return true;
                        } else {
                          return false;
                        }
                      }

                    }
                  }
                )

              }

            }
          )

        }

      }
    )

  }

}

Nikko.describe("This is a test").it("This is a test case").expect(1).toBe.equal(1);
