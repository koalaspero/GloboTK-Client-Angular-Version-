import { TestBed } from '@angular/core/testing';

import { UsuarioDBService } from './usuario-db.service';

describe('UsuarioDBService', () => {
  let service: UsuarioDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
