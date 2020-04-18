import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access-token');
    if (token != null) {
      const headers = new HttpHeaders().set('access-token', token);
      const AuthRequest = request.clone({headers: headers});
      return next.handle(AuthRequest);
    } else {
      return next.handle(request);
    }
  }
}
