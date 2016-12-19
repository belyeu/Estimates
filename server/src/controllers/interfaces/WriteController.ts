/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import express = require("express");
interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

}

export = WriteController;