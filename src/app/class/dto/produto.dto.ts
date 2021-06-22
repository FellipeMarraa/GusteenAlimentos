import {CategoriaDTO} from "./categoria.dto";
import {Cliente} from "../cliente";

export class ProdutoDTO {

  id: string;

  nome: string;

  preco: number;

  imageUrl?: string;

  quantidade: number;

  promocao: boolean;

  desconto: number;

  // categoria: CategoriaDTO;

  idCliente: string;

}
