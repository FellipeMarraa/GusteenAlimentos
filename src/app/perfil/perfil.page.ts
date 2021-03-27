import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../class/commons-class/base.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends BaseComponent {

  constructor(private injector: Injector,) {
    super(injector);
  }

  ngOnInit() {

  }

  goHomePage() {
    this.navCtrl.navigateRoot("/home")
  }
}
