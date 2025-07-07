import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewemp } from './viewemp';

describe('Viewemp', () => {
  let component: Viewemp;
  let fixture: ComponentFixture<Viewemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
