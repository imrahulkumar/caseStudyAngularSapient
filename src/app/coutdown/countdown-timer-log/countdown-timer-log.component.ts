import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-log',
  templateUrl: './countdown-timer-log.component.html',
  styleUrls: ['./countdown-timer-log.component.scss'],
})
export class CountdownTimerLogComponent implements OnInit {
  @Input() logList: any = [
    { status: 'Started', time: '14-2-2020 12:38:30 pm' },
    { status: 'Paused', time: '14-2-2020 12:38:30 pm' },
    { status: 'Started', time: '14-2-2020 12:38:30 pm' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
