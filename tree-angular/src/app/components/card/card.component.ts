import { Component, OnInit } from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card = {title: "Joana Darck", description: "Lorem ipsum dolor sit amet, consectur adipiscing elit. Morbi efficitur quis dolor vel.", imgUrl: "https://avatars.githubusercontent.com/u/43012901?v=4"};
  
  constructor() { }

  ngOnInit(): void {
  }

}
