/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import express = require("express");
import ContactBusiness = require("./../app/business/ContactBusiness");
import IBaseController = require("./BaseController");
import IContactModel = require("./../app/model/interfaces/ContactModel");

class ContactController implements IBaseController <ContactBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var contact: IContactModel = <IContactModel>req.body;
            var contactBusiness = new ContactBusiness();
            contactBusiness.create(contact, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var contact: IContactModel = <IContactModel>req.body;
            var _id: string = req.params._id;
            var contactBusiness = new ContactBusiness();
            contactBusiness.update(_id, contact, (error, result) => {
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
            var contactBusiness = new ContactBusiness();
            contactBusiness.delete(_id, (error, result) => {
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

            var contactBusiness = new ContactBusiness();
            contactBusiness.retrieve((error, result) => {
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
            var contactBusiness = new ContactBusiness();
            contactBusiness.findById(_id, (error, result) => {
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
export = ContactController;