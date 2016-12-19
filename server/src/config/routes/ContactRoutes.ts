/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import express = require("express");
import ContactController = require("./../../controllers/ContactController");

var router = express.Router();
class ContactRoutes {
    private _contactController: ContactController;

    constructor () {
        this._contactController = new ContactController();
    }
    get routes () {
        var controller = this._contactController;

        router.get("/Contacts", controller.retrieve);
        router.post("/Contacts", controller.create);
        router.put("/Contacts/:_id", controller.update);
        router.get("/Contacts/:_id", controller.findById);
        router.delete("/Contacts/:_id", controller.delete);

        return router;
    }


}

Object.seal(ContactRoutes);
export = ContactRoutes;