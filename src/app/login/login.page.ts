import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {AuthService} from '../service/auth.service';
import {CredenciaisDTO} from '../class/dto/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;

  usuario: CredenciaisDTO = {
    cpf: "",
    senha: ""
  };

  isloading: boolean = false;

  constructor(private injector: Injector,
              private clienteService: ClienteService,
              public authService: AuthService ) {
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

  passwordRe() {
    this.navCtrl.navigateRoot('/password');
  }

  acessar() {
    this.navCtrl.navigateRoot('/home');

    // this.authService.authenticate(this.usuario)
    //   .subscribe(response => {
    //       console.log(response.headers.get('Authorization'));
    //       this.navCtrl.navigateRoot('/home');
    //     },
    //     error => {
    //     });
    // this.isloading = true;
    // this.clienteService.logar(this.usuario).subscribe(item => {
    //   if (item) {
    //     this.clienteService.succefullLogin(item);
    //     this.navCtrl.navigateRoot('/home');
    //     this.isloading = false;
    //   } else {
    //     this.isloading = false;
    //     ToastUtil.presentToast(this.toastCtrl, "Usuário não encontrado!", PositionToast.BOTTOM, ToastType.ERROR);
    //   }
    //   console.log(item);
    // }, error => {
    //   this.isloading = false;
    //   ToastUtil.presentToast(this.toastCtrl, "Erro no servidor", PositionToast.BOTTOM, ToastType.ERROR);
    // });

    //   this.navCtrl.navigateRoot('/home');
  }


}
