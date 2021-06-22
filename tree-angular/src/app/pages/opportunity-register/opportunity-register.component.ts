import { Specialization } from 'src/app/models/Specialization';
import { Event } from './../../models/Event';
import { OpportunitiesComponent } from './../opportunities/opportunities.component';
import { Job } from 'src/app/models/Job';
import { OpportunitiesService } from './../opportunities/opportunities.service';
import { VacancyTypes } from 'src/app/services/vacancy-utils.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import * as moment from 'moment';

@Component({
  selector: 'page-opp-register',
  templateUrl: './opportunity-register.component.html',
  styleUrls: ['./opportunity-register.component.css']
})
export class OpportunityRegisterComponent implements OnInit {

  oppForm: FormGroup;

  currentDate: Date = new Date();
  secondDate: Date = new Date();
  firstOpenCalendar: boolean = true;
  firstOpenSecondCalendar: boolean = true;
  calendarIsActive: boolean = false;
  secondCalendarIsActive: boolean = false;

  @Input() name:string = "Joana";
  typeJob: string = 'emprego';
  category: string = VacancyTypes.EMPREGO;
  imagePath: string = "../../assets/images/pages/opp-register/job.svg";
  vancacy: string = "emprego/estágio";

  changeDateFunction = (args: Date, isFirst: boolean) => {
    this.changeDate(args, isFirst)
  };

  constructor(private location: Location, private oppService: OpportunitiesService) { }

  ngOnInit(): void {
    this.category = this.location.getState()['category'] || VacancyTypes.EMPREGO;
    this.changeCategory(this.category);
  }

  setCalendarActive(isFirst: boolean): void {
    isFirst ? this.calendarIsActive = !this.calendarIsActive : this.secondCalendarIsActive = !this.secondCalendarIsActive;
  }

  changeDate(date: Date, isFirst: boolean): void {
    if (isFirst) {
      this.currentDate = date;
      this.firstOpenCalendar = false;
    }
    else {
      this.secondDate = date;
      this.firstOpenSecondCalendar = false;
    }
    this.setCalendarActive(isFirst);
  }

  getDateFormated(isFirst: boolean): string {
    return moment(isFirst ? this.currentDate : this.secondDate).format('DD/MM/YYYY');
  }

  changeTypeJob(type: string): void {
    this.typeJob = type;
    console.log(this.typeJob);
  }

  changeCategory(category: string): void{
    this.currentDate, this.secondDate = new Date();
    this.firstOpenCalendar = true;
    this.firstOpenSecondCalendar = true;
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
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'salary': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
        });
        break;
      case VacancyTypes.EVENTO:
        this.oppForm = new FormGroup({
          'title': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
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

  checkData(): boolean {
    if(this.category === VacancyTypes.EMPREGO)
    {
      if(this.oppForm.valid && !this.firstOpenCalendar) return false;
      return true;
    }
    else if (this.category === VacancyTypes.EVENTO) {
      if(this.oppForm.valid && !this.firstOpenCalendar && !this.firstOpenSecondCalendar) return false;
      return true;
    }
    return this.oppForm.invalid;
  }

  checkInputAndType(nameInput: string, category: string): boolean {
    if(!this.oppForm.contains(nameInput)) return false;
    return this.oppForm.get(nameInput).invalid && this.oppForm.get(nameInput).touched && this.category == category;
  }

  subForm() {
    switch (this.category) {
      case VacancyTypes.EMPREGO:
        var job: Job = {
          type: this.category,
          subType: this.typeJob,
          title: this.oppForm.get('title').value,
          description: this.oppForm.get('description').value,
          contactEmail: this.oppForm.get('email').value,
          salary: this.oppForm.get('salary').value,
          startDate: this.currentDate
        };
        this.oppService.saveOpp(this.category, job).subscribe({
          complete: () => {this.location.back();}
        });
        break;
      case VacancyTypes.EVENTO:
          var event: Event = {
            type: this.category,
            title: this.oppForm.get('title').value,
            description: this.oppForm.get('description').value,
            contactEmail: this.oppForm.get('email').value,
            address: this.oppForm.get('adressOrInstitution').value,
            place: "vazio",
            organizer: "vazio",
            startDate: this.currentDate,
            endDate: this.secondDate,
          };
          this.oppService.saveOpp(this.category, event).subscribe({
            complete: () => {this.location.back();}
          });
        break;
      case VacancyTypes.ESPECIALIZACAO:
          var specialization: Specialization = {
            type: this.category,
            subType: this.oppForm.get('especializationType').value,
            title: this.oppForm.get('title').value,
            description: this.oppForm.get('description').value,
            contactEmail: this.oppForm.get('email').value,
            scholarship: this.oppForm.get('scholarship').value,
            institution: this.oppForm.get('adressOrInstitution').value,
            startDate: this.currentDate,
            endDate: this.secondDate,
          };
          this.oppService.saveOpp(this.category, specialization).subscribe({
            complete: () => {this.location.back();}
          });
        break;
    }
  }

}
