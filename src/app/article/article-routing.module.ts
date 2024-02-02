import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { CreatArticleComponent } from './creat-article/creat-article.component';
import { UppdateArticleComponent } from './uppdate-article/uppdate-article.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'list-article', component: ListArticleComponent },
  { path: 'create-article', component: CreatArticleComponent },
  { path: 'update-article/:id', component: UppdateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
