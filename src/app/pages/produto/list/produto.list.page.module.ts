import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ProdutoListPage} from "./produto.list.page";
import {ComponentsModule} from "../../../commons-module/components.commons.module";


const routes: Routes = [
  {
    path: '',
    component: ProdutoListPage
  }
];

@NgModule({
  declarations: [
    ProdutoListPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ProdutoListPage,
  ],
})

export class ProdutoListPageModule {
}
