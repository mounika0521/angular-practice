import { TestBed } from '@angular/core/testing';

import { SibblingService } from './sibbling.service';

describe('SibblingService', () => {
  let service: SibblingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SibblingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
