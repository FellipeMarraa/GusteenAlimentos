import {Component, Injector} from '@angular/core';
import {Cliente} from "../class/cliente";
import {BaseComponent} from "../class/commons-class/base.component";
import {ClienteService} from '../service/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();

  constructor(private injector: Injector,
              private clienteService: ClienteService) {
    super(injector);
  }

  ngOnInit() {

  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  acessar() {
    this.clienteService.logar(this.usuario).subscribe(item => {
      console.log(item);
    })
  }

  cadastrar() {
    this.navCtrl.navigateRoot("/cadastro")
  }
}
