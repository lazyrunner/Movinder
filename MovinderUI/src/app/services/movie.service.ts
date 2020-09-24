import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  checkUser(userId, groupId, page): Observable<HttpResponse<any>> {
    const data = {
      userId: userId,
      groupId: groupId,
      pageNumber: page
    };
    return this.http.post<any[]>(`http://localhost:3000/movies`, data, {observe: 'response'});
  }
}
