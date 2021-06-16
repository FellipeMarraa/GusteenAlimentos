import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './interceptors/error-interceptor';
import {StorageService} from './service/storage.service';
import {AuthService} from './service/auth.service';
import {ClienteService} from "./service/cliente.service";
import {ImageUtilService} from "./service/image.util.service";
import {Camera} from "@ionic-native/camera/ngx";
import {CategoriaService} from "./service/categoria.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule],

  providers: [
    ErrorInterceptorProvider,
    StorageService,
    Camera,
    AuthService,
    ClienteService,
    ImageUtilService,
    CategoriaService,

    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

