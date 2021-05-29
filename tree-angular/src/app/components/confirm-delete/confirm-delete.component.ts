import { CommunityService } from './../../pages/community/community.service';
import { Vacancy } from './../../models/Vacancy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() vacancy: Vacancy;
  service: CommunityService = new CommunityService();
  @Input() isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.vacancy = this.service.getOpps()[0];
  }

}
