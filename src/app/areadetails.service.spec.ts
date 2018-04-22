import { TestBed, inject } from '@angular/core/testing';

import { AreadetailsService } from './areadetails.service';

describe('AreadetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreadetailsService]
    });
  });

  it('should be created', inject([AreadetailsService], (service: AreadetailsService) => {
    expect(service).toBeTruthy();
  }));
});
