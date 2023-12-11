#ifndef ACELERACAO_CENTRIP_MCU_MTD_MDL_HPP
#define ACELERACAO_CENTRIP_MCU_MTD_MDL_HPP

float $Aceleracao_centripeta_mcu(float velocidade, float raio) 
{ 
  return (velocidade * velocidade) / raio;
}

#endif // ACELERACAO_CENTRIP_MCU_MTD_MDL_HPP
