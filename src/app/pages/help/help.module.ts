import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HelpPage} from "./help.page";
import {ComponentsModule} from "../../commons-module/components.commons.module";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: HelpPage
  }
];

@NgModule({
  declarations: [
    HelpPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HelpPage,
  ],
})
export class HelpPageModule {
}
