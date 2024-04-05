import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFish2Component } from './home-fish-2.component';

describe('HomeFish2Component', () => {
  let component: HomeFish2Component;
  let fixture: ComponentFixture<HomeFish2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFish2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFish2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
