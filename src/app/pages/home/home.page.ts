import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../../class/commons-class/base.component';
import {ClienteService} from '../../service/cliente.service';
import {BancoService} from '../../service/banco.service';
import {AuthService} from '../../service/auth.service';
import {ProdutoDTO} from "../../class/dto/produto.dto";
import {CategoriaDTO} from "../../class/dto/categoria.dto";
import {NavigationExtras} from "@angular/router";
import {PositionToast, ToastUtil} from "../../class/commons-class/toast.util";
import {ToastType} from "../../class/commons-class/toast.type";
import {ProdutoService} from "../../service/produto.service";
import {Cliente} from "../../class/cliente";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {
  listaCategorias: CategoriaDTO[] = [];
  clientes: Cliente[] = [];
  listaProdutos: ProdutoDTO[] = [];
  listaProdutosCarrinho: ProdutoDTO[] = [];

  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public bancoService: BancoService,
              public authService: AuthService,
              private produtoService: ProdutoService) {
    super(injector);
  }

  ngOnInit() {
    this.carregaListaProdutos();
    // this.carregaListaCategorias();

  }

  carregaListaProdutos() {

    console.log("home page")
    console.log(this.currentUser)

    this.produtoService.findAll().subscribe(prod => {
      this.listaProdutos = prod;
      console.log(this.listaProdutos);
    })
  }


  carregaListaCategorias() {
    this.listaCategorias = [];
    let produto1: CategoriaDTO = new CategoriaDTO()
    produto1.nome = "graaos";

    let produto2: CategoriaDTO = new CategoriaDTO()
    produto2.nome = "Promoções";

    this.listaCategorias.push(produto1, produto2)
  }


  async openCar() {
    console.log(this.listaProdutosCarrinho);
    const navigationExtra: NavigationExtras = {
      state: {listaProdutosCarrinho: this.listaProdutosCarrinho}
    };
    this.navCtrl.navigateForward(`/carrinho`, navigationExtra);
  }

  addToCart(produto: ProdutoDTO) {
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
    ToastUtil.presentToast(this.toastCtrl, "Item Adicionado" + " - " + produto.nome, PositionToast.BOTTOM, ToastType.SUCCESS, 500);
  }


}
