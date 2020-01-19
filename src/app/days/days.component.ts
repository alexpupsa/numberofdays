import { Component, OnInit } from '@angular/core';
import { Milestone } from '../milestone';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  calendarSettings: any;

  date: Date;

  days: number;

  milestones: Milestone[];

  constructor() { }

  ngOnInit() {
    this.calendarSettings = {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'dd/MM/yy',
      weekHeader: 'Wk'
    };
  }

  onSelectDate() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 0, 0, 0);
    const today = new Date();
    this.days = Math.floor((today.getTime() - this.date.getTime()) / (1000 * 60 * 60 * 24));
    let digits = this.days.toString().length;
    let increment = Math.max(10, Math.pow(10, digits - 2));
    if (increment === 10000) {
      increment = 5000;
    }
    let isLowerIncrement = true;
    this.milestones = [];
    let start = Math.ceil(this.days / increment) * increment;
    if (start === this.days) {
      start += increment;
    }
    for (let i = start; i <= 40000; i += increment) {
      const futureDate = new Date(this.date.getTime() + i * 24 * 60 * 60 * 1000);
      this.milestones.push(new Milestone(futureDate, i));
      if (isLowerIncrement && i.toString()[0] !== start.toString()[0]) {
        isLowerIncrement = false;
      }
      digits = i.toString().length;
      increment = Math.max(10, Math.pow(10, digits - (isLowerIncrement ? 2 : 1)));
      if (increment === 10000) {
        increment = 5000;
      }
    }
  }
}
