import mongoose = require('mongoose');

interface EstimateModel extends mongoose.Document {
    
    itemName: string;
    quantity:number;
    rate:number;
    tax:number;
    description:string;
}

export =  EstimateModel;