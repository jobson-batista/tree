import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  actionDrawer(): void {
    this.drawer.nativeElement.classList.toggle('active');
  }

}
