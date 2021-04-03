import {Injectable} from '@angular/core';
import {Cliente} from '../class/cliente';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {LocalUser} from '../class/local.user';
import {StorageService} from './storage.service';
import {CredenciaisDTO} from '../class/dto/credenciais.dto';

@Injectable()
export class AuthService{

  constructor(public http: HttpClient,
              public storage: StorageService) {
  }

  authenticate(creds : CredenciaisDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/cliente/login`, creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  // logar(cliente: Cliente): Observable<Cliente> {
  //   return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/login`, cliente, )
  //   // .pipe(
  //   //   retry(2),
  //   //   catchError(this.handleError)
  //   // );
  // }

  succefullLogin(authorizationValue : string){

    let tok = authorizationValue.substring(7);
    let user: LocalUser = {
      token : tok
    };
    this.storage.setLocalUser(user);
  }

  logout(){

    this.storage.setLocalUser(null);

  }

}
