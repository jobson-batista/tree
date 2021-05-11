import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from 'src/app/models/User';
import { Vacancy } from 'src/app/models/Vacancy';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  @Input() user: User = null;
  @Input() vacancy: Vacancy = null;
  postDate: Date;

  constructor() { }

  ngOnInit(): void {

  }

  createdTo(startDate: Date): String {
    moment.locale('pt-br');
    let diff = moment(startDate.getDate(), "DD/MM/YYYY HH:mm:ss").diff(moment(new Date(), "DD/MM/YYYY HH:mm:ss"));
    let days = moment.duration(diff).asDays();
    switch (Math.trunc(days)) {
      case 0:
        return `Conta criada hoje`;
      case 1:
        return `Conta criada ontem`
      case 2:
        return `Conta criada a 2 dias atrás`
      default:
        return `Conta criada em ${moment(startDate).format('DD/MM/YYYY')}`
    }
  }

}
