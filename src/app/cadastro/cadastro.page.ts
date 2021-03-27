import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../class/commons-class/base.component";
import {Cliente} from '../class/cliente';
import {ClienteService} from '../service/cliente.service';

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

  exibirConfirmaSenha(){
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
    this.navCtrl.navigateRoot("/login");
  }

  cadastrar(){
    this.clienteService.list().subscribe(response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
