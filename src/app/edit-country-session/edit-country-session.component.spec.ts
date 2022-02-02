import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountrySessionComponent } from './edit-country-session.component';

describe('EditCountrySessionComponent', () => {
  let component: EditCountrySessionComponent;
  let fixture: ComponentFixture<EditCountrySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountrySessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountrySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
