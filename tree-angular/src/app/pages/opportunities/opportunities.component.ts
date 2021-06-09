import { Vacancy } from './../../models/Vacancy';
import { Event } from '../../models/Event';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommunityService } from '../community/community.service';
import { OpportunitiesService } from './opportunities.service';

@Component({
  selector: 'page-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit, OnDestroy {

  totalResults: number = 0;
  searchInput: string = '';
  opps: Vacancy[] = [];
  visibleOpps: Vacancy[] = [];
  indexOpp: number = 0;
  currentPage: number = 1;
  @Input() indexTypeOpp: number = 0;
  typeIconOpp: string = "eva eva-grid-outline";
  typeNameOpp: string = "Todos"

  changePageFunction = (args: number) => {
    this.changePage(args)
  };

  constructor(private serviceCommunity: CommunityService,
              private serviceOpportunity: OpportunitiesService) { }

  eventTest: any = {
    id: 11,
    type: "evento",
    title: "EVENTO TESTE 2 - Fundamentos LGPD",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactEmail: "contato@gmail.com",
    place: "Auditorio UFPB Campus IV",
    organizer: "Juliana Saraiva",
    qty: 2,
    startDate: new Date(),
    endDate: new Date(),
  }

  ngOnInit(): void {
    this.getOpps();
    console.log(this.opps);
    this.getQuantButtonPages();
    this.setVisibleOpps();
    this.toogleTypeOpp();
    // this.getOpps('Event');
    // this.getOppById('Event', 2);
    // this.saveOpp('Event', this.eventTest);
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

  /* O atributo type é opcional,
   * se ele não for passado o método retorna
   * todas as oportunidades (Events, Opportunities e Jobs)
   */
  getOpps(type?: string) {
    let opps: Vacancy[] = [];
    let types = ['Event', 'Job', 'Specialization'];

    this.serviceOpportunity.getOpps('Job').subscribe(
      res => {
        this.opps = res;
        console.log(this.opps);
      }, error => {
        console.log("ERROR!")
      }
    )
    /*
    if (type) {
      this.serviceOpportunity.getOpps(type).subscribe(
        res => {
          opps = res;
        },
        error => {
          console.log("FAIL!");
        }
      );
    } else {
      types.forEach((t) => {
        this.serviceOpportunity.getOpps(t).subscribe(
          res => {
            res.forEach((opp) => {
              opps.push(opp);
            })
          },
          error => {
            console.log("FAIL!");
          }
        );
      });
    }
    this.opps = opps;*/
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

