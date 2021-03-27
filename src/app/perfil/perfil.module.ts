import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PerfilPage} from "./perfil.page";
import {PerfilPageRoutingModule} from "./perfil.routing.module";
import {ComponentsModule} from "../commons-module/components.commons.module";


@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    PerfilPageRoutingModule
  ],
  declarations: [PerfilPage]
})

export class PerfilPageModule {
}
