import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticles } from 'src/app/home/models/articles.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  public fotosArticles(): Observable<IArticles[]> {
    const urlEndpoint: string = 'http://localhost:3002/articles';
    return this.http.get<IArticles[]>(urlEndpoint);
  }
}
