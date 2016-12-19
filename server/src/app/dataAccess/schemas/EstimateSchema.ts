import DataAccess = require('../DataAccess');
import IEstimateModel = require("./../../model/interfaces/EstimateModel")

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class EstimateSchema {

    static get schema() {
        var schema = mongoose.Schema({
            itemName:{
                type: String,
                required: true
            },
            quantity :{
                type: Number,
                required: false
            },
             rate :{
                type: Number,
                required: false
            },
             tax :{
                type: Number,
                required: false
            },
             description :{
                type: String,
                required: false
            }
            });
                  return schema;
    }
}
var schema = mongooseConnection.model<IEstimateModel>("Estimates",EstimateSchema.schema);
export = schema;""
