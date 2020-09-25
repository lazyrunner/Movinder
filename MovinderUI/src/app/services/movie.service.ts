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

  makeDecision(userId, groupId, movieId, approved): Observable<HttpResponse<any>> {
    const data = {
      userId: userId,
      groupId: groupId,
      movieId: movieId,
      approved: approved
    };
    return this.http.post<any[]>(`http://localhost:3000/movies/decision`, data, {observe: 'response'});
  }

  getMovie(movieId): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(`http://localhost:3000/movies/movie-info/${movieId}`, {observe: 'response'});
  }

  getMatchedMovie(groupId): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(`http://localhost:3000/movies/matched/${groupId}`, {observe: 'response'});
  }

}
