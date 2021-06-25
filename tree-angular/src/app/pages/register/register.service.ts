import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlBaseApi = environment.URL_BASE_API;

  constructor(private localStorage: LocalStorageService,
              private http: HttpClient,) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  loginPostApi(login: any): Observable<any>{
    return this.http.post<any>(this.urlBaseApi + 'login', JSON.stringify(login), this.httpOptions); 
  }

  createUser(user: User) {
    return this.http.post<User>(this.urlBaseApi +'users', JSON.stringify(user), this.httpOptions);  
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlBaseApi +'users');
  }

}


