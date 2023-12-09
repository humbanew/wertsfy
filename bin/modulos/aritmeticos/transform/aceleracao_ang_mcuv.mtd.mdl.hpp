#ifndef ACELERACAO_ANG_MCUV_MTD_MDL_HPP
#define ACELERACAO_ANG_MCUV_MTD_MDL_HPP

typedef struct Delta { 
  float inicial; 
  float final; 
} delta;

float $Aceleracao_ang_mcuv(delta velocidadeAngular, delta tempo) 
{
  return (velocidadeAngular.final - velocidadeAngular.inicial) / (tempo.final - tempo.inicial);
}

#endif // ACELERACAO_ANG_MCUV_MTD_MDL_HPP
