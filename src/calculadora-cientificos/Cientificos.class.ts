import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cologaritmos } from "./Cologaritmos.class";
import { Essenciais } from "./Essenciais.class";
import { Exponenciais } from "./Exponenciais.class";
import { Logaritmos } from "./Logaritmos.class";
import { Trigonometricos } from "./Trigonometricos.class";

interface IFLogaritmos
{
  "@logarítmos": Antilogaritmos & Cologaritmos
}

interface IFInversas
{
  "@inversas": ArcosTrigonometricos & Trigonometricos
}

interface IFExponenciais
{
  "@exponenciais": Exponenciais
}

interface IFEssenciais
{
  "@essenciais": Essenciais
}

export class Cientificos implements IFLogaritmos, IFInversas, IFExponenciais, IFLogaritmos, IFEssenciais 
{
  "@inversas": ArcosTrigonometricos & Trigonometricos;
  "@logarítmos": Antilogaritmos & Cologaritmos;
  "@exponenciais": Exponenciais;
  "@essenciais": Essenciais;
} 
