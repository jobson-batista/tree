import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
declare const typerWriterEffect: any;

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
    if (this.location.isCurrentPathEqualTo('/')) typerWriterEffect();
  }

}
