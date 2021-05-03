import { Component, OnInit } from '@angular/core';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  totalResults: number;
  users: any[];
  
  constructor(private serviceCommunity: CommunityService) { }

  ngOnInit(): void {
    this.users = this.serviceCommunity.getUsers();
    this.totalResults = 0;
  }

  searchUser(name: string) {
    // Lógica para nome pesquisa em this.users
  }

}
