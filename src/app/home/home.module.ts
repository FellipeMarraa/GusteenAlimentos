import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HomePageRoutingModule} from "./home.routing.module";
import {HomePage} from "./home.page";
import {ComponentsModule} from "../commons-module/components.commons.module";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule {
}
