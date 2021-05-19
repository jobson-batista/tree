import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  oppForm: FormGroup;

  isLogin: Boolean = false;
  textTop: String = 'Cadastrar-se';
  textBottom: String = 'Já possui uma conta?'
  textOption: String = 'Entrar';
  show: boolean;

  constructor(private location: Location) {
    this.show = false;
   }

  ngOnInit(): void {
    this.setOption(this.location.getState()['isLogin'] || false);    
    this.changeForm(this.isLogin);
  }

  password() {
    this.show = !this.show;
  }

  setOption(value: Boolean):void {
    this.isLogin = value;
    this.textOption = this.textTop;
    this.textTop = value ? 'Entrar': 'Cadastrar-se';
    this.textBottom = value ? 'Ainda não possui uma conta?' : 'Já possui uma conta?';
  }

  backButton() {
    this.location.back();
  }

  changeForm(option: Boolean): void {
    switch(option){
      case false:
        this.oppForm = new FormGroup({
          'first-name': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
          'last-name': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, Validators.required),
        });
        break;
      case true:
        this.oppForm = new FormGroup({
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, Validators.required),
        });
        break;
    }
  }

  subForm() {
    console.log(this.oppForm.value);
  }
}
