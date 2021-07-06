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
  userCurrent = JSON.parse(localStorage.getItem('userCurrent'));

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCurrentPage();
  }

  getCurrentPage(): void {
    this.router.events.subscribe((url: any) => {
      switch (url.url) {
        case '/':
          this.indexPage = 0;
          break;
        case '/opportunities':
          this.indexPage = 1;
          break;
        case '/community':
          this.indexPage = 2;
          break;
        case '/register':
          this.indexPage = -1;
          break
        case '/opportunities/opp-register':
          this.indexPage = -1;
          break
        case '/how-it-works':
          this.indexPage = 3;
          break
        default:
          break;
      }
    });
  }

  actionDrawer(): void {
    this.drawer.nativeElement.classList.toggle('active');
  }

  isLogged(): boolean {
    if(localStorage.getItem('userCurrent')){
      return true;
    }
    return false;
  }
  
}
