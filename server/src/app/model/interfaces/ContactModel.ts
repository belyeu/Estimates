/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import mongoose = require("mongoose");

interface ContactModel extends mongoose.Document {
     name: string;
    phone: string;
    email: string;
    phone2: number;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postal: number;
    amountEstimate: number;
    
    note: string;
}

export = ContactModel;