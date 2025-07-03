import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrationt } from './registrationt';

describe('Registrationt', () => {
  let component: Registrationt;
  let fixture: ComponentFixture<Registrationt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Registrationt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrationt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
