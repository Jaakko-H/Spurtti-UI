import { TestBed } from '@angular/core/testing';

import { DistanceBasedRecordApiService } from './distance-based-record-api.service';

describe('DistanceBasedRecordApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanceBasedRecordApiService = TestBed.get(DistanceBasedRecordApiService);
    expect(service).toBeTruthy();
  });
});
