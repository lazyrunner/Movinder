import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: number;
  userName: string;
  groupId: number;
  constructor(private http: HttpClient) { }

  checkUser(username, password): Observable<HttpResponse<any>> {
    return this.http.post<any[]>(`http://localhost:3000/users/check-user`,{username: username,password: password},{observe: 'response'});
  }
}
