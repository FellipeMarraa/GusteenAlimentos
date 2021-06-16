import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {Produto} from "../../class/dto/produto.dto";

@Component({
  selector: 'produto-page',
  templateUrl: 'produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoModule extends BaseComponent {

  produto: Produto = new Produto();

  constructor(private injector: Injector) {
    super(injector);

  }

  init() {
  }

}
