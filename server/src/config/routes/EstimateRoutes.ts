import express = require("express");
import EstimateController = require("./../../controllers/EstimateController");

var router = express.Router();
class EstimateRoutes {
    private _estimateController: EstimateController;

    constructor(){
        this._estimateController = new EstimateController();
    }
    get routes(){
        var controller = this._estimateController;

        router.get("/Estimates",controller.retrieve);
        router.post("/Estimates", controller.create);
        router.put("/Estimates/:_id", controller.update);
        router.get("/Estimates/:/_id", controller.findById);
        router.delete("/Estimates/:_id",controller.delete);
       
       return router;
     }
}
Object.seal(EstimateRoutes);
export = EstimateRoutes;