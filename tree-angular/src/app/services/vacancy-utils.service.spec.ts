import { TestBed } from '@angular/core/testing';

import { VacancyUtilsService } from './vacancy-utils.service';

describe('VacancyUtilsService', () => {
  let service: VacancyUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
