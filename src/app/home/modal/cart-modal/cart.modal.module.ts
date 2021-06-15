import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CartModal} from "./cart.modal";
import {ComponentsModule} from "../../../commons-module/components.commons.module";

@NgModule({
  entryComponents: [CartModal],

  declarations: [
    CartModal
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonicModule.forRoot()
  ],
  exports: [
    CartModal,
  ],
})

export class CartModalModule {
}
