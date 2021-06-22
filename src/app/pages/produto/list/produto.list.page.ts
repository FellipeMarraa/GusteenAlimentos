import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../../class/commons-class/base.component";
import {ProdutoService} from "../../../service/produto.service";
import {ProdutoDTO} from "../../../class/dto/produto.dto";

@Component({
  selector: 'produto-list-page',
  templateUrl: 'produto.list.page.html',
  styleUrls: ['./produto.list.page.scss']
})
export class ProdutoListPage extends BaseComponent {
  listaProdutos: ProdutoDTO[] = [];


  constructor(private injector: Injector,
              private produtoService: ProdutoService) {
    super(injector);

  }

  init() {
    this.carregaProdutos();
  }


  new() {
    this.navCtrl.navigateForward(`/produto/edit/`);
  }

  carregaProdutos() {
    this.produtoService.findAll().subscribe((item) => {


      this.listaProdutos = item
    })
  }
}
