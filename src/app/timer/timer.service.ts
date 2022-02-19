import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TimerService {

  changeInTime = new Subject();
  changeInStatus = new Subject();
  changeInStatusCounter = new Subject();


  statusCounterData= new Subject();

  logListDataSub = new Subject();

  timeDisplayDataSub = new Subject();

  constructor() {}

  // for countdown-timer-control 
  setChangeInTime(data: any): void {
    this.changeInTime.next(data);
  }
  setChangeInStatus(data: any): void {
    this.changeInStatus.next(data);
  }
  setChangeInStatusCounter(data: any): void {
    this.changeInStatusCounter.next(data);
  }

  getChangeInTime(): Observable<any> {
    return this.changeInTime.asObservable();
  }
  getChangeInStatus(): Observable<any> {
    return this.changeInStatus.asObservable();
  }
  getChangeInStatusCounter(): Observable<any> {
    return this.changeInStatusCounter.asObservable();
  }


  // for countdown-timer-status 
  setStatusCounterData(data: any): void {
    this.statusCounterData.next(data);
  }
  getStatusCounterData(): Observable<any> {
    return this.statusCounterData.asObservable();
  }

  // for countdown-timer-log
  setLogListDataSub(data: any): void {
    this.logListDataSub.next(data);
  }
  getLogListDataSub(): Observable<any> {
    return this.logListDataSub.asObservable();
  }

  // for countdown-timer-view
  setTimeDisplayDataSub(data: any): void {
    this.timeDisplayDataSub.next(data);
  }
  getTimeDisplayDataSub(): Observable<any> {
    return this.timeDisplayDataSub.asObservable();
  }
}
