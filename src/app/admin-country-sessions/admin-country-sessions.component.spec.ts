import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCountrySessionsComponent } from './admin-country-sessions.component';

describe('AdminCountrySessionsComponent', () => {
  let component: AdminCountrySessionsComponent;
  let fixture: ComponentFixture<AdminCountrySessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCountrySessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCountrySessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
