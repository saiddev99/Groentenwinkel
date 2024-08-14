import { TestBed } from '@angular/core/testing';

import { GroenteServiceService } from './groente-service.service';

describe('GroenteServiceService', () => {
  let service: GroenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
