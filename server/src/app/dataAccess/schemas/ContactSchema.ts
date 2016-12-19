/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import DataAccess = require('../DataAccess');
import IContactModel = require("./../../model/interfaces/ContactModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ContactSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            email:{
                type: String,
                require: false
            },
            phone2: {
                type: Number,
                required: false
            },
              address1: {
                type: String,
                required: false
            },
              address2: {
                type: String,
                required: false
            },
              postal: {
                type: Number,
                required: false
            },
              city: {
                type: String,
                required: false
            },
              state: {
                type: String,
                required: false
            },
              amountEstimate: {
                type: Number,
                required: false
            },
             note: {
                type: String,
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IContactModel>("Contacts", ContactSchema.schema);
export = schema;""    