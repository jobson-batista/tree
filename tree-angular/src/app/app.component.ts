import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tree Angular';
  item = {
    id: 1,
    firstName: "Estágio - Desenvolvedor Back-end Python",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    startDate: new Date(2021, 3, 27).toLocaleString('pt-br'),
    endDate: new Date(2021, 3, 30).toLocaleString('pt-br'),
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
