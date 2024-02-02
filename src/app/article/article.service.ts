import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url = 'http://localhost:3000/article';
  constructor(private _http: HttpClient) {}

  addArticle(article: {}) {
    return this._http.post<{}>(this.url, article);
  }
  getArticle(): Observable<any> {
    return this._http.get<any>(this.url);
  }

  getSpecificArticle(id: number): Observable<any> {
    return this._http.get<any>(`${this.url}/${id}`);
  }

  sendUpdatedArticle(article: any, id: number) {
    return this._http.put<any>(`${this.url}/${id}`, article);
  }

  deleteArticle(id: number) {
    return this._http.delete<any>(`${this.url}/${id}`);
  }
}
