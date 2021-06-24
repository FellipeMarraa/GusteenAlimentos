import {Cliente} from "./cliente";
import {Cidade} from "./cidade";

export class Endereco {

  id: number;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;

  cliente: Cliente;

  cidade: Cidade;

}
