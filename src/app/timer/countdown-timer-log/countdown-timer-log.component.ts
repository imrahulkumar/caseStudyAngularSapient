import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-log',
  templateUrl: './countdown-timer-log.component.html',
  styleUrls: ['./countdown-timer-log.component.scss'],
})
export class CountdownTimerLogComponent implements OnInit {
 logList: any = [];

  constructor(private readonly timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.getLogListDataSub().subscribe(response => {
      this.logList = response;
    })
  }
}
