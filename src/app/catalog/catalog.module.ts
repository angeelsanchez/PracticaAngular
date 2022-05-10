import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { OpenArticleComponent } from './articles/open-article/open-article.component';

@NgModule({
  declarations: [CatalogComponent, ArticlesComponent, ArticleComponent, OpenArticleComponent],
  imports: [CommonModule, CatalogRoutingModule, FontAwesomeModule],
})
export class CatalogModule {}
