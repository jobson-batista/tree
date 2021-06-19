import { VacancyTypes } from 'src/app/services/vacancy-utils.service';
import { Vacancy } from './../../models/Vacancy';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OpportunitiesService } from './opportunities.service';

@Component({
  selector: 'page-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit, OnDestroy {

  totalResults: number = 0;
  searchText: string;
  opps: Vacancy[];
  visibleOpps: Vacancy[] = [];
  indexOpp: number = 0;
  currentPage: number = 1;
  @Input() indexTypeOpp: number = 0;
  typeIconOpp: string = "eva eva-grid-outline";
  typeNameOpp: string = "Todos"

  changePageFunction = (args: number) => {
    this.changePage(args)
  };

  constructor(private serviceOpportunity: OpportunitiesService) { }

  ngOnInit(): void {
    this.getOpps();
    this.getQuantButtonPages();
    this.toogleTypeOpp();
  }

  ngOnDestroy(): void {
    const pagination = document.querySelector('.pagination');
    if(pagination != null) pagination.innerHTML = '';
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
        if(this.typeNameOpp == 'Estágio/Emprego') this.getOpps(VacancyTypes.EMPREGO);
        else if(this.typeNameOpp == 'Eventos') this.getOpps(VacancyTypes.EVENTO);
        else if(this.typeNameOpp == 'Especialização') this.getOpps(VacancyTypes.ESPECIALIZACAO);
        else this.getOpps();
        this.typeIconOpp = o.querySelector(".dropdown-list-item i").className;
        optionsContainer.classList.remove("actived");
        arrowSelect.classList.remove("up");
      });
    });
  }

  changePage(index: number): void {
    this.currentPage = index;
    this.indexOpp = 0;
    this.setVisibleOpps(this.opps);

    var targetScroll = document.getElementById("targetScroll");

    targetScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  setVisibleOpps(opportunities: Vacancy[]): void {
    this.totalResults = opportunities.length;
    this.visibleOpps = [];
    for (let index = ((this.currentPage - 1) * 5); index < opportunities.length; index++) {
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

  searchOpp(): any {
    let searchOpps = [];
    let pesquisa = (<HTMLInputElement>document.getElementById('search-content')).value;
    this.opps.filter( opp => {
      if(opp.title.toLowerCase().includes(pesquisa.toLowerCase())) {
        searchOpps.push(opp);
      }
    });
    console.log(searchOpps.length)
    this.totalResults = searchOpps.length;
    this.changeOppSelected(searchOpps[0]);
  }

  /* O atributo type é opcional,
   * se ele não for passado o método retorna
   * todas as oportunidades (Events, Opportunities e Jobs)
   */
  getOpps(type?: string) {
    this.opps = [];

    if (type) {
      this.serviceOpportunity.getOppsByType(type).subscribe({
        next: (vacancy: Vacancy[]) => {
          this.opps = vacancy.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
        },
        complete: () => {
          this.setVisibleOpps(this.opps);
          this.searchOpp();
        },
        error: () => { this.opps = [] }
      }
      );
    } else {
      this.serviceOpportunity.getOpps().subscribe({
          next: (vacancy: Vacancy[]) => {
            this.opps = vacancy.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
          },
          complete: () => {
            this.setVisibleOpps(this.opps);
            this.searchOpp();
          },
          error: () => { this.opps = [] }
        }
        );
    }
  }

  getOppById(type: string, id: number) {
    this.serviceOpportunity.getOppById(type, id).subscribe((opp) => {
      console.log(opp);
      return opp;
    });
  }

  saveOpp(type: string, opp: any) {
    // Verifica se a oportunidade será criada ou atualizada.
    // console.log("É UNDEFINED");
    if (opp.id === undefined) {
      console.log("É UNDEFINED");
      this.serviceOpportunity.saveOpp(type, opp).subscribe(() => {
        console.log("Salvou!");
      })
    } else {
      console.log("É UNDEFINED 2");
      this.serviceOpportunity.updateOpp(type, opp).subscribe(() => {
        console.log("Editou!");
      });
    }
  }

  deleteOpp(type:string, id: number) {
    this.serviceOpportunity.deleteOpp(type, id).subscribe(() => {
      console.log("Deletou!");
    });
  }
}

