import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginPageRoutingModule} from './login.routing.module';
import {LoginPage} from './login.page';
import {ComponentsModule} from "../commons-module/components.commons.module";

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
}
