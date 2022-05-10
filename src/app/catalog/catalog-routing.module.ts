import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenArticle } from '../home/models/open-article.model';
import { OpenArticleComponent } from './articles/open-article/open-article.component';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  {
    path: 'articles/open-article/:idArticle',
    component: OpenArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
