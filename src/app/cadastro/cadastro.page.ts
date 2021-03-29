import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../class/commons-class/base.component";
import {Cliente} from '../class/cliente';
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from '../class/commons-class/toast.util';
import {ToastType} from '../class/commons-class/toast.type';

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
              private clienteService: ClienteService) {
    super(injector);
  }

  ngOnInit() {


  }


  dismiss() {
    this.navCtrl.navigateRoot("/login")
  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  exibirConfirmaSenha() {
    this.tipoConfirmaSenha = !this.tipoConfirmaSenha;
  }

  cadastrar() {
    if (this.usuario.cpf != null && this.usuario.email != null && this.usuario.senha != null) {
      this.clienteService.save(this.usuario).subscribe(item => {
        console.log(item);
      })
    } else {
      ToastUtil.presentToast(this.toastCtrl, "Todos os campos devem ser preenchidos ", PositionToast.BOTTOM, ToastType.INFO);
    }
  }

}
