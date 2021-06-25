import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {API_CONFIG} from "../config/api.config";
import {ProdutoDTO} from "../class/dto/produto.dto";
import {CategoriaDTO} from "../class/dto/categoria.dto";
import {Cliente} from "../class/cliente";
import {catchError, retry} from "rxjs/operators";
import {Produto} from "../class/produto";

@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  findById(produto_id: string) {
    return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
  }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos/list`);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos/create`, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  findByCategoria(categoria_id: string, page: number = 0, linesPerPage: number = 24) {
    return this.http.get(`${API_CONFIG.baseUrl}/produto/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
  }

  getSmallImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
    return this.http.get(url, {responseType: 'blob'});
  }

  getImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`
    return this.http.get(url, {responseType: 'blob'});
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
    return throwError(errorMessage);
  }
}
