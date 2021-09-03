import {Categoria} from "./categoria";

export class Produto {

  id: string;

  nome: string;

  preco: number;

  quantidade: number;

  promocao: boolean;

  desconto: number;

  categoria: Categoria;

  idCliente: string;

  imageUrl: string;

}
