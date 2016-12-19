/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import EstimateRepository = require("./../repository/EstimateRepository");
import IEstimateBusiness = require("./interfaces/EstimateBusiness");
import IEstimateModel = require("./../model/interfaces/EstimateModel");
import EstimateModel = require("./../model/EstimateModel");


class EstimateBusiness implements IEstimateBusiness {
    private _estimateRepository: EstimateRepository;

    constructor () {
        this._estimateRepository = new EstimateRepository();
    }

    create (item: IEstimateModel, callback: (error: any, result: any) => void) {
        this._estimateRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._estimateRepository.retrieve(callback);
    }

    update (_id: string, item: IEstimateModel, callback: (error: any, result: any) => void) {

        this._estimateRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._estimateRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._estimateRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IEstimateModel) => void) {
        this._estimateRepository.findById(_id, callback);
    }

}


Object.seal(EstimateBusiness);
export = EstimateBusiness;