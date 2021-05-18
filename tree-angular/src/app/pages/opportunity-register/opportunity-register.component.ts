import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

enum Category {
  EMPREGO = 1,
  EVENTO = 2,
  ESPECIALIZACAO = 3
}

@Component({
  selector: 'page-opp-register',
  templateUrl: './opportunity-register.component.html',
  styleUrls: ['./opportunity-register.component.css']
})
export class OpportunityRegisterComponent implements OnInit {

  oppForm: FormGroup;

  @Input() name:string = "Joana";
  typeJob: string = 'emprego';
  @Input() category: Category = Category.EMPREGO;
  imagePath:string = "../../assets/images/pages/opp-register/job.svg";
  vancacy:string = "emprego/estágio";

  constructor() { }

  ngOnInit(): void {
    this.changeForm(this.category);
  }

  changeTypeJob(type: string): void {
    this.typeJob = type;
    console.log(this.typeJob);
  }

  changeCategory(category:number): void{
    this.changeForm(category);
    switch(category){
      case 1:
        this.category = Category.EMPREGO;
        this.imagePath = "../../assets/images/pages/opp-register/job.svg"
        this.vancacy = "emprego/estágio"
        break;
      case 2:
        this.category = Category.EVENTO;
        this.imagePath = "../../assets/images/pages/opp-register/event.svg";
        this.vancacy = "evento"
        break;
      case 3:
        this.category = Category.ESPECIALIZACAO;
        this.imagePath = "../../assets/images/pages/opp-register/specialization.svg";
        this.vancacy = "especialização"
        break;
    }
  }

  changeForm(category: number): void {
    switch(category){
      case 1:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'date': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'salary': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
      case 2:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'firstDate': new FormControl(null, Validators.required),
          'lastDate': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'adressOrInstitution': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
      case 3:
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

  checkInputAndType(nameInput: string, category: number): boolean {
    if(!this.oppForm.contains(nameInput)) return false;
    return this.oppForm.get(nameInput).invalid && this.oppForm.get(nameInput).touched && this.category == category;
  }

  subForm() {
    console.log(this.oppForm.value);
  }

}
