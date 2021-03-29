import {Injectable} from "@angular/core";
import {Cliente} from "../class/cliente";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(public _http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getByID(id: number) {
        return this._http.get(`${API_CONFIG.baseUrl}/cliente/` + id);
    }

    list(): Observable<Cliente[]> {
        return this._http.get<Cliente[]>(`${API_CONFIG.baseUrl}/cliente/list`);
    }

    save(cliente: Cliente): Observable<Cliente> {
        return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/create`, JSON.stringify(cliente), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    update(cliente: Cliente): Observable<Cliente> {
        return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/edit`, JSON.stringify(cliente), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    logar(cliente: Cliente) {
        return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/login`, JSON.stringify(cliente), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
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
        console.log(errorMessage);
        return throwError(errorMessage);
    };


}
