import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  @Input() item;
  postDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.item = {
      id: 1,
      firstName: "Jobson Batista",
      description: "ALDKSJldkJSldKJLDKSJALKSJDLK",
      startDate: Date,
      endDate: Date,
      profilePhoto: "https://thispersondoesnotexist.com/image",
      contactEmail: "contato@email.com",
      qty: 3,
      address: {
        id: 1,
        place: "ENTRUST-CONSULTORIA",
        publicArea: "Rua da Aurora",
        number: "245 A",
        complement: "Próximo a UFPB",
        zipCode: 58297000,
        state: "PB",
        district: "Centro",
        city: "Rio Tinto"
      }
    }
  }

  items: any = [
    {
      id: 1,
      title: "Estágio em TI - Sistemas",
      description: "ALDKSJldkJSldKJLDKSJALKSJDLK",
      startDate: Date.now(),
      endDate: Date.now(),
      contactEmail: "contato@email.com",
      qty: 3,
      address: {
        id: 1,
        publicArea: "Rua da Aurora",
        number: "245 A",
        complement: "Próximo a UFPB",
        zipCode: 58297000,
        state: "PB",
        district: "Centro",
        city: "Rio Tinto"
      }
    }
  ]

}
