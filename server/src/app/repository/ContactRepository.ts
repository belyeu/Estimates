/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import ContactModel = require("./../model/ContactModel");
import IContactModel = require("./../model/interfaces/ContactModel");
import ContactSchema = require("./../dataAccess/schemas/ContactSchema");
import RepositoryBase = require("./BaseRepository");

class ContactRepository  extends RepositoryBase<IContactModel> {
    constructor () {
        super(ContactSchema);
    }
}

Object.seal(ContactRepository);
export = ContactRepository;