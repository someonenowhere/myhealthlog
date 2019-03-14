import { TestBed, inject } from '@angular/core/testing';

import { UsresService } from './usres.service';

describe('UsresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsresService]
    });
  });

  it('should be created', inject([UsresService], (service: UsresService) => {
    expect(service).toBeTruthy();
  }));
});
