import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {API_CONFIG} from '../config/api.config';
import {ProdutoDTO} from '../class/dto/produto.dto';
import {catchError, retry} from 'rxjs/operators';
import {Produto} from '../class/produto';
import {ImageUtilService} from './image.util.service';

@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient,
              public imageUtilService: ImageUtilService) {
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

  edit(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos/edit`, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  findByCategoria(categoria_id: string, page: number = 0, linesPerPage: number = 24) {
    return this.http.get(`${API_CONFIG.baseUrl}/produto/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
  }

  getSmallImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
    return this.http.get(url, {responseType: 'blob'});
  }

  getImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`;
    return this.http.get(url, {responseType: 'blob'});
  }

  uploadPicture(picture) {
    let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
    let formData: FormData = new FormData();
    formData.set('file', pictureBlob, 'file.png');
    return this.http.post(
      `${API_CONFIG.baseUrl}/clientes/picture`,
      formData,
      {
        observe: 'response',
        responseType: 'text'
      }
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
    return throwError(errorMessage);
  }


}
