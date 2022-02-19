import { Injectable } from '@angular/core';
import { timer, takeWhile, Observable, Subscription, Subject, EMPTY } from 'rxjs';

@Injectable()
export class CountdownService {
  timeElapsed: number;
  counterStartTime: number;
  timer: any;
  subscription: Subscription;
  update = new Subject<number>();

  constructor() {}

  initialize() {
    this.timer = timer(1000, 1000);
  }

  setTimerTime(counterStartTime: number): void {
    this.counterStartTime = counterStartTime;
    this.timeElapsed = counterStartTime;
  }

  timerCounter(): void {
    this.subscription = this.timer.subscribe((countdown: number) => {
      if (this.timeElapsed - countdown >= 0) {
        this.timeElapsed = this.timeElapsed - 1;
        this.update.next(this.timeElapsed);
      } else {
        this.destoryTimer();
      }
    });
  }


  getCounterTick(): Observable<any> {
    return this.update.asObservable();
  }

  destoryTimer(): void {
    this.subscription.unsubscribe();
  }

  togglePauseStart() {
    if (this.timer) {
      this.destoryTimer();
      this.timer = undefined;
    } else {
      this.initialize();
    }
  }

  stop() {
    if (this.timer) {
      this.destoryTimer();
      this.timer = undefined;
    }
  }


  
}
