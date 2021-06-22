import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PerfilPage} from "./perfil.page";
import {ComponentsModule} from "../../commons-module/components.commons.module";
import {RouterModule, Routes} from "@angular/router";
import {ProdutoListPage} from "../produto/list/produto.list.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];


@NgModule({
  declarations: [
    PerfilPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PerfilPage,
  ],
})


export class PerfilPageModule {
}
