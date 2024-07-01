import { Complexos } from "./Complexos.class";
import { Conversores } from "./Conversores.class";
import { Geometricos } from "./Geometricos.class";

interface IFGeometricos
{
  "@geometricos": Geometricos
}

interface IFConversores
{
  "@conversores": Conversores
}

interface IFComplexos
{
  "@complexos": Complexos
}

export class Supremos implements IFGeometricos, IFConversores, IFComplexos 
{
  "@complexos": Complexos;
  "@conversores": Conversores;
  "@geometricos": Geometricos;
}
