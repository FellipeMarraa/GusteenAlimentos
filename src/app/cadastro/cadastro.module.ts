import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CadastroPageRoutingModule} from './cadastro.routing.module';
import {CadastroPage} from './cadastro.page';
import {ComponentsModule} from "../commons-module/components.commons.module";

@NgModule({
  imports: [
    FormsModule,
    ComponentsModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {
}
