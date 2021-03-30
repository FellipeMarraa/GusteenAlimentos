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
      this.clienteService.save(this.usuario).subscribe(item => {

        //Se retorna o item é por que salvou se nao deu erro em algum canto

        console.log(item);
      })
      ToastUtil.presentToast(this.toastCtrl, "Usuário cadastrado", PositionToast.BOTTOM, ToastType.SUCCESS);
      this.navCtrl.navigateRoot('/login');
    } else {
      ToastUtil.presentToast(this.toastCtrl, "Necessário preencher todos os dados", PositionToast.BOTTOM, ToastType.INFO);
    }
  }

  validate(usuario: Cliente) {
    let valido: boolean = true

    if (usuario.cpf != null && usuario.email != null && usuario.senha != null) {
      valido = false
    }

    return valido;
  }


}
