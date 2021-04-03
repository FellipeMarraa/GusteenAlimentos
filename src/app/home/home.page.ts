import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';
import {BancoService} from '../service/banco.service';
import {Banco} from '../class/banco';
import {CredenciaisDTO} from '../class/dto/credenciais.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {

  expand: boolean = false;
  fontSizeHead: number = 15;
  fontSizeBody: number = 13;
  items: Banco[];



  constructor(private injector: Injector,
              public clienteService: ClienteService,
              public bancoService: BancoService) {
    super(injector);
  }

  ngOnInit() {
    this.bancoService.list().subscribe(response => {
        this.items = response;
      },
      error => {}
      );

  }

  goPerfilPage() {
    this.navCtrl.navigateRoot("/perfil")
  }

  chamarCliente(){
    this.clienteService.list().subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
