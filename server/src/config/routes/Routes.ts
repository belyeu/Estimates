/**
 * Created by Mason Belyeu on 12.1.2016.
 */
import express = require('express');
import path = require('path');

import ContactRoutes = require('../routes/ContactRoutes');
import EstimateRoutes = require('../routes/EstimateRoutes');
var app = express();

class Routes {

    get routes() {
              app.use("/", new EstimateRoutes().routes);
            app.use("/", new ContactRoutes().routes);
          
        return app;
    }
}
export = Routes;