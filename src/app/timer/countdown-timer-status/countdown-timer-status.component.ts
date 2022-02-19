import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-status',
  templateUrl: './countdown-timer-status.component.html',
  styleUrls: ['./countdown-timer-status.component.scss']
})
export class CountdownTimerStatusComponent implements OnInit {

  @Input() statusCounter:any;
  constructor() { }

  ngOnInit(): void {
  }

}
