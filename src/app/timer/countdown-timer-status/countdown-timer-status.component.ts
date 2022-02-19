import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-status',
  templateUrl: './countdown-timer-status.component.html',
  styleUrls: ['./countdown-timer-status.component.scss']
})
export class CountdownTimerStatusComponent implements OnInit {

  statusCounter:any;
  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getStatusCounterData().subscribe(response => {
      this.statusCounter = response;
    });
  }

}
