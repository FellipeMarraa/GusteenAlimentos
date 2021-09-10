import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../../../class/commons-class/base.component';
import {ProdutoService} from '../../../service/produto.service';
import {ProdutoDTO} from '../../../class/dto/produto.dto';
import {NavigationExtras} from '@angular/router';
import {Produto} from '../../../class/produto';
import {Cliente} from '../../../class/cliente';

@Component({
  selector: 'produto-view-page',
  templateUrl: 'produto.view.page.html',
  styleUrls: ['./produto.view.page.scss']
})
export class ProdutoViewPage extends BaseComponent {
  cliente: Cliente;

  listaProdutos: Produto[] = [];


  constructor(private injector: Injector,
              private produtoService: ProdutoService) {
    super(injector);
    this.pegarCliente();
  }

  init() {
    this.ionViewWillEnter();
  }


  ionViewWillEnter() {
    this.carregaProdutos();
  }

  private pegarCliente() {
    this.activatedRoute.queryParams.subscribe(params => {
      let returnedObject = this.router.getCurrentNavigation().extras.state;
      if (returnedObject) {
        this.cliente = returnedObject.cliente;
      }
    });
  }

  new() {
    this.navCtrl.navigateForward(`/produto/edit/`);
  }

  carregaProdutos() {
    this.listaProdutos = [];
    this.produtoService.findAll().subscribe((produtosDB) => {
      this.listaProdutos = produtosDB.filter(item => item.idCliente == this.cliente.id);
    });
  }


  backHome() {
    this.navCtrl.navigateForward(`/home`);
  }

  editProduto(produto: Produto) {
    const navigationExtra: NavigationExtras = {
      state: {produto: produto}
    };
    this.navCtrl.navigateForward(`/meus-produtos/cadastro`, navigationExtra);

  }

  newProdut() {
    this.navCtrl.navigateForward(`/meus-produtos/cadastro`);
  }
}
