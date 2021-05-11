import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'user-card',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Input() isSelected: boolean;

  constructor() {}

  ngOnInit(): void {
  }

}
