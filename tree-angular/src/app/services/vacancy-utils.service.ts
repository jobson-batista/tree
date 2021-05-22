import { Injectable } from '@angular/core';
import { Vacancy } from '../models/Vacancy';

export const enum VacancyTypes {
  EMPREGO = "emprego",
  EVENTO = "evento",
  ESPECIALIZACAO = "especializacao"
}

@Injectable({
  providedIn: 'root'
})
export class VacancyUtilsService {
  color: string = "#fdcb6e";
  icon: string = "eva eva-briefcase-outline";

  constructor(){}

  getColorOrIconFromVacancy(vacancy: Vacancy) {
    switch (vacancy.type) {
      case VacancyTypes.EMPREGO:
        this.color =  "#fdcb6e"
        this.icon = "eva eva-briefcase-outline";
        break;
      case VacancyTypes.ESPECIALIZACAO:
        this.color = "#1c5253";
        this.icon = "eva eva-book-open-outline";
        break;
      default:
        this.color = "#6c5ce7";
        this.icon = "eva eva-star-outline";
        break;
    }

    return {
      icon: this.icon,
      color: this.color
    }
  }
}
