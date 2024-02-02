import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent {
  articleArray: any[] = [];
  searchtext: any;

  constructor(
    private articleService: ArticleService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.listArticle();
  }

  listArticle() {
    this.articleService.getArticle().subscribe(
      (response: any) => {
        this.articleArray = response;
        console.log(response);
      },
      (error) => console.error('error', error)
    );
  }
  supprimeArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      (response: any) => {
        console.log(response);
        this.articleArray = this.articleArray.filter((_) => _.id != id);
      },
      (error) => console.error('error', error)
    );
  }
  updateArticle(id: any) {
    this._router.navigate(['article/update-article', id]);
  }
}
