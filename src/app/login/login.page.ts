import {Component, Injector} from '@angular/core';
import {Cliente} from "../class/cliente";
import {BaseComponent} from "../class/commons-class/base.component";
import {ClienteService} from "../service/cliente.service";

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

    this.navCtrl.navigateRoot("/cadastro")
  }
}
