import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeReportComponent } from './oee-report.component';

describe('OeeReportComponent', () => {
  let component: OeeReportComponent;
  let fixture: ComponentFixture<OeeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OeeReportComponent]
    });
    fixture = TestBed.createComponent(OeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
