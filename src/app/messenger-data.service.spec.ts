import { TestBed } from '@angular/core/testing';

import { MessengerDataService } from './messenger-data.service';

describe('MessengerDataService', () => {
  let service: MessengerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
