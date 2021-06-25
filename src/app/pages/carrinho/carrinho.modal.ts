import {Component, Injector} from "@angular/core";
import {BaseComponent} from "../../class/commons-class/base.component";
import {AlertButtonSecondaryTypeEnum, AlertButtonTypeEnum, AlertTypeEnum} from "../../commons-module/utils/alert.util";
import {Produto} from "../../class/produto";

@Component({
  selector: 'carrinho-modal',
  templateUrl: 'carrinho.modal.html',
  styleUrls: ['./carrinho.modal.scss']
})
export class CarrinhoModal extends BaseComponent {
  listaProdutosCarrinho: Produto[] = [];


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

  removerItem(produto: Produto) {
    this.listaProdutosCarrinho.splice(this.listaProdutosCarrinho.indexOf(produto), 1)
  }

  backToHome() {
    this.navCtrl.navigateForward(`/home`);
  }

  getTotal() {
    return this.listaProdutosCarrinho.reduce((i, j) => i + (j.preco * j.desconto / 100) * j.quantidade, 0)
  }


  async limparCarrinho() {
    const alert = await this.alertCtrl.create({
      message: 'Deseja realmente limpar o carrinho?',
      cssClass: AlertTypeEnum.INFO,
      buttons: [
        {
          text: 'Não',
          cssClass: AlertButtonSecondaryTypeEnum.PRIMARY,
        }, {
          text: 'Sim',
          cssClass: AlertButtonTypeEnum.INFO,
          handler: () => {
            this.listaProdutosCarrinho = [];
          }
        }
      ]
    });

    await alert.present();
  }


  adicionaItem(produto: Produto) {
    let adicionado = false;
    for (let produtoCarrinho of this.listaProdutosCarrinho) {
      if (produtoCarrinho.id === produto.id) {
        produtoCarrinho.quantidade += 1;
        adicionado = true;
        break;
      }
    }
    if (!adicionado) {
      this.listaProdutosCarrinho.push(produto)
    }
  }

  diminuirItem(produto) {
    for (let produtoCarrinho of this.listaProdutosCarrinho) {
      if (produtoCarrinho.id === produto.id) {
        produtoCarrinho.quantidade -= 1;
        if (produtoCarrinho.quantidade == 0) {
          this.listaProdutosCarrinho.splice(this.listaProdutosCarrinho.indexOf(produto), 1)
        }
      }
    }
  }

  finaliza() {
    this.navCtrl.navigateRoot('/finaliza');
  }
}
