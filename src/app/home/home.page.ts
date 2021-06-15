import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {BancoService} from '../service/banco.service';
import {AuthService} from '../service/auth.service';
import {ProdutoDTO} from "../class/dto/produto.dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {


  lisataProdutos: ProdutoDTO[] = [];


  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public bancoService: BancoService,
              public authService: AuthService) {
    super(injector);
  }

  ngOnInit() {
    let produto1: ProdutoDTO = new ProdutoDTO()
    produto1.nome = "aa";
    produto1.preco = 40;

    let produto2: ProdutoDTO = new ProdutoDTO()
    produto2.nome = "bb";
    produto2.preco = 50;
    let produto3: ProdutoDTO = new ProdutoDTO()
    produto3.nome = "cc";
    produto3.preco = 60;
    let produto4: ProdutoDTO = new ProdutoDTO()
    produto4.nome = "dd";
    produto4.preco = 70;

    this.lisataProdutos.push(produto1, produto2, produto3, produto4)
  }


}
