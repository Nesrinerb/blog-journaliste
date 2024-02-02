import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateArticleComponent } from './uppdate-article.component';

describe('UppdateArticleComponent', () => {
  let component: UppdateArticleComponent;
  let fixture: ComponentFixture<UppdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppdateArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
