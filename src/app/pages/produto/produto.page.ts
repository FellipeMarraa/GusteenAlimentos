import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {ProdutoDTO} from "../../class/dto/produto.dto";
import {CategoriaDTO} from "../../class/dto/categoria.dto";
import {CategoriaService} from "../../service/categoria.service";
import {ProdutoService} from "../../service/produto.service";

@Component({
  selector: 'produto-page',
  templateUrl: 'produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoPage extends BaseComponent {

  produto: ProdutoDTO = new ProdutoDTO();
  categorias: CategoriaDTO[] = [];

  constructor(private injector: Injector,
              private categoriaService: CategoriaService,
              private produtoService: ProdutoService) {
    super(injector);

  }

  init() {
    this.categoriaService.findAll().subscribe(cat => {
      this.categorias = cat;
      console.log(this.categorias);
    })


  }

  cadastrar() {

    this.produtoService.save(this.produto).subscribe(prod => {
      this.produto = prod;
      console.log(this.produto)
    })
  }
}
