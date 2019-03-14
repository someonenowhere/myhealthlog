import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private _signUpUrl = 'http://localhost:1212/api/signUp';
  private _loginUrl = 'http://localhost:1212/api/login';

  constructor(private http: HttpClient) { }

  signUpUser(user) {
    return this.http.post<any>(this._signUpUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
