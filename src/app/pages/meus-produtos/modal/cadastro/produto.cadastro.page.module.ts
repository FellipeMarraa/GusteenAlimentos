import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../../../../commons-module/components.commons.module';
import {ProdutoCadastroModalPage} from './produto.cadastro.page';


@NgModule({
  entryComponents: [ProdutoCadastroModalPage],
  declarations: [
    ProdutoCadastroModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    ProdutoCadastroModalPage,
  ],
})

export class ProdutoCadastroModalModule {
}
