import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-uppdate-article',
  templateUrl: './uppdate-article.component.html',
  styleUrls: ['./uppdate-article.component.css'],
})
export class UppdateArticleComponent implements OnInit {
  updateArticleForm = this._fb.group({
    titre: ['', Validators.required],
    contenue: ['', Validators.required],
    categorie: ['', Validators.required],
    date: ['', Validators.required],
  });

  id = 0;

  constructor(
    private _fb: FormBuilder,
    private articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get('id') || '');

    this.articleService.getSpecificArticle(this.id).subscribe(
      (response) => this.updateArticleForm.patchValue(response),
      (error) => console.error('error', error)
    );
  }

  get titre() {
    return this.updateArticleForm.get('titre');
  }
  get contenue() {
    return this.updateArticleForm.get('contenue');
  }
  get categorie() {
    return this.updateArticleForm.get('categorie');
  }
  get date() {
    return this.updateArticleForm.get('date');
  }

  updateArticle() {
    this.articleService
      .sendUpdatedArticle(this.updateArticleForm.value, this.id)
      .subscribe(
        (response) => console.log(response),
        (error) => console.error('error', error)
      );
    this._router.navigate(['article/list-article']);
  }
}
