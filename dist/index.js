'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _products = require('./src/routers/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5000;

app.use(_products2.default);

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});