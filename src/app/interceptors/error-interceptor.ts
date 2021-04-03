import {HttpEvent, HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('passou no interceptor');
    return next.handle(req).pipe(catchError((error, caught) => {

      let errorObj = error;
      if (errorObj.error){
        errorObj = errorObj.error;
      }

      if (!errorObj.status){
        errorObj = JSON.parse(errorObj);
      }

      console.log('Erro detectado pelo Interceptor');
      console.log(errorObj);


      return Observable.throw(errorObj);
    }) as any
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};


