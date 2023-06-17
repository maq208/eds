import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsWeUseComponent } from './tools-we-use.component';

describe('ToolsWeUseComponent', () => {
  let component: ToolsWeUseComponent;
  let fixture: ComponentFixture<ToolsWeUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsWeUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsWeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
