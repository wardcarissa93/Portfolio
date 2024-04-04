import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFish1Component } from './home-fish-1.component';

describe('HomeFish1Component', () => {
  let component: HomeFish1Component;
  let fixture: ComponentFixture<HomeFish1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFish1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFish1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
