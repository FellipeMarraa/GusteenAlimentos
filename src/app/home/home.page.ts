import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {ClienteService} from '../service/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent {

  expand: boolean = false;
  fontSizeHead: number = 15;
  fontSizeBody: number = 13;



  constructor(private injector: Injector,
              public clienteService: ClienteService) {
    super(injector);
  }

  ngOnInit() {

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
