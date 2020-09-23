import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  checkUser(userId, groupCode): Observable<HttpResponse<any>> {
    return this.http.post<any[]>(`http://localhost:3000/groups/check-user`,{userId: userId,groupCode: groupCode},{observe: 'response'});
  }
}
