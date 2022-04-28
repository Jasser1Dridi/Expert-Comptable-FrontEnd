import { TestBed } from '@angular/core/testing';

import { MessagesSpaceService } from './messages-space.service';

describe('MessagesSpaceService', () => {
  let service: MessagesSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
