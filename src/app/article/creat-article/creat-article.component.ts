import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-article',
  templateUrl: './creat-article.component.html',
  styleUrls: ['./creat-article.component.css'],
})
export class CreatArticleComponent {
  constructor(
    private _fb: FormBuilder,
    private articleService: ArticleService,
    private _router: Router
  ) {}

  creatArticleForm = this._fb.group({
    titre: ['', Validators.required],
    contenue: ['', Validators.required],
    categorie: ['', Validators.required],
    date: ['', Validators.required],
  });

  get titre() {
    return this.creatArticleForm.get('titre');
  }
  get contenue() {
    return this.creatArticleForm.get('contenue');
  }
  get categorie() {
    return this.creatArticleForm.get('categorie');
  }
  get date() {
    return this.creatArticleForm.get('date');
  }
  creatArticle() {
    this.articleService.addArticle(this.creatArticleForm.value).subscribe(
      (response) => {
        console.log('success', response);
        this._router.navigate(['article/list-article']);
      },
      (error) => console.error('error', error)
    );
  }
}
