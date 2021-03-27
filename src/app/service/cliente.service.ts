import {Injectable} from "@angular/core";
import {Cliente} from "../class/cliente";
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../config/api.config';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(public http: HttpClient) {
    }

    getByID() {

    }

    list(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/cliente/1`);
    }

    save() {

    }

    update() {

    }

    logar(cliente: Cliente) {
        //estudar como fazer uma requisição para o backend passando esses dados do cliente
    }


}
