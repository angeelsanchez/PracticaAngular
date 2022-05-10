import { Component, Input, OnInit } from '@angular/core';
import { IArticles } from 'src/app/home/models/articles.interface';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { Router } from '@angular/router';
registerLocaleData(localeES, 'es');

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article?: IArticles;
  discount: boolean = false;
  favourite: boolean = false;
  faHeart = faHeart;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setDiscount();
    this.setFavourite();
  }

  setDiscount(): void {
    if (this.article) {
      if (this.article.discount != 0) {
        this.discount = true;
      }
    }
  }

  setFavourite(): void {
    if (this.article) {
      if (this.article.favourite) {
        this.favourite = true;
      }
    }
  }

  public navToArticle(id: number): void {
    this.router.navigate(['catalog/open-article', id]);
  }
}
