import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage } from '../utils';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = storage.getItem('valusoft/session')?.token;
    const isLoggedIn = token != null ? true : false;

    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isLoggedIn && isApiUrl) {
      // Check if the request is a multipart form data request
      if (request.body instanceof FormData) {
        request = request.clone({
          setHeaders: {
            Tenant: environment.defaultTenant,
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        request = request.clone({
          setHeaders: {
            Tenant: environment.defaultTenant,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } else {
      request = request.clone({
        setHeaders: {
          Tenant: environment.defaultTenant,
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}
