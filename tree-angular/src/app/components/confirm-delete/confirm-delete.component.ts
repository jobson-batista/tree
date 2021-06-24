import { CommunityService } from './../../pages/community/community.service';
import { Vacancy } from './../../models/Vacancy';
import { Component, Input, OnInit } from '@angular/core';
import { OpportunitiesService } from 'src/app/pages/opportunities/opportunities.service';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() vacancy: Vacancy;
  service: CommunityService = new CommunityService();
  @Input() isActive: boolean = false;
  @Input() setContextRemoveActiveFunction: (isActive: boolean) => void;


  constructor(private oppService: OpportunitiesService) { }

  ngOnInit(): void {
  }

  oppDelete() {
    console.log(this.vacancy.id);
    this.oppService.deleteOpp(this.vacancy.type, this.vacancy.id).subscribe(
      {
        next: () => {
          window.location.reload();
        }
      }
    );
  }
}
