import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerLogComponent } from './countdown-timer-log.component';

describe('CountdownTimerLogComponent', () => {
  let component: CountdownTimerLogComponent;
  let fixture: ComponentFixture<CountdownTimerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
