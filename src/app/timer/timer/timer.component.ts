import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../countdown.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timeDisplayData: number;
  setTimeDisplayData: number = 0;
  logListData:any = [];
  statusCounterData: any;
  timer:any;


  constructor(private readonly countdown: CountdownService, private readonly timerService: TimerService){}

  ngOnInit(): void {
    this.init();
    this.timerService.getChangeInTime().subscribe(response => {
      this.triggerInchangeInTime(response);
    })
    this.timerService.getChangeInStatus().subscribe(response => {
      this.triggerInStatus(response);
   })
   this.timerService.getChangeInStatusCounter().subscribe(response => {
      this.triggerStatusCounter(response);
   })
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
        //  this.setTimeDisplayData = this.timeDisplayData;
        this.timerService.setTimeDisplayDataSub(this.timeDisplayData);
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
       this.timerService.setTimeDisplayDataSub(0);
       
     }
     this.logListData.push({ status: status, time: new Date() });
     this.timerService.setLogListDataSub(this.logListData);

   }
 
   triggerStatusCounter(e:any): void {
    //  this.statusCounterData = e;
    this.timerService.setStatusCounterData(e);
   }
 
   init() {
    this.countdown.initialize();
   }
 
   listerner(): void {
     this.countdown.getCounterTick().subscribe(response => {
      //  this.setTimeDisplayData = response;
      this.timerService.setTimeDisplayDataSub(response);

     });
   }
 
   togglePause() {
     this.countdown.togglePauseStart();
   }

}
