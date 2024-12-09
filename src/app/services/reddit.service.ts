import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  private readonly apiUrl = 'http://localhost:3001/api/v1/subreddits';

  constructor(private readonly http: HttpClient) {}

  getSubreddits(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createSubreddit(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }

  getSubredditById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
