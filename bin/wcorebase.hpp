#ifndef _WCOREBASE_HPP_
#define _WCOREBASE_HPP_

#include <cstdio>
#include <cstdlib>

// Estrutura de Registro
typedef struct RegistroComponente 
{ 
  char wpropriedade='W';
  char wfuncid_categoria;
  char* wfuncid_categoria_nickid;
  char wfuncid_tipo;
  char wfuncid_centena;
  char wfuncid_dezena;
  char wfuncid_unidade;
  char wfuncversaoid='V';
  short int wfuncversaoid_lm_major;
  short int wfuncversaoid_lm_minor;
  short int wfuncversaoid_lm_patch;
} registro_componente;


#endif // _WCOREBASE_HPP_
