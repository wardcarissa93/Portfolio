import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseFish2Component } from './reverse-fish-2.component';

describe('ReverseFish2Component', () => {
  let component: ReverseFish2Component;
  let fixture: ComponentFixture<ReverseFish2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseFish2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReverseFish2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
