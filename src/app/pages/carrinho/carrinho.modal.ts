import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {ProdutoDTO} from "../../class/dto/produto.dto";

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
      if (returnedObject) {
        this.listaProdutosCarrinho = returnedObject.listaProdutosCarrinho;
      }
    });
  }

  removerItem(produto: ProdutoDTO) {
    this.listaProdutosCarrinho.splice(this.listaProdutosCarrinho.indexOf(produto), 1)
  }

  backToHome() {
    this.navCtrl.navigateForward(`/home`);
  }

  getTotal() {
    return this.listaProdutosCarrinho.reduce((i, j) => i + (j.preco * j.desconto / 100) * j.quantidade, 0)
  }

  limparCarrinho() {
    this.listaProdutosCarrinho = [];
  }

  adicionaItem(produto: ProdutoDTO) {
    let adicionado = false;
    for (let p of this.listaProdutosCarrinho) {
      if (p.id === produto.id) {
        p.quantidade += 1;
        adicionado = true;
        break;
      }
    }
    if (!adicionado) {
      this.listaProdutosCarrinho.push(produto)
    }
  }

  diminuirItem(produto) {
    for (let p of this.listaProdutosCarrinho) {
      if (p.id === produto.id) {
        p.quantidade -= 1;
        if (p.quantidade == 0) {
          this.listaProdutosCarrinho.splice(this.listaProdutosCarrinho.indexOf(produto), 1)
        }
      }
    }
  }

  finaliza() {
      this.navCtrl.navigateRoot('/finaliza');
  }
}
