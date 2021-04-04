import {Component, Injector} from '@angular/core';
import {BaseComponent} from '../class/commons-class/base.component';
import {HttpClient} from "@angular/common/http";
import {Banco} from "../class/banco";

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.page.html',
  styleUrls: ['./emprestimo.page.scss'],
})
export class EmprestimoPage extends BaseComponent {


  constructor(private injector: Injector, private http: HttpClient) {
    super(injector);
  }

  ngOnInit() {
    this.carregaDados();
  }

  private carregaDados() {
    this.http.get("https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-accounts").subscribe((item) => {
      console.log(item)
    });
  }
}
