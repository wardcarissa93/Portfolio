import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaweedComponent } from './seaweed.component';

describe('SeaweedComponent', () => {
  let component: SeaweedComponent;
  let fixture: ComponentFixture<SeaweedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeaweedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeaweedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
