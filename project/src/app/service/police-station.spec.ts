import { TestBed } from '@angular/core/testing';

import { PoliceStation } from './police-station';

describe('PoliceStation', () => {
  let service: PoliceStation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceStation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
