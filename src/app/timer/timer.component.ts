import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})


export class TimerComponent implements OnInit, OnDestroy {
  clock: any;
  constructor() {

  }
  laps: any = [];
  counter: number;
  timerRef;
  running: boolean = false;
  startText = 'Start';


  startTimer() {
    // const source = timer(0, Date.now());
    // const subscribe = source.subscribe(val => console.log(val));
    console.log("start");
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        // console.log(Date.now());
        // console.log(startTime);
        // console.log(this.counter);
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }
  lapTimeSplit() {
    let lapTime = (this.counter / 1000);
    this.laps.push(lapTime);
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    this.laps = [];
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
  ngOnInit() {

  }

}