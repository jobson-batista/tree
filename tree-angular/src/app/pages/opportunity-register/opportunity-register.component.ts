import { VacancyTypes } from 'src/app/services/vacancy-utils.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'page-opp-register',
  templateUrl: './opportunity-register.component.html',
  styleUrls: ['./opportunity-register.component.css']
})
export class OpportunityRegisterComponent implements OnInit {

  oppForm: FormGroup;

  @Input() name:string = "Joana";
  typeJob: string = 'emprego';
  category: string = VacancyTypes.EMPREGO;
  imagePath: string = "../../assets/images/pages/opp-register/job.svg";
  vancacy: string = "emprego/estágio";

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.category = this.location.getState()['category'] || VacancyTypes.EMPREGO;
    this.changeCategory(this.category);
  }

  changeTypeJob(type: string): void {
    this.typeJob = type;
    console.log(this.typeJob);
  }

  changeCategory(category: string): void{
    this.changeForm(category);
    switch(category){
      case VacancyTypes.EMPREGO:
        this.category = VacancyTypes.EMPREGO;
        this.imagePath = "../../assets/images/pages/opp-register/job.svg";
        this.vancacy = "emprego/estágio";
        break;
      case VacancyTypes.EVENTO:
        this.category = VacancyTypes.EVENTO;
        this.imagePath = "../../assets/images/pages/opp-register/event.svg";
        this.vancacy = "evento";
        break;
      case VacancyTypes.ESPECIALIZACAO:
        this.category = VacancyTypes.ESPECIALIZACAO;
        this.imagePath = "../../assets/images/pages/opp-register/specialization.svg";
        this.vancacy = "especialização";
        break;
    }
  }

  changeForm(category: string): void {
    switch(category){
      case VacancyTypes.EMPREGO:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'date': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'salary': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
      case VacancyTypes.EVENTO:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'firstDate': new FormControl(null, Validators.required),
          'lastDate': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'adressOrInstitution': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
      case VacancyTypes.ESPECIALIZACAO:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'especializationType': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'adressOrInstitution': new FormControl(null, Validators.required),
          'scholarship': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
    }
  }

  checkInputAndType(nameInput: string, category: string): boolean {
    if(!this.oppForm.contains(nameInput)) return false;
    return this.oppForm.get(nameInput).invalid && this.oppForm.get(nameInput).touched && this.category == category;
  }

  subForm() {
    console.log(this.oppForm.value);
  }

}
