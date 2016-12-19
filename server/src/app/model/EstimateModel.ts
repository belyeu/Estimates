import IEstimateModel = require('./interfaces/EstimateModel')

class EstimateModel{
    private _estimateModel: IEstimateModel;

    constructor(estimateModel: IEstimateModel){
        this._estimateModel= estimateModel;
    }
    get itemName():string{
        return this._estimateModel.itemName;
    }
    get rate(): number{
        return this._estimateModel.rate;
        }
    get quantity(): number{
        return this._estimateModel.quantity;
    } 
    get tax():number{
        return this._estimateModel.tax;
    }
    get description():string{
        return this._estimateModel.description;
    }

        
}
Object.seal(EstimateModel);
export = EstimateModel;
