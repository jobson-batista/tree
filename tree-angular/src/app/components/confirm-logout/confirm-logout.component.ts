import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.css']
})
export class ConfirmLogoutComponent implements OnInit {

  @Input() isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
