import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [CatalogComponent, ArticlesComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
