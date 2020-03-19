import { TestBed } from '@angular/core/testing';

import { GetSubByIdService } from './get-sub-by-id.service';

describe('GetSubByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSubByIdService = TestBed.get(GetSubByIdService);
    expect(service).toBeTruthy();
  });
});
