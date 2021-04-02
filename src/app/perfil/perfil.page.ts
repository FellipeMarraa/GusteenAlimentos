import {Component, Injector} from '@angular/core';
import {ClienteService} from '../service/cliente.service';
import {BaseComponent} from '../class/commons-class/base.component';
import {Cliente} from '../class/cliente';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends BaseComponent {

  expand: boolean = false;
  fontSizeHead: number = 15;
  fontSizeBody: number = 13;
  usuario: Cliente = new Cliente();


  constructor(private injector: Injector,
              public clienteService: ClienteService) {
    super(injector);
  }

  ngOnInit() {

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
