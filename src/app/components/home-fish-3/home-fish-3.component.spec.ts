import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFish3Component } from './home-fish-3.component';

describe('HomeFish3Component', () => {
  let component: HomeFish3Component;
  let fixture: ComponentFixture<HomeFish3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFish3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFish3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
