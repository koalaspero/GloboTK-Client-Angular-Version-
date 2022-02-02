import { TestBed } from '@angular/core/testing';

import { ReportDBService } from './report-db.service';

describe('ReportDBService', () => {
  let service: ReportDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
