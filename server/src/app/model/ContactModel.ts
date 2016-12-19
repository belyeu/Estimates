/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import IContactModel = require('./interfaces/ContactModel');

class ContactModel {

    private _contactModel: IContactModel;

    constructor(contactModel: IContactModel) {
        this._contactModel = contactModel;
    }
    get name (): string {
        return this._contactModel.name;
    }

    get phone (): string {
        return this._contactModel.phone;
    }
    get emil(): string{
        return this._contactModel.email;
    }
    get phone2 (): number {
        return this._contactModel.phone2;
    }
     get addess (): string {
        return this._contactModel.address1;
    }

    get address2 (): string {
        return this._contactModel.address2;
    }
    get city(): string{
        return this._contactModel.city;
    }
    get state (): string {
        return this._contactModel.state;
    }
     get postal (): number {
        return this._contactModel.postal;
    }

    get amountEstimate (): number {
        return this._contactModel.amountEstimate;
    }
    get note(): string{
        return this._contactModel.note;
    }
   
    
}
Object.seal(ContactModel);
export =  ContactModel;