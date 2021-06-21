import { Injectable, Inject } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  private params = new HttpParams();
  private API_URL = 'https://localhost:44344/api/v1';

  constructor(protected httpClient: HttpClient, @Inject(String) private resource: string) {
  }

  public invokeGet<T>(route?: string, params?: {}): Observable<T> {
    const url = `${this.API_URL}/${this.resource + (route ? '/' + route : '')}`;
    if (params) {
      for (const param of Object.keys(params)) {
        if (typeof params[param] == 'boolean' || params[param] != null ) {
          this.params = this.params.set(param, params[param]);
        }
      }
    }

    return this.httpClient.get<any>(url, {
      headers: this.headers,
      observe: 'body',
      params: { ...params},
      withCredentials: false
    });
  }

  public invokePost(element: any, route?: string): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/${this.resource + (route ? '/' + route : '')}`, element, {
      headers: this.headers,
      observe: 'body',
      withCredentials: false
    });
  }

  public invokePut<T>(element: any, route?: string): Observable<T> {
    return this.httpClient.put<any>(`${this.API_URL}/${this.resource + (route ? '/' + route : '')}`, element, {
      headers: this.headers,
      observe: 'body',
      withCredentials: false
    });
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders();
  }

  public deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/${this.resource}/${id}`, {
      headers: this.headers,
      observe: 'body',
      withCredentials: false
    });
  }

  public getById<T>(id: number | string): Observable<T> {
    id = id || '';
    return this.invokeGet<T>(String(id), null);
  }

}
