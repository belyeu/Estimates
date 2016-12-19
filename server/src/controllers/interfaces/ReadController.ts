/**
 * Created by Mason Belyeu on 12.1.2016.
 */

import express = require("express");
interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;


}
export = ReadController;