import {Component, Injector} from '@angular/core';
import {Cliente} from '../class/cliente';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from '../class/commons-class/toast.util';
import {ToastType} from '../class/commons-class/toast.type';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();
  isloading: boolean = false;

  constructor(private injector: Injector,
              private clienteService: ClienteService,
              private authService: AuthService) {
    super(injector);
  }

  ngOnInit() {
  }

}
