import { TestBed } from '@angular/core/testing';

import { PrivateService } from './private.service';

describe('PrivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateService = TestBed.get(PrivateService);
    expect(service).toBeTruthy();
  });
});
