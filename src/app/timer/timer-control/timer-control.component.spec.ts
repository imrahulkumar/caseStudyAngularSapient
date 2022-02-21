import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerControlComponent } from './timer-control.component';

describe('CountdownTimerControlComponent', () => {
  let component: CountdownTimerControlComponent;
  let fixture: ComponentFixture<CountdownTimerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
