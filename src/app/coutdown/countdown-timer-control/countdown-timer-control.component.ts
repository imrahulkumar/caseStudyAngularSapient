import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-control',
  templateUrl: './countdown-timer-control.component.html',
  styleUrls: ['./countdown-timer-control.component.scss']
})
export class CountdownTimerControlComponent implements OnInit {

  @Output() changeInTime = new EventEmitter();
  @Output() changeInStatus = new EventEmitter();
  @Output() changeInStatusCounter = new EventEmitter();
  timerStatus: string = '';
  isStart = false;
  statusCounter = {
    pause: 0,
    start: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeInTimer(e: any): void {
     this.changeInTime.emit(e.target.value);
  }

  changeInActionButton(status: string): void {
    let statusAction;
      if (status === 'start') {
          this.isStart = !this.isStart;
          statusAction = this.isStart ? 'start' : 'pause'
          this.timerStatus = this.isStart ? 'start' : 'pause';
          this.isStart ? this.statusCounter.start++ : this.statusCounter.pause++ 
      } else {
        statusAction = status;
        this.isStart = false;
        this.timerStatus = status;
      }

    this.changeInStatus.emit(statusAction);
    this.changeInStatusCounter.emit(this.statusCounter);
  }

}
