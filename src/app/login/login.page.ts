import {Component, Injector} from '@angular/core';
import {Cliente} from '../class/cliente';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {PositionToast, ToastUtil} from '../class/commons-class/toast.util';
import {ToastType} from '../class/commons-class/toast.type';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();

    constructor(private injector: Injector,
                private clienteService: ClienteService,
                public toastController: ToastController) {
        super(injector);
    }

  ngOnInit() {

  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

    acessar() {
        this.clienteService.logar(this.usuario).subscribe(item => {
            if (item) {
                this.navCtrl.navigateRoot('/home');
            } else {
                this.presentToast();
            }
            console.log(item);
        })

  }

    cadastrar() {
        this.navCtrl.navigateRoot('/cadastro')
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Usuário não encontrado!',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }
}
