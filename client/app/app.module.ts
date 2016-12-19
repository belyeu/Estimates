import { EstimateDetailComponent } from './components/estimateDetail/estimate-detail.component';
import { EstimateService } from './services/estimate.service';
import { EstimateComponent } from './components/estimates/estimate.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { ContactsComponent }      from './components/Contacts/Contacts.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ContactDetailComponent }  from './components/contactDetail/contact-detail.component';
import {SearchComponent} from './components/search/search.component';
import { ContactService }  from './services/contact.service';
import { SearchService }  from './services/search.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    ContactsComponent,
    DashboardComponent,
    ContactDetailComponent,
    EstimateComponent,
    EstimateDetailComponent,
    SearchComponent
  ],
  providers: [
    ContactService,
    EstimateService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
