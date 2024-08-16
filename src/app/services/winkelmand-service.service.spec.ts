import { TestBed } from '@angular/core/testing';

import { WinkelmandServiceService } from './winkelmand-service.service';

describe('WinkelmandServiceService', () => {
  let service: WinkelmandServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinkelmandServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
