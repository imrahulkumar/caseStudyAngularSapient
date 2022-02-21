import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.scss']
})
export class CoutdownComponent  implements OnInit  {

  timeDisplayData: number;
  setTimeDisplayData: number = 0;
  logListData:any = [];
  statusCounterData: any;
  timer:any;
  constructor(private readonly countdown: CountdownService) { }

  ngOnInit(): void {
   this.init();
   
  }

  triggerInchangeInTime(e:any): void {
     this.timeDisplayData = e;
  }

  triggerInStatus(e: any): void {
    let status = '';
    if(e === 'start') {
      status = 'Started';
      if(this.countdown.counterStartTime != this.timeDisplayData) {
        if(!this.countdown.timer) this.init();
        this.countdown.setTimerTime(this.timeDisplayData);
        this.countdown.timerCounter();
        this.setTimeDisplayData = this.timeDisplayData;
        this.listerner();
      } else {
        this.countdown.initialize();
        this.countdown.timerCounter();
        this.listerner();
      }
    } else if (e === 'pause') {
      status = 'Paused';
      this.countdown.togglePauseStart();
    }else if (e === 'reset') {
      status = 'Reset';
      this.countdown.stop();
      this.countdown.setTimerTime(-1);
      this.setTimeDisplayData = 0;
    }
    this.logListData = [...this.logListData, { status: status, time: new Date() }]
  }

  triggerStatusCounter(e:any): void {
    this.statusCounterData = e;
  }

  init() {
   this.countdown.initialize();
  }

  listerner(): void {
    this.countdown.getCounterTick().subscribe(response => {
      this.setTimeDisplayData = response;
    });
  }

  togglePause() {
    this.countdown.togglePauseStart();
  }
}
