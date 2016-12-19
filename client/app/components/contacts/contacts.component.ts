/**
 * Created by Mason Belyeu 12.1.2016
 */
import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact";
import { Router } from '@angular/router';

@Component({
    
    selector: 'my-Contacts',
    templateUrl: './app/components/Contacts/Contacts.component.html'
})

export class ContactsComponent implements OnInit {

    Contacts: Contact[];
    selectedContact: Contact;
    error: any;

    constructor(
        private router: Router,
        private contactService: ContactService) { }
    getContacts() {
        this.contactService.getContacts()
        .then(Contacts => this.Contacts = Contacts);
    }
    ngOnInit() {
        this.getContacts();
    }
    onSelect(contact: Contact) { 
        this.selectedContact = contact; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedContact._id]);
    }

    addContact() {
        this.selectedContact = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteContact(contact: Contact, event: any) {
        event.stopPropagation();
        this.contactService
            .delete(contact)
            .then(res => {
                this.Contacts = this.Contacts.filter(h => h !== contact);
                if (this.selectedContact === contact) { this.selectedContact = null; }
            })
            .catch(error => this.error = error);
    }
}
