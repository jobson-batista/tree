import { Vacancy } from './../../models/Vacancy';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommunityService } from '../community/community.service';

@Component({
  selector: 'page-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit, OnDestroy {

  totalResults: number = 0;
  searchInput: string = '';
  opps: Vacancy[];
  visibleOpps: Vacancy[];
  indexOpp: number = 0;
  currentPage: number = 1;
  @Input() indexTypeOpp: number = 0;
  typeIconOpp: string = "eva eva-grid-outline";
  typeNameOpp: string = "Todos"

  changePageFunction = (args: number) => {
    this.changePage(args)
  };

  constructor(private serviceCommunity: CommunityService) { }

  ngOnInit(): void {
    this.opps = this.serviceCommunity.getOpps();
    this.getQuantButtonPages();
    this.setVisibleOpps();
    this.toogleTypeOpp();
  }

  ngOnDestroy(): void {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
  }

  actionToggle(): void {
    var action = document.querySelector('.action-button');
    action.classList.toggle('active');
  }

  toogleTypeOpp(): void {
    const selected = document.querySelector(".dropdown-select");
    const optionsContainer = document.querySelector(".dropdown-list");
    const arrowSelect = document.querySelector(".dropdown-select .eva");

    const optionsList = document.querySelectorAll(".dropdown-list-item");
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("actived");
      arrowSelect.classList.toggle("up");
    });

    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        this.typeNameOpp = o.querySelector(".dropdown-list-item label").innerHTML;
        this.typeIconOpp = o.querySelector(".dropdown-list-item i").className;
        optionsContainer.classList.remove("actived");
        arrowSelect.classList.remove("up");
      });
    });
  }

  changePage(index: number): void {
    this.currentPage = index;
    this.indexOpp = 0;
    this.setVisibleOpps();

    var targetScroll = document.getElementById("targetScroll");

    targetScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  setVisibleOpps(): void {
    this.visibleOpps = [];
    for (let index = ((this.currentPage - 1) * 5); index < this.opps.length; index++) {
      if (this.visibleOpps.length < 5) {
        this.visibleOpps.push(this.opps[index]);
      }
    }
  }

  changeOppSelected(opp: Vacancy): void {
    this.indexOpp = this.visibleOpps.indexOf(opp);
  }

  checkOppSelected(opp: Vacancy): boolean {
    return this.visibleOpps.indexOf(opp) == this.indexOpp;
  }

  getOppSelected(): Vacancy {
    return this.visibleOpps[this.indexOpp];
  }

  getQuantButtonPages(): number {
    var quant = Math.ceil(this.opps.length/5);
    return quant;
  }

  searchOpp(name: string) {
    // Lógica para nome pesquisa em this.opps
  }

}

