/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import ContactModel = require("./../../model/interfaces/ContactModel");

interface ContactBusiness extends BaseBusiness<ContactModel> {

}
export = ContactBusiness;