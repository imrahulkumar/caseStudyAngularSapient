import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {
  timerStatus: string = '';
  isStart = false;
  statusCounter = {
    pause: 0,
    start: 0
  }
  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
  }

  changeInTimer(e: any): void {
    //  this.changeInTime.emit(e.target.value);
    this.timerService.setChangeInTime(e.target.value);
  }

  changeInActionButton(status: string): void {
    let statusAction;
      if (status === 'start') {
          this.isStart = !this.isStart;
          statusAction = this.isStart ? 'start' : 'pause';
          this.timerStatus = statusAction;
          this.isStart ? this.statusCounter.start++ : this.statusCounter.pause++ 
      } else {
        statusAction = status;
        this.isStart = false;
        this.timerStatus = statusAction;

      }


    this.timerService.setChangeInStatus(statusAction);
    this.timerService.setChangeInStatusCounter(this.statusCounter);
  }

}
