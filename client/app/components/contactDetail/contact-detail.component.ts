/**
 * Created by Mason Belyeu 12.1.2016
 */

import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import { ActivatedRoute, Params } from '@angular/router';
import {ContactService} from "../../services/contact.service";


@Component({
    selector: 'my-contact-detail',
    templateUrl: './app/components/contactDetail/contact-detail.component.html'
})

export class ContactDetailComponent implements OnInit {
    @Input() contact: Contact;
    newContact = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newContact = true;
                this.contact = new Contact();
            } else {
                this.newContact = false;
                this.contactService.getContact(id)
                    .then(contact => this.contact = contact);
            }
        });
    }

    save() {
        this.contactService
            .save(this.contact)
            .then(contact => {
                this.contact = contact; // saved contact, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}