import { Component, Input, OnInit } from '@angular/core';
import { VacancyCard } from './VacancyCard';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.css']
})
export class VacancyCardComponent implements OnInit {
  //receber objeto
  //apartir da cor usar ela
  //mudar de cor ao ser selecionado
  vacancyCard: VacancyCard;
  @Input() type: string;
  @Input() title: string;
  @Input() description: string;
  @Input() imgUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.vacancyCard = {type: this.type, title: this.title, description: this.description, imgUrl: this.imgUrl};
  }

}
