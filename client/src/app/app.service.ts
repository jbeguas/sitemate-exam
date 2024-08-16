import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Issue {
  id: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private apiUrl = 'http://localhost:3000/api/issues';

  constructor(private http: HttpClient) { }

  createIssue(issue: any): Observable<any> {
    return this.http.post(this.apiUrl, issue);
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${issue.id}`, issue);
  }

  deleteIssue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
