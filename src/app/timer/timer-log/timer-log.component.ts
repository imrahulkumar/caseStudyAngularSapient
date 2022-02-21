import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
})
export class TimerLogComponent implements OnInit, OnDestroy {
 logList: any = [];
 subscriptions: Subscription[] = [];
  constructor(private readonly timerService: TimerService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.timerService.getLogListDataSub().subscribe(response => {
      this.logList = response;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
