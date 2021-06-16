import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../../commons-module/components.commons.module";
import {RouterModule, Routes} from "@angular/router";
import {ProdutoModule} from "./produto.module";


const routes: Routes = [
  {
    path: '',
    component: ProdutoModule
  }
];

@NgModule({
  declarations: [
    ProdutoModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ProdutoModule,
  ],
})

export class ProdutoPageModule {
}
