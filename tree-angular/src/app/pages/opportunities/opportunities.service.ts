import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Vacancy } from '../../models/Vacancy';
import { Event } from '../../models/Event';
import { Job } from 'src/app/models/Job';
import { Specialization } from 'src/app/models/Specialization';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {

  private urlBaseApi = 'http://localhost:3333/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };

  getOpps(type: string): Observable<Vacancy[]> {
    if (type === 'Event') {
      return this.http.get<Event[]>(this.urlBaseApi + 'events');
    } else if (type === 'Job') {
      return this.http.get<Job[]>(this.urlBaseApi + 'jobs');
    } else if (type === 'Specialization') {
      return this.http.get<Specialization[]>(this.urlBaseApi + 'specializations');
    }
  }

  getOppById(type: string, id: number): Observable<any> {
    if (type === 'Event') {
      return this.http.get<Event>(this.urlBaseApi + 'events/' + id)
        .pipe(retry(2),
          catchError(this.handleError));
    } else if (type === 'Job') {
      return this.http.get<Job>(this.urlBaseApi + 'jobs/' + id)
        .pipe(retry(2),
          catchError(this.handleError));
    } else if (type === 'Specialization') {
      return this.http.get<Specialization>(this.urlBaseApi + 'specializations/' + id)
        .pipe(retry(2),
          catchError(this.handleError));
    }
  }

  saveOpp(type: string, opp: any): Observable<any> {
    if (type === 'Event') {
      return this.http.post<Event>(this.urlBaseApi + 'events', JSON.stringify(opp), this.httpOptions)
        .pipe(retry(2),
          catchError(this.handleError));
    } else if (type === 'Job') {
      return this.http.post<Job>(this.urlBaseApi + 'jobs', JSON.stringify(opp), this.httpOptions)
        .pipe(retry(2),
          catchError(this.handleError));
    } else if (type === 'Specialization') {
      return this.http.post<Specialization>(this.urlBaseApi + 'specializations', JSON.stringify(opp), this.httpOptions)
        .pipe(retry(2),
          catchError(this.handleError));
    }
  }

  updateOpp(type: string, opp: any): Observable<any> {
    if (type === 'Event') {
      return this.http.put<Event>(this.urlBaseApi+ 'events/' + opp.id, JSON.stringify(event), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    } else if (type === 'Job') {
      return this.http.put<Job>(this.urlBaseApi+ 'jobs/' + opp.id, JSON.stringify(event), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    } else {
      return this.http.put<Specialization>(this.urlBaseApi+ 'specializations/' + opp.id, JSON.stringify(event), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    }
  }

  deleteOpp(type: string, opp: any): Observable<any> {
    if (type === 'Event') {
      return this.http.delete<Event>(this.urlBaseApi+ 'events/' + opp.id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    } else if (type === 'Job') {
      return this.http.delete<Job>(this.urlBaseApi+ 'jobs/' + opp.id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    } else {
      return this.http.delete<Specialization>(this.urlBaseApi+ 'specializations/' + opp.id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError));
    }
  }
}
