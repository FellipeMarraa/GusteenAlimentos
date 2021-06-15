import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {BancoService} from '../service/banco.service';
import {AuthService} from '../service/auth.service';
import {ProdutoDTO} from "../class/dto/produto.dto";
import {CartModal} from "./modal/cart-modal/cart.modal";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {


  lisataProdutos: ProdutoDTO[] = [];
  listaProdutosCarrinho: ProdutoDTO[] = [];

  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public bancoService: BancoService,
              public authService: AuthService) {
    super(injector);
  }

  ngOnInit() {
    this.listaProdutosCarrinho = [];
    let produto1: ProdutoDTO = new ProdutoDTO()
    produto1.nome = "Arroz";
    produto1.preco = 40;

    let produto2: ProdutoDTO = new ProdutoDTO()
    produto2.nome = "Feijão";
    produto2.preco = 50;

    let produto3: ProdutoDTO = new ProdutoDTO()
    produto3.nome = "cenoura";
    produto3.preco = 60;

    let produto4: ProdutoDTO = new ProdutoDTO()
    produto4.nome = "beterraba";
    produto4.preco = 70;

    this.lisataProdutos.push(produto1, produto2, produto3, produto4)
  }


  async openCar() {
    let modal = await this.modalCtrl.create({
      component: CartModal,
    })
    modal.present()
    //open modal carrinho;


  }

  addToCart(produto: ProdutoDTO) {
    this.listaProdutosCarrinho.push(produto);
  }


}
