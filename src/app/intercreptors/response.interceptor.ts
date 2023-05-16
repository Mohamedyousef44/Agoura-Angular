import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === 4) { // Check if event is an HttpResponse
          if(!event.ok){
            this.route.navigateByUrl('**')
          }
          console.log(event.ok)
          console.log('Received response:', event);
        }
      })
    );
  }
}


