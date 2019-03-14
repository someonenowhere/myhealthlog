import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsresService {

  private _usersUrl = 'https://api.github.com/search/users?q=eric'



  constructor(private _http: HttpClient) { }
  // console.log(_usersUrl)
  getUsers(): Observable<any[]> {
    return this._http.get<any[]>(this._usersUrl)
  }

}
