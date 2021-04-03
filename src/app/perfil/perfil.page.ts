import {Component, Injector} from '@angular/core';
import {ClienteService} from '../service/cliente.service';
import {BaseComponent} from '../class/commons-class/base.component';
import {Cliente} from '../class/cliente';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends BaseComponent {

  expand: boolean = false;
  fontSizeHead: number = 15;
  fontSizeBody: number = 13;

  nome: string;
  email: string;
  cpf: string;
  senha: string;


  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public storage: StorageService) {
    super(injector);
  }

  ngOnInit() {

    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.email && localUser.nome && localUser.cpf && localUser.senha){
      this.email = localUser.email;
      this.nome = localUser.nome;
      this.cpf = localUser.cpf;
      this.senha = localUser.senha;
    }

  }

  // goPerfilPage() {
  //   this.navCtrl.navigateRoot("/perfil")
  // }

  chamarCliente(){
    this.clienteService.list().subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
