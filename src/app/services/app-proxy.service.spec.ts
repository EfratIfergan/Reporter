import { TestBed } from '@angular/core/testing';

import { AppProxyService } from './app-proxy.service';

describe('AppProxyService', () => {
  let service: AppProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
