/**
 * Created by jacob on 5/23/17.
 */
import * as util from 'util';


function get(req, res){
  console.log('I hit the /hello!');
  var hello = util.format('Hello, Jacob');

  // this sends back a JSON response which is a single string
  res.json(hello);
}

export { get };
