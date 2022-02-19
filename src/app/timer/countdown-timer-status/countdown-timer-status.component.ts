import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-status',
  templateUrl: './countdown-timer-status.component.html',
  styleUrls: ['./countdown-timer-status.component.scss'],
})
export class CountdownTimerStatusComponent implements OnInit, OnDestroy {
  statusCounter: any;
  subscriptions: Subscription[] = [];
  constructor(private readonly timerService: TimerService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.timerService.getStatusCounterData().subscribe((response) => {
        this.statusCounter = response;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
