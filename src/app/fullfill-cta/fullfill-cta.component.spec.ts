import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfillCtaComponent } from './fullfill-cta.component';

describe('FullfillCtaComponent', () => {
  let component: FullfillCtaComponent;
  let fixture: ComponentFixture<FullfillCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullfillCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullfillCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
