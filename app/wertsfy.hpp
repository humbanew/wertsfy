#ifndef WERTSFY_HPP
#define WERTSFY_HPP

#include <cstdio>
#include <cstdlib>
#include <cstdint>

typedef struct Wertsfy 
{

  struct Wertsfy_Configurations
  {

    struct Wertsfy_Versioning
    {

      struct W_Base
      {
        int8_t major=2;
        int8_t minor=0;
        int8_t patch=0;
        char16_t devfase[12]=u"delta";
      };

      struct W_API
      {
        int8_t major=0;
        int8_t minor=0;
        int8_t patch=1;
        char16_t devfase[12]=u"epysilon";
      };

      struct W_CLI
      {
        int8_t major=0;
        int8_t minor=0;
        int8_t patch=1;
        char16_t devfase[12]=u"epysilon";
      };

      struct W_Addons
      {
        int8_t major=0;
        int8_t minor=0;
        int8_t patch=1;
        char16_t devfase[12]=u"epysilon";
      };

    };
    bool is_enable_cli=false;
    bool is_enable_api=false;
    bool is_enable_addons=false;
    bool is_use_dodecahedron_numserial=false;
    bool is_enable_color=false;
    bool is_use_experimental_features=false;
    bool is_disable_abstractions=false;
    bool is_enable_access_for_draftnecttion=false;
    bool* is_use_function_funcionally[16]= 
    { 
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 
    };

  };

  struct Wertsfy_Parent_Projects
  {
    bool enable_calculator=false;
    bool enable_eclypsuswave=false;
  }; 

  struct Wertsfy_Librarys
  {

    struct W_Arithmetic
    { };

  };

  struct Wertsfy_Control_Structures
  { };

} wertsfy;

#endif // WERTSFY_HPP
