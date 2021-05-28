import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin: Boolean = false;
  textTop: String = 'Cadastrar-se';
  textBottom: String = 'Já possui uma conta?'
  textOption: String = 'Entrar';

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.setOption(this.location.getState()['isLogin'] || false);
  }

  setOption(value: Boolean):void {
    this.isLogin = value;
    this.textOption = value ? 'Cadastrar-se' : 'Entrar';
    this.textTop = value ? 'Entrar': 'Cadastrar-se';
    this.textBottom = value ? 'Ainda não possui uma conta?' : 'Já possui uma conta?';
  }

  backButton() {
    this.location.back();
  }

}
