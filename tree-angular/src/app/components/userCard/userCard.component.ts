import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-userCard',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.css']
})
export class UserCardComponent implements OnInit {

  userCard: User;
  @Input() title: string;
  @Input() description: string;
  @Input() imgUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.userCard = {title: this.title, description: this.description, imgUrl: this.imgUrl};
  }

}
