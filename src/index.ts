import 'reflect-metadata';

global['rootPath'] = __dirname;

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import * as serve from 'koa-static';
import config from './config';
import controllers from './controller';

const app = new Koa();

app.use(bodyParser());
app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));
app.use(serve(__dirname + config.static));


app.use(controllers.init());

app.listen(8080,function(){
    console.log("Started");
});
