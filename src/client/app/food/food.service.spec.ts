import { TestBed, inject } from '@angular/core/testing';

import { FoodserviceService } from './foodservice.service';

describe('FoodserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodserviceService]
    });
  });

  it('should be created', inject([FoodserviceService], (service: FoodserviceService) => {
    expect(service).toBeTruthy();
  }));
});
