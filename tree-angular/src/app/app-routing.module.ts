import { OpportunityRegisterComponent } from './pages/opportunity-register/opportunity-register.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './pages/community/community.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'opportunities', component: OpportunitiesComponent},
  { path: 'community', component: CommunityComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'opportunities/opp-register', component: OpportunityRegisterComponent },
  {
    path: 'opp-register',
    redirectTo: '/tabs/opportunities/opp-register',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
