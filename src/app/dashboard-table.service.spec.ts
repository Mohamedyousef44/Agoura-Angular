import { TestBed } from '@angular/core/testing';

import { DashboardTableService } from './dashboard-table.service';

describe('DashboardTableService', () => {
  let service: DashboardTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
