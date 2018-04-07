import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFullfillmentComponent } from './submit-fullfillment.component';

describe('SubmitFullfillmentComponent', () => {
  let component: SubmitFullfillmentComponent;
  let fixture: ComponentFixture<SubmitFullfillmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFullfillmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
