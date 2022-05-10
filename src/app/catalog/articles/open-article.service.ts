import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOpenArticle } from 'src/app/home/models/open-article.interface';

@Injectable({
  providedIn: 'root',
})
export class OpenArticleService {
  constructor(private http: HttpClient) {}

  public fotosOpenArticle(): Observable<IOpenArticle[]> {
    const urlEndpoint: string = 'http://localhost:3002/open-article';
    return this.http.get<IOpenArticle[]>(urlEndpoint);
  }
}
