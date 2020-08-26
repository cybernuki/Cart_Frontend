import { TestBed } from '@angular/core/testing';

import { FilterMessengerService } from './filter-messenger.service';

describe('FilterMessengerService', () => {
  let service: FilterMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
