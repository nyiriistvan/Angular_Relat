import { TestBed } from '@angular/core/testing';

import { BehavServiceService } from './behav-service.service';

describe('BehavServiceService', () => {
  let service: BehavServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
