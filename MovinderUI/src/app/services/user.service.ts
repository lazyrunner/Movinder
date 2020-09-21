import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkUser(username, password): Observable<HttpResponse<any[]>> {
    return this.http.post<any[]>(`http://localhost:3000/users/check-user`,{username: username,password: password},{observe: 'response'});
  }
}
