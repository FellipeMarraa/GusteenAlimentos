import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PassPageRoutingModule} from './pass.routing.module';
import {PassPage} from './pass.page';
import {ComponentsModule} from "../../commons-module/components.commons.module";

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    PassPageRoutingModule
  ],
  declarations: [PassPage]
})
export class PassPageModule {
}
