import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() isLogin: Boolean = false;
  textTop: String = 'Cadastrar-se';
  textBottom: String = 'Já possui uma conta?'
  textOption: String = 'Entrar';

  constructor() { }

  ngOnInit(): void {
  }

  setOption(value: Boolean):void {
    this.isLogin = value;
    this.textOption = this.textTop;
    this.textTop = value ? 'Entrar': 'Cadastrar-se';
    this.textBottom = value ? 'Ainda não possui uma conta?' : 'Já possui uma conta?';
  }

}
