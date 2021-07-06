import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'user-options-navbar',
  templateUrl: './user-options-navbar.component.html',
  styleUrls: ['./user-options-navbar.component.css']
})
export class UserOptionsNavbarComponent implements OnInit {

  userCurrent = JSON.parse(localStorage.getItem('userCurrent'));
  menuActive: boolean = false;

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(): void {
    this.menuActive = !this.menuActive;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
     if (!this.toggleButton.nativeElement.contains(event.target) && !this.menu.nativeElement.contains(event.target)) {
     this.menuActive = false;
     }
  }

  logOut(): void {
    localStorage.removeItem("userCurrent")
  }

}
