import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../../models/Vacancy';

@Component({
  selector: 'vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.css']
})
export class VacancyCardComponent implements OnInit {
  //receber objeto
  //apartir da cor usar ela
  //mudar de cor ao ser selecionado
  @Input() vacancy: Vacancy;
  color: string = "#fdcb6e";
  icon: string = "fas fa-briefcase";

  constructor() { }

  ngOnInit(): void {
    this.setColorAndIcon(this.vacancy);
  }

  setColorAndIcon(vacancy: Vacancy): void {
    switch (vacancy.type) {
      case "job":
        this.color = "#fdcb6e";
        this.icon = "fas fa-briefcase";
        break;
      case "specialization":
        this.color = "#b2bec3";
        this.icon = "fas fa-book-open";
        break;
      default:
        this.color = "#6c5ce7";
        this.icon = "far fa-star";
        break;
    }
  }

}
