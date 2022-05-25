import { TestBed } from '@angular/core/testing';

import { DeclarServiceService } from './declar-service.service';

describe('DeclarServiceService', () => {
  let service: DeclarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
