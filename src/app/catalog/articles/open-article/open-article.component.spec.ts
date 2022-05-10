import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenArticleComponent } from './open-article.component';

describe('OpenArticleComponent', () => {
  let component: OpenArticleComponent;
  let fixture: ComponentFixture<OpenArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
