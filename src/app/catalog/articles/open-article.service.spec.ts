import { TestBed } from '@angular/core/testing';

import { OpenArticleService } from './open-article.service';

describe('OpenArticleService', () => {
  let service: OpenArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
