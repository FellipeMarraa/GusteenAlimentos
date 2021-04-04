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

  usuario: Cliente = new Cliente();
  visibleCheckButton: boolean = false;
  dadosReadOnly: boolean = true;

  expand: boolean = false;
  fontSizeHead: number = 15;
  fontSizeBody: number = 13;


  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public storage: StorageService) {
    super(injector);
  }

  ngOnInit() {
    this.usuario.nome = "teste123"
    this.usuario.email = "teste123"
    this.usuario.cpf = "109.522.286-45"
    this.usuario.senha = "teste123"

    const localUser = this.storage.getLocalUser();
    // if (localUser && localUser.email && localUser.nome && localUser.cpf && localUser.senha) {
    //   this.email = localUser.email;
    //   this.nome = localUser.nome;
    //   this.cpf = localUser.cpf;
    //   this.senha = localUser.senha;
    // }
  }

  saveUpdate(event: MouseEvent) {
    this.visibleCheckButton = false;
    this.dadosReadOnly = true;

    //AKI FAZ O EVENTO DE UPDATE DOS DADOS DO USUARIO
    this.clienteService.update(this.usuario).subscribe(usuarioAtualizado => {
      if (usuarioAtualizado) {
        console.log('usuario atualizado com sucesso');
      } else {
        console.log('ERRO')
      }
    })
  }

  upadeteStart(event: MouseEvent) {
    this.visibleCheckButton = true;
    this.dadosReadOnly = false;
  }


}
