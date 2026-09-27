import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsUi } from './leads-ui';

describe('LeadsUi', () => {
  let component: LeadsUi;
  let fixture: ComponentFixture<LeadsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadsUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
