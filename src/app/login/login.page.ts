import {Component, Injector} from '@angular/core';
import {Cliente} from "../class/cliente";
import {BaseComponent} from "../class/commons-class/base.component";
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from "../class/commons-class/toast.util";
import {ToastType} from "../class/commons-class/toast.type";

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
    ToastUtil.presentToast(this.toastCtrl, "Usuario não permitido. ", PositionToast.BOTTOM, ToastType.INFO);


    // this.clienteService.logar(this.usuario).subscribe(item => {
    //   console.log(item);
    // })

  }

  cadastrar() {
    this.navCtrl.navigateRoot("/cadastro")
  }
}
