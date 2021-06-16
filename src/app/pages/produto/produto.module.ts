import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {Produto} from "../../class/dto/produto.dto";
import {CategoriaDTO} from "../../class/dto/categoria.dto";
import {CategoriaService} from "../../service/categoria.service";

@Component({
  selector: 'produto-page',
  templateUrl: 'produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoModule extends BaseComponent {

  produto: Produto = new Produto();
  categorias: CategoriaDTO[] = [];

  constructor(private injector: Injector,
              private categoriaService: CategoriaService) {
    super(injector);

  }

  init() {

    this.categoriaService.findAll().subscribe(cat => {
      this.categorias = cat;
    })


  }

  cadastrar() {
    console.log(this.produto)
  }
}
