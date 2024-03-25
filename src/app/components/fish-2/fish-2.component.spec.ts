import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fish2Component } from './fish-2.component';

describe('Fish2Component', () => {
  let component: Fish2Component;
  let fixture: ComponentFixture<Fish2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fish2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fish2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
