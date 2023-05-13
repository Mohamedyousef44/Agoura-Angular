import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any{
      const token = localStorage.getItem('X-Auth-Token')
      if (token) {
        req.headers.append('Authorization', `Bearer ${token}`);
      }

      return next.handle(req);

  }

}
