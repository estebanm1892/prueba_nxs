import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { BackendStatusService } from './backend-status.service';

describe('BackendStatusService', () => {
  let service: BackendStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(BackendStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
