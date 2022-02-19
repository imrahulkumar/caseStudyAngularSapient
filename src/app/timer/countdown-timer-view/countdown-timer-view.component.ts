import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-view',
  templateUrl: './countdown-timer-view.component.html',
  styleUrls: ['./countdown-timer-view.component.scss']
})
export class CountdownTimerViewComponent implements OnInit {

   timeDisplay: number = 0;

  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimeDisplayDataSub().subscribe(response => {
      this.timeDisplay = response;
    })
  }

}
