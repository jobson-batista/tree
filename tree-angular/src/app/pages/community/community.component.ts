import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunityService } from './community.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'page-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit, OnDestroy {

  totalUsers: number = 0;
  searchInput: string = '';
  users: User[];
  visibleUsers: User[];
  indexUser: number = 0;
  currentPage: number = 1;

  changePageFunction = (args: number) => {
    this.changePage(args)
  };

  constructor(private serviceCommunity: CommunityService) { }

  ngOnInit(): void {
    this.users = this.serviceCommunity.getUsers();
    this.getQuantButtonPages();
    this.setVisibleUsers(this.users);
  }

  ngOnDestroy(): void {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
  }

  changePage(index: number): void {
    this.currentPage = index;
    this.indexUser = 0;
    this.setVisibleUsers(this.users);

    var targetScroll = document.getElementById("targetScroll");

    targetScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  setVisibleUsers(users: User[]): void {
    this.totalUsers = users.length;
    this.visibleUsers = [];
    for (let index = ((this.currentPage - 1) * 5); index < users.length; index++) {
      if (this.visibleUsers.length < 5) {
        this.visibleUsers.push(users[index]);
      }
    }
  }

  changeUserSelected(user: User): void {
    this.indexUser = this.visibleUsers.indexOf(user);
  }

  checkUserSelected(user: User): boolean {
    return this.visibleUsers.indexOf(user) == this.indexUser;
  }

  getUserSelected(): User {
    return this.visibleUsers[this.indexUser];
  }

  getQuantButtonPages(): number {
    var quant = Math.ceil(this.users.length/5);
    return quant;
  }

  searchUser(): any {
    let searchUsers = [];
    let pesquisa = (<HTMLInputElement>document.getElementById('search-content')).value;
    this.users.forEach( (user) => {
      if(user.firstName.toLowerCase().includes(pesquisa.toLowerCase()) 
        || user.lastName.toLowerCase().includes(pesquisa.toLowerCase())) {
        searchUsers.push(user);
      }
    })    
    this.setVisibleUsers(pesquisa == '' ? this.users : searchUsers);
    console.log(pesquisa);
    
  }
}
