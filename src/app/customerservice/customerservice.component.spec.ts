import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceComponent } from './customerservice.component';

describe('CustomerserviceComponent', () => {
  let component: CustomerserviceComponent;
  let fixture: ComponentFixture<CustomerserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerserviceComponent]
    });
    fixture = TestBed.createComponent(CustomerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
