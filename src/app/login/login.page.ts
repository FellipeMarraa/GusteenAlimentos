import {Component, Injector} from '@angular/core';
import {Cliente} from '../class/cliente';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from '../class/commons-class/toast.util';
import {ToastType} from '../class/commons-class/toast.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();
  isloading: boolean = false;

  constructor(private injector: Injector,
              private clienteService: ClienteService) {
    super(injector);
  }

  ngOnInit() {

  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  cadastrarSe() {
    this.navCtrl.navigateRoot('/cadastro');
  }


  acessar() {
  //   this.isloading = true;
  //   this.clienteService.logar(this.usuario).subscribe(item => {
  //     if (item) {
  //       this.navCtrl.navigateRoot('/home');
  //       this.isloading = false;
  //     } else {
  //       this.isloading = false;
  //       ToastUtil.presentToast(this.toastCtrl, "Usuário não encontrado!", PositionToast.BOTTOM, ToastType.ERROR);
  //     }
  //     console.log(item);
  //   }, error => {
  //     this.isloading = false;
  //     ToastUtil.presentToast(this.toastCtrl, "Erro no servidor", PositionToast.BOTTOM, ToastType.ERROR);
  //   });
  //
    this.navCtrl.navigateRoot('/home');
  }


}
