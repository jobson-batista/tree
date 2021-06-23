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

  setContextRemoveActive(isActive: boolean): void {
    this.contextRemoveActive = isActive;
  }

  createdTo(startDate: Date): String {
    moment.locale('pt-br');
    let diff = moment(new Date(startDate), "DD/MM/YYYY HH:mm:ss").diff(moment(new Date(), "DD/MM/YYYY HH:mm:ss"));
    let days = moment.duration(diff).asDays();
    switch (Math.trunc(days)) {
      case 0:
        return this.user != null ? `Conta criada hoje` : `Postado hoje`;
      case 1:
        return this.user != null ? `Conta criada ontem` : `Postado ontem`
      case 2:
        return this.user != null ? `Conta criada a 2 dias atrás` : `Postado a 2 dias atrás`
      default:
        return `${this.user != null ? 'Conta criada' : 'Postado'} em ${moment(startDate).format('DD/MM/YYYY')}`
    }
  }

}
