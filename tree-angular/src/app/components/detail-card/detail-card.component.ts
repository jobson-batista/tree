import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  @Input() item;
  postDate: Date;

  constructor() { }

  ngOnInit(): void {
 
  }

  createdTo(startDate: Date, endDate: Date): number {
    moment.locale('pt-br');
    let diff = moment(endDate, "DD/MM/YYYY HH:mm:ss").diff(moment(startDate, "DD/MM/YYYY HH:mm:ss"));
    let days = moment.duration(diff).asDays();
    return Math.trunc(days);
  }

}
