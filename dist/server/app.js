"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const compression = require("compression");
const express = require("express");
const path = require("path");
const swaggerize = require("swaggerize-express");
const yaml = require("js-yaml");
const fs = require("fs");
const log4js = require("log4js");
const typedi_1 = require("typedi");
const app = express();
exports.app = app;
const logger = log4js.getLogger();
logger.setLevel('trace');
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(compression());
app.use(body_parser_1.urlencoded({ extended: true }));
typedi_1.Container.set('logger', logger);
const swaggerPath = path.join(__dirname + '/api/swagger.yaml');
const handlerPath = path.join(__dirname + '/api/controllers');
logger.debug('Swagger.yaml ::: ', swaggerPath);
logger.debug('SwaggerHandlers ::: ', handlerPath);
app.use('/api/v1', swaggerize({
    api: yaml.safeLoad(fs.readFileSync(swaggerPath, 'utf8')),
    docspath: './docs',
    handlers: handlerPath
}));
if (app.get("env") === "production") {
    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, "/../client")));
}
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message,
    });
});
//# sourceMappingURL=/Users/jacob/code/angular2-express-starter/dist/server/app.js.map