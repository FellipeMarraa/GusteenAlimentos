import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {BancoService} from '../service/banco.service';
import {AuthService} from '../service/auth.service';
import {ProdutoDTO} from "../class/dto/produto.dto";
import {CategoriaDTO} from "../class/dto/categoria.dto";
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {
  listaCategorias: CategoriaDTO[] = [];

  lisataProdutos: ProdutoDTO[] = [];
  listaProdutosCarrinho: ProdutoDTO[] = [];

  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public bancoService: BancoService,
              public authService: AuthService) {
    super(injector);
  }

  ngOnInit() {
    this.carregaListaProdutos();
    this.carregaListaCategorias();
  }

  carregaListaCategorias() {
    this.listaCategorias = [];
    let produto1: CategoriaDTO = new CategoriaDTO()
    produto1.nome = "graaos";

    let produto2: CategoriaDTO = new CategoriaDTO()
    produto2.nome = "Promoções";

    this.listaCategorias.push(produto1, produto2)
  }

  carregaListaProdutos() {
    this.listaProdutosCarrinho = [];
    let produto1: ProdutoDTO = new ProdutoDTO()
    produto1.id = "1";
    produto1.nome = "Arroz";
    produto1.preco = 40;
    produto1.quantidade = 1;
    produto1.imageUrl = "https://img.cybercook.com.br/receitas/842/como-fazer-arroz-branco-1-840x480.jpeg?q=75";

    let produto2: ProdutoDTO = new ProdutoDTO()
    produto2.id = "2";
    produto2.nome = "Feijão";
    produto2.preco = 50;
    produto2.quantidade = 1;
    produto2.imageUrl = "https://img.cybercook.com.br/receitas/972/feijao-3-840x480.jpeg?q=75";

    let produto3: ProdutoDTO = new ProdutoDTO()
    produto3.id = "3";
    produto3.nome = "cenoura";
    produto3.preco = 60;
    produto3.quantidade = 1;
    produto3.imageUrl = "https://saborizatti.com.br/wp-content/uploads/2020/12/Cenoura-saborizatti.png";

    let produto4: ProdutoDTO = new ProdutoDTO()
    produto4.id = "4";
    produto4.nome = "beterraba";
    produto4.preco = 70;
    produto4.quantidade = 1;
    produto4.imageUrl = "https://img.cybercook.com.br/receitas/842/como-fazer-arroz-branco-1-840x480.jpeg?q=75";

    this.lisataProdutos.push(produto1, produto2, produto3, produto4)
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
  }


}
