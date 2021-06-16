import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../../commons-module/components.commons.module";
import {RouterModule, Routes} from "@angular/router";
import {ProdutoPage} from "./produto.page";


const routes: Routes = [
  {
    path: '',
    component: ProdutoPage
  }
];

@NgModule({
  declarations: [
    ProdutoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ProdutoPage,
  ],
})

export class ProdutoPageModule {
}
