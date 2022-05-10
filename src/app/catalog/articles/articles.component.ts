import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/home/models/articles.interface';
import { ArticlesService } from './articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticles[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  public loadArticles(): void {
    this.articleService.fotosArticles().subscribe({
      next: (images) => {
        this.articles = images;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
