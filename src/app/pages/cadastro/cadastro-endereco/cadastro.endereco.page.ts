import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../../../class/commons-class/base.component';
import {Cliente} from '../../../class/cliente';
import {ClienteService} from '../../../service/cliente.service';
import {PositionToast, ToastUtil} from '../../../class/commons-class/toast.util';
import {ToastType} from '../../../class/commons-class/toast.type';
import {Endereco} from '../../../class/endereco';
import {AuthService} from '../../../service/auth.service';


@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro.endereco.page.html',
  styleUrls: ['./cadastro.endereco.page.scss'],
})

export class CadastroEnderecoPage extends BaseComponent {
  usuario: Cliente = new Cliente();
  endereco: Endereco = new Endereco();
  cep: boolean = true;
  buscaCep: any = this.authService.buscaCep(this.endereco.cep);


  constructor(private injector: Injector,
              private clienteService: ClienteService,
              private authService: AuthService ) {
    super(injector);
  }

  ngOnInit() {
    this.endereco.cep = "38414-536";
    let busca = this.authService.buscaCep(this.endereco.cep);
    console.log(busca);
    console.log(this.clienteService.list());
  }


  dismiss() {
    this.navCtrl.navigateRoot('/cadastro')
  }


  cadastrar() {
    if (this.validate(this.endereco)) {

      this.clienteService.save(this.usuario).subscribe(item => {
        if (item) {
          ToastUtil.presentToast(this.toastCtrl, "Usuário cadastrado", PositionToast.BOTTOM, ToastType.SUCCESS);
          this.navCtrl.navigateRoot('/login');
        } else {
          ToastUtil.presentToast(this.toastCtrl, "Email ja cadastrado", PositionToast.BOTTOM, ToastType.SUCCESS);
        }
      }, error => {
        ToastUtil.presentToast(this.toastCtrl, "Erro no servidor", PositionToast.BOTTOM, ToastType.ERROR);
      });
    } else {
      ToastUtil.presentToast(this.toastCtrl, "Necessário preencher todos os dados", PositionToast.BOTTOM, ToastType.ERROR);
    }
  }

  validate(endereco:Endereco) {
    let valido: boolean = true

    if (endereco.cep == null || endereco.bairro == null || endereco.complemento == null || endereco.cidade ==null || endereco.logradouro == null || endereco.numero == null) {
      valido = false
    }

    return valido;
  }

  focusout(event: FocusEvent) {
    if (!(this.endereco.cep)) {
      this.cep = false;
    }
  }

  // focusoutEmail(event: FocusEvent) {
  //   this.validaCep(this.endereco.cep)
  // }

  // private validaCep(cep: any) {
  //   if (this.endereco.cep == null){
  //     this.cep = true;
  //   }
  // }

  // buscaCep(cep:any){
  //   cep = this.endereco.cep;
  //   this.authService.buscaCep(cep);
  //   console.log(cep);
  // }

}
