import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  noBackgroundImages = 3;
  selectedBackground = 0;
  countdownDate;
  today;
  showDatePassed = false;
  showTimmer = false;
  todate;
  tick;
  showeError;
  subscribe;
  days;
  hours;
  min;
  sec;

  constructor() {}

  ngOnInit(): void {
    this.selectedBackground = Math.floor(Math.random() * this.noBackgroundImages);
    this.tick = interval(1000);
  }

  startTimmer(): void {
    console.log(this.countdownDate);
    this.todate = new Date(this.countdownDate);
    this.today = new Date();
    if (this.todate - this.today > 0){
      this.showTimmer = true;
      this.subscribe = this.tick.subscribe(() => {
        this.today = new Date();
        const currentDiff = this.todate - this.today;
        const seconds = currentDiff / 1000;
        this.sec = Math.floor(seconds % 60) ;
        this.min = Math.floor((seconds / 60) % 60);
        this.hours = Math.floor((seconds / 3600) % 24);
        this.days = Math.floor((seconds / 3600) / 24);
      });
    } else {
      this.showeError = true;
      this.showTimmer = false;
    }
  }

  resetError(): void {
    this.showeError = false;
  }
}
