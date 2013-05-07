/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 13-5-6
 * Time: 下午8:39
 * Description: APP入库文件
 */

var express = require('express');
var routes = require('./routes');
var config = require('./config');
var mongo = require('connect-mongo');

var app = module.exports = express();
var MongoStore = require('connect-mongo')(express);

// Configuration
app.configure(function(){
  //设置模版引擎
//    server.engine('.html', require('ejs').__express);   //这两种方法都可以
  app.engine('html', require('ejs').renderFile);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
//        server.register('.html', require('ejs'));

  app.set('view options', {layout: false});
//  server.set('view cache', true); //上线开启模板缓存

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: config.cookieSecret,
    store: new MongoStore({
      db: config.db
    })
  }));
  //app.use(express.router(routes));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//app.dynamicHelpers({
//  user: function(req, res) {
//    return req.session.user;
//  },
//  error: function(req, res) {
//    var err = req.flash('error');
//    if (err.length)
//      return err;
//    else
//      return null;
//  },
//  success: function(req, res) {
//    var succ = req.flash('success');
//    if (succ.length)
//      return succ;
//    else
//      return null;
//  }
//});
//route app
routes(app);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", 3000, app.settings.env);