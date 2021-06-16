import {BaseComponent} from "../../class/commons-class/base.component";
import {Component, Injector} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {API_CONFIG} from "../../config/api.config";
import {CredenciaisDTO} from "../../class/dto/credenciais.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  creds: CredenciaisDTO = {
    "cpfOuCnpj": "",
    "senha": ""
  };
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  isloading: boolean = false;

  constructor(private injector: Injector,
              public auth: AuthService
  ) {
    super(injector);
  }

  ngOnInit() {

    this.auth.refreshToken()
      .subscribe(response => {
          this.auth.successfulLogin(response.headers.get('Authorization'));
          this.navCtrl.navigateRoot('/home');
        },
        error => {
        });
  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }

  cadastrarSe() {
    this.navCtrl.navigateRoot('/cadastro');
  }

  acessar() {
    this.navCtrl.navigateRoot('/home');
    // this.auth.authenticate(this.creds)
    //   .subscribe(response => {
    //       this.auth.successfulLogin(response.headers.get('Authorization'));
    //       this.navCtrl.navigateRoot('/home');
    //     },
    //     error => {});
  }

  recoveryPassword() {
    this.navCtrl.navigateRoot('/recovery-password');
  }

}
