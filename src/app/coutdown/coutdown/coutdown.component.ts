import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.scss']
})
export class CoutdownComponent implements OnInit {

  timeDisplayData: number;
  logListData:any = [];
  statusCounterData: any;

  constructor() { }

  ngOnInit(): void {
  }

  triggerInchangeInTime(e:any): void {
     this.timeDisplayData = e;
     
  }

  triggerInStatus(e: any): void {
    let status = '';
    if(e === 'start') {
      status = 'Started'
    } else if (e === 'pause') {
      status = 'Paused'
    }else if (e === 'reset') {
      status = 'Reset'
    }
    this.logListData.push({
      status: status,
      time: new Date()
    });
  }

  triggerStatusCounter(e:any): void {
    this.statusCounterData = e;
    
  }
}
