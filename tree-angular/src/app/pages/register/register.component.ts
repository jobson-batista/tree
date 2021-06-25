import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/models/User';
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
  formLogin: FormGroup;
  urlBaseApi = environment.URL_BASE_API;
  isLogged: Boolean = false;

  constructor(private location: Location,
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.setOption(this.location.getState()['isLogin'] || false);
    this.createForm();
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

  createForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  getUsers() {
    this.registerService.getUsers().subscribe( users => {
      console.log(users);
      return users;
    });
  }


  login(email: string, password: string) {
    let login = {
      "email": email,
      "password": password
    }
    this.registerService.loginPostApi(login).subscribe( response => {
      this.isLogged = true;
      delete response.password;
      localStorage.setItem('userCurrent', JSON.stringify(response));
      this.location.back();
      return response;
    }, err=>{
      console.log(err.error);      
      return err.error.message;
    });
  }

  registerUser(user: User) {
    this.registerService.createUser(user).subscribe( response => {
      console.log("Usuário criado!")
      return response;
    }, err => {
      console.log(err.error);      
      return err.error.message;
    });
  }

  onSubmit() {
    if(this.isLogin) {
      this.login(this.formLogin.get('email').value, this.formLogin.get('password').value);
      if(this.isLogged) {
        this.formLogin.reset();
      }
    } else {
      console.log(this.formLogin.value)
      this.registerUser(this.formLogin.value);
      document.location.reload();
      this.formLogin.reset();
    }
  }
}
