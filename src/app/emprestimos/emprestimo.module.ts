import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '../commons-module/components.commons.module';
import {EmprestimoPageRoutingModule} from "./emprestimo-routing.module";
import {EmprestimoPage} from "./emprestimo.page";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    EmprestimoPageRoutingModule
  ],
  declarations: [EmprestimoPage]
})

export class EmprestimoPageModule {
}
