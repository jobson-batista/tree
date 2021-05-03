import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacancyCardComponent } from './vacancy-card/vacancy-card.component';
import { UserCardComponent } from './components/userCard/userCard.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommunityComponent } from './pages/community/community.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VacancyCardComponent,
    UserCardComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DetailCardComponent,
    CommunityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
