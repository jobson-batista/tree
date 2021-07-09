import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from 'src/app/models/User';
import { Vacancy } from 'src/app/models/Vacancy';
import { VacancyUtilsService } from 'src/app/services/vacancy-utils.service';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  @Input() user: User;
  @Input() vacancy: Vacancy;
  contextRemoveActive: boolean = false;
  postDate: Date;
  vacancyUtils: VacancyUtilsService = new VacancyUtilsService();
  setContextRemoveActiveFunction = (args: boolean) => {
    this.setContextRemoveActive(args)
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  sendEmailVacancy() {
    window.location.href = "mailto:" + this.vacancy.contactEmail;
  }

  sendEmailUsers() {
    window.location.href = "mailto:" + this.user.email;
  }

  setContextRemoveActive(isActive: boolean): void {
    this.contextRemoveActive = isActive;
  }

  createdTo(startDate: Date): String {
    moment.locale('pt-br');
    let diff = moment(new Date(startDate), "DD/MM/YYYY HH:mm:ss").diff(moment(new Date(), "DD/MM/YYYY HH:mm:ss"));
    let abs = Math.abs(diff)
    let days = moment.duration(abs).asDays();
    let hours = moment.duration(abs).asHours(); 7
    let minutes = moment.duration(abs).asMinutes();
    let seconds = moment.duration(abs).asSeconds();
    let ms = moment.duration(abs).asMilliseconds();
    console.log(ms, Math.trunc(ms));

    while (hours < 24 && hours >= 1) {
      return this.user != null ? 'Conta criada há ' + Math.trunc(hours) + ' hora(s)' : 'Postado há ' + Math.trunc(hours) + ' hora(s)'
    }

    while (minutes < 1) {
      return this.user != null ? 'Conta criada agora' : 'Postado agora'
    }

    while (minutes >= 1 && minutes < 60) {
      return this.user != null ? 'Conta criada há ' + Math.trunc(minutes) + 'minuto(s) ' : 'Postado há ' + Math.trunc(minutes) + ' minuto(s)'
    }

    while (hours >= 24)
      return this.user != null ? 'Conta criada há ' + Math.trunc(days) + ' dias' : 'Postado há ' + Math.trunc(days) + ' dia(s)'

  }
}
