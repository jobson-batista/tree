import { Component, OnInit, Input } from '@angular/core';
import { OppotunityRegister } from './OpportunityRegister';

enum Category {
  EMPREGO=1, EVENTO=2, ESPECIALIZACAO=3
}

@Component({
  selector: 'page-opportunity-register',
  templateUrl: './opportunity-register.component.html',
  styleUrls: ['./opportunity-register.component.css']
})
export class OpportunityRegisterComponent implements OnInit {

  oppRegister: OppotunityRegister;
  
  @Input() name:string = "Joana";
  @Input() title: string;
  @Input() description: string;
  @Input() date: Date;
  @Input() type: string;
  @Input() category: Category = Category.EMPREGO;
  imagePath:string = "../../assets/images/pages/opp-register/job.svg";
  vancacy:string = "Emprego/Estágio";
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category:number): void{
    switch(category){
      case 1: 
        this.category = Category.EMPREGO;
        this.imagePath = "../../assets/images/pages/opp-register/job.svg"
        this.vancacy = "Emprego/Estágio"
        break;
      case 2: 
        this.category = Category.EVENTO;
        this.imagePath = "../../assets/images/pages/opp-register/event.svg";
        this.vancacy = "Evento"
        break;
      case 3: 
        this.category = Category.ESPECIALIZACAO;
        this.imagePath = "../../assets/images/pages/opp-register/specialization.svg";
        this.vancacy = "Especialização"
        break;
    }
  }

}
