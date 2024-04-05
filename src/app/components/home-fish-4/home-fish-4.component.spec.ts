import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFish4Component } from './home-fish-4.component';

describe('HomeFish4Component', () => {
  let component: HomeFish4Component;
  let fixture: ComponentFixture<HomeFish4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFish4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFish4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
