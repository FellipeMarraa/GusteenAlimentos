import {Injectable} from "@angular/core";
import {Cliente} from "../class/cliente";
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(public _http: HttpClient) {
    }

    getByID(id: number) {
        return this._http.get(`${API_CONFIG.baseUrl}/cliente/` + id);
    }

    list(): Observable<Cliente[]> {
        return this._http.get<Cliente[]>(`${API_CONFIG.baseUrl}/cliente/list`);
    }

    save(cliente: Cliente): Observable<Cliente> {
        return this._http.post<Cliente>(`${API_CONFIG.baseUrl}/cliente/create`, {cliente: Cliente, responseType: this._http})
    }

    update(cliente: Cliente): Observable<Cliente> {
        return this._http.put<Cliente>(`${API_CONFIG.baseUrl}/cliente/create`, {cliente: Cliente, responseType: this._http})
    }

    logar(cliente: Cliente) {
        //estudar como fazer uma requisição para o backend passando esses dados do cliente
    }


}
