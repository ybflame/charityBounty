import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateToCtaComponent } from './donate-to-cta.component';

describe('DonateToCtaComponent', () => {
  let component: DonateToCtaComponent;
  let fixture: ComponentFixture<DonateToCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateToCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateToCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
