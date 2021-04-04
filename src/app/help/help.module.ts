import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HelpPage} from "./help.page";
import {HelpPageRoutingModule} from "./help.routing.module";
import {ComponentsModule} from "../commons-module/components.commons.module";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    HelpPageRoutingModule
  ],
  declarations: [HelpPage]
})

export class HelpPageModule {
}
