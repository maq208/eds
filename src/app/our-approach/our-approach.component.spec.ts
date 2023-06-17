import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurApproachComponent } from './our-approach.component';

describe('OurApproachComponent', () => {
  let component: OurApproachComponent;
  let fixture: ComponentFixture<OurApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurApproachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
