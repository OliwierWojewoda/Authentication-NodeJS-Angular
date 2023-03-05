import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../models/User";
import { BehaviorSubject, Observable } from 'rxjs';
import{ first,catchError } from "rxjs/operators";
import { ErrorHandlerService } from './error-handler.service';
import { tokenDetails } from '../models/TokenDetails';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlsignup = "http://localhost:5000/auth/signup"
  private urlsignin = "http://localhost:5000/auth/signin"

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false)
  userId!: Pick<User, "id">; 
  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  signup(user: User): Observable<User>{
    return this.http.post<User>(this.urlsignup,JSON.stringify(user),this.httpOptions)
    .pipe(first(),catchError(this.errorHandlerService.handleError<User>("signup")))
  }
  signin(user: User): Observable<tokenDetails>{
    return this.http.post<tokenDetails>(this.urlsignin,JSON.stringify(user),this.httpOptions)
    .pipe(first(),catchError(this.errorHandlerService.handleError<tokenDetails>("signin")))
  }
}

