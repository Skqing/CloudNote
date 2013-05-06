/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 13-5-6
 * Time: 下午9:06
 * Description: 配置信息
 */

module.exports = {
  //base
  name: 'CloudNote',
  description: 'BirdWay 是用Node.js开发的实时定位平台',
  version: '0.0.1',

  //development
  debug : true,

  // site settings
  site_headers: [
    '<meta name="author" content="CloudNote" />'
  ],
  host : 'birdway.org',
  port : 80,
  site_logo: '', // default is `name`
  //site_navs: [
  // [ path, title, [target=''] ]
  //[ '/about', '关于' ]
  //],

  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  'birdway.org',  // google search preview中要搜索的域名

  //upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  //security settings
  cookie_id : 'birdway_sid',  //cookie标识
  user_session_key : 'user_session_key',  //用户session标识
  loginrefer_session_key: 'loginrefer_session_key',

  cookieSecret : 'cloudnote',
  redirect_uri : 'index',  //跳转地址,用户登录后转到之前请求的地址

  clienttype: ['pc', 'mobile', 'pad'],  //用户登录的客户端类型

  //db settings
  //url=mongodb://user:pass@127.0.0.1:27017/birdway/collection
  url: 'mongodb://127.0.0.1/cloudnote',
  db: 'cloudnote',
  collection: 'sessions',
  host: 'localhost',
  port: 27017,  //默认端口为27017
  username: 'cn_admin',
  password: 'md_pw',
  auto_reconnect: false,
  clear_interval: -1,
  stringify: true
};