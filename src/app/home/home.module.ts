import {FormsModule} from '@angular/forms';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '../commons-module/components.commons.module';
import {CartModalModule} from "./modal/cart-modal/cart.modal.module";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    HomePageRoutingModule,
    CartModalModule,
  ],
  declarations: [HomePage]
})

export class HomePageModule {
}
