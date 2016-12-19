import express = require('express');
import EstimateBusiness = require("../app/business/EstimateBusiness");
import IBaseController = require("./BaseController");
import IEstimateModel = require("./../app/model/interfaces/EstimateModel")

class EstimateController implements IBaseController<EstimateBusiness>{

    create(req: express.Request, res: express.Response): void {
        try{
            var estimate: IEstimateModel = <IEstimateModel>req.body;
            var estimateBusiness = new EstimateBusiness();
            estimateBusiness.create(estimate, (error,result) => {
                if(error) res.send({"error":"error"});
                else res.send({"success":"success"});
            });
        }
  
    catch(e){
        console.log(e);
        res.send({"error":"error in your request"});
    }
}
update(req: express.Request, res:express.Response): void{
    try{
        var estimate: IEstimateModel = <IEstimateModel>req.body;
        var _id: string= req.params._id;   
        var estimateBusiness = new EstimateBusiness();

           estimateBusiness.update(_id, estimate, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var estimateBusiness = new EstimateBusiness();
            estimateBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var estimateBusiness = new EstimateBusiness();
            estimateBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var estimateBusiness = new EstimateBusiness();
            estimateBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = EstimateController;
