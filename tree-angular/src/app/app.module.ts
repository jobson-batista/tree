import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacancyCardComponent } from '../app/components/vacancy-card/vacancy-card.component';
import { UserCardComponent } from "../app/components/userCard/userCard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommunityComponent } from './pages/community/community.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from "../app/components/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';
import { OpportunityRegisterComponent } from './pages/opportunity-register/opportunity-register.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    VacancyCardComponent,
    UserCardComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DetailCardComponent,
    OpportunityRegisterComponent,
    CommunityComponent,
    PaginationComponent,
    RegisterComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
