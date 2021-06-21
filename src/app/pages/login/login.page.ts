import {BaseComponent} from "../../class/commons-class/base.component";
import {Component, Injector} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {API_CONFIG} from "../../config/api.config";
import {CredenciaisDTO} from "../../class/dto/credenciais.dto";
import {StorageService} from "../../service/storage.service";
import {Cliente} from "../../class/cliente";
import {Subscription} from "rxjs";
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent {
  tipo: boolean;
  usuario: Cliente = new Cliente();
  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  currentUserSubscription: Subscription;

  isloading: boolean = false;

  constructor(private injector: Injector,
              public auth: AuthService,
              private storageService: StorageService,
              private clienteService: ClienteService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.currentUserSubscription = this.appService.currentUser.subscribe((value) => {
      if (value) {
        console.log(value)
      }
    });

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
    this.auth.authenticate(this.usuario)
      .subscribe((response) => {
        let usuario = this.clienteService.findByCpfOuCnpj(this.usuario.username)
          this.appService.setCurrentUser(this.usuario);

          this.clienteService.list().subscribe((clientes) => {

            if(clientes){
              clientes.forEach(cliente =>{
                if (cliente.username == this.currentUser.username && cliente.senha == this.currentUser.senha){
                    this.appService.setCurrentUser(cliente);
                }
              })
            }

          })

          console.log(usuario);
          this.navCtrl.navigateRoot('/home');
        },
        error => {
        });
  }

  recoveryPassword() {
    this.navCtrl.navigateRoot('/recovery-password');
  }

}
