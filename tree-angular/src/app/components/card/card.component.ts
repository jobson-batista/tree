import { Component, OnInit, Input } from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card; 
  @Input() title: string; 
  @Input() description: string; 
  @Input() imgUrl: string; 
  constructor() {}

  ngOnInit(): void {
    this.card = {title: this.title, description: this.description, imgUrl: this.imgUrl};
  }

}
