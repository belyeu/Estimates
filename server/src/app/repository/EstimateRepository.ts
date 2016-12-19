/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import EstimateModel = require("./../model/EstimateModel");
import IEstimateModel = require("./../model/interfaces/EstimateModel");
import EstimateSchema = require("./../dataAccess/schemas/EstimateSchema");
import RepositoryBase = require("./BaseRepository");

class EstimateRepository  extends RepositoryBase<IEstimateModel> {
    constructor () {
        super(EstimateSchema);
    }
}

Object.seal(EstimateRepository);
export = EstimateRepository;