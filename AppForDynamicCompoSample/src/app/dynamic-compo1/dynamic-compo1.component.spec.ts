import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompo1Component } from './dynamic-compo1.component';

describe('DynamicCompo1Component', () => {
  let component: DynamicCompo1Component;
  let fixture: ComponentFixture<DynamicCompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
