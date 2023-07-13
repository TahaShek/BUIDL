import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { queryNormalizer } from 'src/app/core/utils';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService implements OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(protected readonly http: HttpClient) {}

  PostByPromise(endPoint: string, body: any, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.post(endPoint, body, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }

  PutByPromise(endPoint: string, body: any, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.put(endPoint, body, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }
​
  GetByPromise(endPoint: string, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(endPoint, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }

  filter(endPoint: string, options: any) {
    return this.http.get(`${endPoint}?${queryNormalizer(options)}`);
  }

  getById(endPoint: string, id: string): Observable<any> {
    return this.http.get(endPoint + id);
  }

  create(endPoint: string, payload: any): Observable<any> {
    return this.http.post(endPoint, payload);
  }

  update(endPoint: string, id: string, payload: any): Observable<any> {
    return this.http.put(endPoint + id, payload);
  }

  delete(endPoint: string, id: string): Observable<any> {
    return this.http.delete(endPoint + id);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }



  PostByObservable(endPoint: string, body: any, options={}): Observable<any> {
    return this.http.post(endPoint, body, options);
  }

  GetByObservable(endPoint: string, options={}): Observable<any> {
    return this.http.get(endPoint, options);
  }

  PutByObservable(endPoint: string, body: any, options={}): Observable<any> {
    return this.http.put(endPoint, body, options);
  }

  DeleteByObservable(endPoint: string, options={}): Observable<any> {
    return this.http.delete(endPoint, options);
  }
}
