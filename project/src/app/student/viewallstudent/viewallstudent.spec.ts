import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewallstudent } from './viewallstudent';

describe('Viewallstudent', () => {
  let component: Viewallstudent;
  let fixture: ComponentFixture<Viewallstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewallstudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewallstudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
