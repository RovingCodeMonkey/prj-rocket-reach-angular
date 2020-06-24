import { TestBed } from '@angular/core/testing';

import { TumblerApiService } from './tumbler-api.service';

describe('TumblerApiService', () => {
  let service: TumblerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TumblerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
