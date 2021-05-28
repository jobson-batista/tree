import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {

  @Input() currentDate: Date = new Date();
  firstOpenCalendar: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  getDateFormated(): string {
    return moment(this.currentDate).format('DD/MM/YYYY');
  }

  generateCalendar(): void {
    var isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0)
          || (year % 100 === 0 && year % 400 === 0);
    }

    var getFebDays = (year) => {
      return isLeapYear(year) ? 29 : 28;
    }

    let calendar: Element = document.querySelector('.calendar');

    const month_names: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let month_picker: HTMLElement = document.querySelector('#month-picker')

    month_picker.onclick = () => {
      month_list.classList.toggle('show');
    }

    var generateCalendar = (month, year) => {
      let calendar_days: Element = document.querySelector('.calendar-days');
      calendar_days.innerHTML = '';
      let calendar_header_year: Element = document.querySelector('#year');

      let days_of_month: number[] = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      month_picker.innerHTML = month_names[month];
      calendar_header_year.innerHTML = year;

      let first_day: Date = new Date(month, year, 1);

      for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');

        if (i >= first_day.getDay()) {
          day.classList.add('calendar-day-hover');
          day.innerHTML = (i - first_day.getDay() + 1).toString();
          day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
          if (i - first_day.getDay() + 1 === this.currentDate.getDate() && year === this.currentDate.getFullYear() && month === this.currentDate.getMonth()) {
            day.classList.add('curr-date')
          }

          day.onclick = () => {
            this.currentDate.setDate(i - first_day.getDay() + 1);
            this.currentDate.setMonth(curr_month.value);
            this.currentDate.setFullYear(curr_year.value);
            console.log(this.currentDate);
            generateCalendar(month, year);
            setTimeout(() => {
              calendar.classList.remove('active');
              document.querySelector('#shadow').classList.remove('active');
              if (this.firstOpenCalendar) this.firstOpenCalendar = false;
            }, 250);
          }
        }
        calendar_days.appendChild(day);
      }
    }

    let month_list = calendar.querySelector('.month-list');

    month_names.forEach((e, index) => {
      let month: HTMLElement = document.createElement('div')
      month.innerHTML = `<div>${e}</div>`;
      month.onclick = () => {
        month_list.classList.remove('show');
        curr_month.value = index;
        generateCalendar(curr_month.value, curr_year.value);
      }
      month_list.appendChild(month);
    });

    var prev_year: HTMLElement = document.querySelector('#prev-year');
    prev_year.onclick = () => {
      --curr_year.value;
      generateCalendar(curr_month.value, curr_year.value);
    }
    var next_year: HTMLElement = document.querySelector('#next-year');
    next_year.onclick = () => {
      ++curr_year.value;
      generateCalendar(curr_month.value, curr_year.value);
    }

    let curr_month = { value: this.currentDate.getMonth() };
    let curr_year = { value: this.currentDate.getFullYear() };

    var btn_active: HTMLElement = document.querySelector('#btn-active');
    btn_active.onclick = () => {
      calendar.classList.add('active');
      document.querySelector('#shadow').classList.add('active');
    }

    generateCalendar(curr_month.value, curr_year.value)
  }

}
