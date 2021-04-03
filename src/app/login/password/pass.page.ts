import {Component, Injector} from '@angular/core';
import {Cliente} from '../../class/cliente';
import {BaseComponent} from '../../class/commons-class/base.component';
import {ClienteService} from '../../service/cliente.service';
import {PositionToast, ToastUtil} from '../../class/commons-class/toast.util';
import {ToastType} from '../../class/commons-class/toast.type';

@Component({
  selector: 'app-login',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage extends BaseComponent {
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
  dismiss() {
    this.navCtrl.navigateRoot('/login');
  }


}
