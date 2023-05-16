import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TeamComponent } from './component/team/team.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },{
    path:'services',component:ServicesComponent
  },{
    path:'portfolio',component:PortfolioComponent
  },{
    path:'team',component:TeamComponent
  },{
    path:'contact',component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
