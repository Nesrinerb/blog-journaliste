import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { UppdateArticleComponent } from './uppdate-article/uppdate-article.component';
import { CreatArticleComponent } from './creat-article/creat-article.component';
import { FiltrePipe } from './pipes/filtre.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ArticleComponent,
    ListArticleComponent,
    UppdateArticleComponent,
    CreatArticleComponent,
    FiltrePipe,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
})
export class ArticleModule {}
