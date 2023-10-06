import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Se não for uma requisição GET, ignore e continue
    if (req.method !== 'GET') {

      return next.handle(req);
    }

    // Se for uma requisição GET, verifique o cache
    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse) {

      // Se a resposta estiver em cache, retorne-a
      return of(cachedResponse);
    }

    // Se não estiver em cache, continue e, em seguida, armazene a resposta no cache
    return next.handle(req).pipe(
      tap((event) => {

        this.cache.set(req.urlWithParams, event);
      })
    );
  }
}
