import {BaseComponent} from "../../class/commons-class/base.component";
import {Component, Injector} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {API_CONFIG} from "../../config/api.config";
import {CredenciaisDTO} from "../../class/dto/credenciais.dto";
import {StorageService} from "../../service/storage.service";
import {Cliente} from "../../class/cliente";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuarioLogin: CredenciaisDTO = new CredenciaisDTO();
  usuario: Cliente = new Cliente();
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  isloading: boolean = false;

  constructor(private injector: Injector,
              public auth: AuthService,
              private storageService: StorageService,
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

    // this.navCtrl.navigateRoot('/home');
    this.auth.authenticate(this.usuarioLogin)
      .subscribe(response => {
          // this.auth.successfulLogin(response.headers.get('Authorization'));
          this.navCtrl.navigateRoot('/home');
        },
        error => {
        });
  }

  recoveryPassword() {
    this.navCtrl.navigateRoot('/recovery-password');
  }

}
