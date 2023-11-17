#ifndef _WCOREBASE_HPP_
#define _WCOREBASE_HPP_

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <windows.h>
#include <regex>

using namespace std;

// Estrutura 
namespace WERTSFY 
{ 
  
  namespace COREBASE 
  { 

    typedef struct Registro 
    { 
      // Props
      const char wpropriedade='W';
      char wcategoria;
      char wtipagem;
      char* wnamespace;
      int wserial;
      const char wrefid0='#';
      char* wversaoimplentacao;
      const char wrefid1='#';
      char* wversaoultimaatualizacao;
      char wstatus;

      // Exceptions (Excessões)
      int wpropsSizeException(registro *wn) { 
        
        if (strlen(wn->wnamespace) > 5) { 
          cout << "\n[WERR0890]: Wertsfy component register namespace size is invalid!\n"; 
          return 1; 
        }
      
        if(wn->wserial > 999) { 
          cout << "\n[WERR0891]: Wertsfy component register serial is invalid!\n"; 
          return 1; 
        }

        if(regex_match(wn->wversaoimplentacao, regex("[0-9]+\\.[0-9]+\\.[0-9]+")) == false) { 
          cout << "\n[WERR0892]: Wertsfy component register implementation version size is invalid!\n"; 
          return 1; 
        }

        if(regex_match(wn->wversaoultimaatualizacao, regex("[0-9]+\\.[0-9]+\\.[0-9]+")) == false) { 
          cout << "\n[WERR0893]: Wertsfy component register last update version size is invalid!\n"; 
          return 1; 
        }

      }

      // Linked List (Lista Encadeada)
      struct Registro *proximo;
      struct Registro *anterior;

    } registro;

    typedef struct ListaRegistros 
    { 
      char* id;
      int tamanho;
      struct Registro *inicio;
      struct Registro *fim;
    } lista_registros;

    typedef struct Hashtable
    {
      int tamanho;
      struct ListaRegistros *glossario_registros;
    } hashtable;

    lista_registros *cria_lista_registros(char* $id) 
    { 
      lista_registros *wlr;
      wlr->id = $id;
      wlr->tamanho = 0;
      wlr->inicio = NULL;
      wlr->fim = NULL;
      return wlr;
    }

    hashtable *cria_hashtable(int $tamanho) 
    { 
      hashtable *wht;
      wht->tamanho = $tamanho;
      wht->glossario_registros = NULL;
      return wht;
    }

    registro *cria_registro(char $categoria, char $tipagem, char* $namespace, int $serial, char* $versaoimplementacao, char* $versaoultimaatualizacao, char $status) 
    { 
      registro *wreg = (registro*) malloc(sizeof(registro));
      wreg->wcategoria = $categoria;
      wreg->wtipagem = $tipagem;
      wreg->wnamespace = $namespace;
      wreg->wserial = $serial;
      wreg->wversaoimplentacao = $versaoimplementacao;
      wreg->wversaoultimaatualizacao = $versaoultimaatualizacao;
      wreg->wstatus = $status;
      wreg->wpropsSizeException(wreg);
      return wreg;
    }

    void adiciona_inicio_registro(lista_registros *$l, registro *$r) 
    { 

      registro *aux;

      if($l->inicio==NULL)
      {

        $l->inicio = $r;
        $l->fim = $r;
        $l->tamanho++;

      } 
      else 
      {

        aux = $l->inicio;
        $l->inicio = $r;
        $l->inicio->proximo = aux;
        aux->anterior = $l->inicio;
        $l->tamanho++;

      }

    }

    void adiciona_final_registro(lista_registros *$l, registro *$r) 
    { 

      registro *aux;

      if($l->inicio==NULL)
      {

        $l->inicio = $r;
        $l->fim = $r;
        $l->tamanho++;

      } 
      else 
      {

        aux = $l->fim;
        $l->fim = $r;
        $l->fim->anterior = aux;
        aux->proximo = $l->fim;
        $l->tamanho++;

      }

    }

    void remove_inicio_registro(lista_registros *$l, registro *$r) 
    { 
      
      registro *aux;

      if($l->inicio==NULL)
      {
        printf("\n[WERR0900]: Wertsfy component register list is empty!\n");
      } 
      else 
      {
        aux = $l->inicio;
        $l->inicio = $l->inicio->proximo;
        $l->inicio->anterior = NULL;
        free(aux);
        $l->tamanho--;
      }
    }

    void remove_final_registro(lista_registros *$l, registro *$r) 
    { 
      
      registro *aux;
      
      if($l->inicio==NULL)
      {
        printf("\n[WERR0901]: Wertsfy component register list is empty!\n");
      } 
      else 
      {
        aux = $l->fim;
        $l->fim = $l->fim->anterior;
        $l->fim->proximo = NULL;
        free(aux);
        $l->tamanho--;
      }
    }

    void mostra_registros(lista_registros *$l) { 

      registro *aux;

      if($l->inicio==NULL) {
        return;
      }

      aux = $l->inicio;
      while(!aux->proximo==NULL) {
        cout << 
          "\n[WERTSFY]: Wertsfy component register list: " 
            << 
          $l->id 
            << 
          "⇒\t" 
            <<
          aux->wpropriedade
            <<
          aux->wcategoria
            <<
          aux->wtipagem
            <<
          aux->wnamespace
            <<
          aux->wserial
            <<
          aux->wrefid0
            <<
          aux->wversaoimplentacao
            <<
          aux->wrefid1
            <<
          aux->wversaoultimaatualizacao
            <<
          aux->wstatus
            <<
          "\n";
        Sleep(200);
        aux = aux->proximo;
      }

    }

  } 

}

#endif // _WCOREBASE_HPP_
