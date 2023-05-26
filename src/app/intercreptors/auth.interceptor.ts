import { Injectable } from '@angular/core';
import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      const token = localStorage.getItem('X-Auth-Token')

      return next.handle(req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      }));

  }

}
