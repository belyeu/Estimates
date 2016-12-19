import { ContactDetailComponent } from './../contactDetail/contact-detail.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ContactService} from '../../services/Contact.service';
import { SearchService } from '../../services/search.service';
import {Contact} from "../../models/contact";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({

  selector: 'search',
  templateUrl: 'app/components/search/search.component.html',
  styleUrls: ['app/components/search/search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contacts = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.searchService.search(term)
        // or the observable of empty contacts if no search term
        : Observable.of<Contact[]>([]))
      .catch(error => {
        // TODO: real error handling
          console.log(`Error in component ... ${error}`);
        return Observable.of<Contact[]>([]);
      });
  }

  gotoDetail(contact: Contact): void {
    let link = ['/detail', contact._id];
    this.router.navigate(link);
  }


}