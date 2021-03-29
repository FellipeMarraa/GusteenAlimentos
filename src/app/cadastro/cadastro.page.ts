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

    fazerLogin() {
        //TODO ir no cliente.service.ts metodo logar(this.usuario) que vai me retorna um usuario
        //Caso o usuario seja retornado deixa seqguir para a tela /home , se nao retornar exibir erro na tela

        //   this.authService.login(this.usuarioAuth).then((usuario) => {
        //       if (usuario != null) {
        //         this.appService.setCurrentUser(usuario);
        //         this.lastUserAuth(usuario);
        //         this.navCtrl.navigateRoot("/home")
        //       }
        //       LoadingUtil.dismiss();
        //     },
        //     error => {
        //       LoadingUtil.dismiss();
        //       AlertUtil.showError(this.alertCtrl, error.message);
        //     });
        // } else {
        // LoadingUtil.dismiss();
        // AlertUtil.showError(this.alertCtrl, "Não foi possível conectar-se ao servidor. Por favor, verifique sua conexão.");
        this.navCtrl.navigateRoot('/login');
    }

    cadastrar() {
        if (this.usuario.cpf != null && this.usuario.email != null && this.usuario.senha != null) {
            this.clienteService.save(this.usuario).subscribe(item => {
                console.log(item);
            })
            this.presentToastClean();
            this.navCtrl.navigateRoot('/login');
        } else {

            this.presentToastDanger();

            // ToastUtil.presentToast(this.toastCtrl, "Todos os campos devem ser preenchidos ", PositionToast.BOTTOM, ToastType.INFO);
        }
    }

    async presentToastDanger() {
        const toast = await this.toastController.create({
            message: 'Necessário preencher todos os dados!',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }

    async presentToastClean() {
        const toast = await this.toastController.create({
            message: 'Usuário cadastrado',
            duration: 2000,
            color: 'light',
            position: 'top',
        });
        toast.present();
    }

}
