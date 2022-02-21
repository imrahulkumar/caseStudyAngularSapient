import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html',
  styleUrls: ['./timer-view.component.scss']
})
export class TimerViewComponent implements OnInit, OnDestroy  {

   timeDisplay: number = 0;
   subscriptions: Subscription[] = [];
   
  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.timerService.getTimeDisplayDataSub().subscribe(response => {
      this.timeDisplay = response;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
}

}
