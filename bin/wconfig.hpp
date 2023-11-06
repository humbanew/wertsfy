#ifndef _WCONFIG_HPP_
#define _WCONFIG_HPP_

// Estrutura de Registro
typedef struct RegistroComponente 
{ 
  char wpropriedade='W';
  char wfuncid_categoria;
  char wfuncid_categoria_li;
  char wfuncid_tipo;
  short int wfuncid_centena;
  short int wfuncid_dezena;
  short int wfuncid_unidade;
  char wfuncversaoid='V';
  short int wfuncversaoid_major;
  short int wfuncversaoid_minor;
  short int wfuncversaoid_patch;
} registro_componente;

#endif // _WCONFIG_HPP_
