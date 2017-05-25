/**
 * Created by jacob on 5/24/17.
 */
import {Logger} from 'log4js';
import {Service, Require} from "typedi";

@Service('logger.service')
export class LoggerService {

  private logger: Logger;

  constructor(@Require('logger') logger: Logger) {
    this.logger = logger;
  }

  info(text: string, data?: any) {
    this.logger.info(text, ...data);
  }
}
