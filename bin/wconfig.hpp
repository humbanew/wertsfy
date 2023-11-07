#ifndef _WCONFIG_HPP_
#define _WCONFIG_HPP_

#include <cstdio>
#include <cstdlib>

// Versionamento do Projeto
#define WTSFY_VMAJOR 2
#define WTSFY_VMINOR 0
#define WTSFY_VPATCH 0

// Versionamento do Projeto - CLI
#define WTSFY_CLI_VMAJOR 0
#define WTSFY_CLI_VMINOR 0
#define WTSFY_CLI_VPATCH 1

// Configurações de Ambiente
#define WTSFY_DEV_ENV setenv("WTSFY_ENV", "development", 1);
#define WTSFY_PRD_ENV setenv("WTSFY_ENV", "production", 0);

// Estruturas -> wcorebase.hpp
  // Estrutura de Registro
typedef struct RegistroComponente 
{ 
  char wpropriedade='W';
  char wfuncid_categoria;
  char* wfuncid_categoria_nickid;
  char wfuncid_tipo;
  short int wfuncid_centena;
  short int wfuncid_dezena;
  short int wfuncid_unidade;
  char wfuncversaoid='V';
  short int wfuncversaoid_lm_major;
  short int wfuncversaoid_lm_minor;
  short int wfuncversaoid_lm_patch;
} registro_componente;

#endif // _WCONFIG_HPP_
