import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDQ1OTgyNDNiYzBjOWQyYTc4NjhiMjAwMDE2MzczNiIsIm5iZiI6MTc0MzAyMTI1MC4yNjIsInN1YiI6IjY3ZTQ2NGMyMjU4MGVlZjFlODAwMTkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQGqKRv1RNPl9nevzqPR_nRF-o8Kb_xP6wCfl8gB-34'; // Substitua com seu token de autorização

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(this.apiUrl + `/list/8520958-filmes?language=en-US&page=1`, { headers });
  }

  getMovieDetails(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    
    return this.http.get(`${this.apiUrl}/movie/${id}`, { headers });
  }
}
