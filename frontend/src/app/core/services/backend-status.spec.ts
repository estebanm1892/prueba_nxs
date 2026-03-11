import { TestBed } from '@angular/core/testing';

import { BackendStatus } from './backend-status';

describe('BackendStatus', () => {
  let service: BackendStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
