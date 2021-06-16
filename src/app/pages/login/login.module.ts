import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginPageRoutingModule} from './login.routing.module';
import {LoginPage} from './login.page';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})

export class LoginPageModule {
}
