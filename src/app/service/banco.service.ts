import {Injectable} from '@angular/core';
import {Banco} from '../class/banco';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(public _http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getByID(id: number) {
    return this._http.get(`${API_CONFIG.baseUrl}/banco/` + id);
  }

  list(): Observable<Banco[]> {
    return this._http.get<Banco[]>(`${API_CONFIG.baseUrl}/banco/list`)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }

  save(banco: Banco): Observable<Banco> {
    return this._http.post<Banco>(`${API_CONFIG.baseUrl}/banco/create`, JSON.stringify(banco), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(banco: Banco): Observable<Banco> {
    return this._http.post<Banco>(`${API_CONFIG.baseUrl}/banco/edit`, JSON.stringify(banco), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
