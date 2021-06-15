import {FormsModule} from '@angular/forms';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '../commons-module/components.commons.module';
import {CarrinhoModule} from "../carrinho/carrinho.module";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    HomePageRoutingModule,
    CarrinhoModule,
  ],
  declarations: [HomePage]
})

export class HomePageModule {
}
