import {Component, Injector} from '@angular/core';
import {Cliente} from "../class/cliente";
import {BaseComponent} from "../class/commons-class/base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  acessar() {
    this.navCtrl.navigateRoot("/home")
  }

  cadastrar() {
    this.navCtrl.navigateRoot("/cadastro")
  }
}
