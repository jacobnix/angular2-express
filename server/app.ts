import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as log4js from 'log4js';
import * as path from 'path';
import * as swaggerize from 'swaggerize-express';

import {Logger} from 'log4js';
import {Container} from 'typedi';

const app: express.Application = express();

const logger: Logger = log4js.getLogger();
logger.setLevel('trace');

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

Container.set('logger', logger);

const swaggerPath = path.join(__dirname + '/api/swagger.yaml');
const handlerPath = path.join(__dirname + '/api/controllers');

logger.debug('Swagger.yaml ::: ', swaggerPath);
logger.debug('SwaggerHandlers ::: ', handlerPath);

app.use('/api/v1',
  swaggerize(<swaggerize.Options> {
    api: yaml.safeLoad(fs.readFileSync(swaggerPath, 'utf8')),
    docspath: './docs',
    handlers: handlerPath,
  }),
);

if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
// err: any, req: express.Request, res: express.Response, next: express.NextFunction
app.use((err: any, req: express.Request, res: express.Response) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
