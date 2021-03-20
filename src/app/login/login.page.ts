import {Component, OnInit} from '@angular/core';
import {Cliente} from "../class/cliente";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipo: boolean;
  usuario: Cliente = new Cliente();
  LogoTransparente: any;

  constructor() {
  }

  ngOnInit() {
  }

  exibiOcultarSenha() {
    this.tipo = !this.tipo;
  }
}
