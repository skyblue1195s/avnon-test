import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { HandleError } from '../helper/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private _http: HttpClient,
    private handlerError: HandleError
  ) { }

  get(url: string) {
    return this._http.get(url).pipe(map(response => response), catchError(error => this.handlerError.handle(error)))
  }

  post(url: string, body: object) {
    return this._http.post(url, body).pipe(map(response => response), catchError(error => this.handlerError.handle(error)))
  }

  put(url: string, body: object) {
    return this._http.put(url, body).pipe(map(response => response), catchError(error => this.handlerError.handle(error)))
  }

  delete(url: string) {
    return this._http.delete(url).pipe(map(response => response), catchError(error => this.handlerError.handle(error)))
  }

}
