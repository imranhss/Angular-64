import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDistricts } from './view-all-districts';

describe('ViewAllDistricts', () => {
  let component: ViewAllDistricts;
  let fixture: ComponentFixture<ViewAllDistricts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllDistricts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDistricts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
