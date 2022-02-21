import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerStatusComponent } from './timer-status.component';

describe('CountdownTimerStatusComponent', () => {
  let component: CountdownTimerStatusComponent;
  let fixture: ComponentFixture<CountdownTimerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
