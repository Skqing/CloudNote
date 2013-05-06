/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 13-5-6
 * Time: 下午9:35
 * Description: 模型入口文件
 */
var config = require('../config');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

module.exports = new Db(config.db, new Server(config.host, Connection.DEFAULT_PORT, {}));


