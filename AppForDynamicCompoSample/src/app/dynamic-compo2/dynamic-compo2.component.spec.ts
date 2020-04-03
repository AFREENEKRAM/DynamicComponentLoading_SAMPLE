import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompo2Component } from './dynamic-compo2.component';

describe('DynamicCompo2Component', () => {
  let component: DynamicCompo2Component;
  let fixture: ComponentFixture<DynamicCompo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
