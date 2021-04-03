import {Injectable} from '@angular/core';
import {Cliente} from '../class/cliente';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {LocalUser} from '../class/local.user';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public _http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getByID(id: number) {
    return this._http.get(`${API_CONFIG.baseUrl}/cliente/` + id);
  }

  list(): Observable<Cliente[]> {
    return this._http.get<Cliente[]>(`${API_CONFIG.baseUrl}/cliente/list`)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/create`, JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/edit`, JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  recuperarSenha(cliente: Cliente): Observable<Cliente> {
    return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/auth/forgot`, JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
