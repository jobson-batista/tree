import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor() { }

  getUsers(): any[] {
    return [
      {
        id: 1,
        name: 'Jobson' 
      },
      {
        id: 2,
        name: 'Ana' 
      },
      {
        id: 3,
        name: 'Alana' 
      }
    ]
  }
}
