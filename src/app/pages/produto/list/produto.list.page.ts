import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../../../class/commons-class/base.component';
import {ProdutoService} from '../../../service/produto.service';
import {ProdutoDTO} from '../../../class/dto/produto.dto';
import {NavigationExtras} from '@angular/router';
import {Produto} from '../../../class/produto';
import {Cliente} from '../../../class/cliente';

@Component({
  selector: 'produto-list-page',
  templateUrl: 'produto.list.page.html',
  styleUrls: ['./produto.list.page.scss']
})
export class ProdutoListPage extends BaseComponent {
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
    this.activatedRoute.queryParams.subscribe((params) => {
      let returnedObject = this.router.getCurrentNavigation().extras.state;
      if (returnedObject) {
        this.cliente = returnedObject.cliente;
        console.log(this.cliente);
      }
    });
  }

  new() {
    this.navCtrl.navigateForward(`/produto/edit/`);
  }

  carregaProdutos() {
    this.produtoService.findAll().subscribe((produtosDB) => {
      this.listaProdutos = produtosDB.filter(item => item.idCliente == this.cliente.id);
    });
  }

  edit(produto: ProdutoDTO) {
    const navigationExtra: NavigationExtras = {
      state: {produto: produto}
    };
    this.navCtrl.navigateForward(`/produto/edit/`, navigationExtra);

  }

  removeProduto(produto: Produto) {

  }

}
