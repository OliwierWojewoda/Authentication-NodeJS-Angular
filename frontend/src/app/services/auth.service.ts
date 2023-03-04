import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../models/User";
import { Observable } from 'rxjs';
import{ first,catchError } from "rxjs/operators";
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:5000/auth/signup"

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  signup(user: User): Observable<User>{
    return this.http.post<User>(this.url,JSON.stringify(user),this.httpOptions)
    .pipe(first(),catchError(this.errorHandlerService.handleError<User>("signup")))
  }
}

