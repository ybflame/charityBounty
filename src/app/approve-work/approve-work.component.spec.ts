import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveWorkComponent } from './approve-work.component';

describe('ApproveWorkComponent', () => {
  let component: ApproveWorkComponent;
  let fixture: ComponentFixture<ApproveWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
