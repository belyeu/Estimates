/**
 * Created by Mason Belyeu 12.1.2016
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Contact} from "../models/contact";

@Injectable()
export class ContactService {

    private ContactsUrl = 'api/Contacts';  // URL to web api

    constructor(private http: Http) { }

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.ContactsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getContact(id: string) {
        return this.http.get(this.ContactsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(contact: Contact): Promise<Contact>  {
        if (contact._id) {
            return this.put(contact);
        }
        return this.post(contact);
    }

    private post(contact: Contact): Promise<Contact> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.ContactsUrl, JSON.stringify(contact), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(contact: Contact) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.ContactsUrl}/${contact._id}`;

        return this.http
            .put(url, JSON.stringify(contact), {headers: headers})
            .toPromise()
            .then(() => contact)
            .catch(this.handleError);
    }

    delete(contact:Contact) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.ContactsUrl}/${contact._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}