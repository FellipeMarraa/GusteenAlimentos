import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../class/commons-class/base.component";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage extends BaseComponent {

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }


  dismiss() {
    this.navCtrl.navigateRoot("/login")
  }
}
