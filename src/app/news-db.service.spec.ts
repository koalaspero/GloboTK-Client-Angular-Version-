import { TestBed } from '@angular/core/testing';

import { NewsDBService } from './news-db.service';

describe('NewsDBService', () => {
  let service: NewsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
