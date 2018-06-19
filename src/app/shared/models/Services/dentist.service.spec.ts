/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DentistService } from './dentist.service';

describe('Service: DentistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DentistService]
    });
  });

  it('should ...', inject([DentistService], (service: DentistService) => {
    expect(service).toBeTruthy();
  }));
});
