import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {Cliente} from '../class/cliente';
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from '../class/commons-class/toast.util';
import {ToastType} from '../class/commons-class/toast.type';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage extends BaseComponent {

  tipo: boolean;
  tipoConfirmaSenha: boolean;
  usuario: Cliente = new Cliente();
  confirmaSenha: any;

  constructor(private injector: Injector,
              private clienteService: ClienteService,
              public toastController: ToastController) {
    super(injector);
  }

  ngOnInit() {


  }


  dismiss() {
    this.navCtrl.navigateRoot('/login')
  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  exibirConfirmaSenha() {
    this.tipoConfirmaSenha = !this.tipoConfirmaSenha;
  }

  cadastrar() {
    if (this.validate(this.usuario)) {
      if (!(this.usuario.senha == this.confirmaSenha)) {
        ToastUtil.presentToast(this.toastCtrl, "Senhas diferentes", PositionToast.BOTTOM, ToastType.ERROR);
      }

      this.clienteService.save(this.usuario).subscribe(item => {
        if (item) {
          ToastUtil.presentToast(this.toastCtrl, "Usuário cadastrado", PositionToast.BOTTOM, ToastType.SUCCESS);
          this.navCtrl.navigateRoot('/login');
        } else {
          ToastUtil.presentToast(this.toastCtrl, "Email ja cadastrado", PositionToast.BOTTOM, ToastType.SUCCESS);
        }
      }, error => {
        ToastUtil.presentToast(this.toastCtrl, "Erro no servidor", PositionToast.BOTTOM, ToastType.ERROR);
      })
    } else {
      ToastUtil.presentToast(this.toastCtrl, "Necessário preencher todos os dados", PositionToast.BOTTOM, ToastType.ERROR);
    }
  }

  validate(usuario: Cliente) {
    let valido: boolean = true

    if (usuario.cpf == null && usuario.email == null && usuario.senha == null) {
      valido = false
    }

    return valido;
  }


  onEmailChange(email: any) {

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      ToastUtil.presentToast(this.toastCtrl, "email invalido", PositionToast.BOTTOM, ToastType.ERROR, 1000);
    }
  }
}
