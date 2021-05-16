import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef;
  @Input() indexPage: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCurrentPage();
  }

  getCurrentPage(): void {
    this.router.events.subscribe((url:any) => {
      switch (url.url) {
        case '/':
          this.indexPage = 0;
          break;
        case '/community':
          this.indexPage = 2;
          break;
        case '/register':
          this.indexPage = 7;
          break
        default:
          break;
      }
    });
  }

  changePage(index: number): void {
    this.indexPage = index;
  }

  actionDrawer(): void {
    this.drawer.nativeElement.classList.toggle('active');
  }

}
