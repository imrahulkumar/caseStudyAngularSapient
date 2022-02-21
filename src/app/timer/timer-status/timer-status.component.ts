import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-status',
  templateUrl: './timer-status.component.html',
  styleUrls: ['./timer-status.component.scss'],
})
export class TimerStatusComponent implements OnInit, OnDestroy {
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
