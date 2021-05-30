import { Component, Input, OnInit } from '@angular/core';
import { VacancyUtilsService } from 'src/app/services/vacancy-utils.service';
import { Vacancy } from '../../models/Vacancy';

@Component({
  selector: 'vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.css']
})
export class VacancyCardComponent implements OnInit {
  @Input() vacancy: Vacancy;
  @Input() isSelected: boolean;
  color: string = "#fdcb6e";
  icon: string = "fas fa-suitcase";

  constructor(private vacancyUtils: VacancyUtilsService) { }

  ngOnInit(): void {
    this.color = this.vacancyUtils.getColorOrIconFromVacancy(this.vacancy).color;
    this.icon = this.vacancyUtils.getColorOrIconFromVacancy(this.vacancy).icon;
  }

}
