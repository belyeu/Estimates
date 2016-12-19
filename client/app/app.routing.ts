import { EstimateDetailComponent } from './components/estimateDetail/estimate-detail.component';
import { EstimateComponent } from './components/estimates/estimate.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactsComponent } from './components/Contacts/Contacts.component';
import { ContactDetailComponent } from './components/contactDetail/contact-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: ContactDetailComponent
  },
  {
    path: 'Contacts',
    component: ContactsComponent
  },  
  {
    path: 'Estimates',
    component: EstimateComponent
},
  {
    path:'estDetail/:id',
    component: EstimateDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
