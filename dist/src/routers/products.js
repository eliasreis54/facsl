'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _products_controller = require('../controllers/products_controller');

var _products_controller2 = _interopRequireDefault(_products_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/products', function (req, res) {
  var controller = new _products_controller2.default(req, res);
  return controller.retunrProducts();
});

exports.default = router;