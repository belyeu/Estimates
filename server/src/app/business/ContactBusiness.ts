/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import ContactRepository = require("./../repository/ContactRepository");
import IContactBusiness = require("./interfaces/ContactBusiness");
import IContactModel = require("./../model/interfaces/ContactModel");
import ContactModel = require("./../model/ContactModel");


class ContactBusiness implements IContactBusiness {
    private _contactRepository: ContactRepository;

    constructor () {
        this._contactRepository = new ContactRepository();
    }

    create (item: IContactModel, callback: (error: any, result: any) => void) {
        this._contactRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._contactRepository.retrieve(callback);
    }

    update (_id: string, item: IContactModel, callback: (error: any, result: any) => void) {

        this._contactRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._contactRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._contactRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IContactModel) => void) {
        this._contactRepository.findById(_id, callback);
    }

}


Object.seal(ContactBusiness);
export = ContactBusiness;