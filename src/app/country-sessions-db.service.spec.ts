import { TestBed } from '@angular/core/testing';

import { CountrySessionsDBService } from './country-sessions-db.service';

describe('CountrySessionsDBService', () => {
  let service: CountrySessionsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySessionsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
