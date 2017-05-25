"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jacob on 5/23/17.
 */
const util = require("util");
function get(req, res) {
    console.log('I hit the /hello!');
    var hello = util.format('Hello, Jacob');
    // this sends back a JSON response which is a single string
    res.json(hello);
}
exports.get = get;
//# sourceMappingURL=/Users/jacob/code/angular2-express-starter/dist/server/api/controllers/hello.js.map