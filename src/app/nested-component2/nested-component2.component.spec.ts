import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponent2Component } from './nested-component2.component';

describe('NestedComponent2Component', () => {
  let component: NestedComponent2Component;
  let fixture: ComponentFixture<NestedComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedComponent2Component]
    });
    fixture = TestBed.createComponent(NestedComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
