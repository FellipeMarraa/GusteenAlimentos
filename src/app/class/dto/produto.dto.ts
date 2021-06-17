import {CategoriaDTO} from "./categoria.dto";

export class ProdutoDTO {

  id: string;

  nome: string;

  preco: number;

  imageUrl?: string;

  quantidade: number;

  promocao: boolean;

  desconto: number;

  categoria: CategoriaDTO;

}
