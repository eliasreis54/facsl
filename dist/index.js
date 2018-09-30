'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _products = require('./src/routers/products');

var _products2 = _interopRequireDefault(_products);

var _order = require('./src/routers/order');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5000;
var db = new _nedb2.default();

app.use(_bodyParser2.default.json());
app.use(_products2.default);
app.use(_order2.default);
app.db = db;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});