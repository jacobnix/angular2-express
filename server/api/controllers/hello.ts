/**
 * Created by jacob on 5/23/17.
 */
import * as util from 'util';
import * as express from 'express';

function get(req: express.Request, res: express.Response) {
  const hello = util.format('Hello, Jacob?');

  // this sends back a JSON response which is a single string
  res.status(200).json(hello);
}

function post(req: express.Request, res: express.Response) {
  const hello = util.format('Nice Post, Jacob!!!');

  // this sends back a JSON response which is a single string
  res.json(hello);
 }

export { get, post };
