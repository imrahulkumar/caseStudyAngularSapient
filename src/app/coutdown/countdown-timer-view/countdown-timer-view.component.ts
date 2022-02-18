import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-view',
  templateUrl: './countdown-timer-view.component.html',
  styleUrls: ['./countdown-timer-view.component.scss']
})
export class CountdownTimerViewComponent implements OnInit {

  @Input() timeDisplay: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
