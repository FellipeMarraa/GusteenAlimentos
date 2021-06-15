import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../class/commons-class/base.component";
import {ProdutoDTO} from "../class/dto/produto.dto";

@Component({
  selector: 'carrinho-modal',
  templateUrl: 'carrinho.modal.html',
  styleUrls: ['./carrinho.modal.scss']
})
export class CarrinhoModal extends BaseComponent {
  listaProdutosCarrinho: ProdutoDTO[] = [];


  constructor(private injector: Injector) {
    super(injector);
    this.listaProdutosCarrinho = [];

  }

  init() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let returnedObject = this.router.getCurrentNavigation().extras.state;
      if(returnedObject){
        this.listaProdutosCarrinho = returnedObject.listaProdutosCarrinho;
      }
    });
  }


  backToHome() {
    this.navCtrl.navigateForward(`/home`);
  }

  limparCarrinho() {
    this.listaProdutosCarrinho = [];
  }
}
