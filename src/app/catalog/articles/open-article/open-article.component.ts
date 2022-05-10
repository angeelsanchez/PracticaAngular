import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOpenArticle } from 'src/app/home/models/open-article.interface';
import { OpenArticleService } from '../open-article.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRuler } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-open-article',
  templateUrl: './open-article.component.html',
  styleUrls: ['./open-article.component.scss'],
})
export class OpenArticleComponent implements OnInit {
  openArticles?: IOpenArticle;
  id?: number;
  sizes: string[] = [
    '3XS',
    '2XS',
    'XS',
    'SM',
    'MD',
    'LG',
    'XL',
    '2XL',
    '3XL',
    '4XL',
  ];
  faHeart = faHeart;
  faEnvelope = faEnvelope;
  faRuler = faRuler;
  discount: boolean = false;

  constructor(
    private openArticleService: OpenArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setDiscount();
    this.getId();
    this.loadArticles();
  }

  public loadArticles(): void {
    this.openArticleService.fotosOpenArticle().subscribe({
      next: (images) => {
        images.forEach((i) => {
          if (i.id == this.id) {
            this.openArticles = i;
          }
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public getId(): void {
    this.id = Number(
      this.route.snapshot.paramMap.get('idArticle') ?? undefined
    );
  }

  setDiscount(): void {
    if (this.openArticles) {
      if (this.openArticles.discount != 0) {
        this.discount = true;
      }
    }
  }

  sizeStock(size: string): boolean {
    return this.openArticles?.size.find((s) => s === size) != undefined;
  }
}
