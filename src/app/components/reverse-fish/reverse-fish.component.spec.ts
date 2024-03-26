import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseFishComponent } from './reverse-fish.component';

describe('ReverseFishComponent', () => {
  let component: ReverseFishComponent;
  let fixture: ComponentFixture<ReverseFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseFishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReverseFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
