import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-log',
  templateUrl: './countdown-timer-log.component.html',
  styleUrls: ['./countdown-timer-log.component.scss'],
})
export class CountdownTimerLogComponent implements OnInit {
  @Input() logList: any = [];
  
  constructor() {}

  ngOnInit(): void {}
}
