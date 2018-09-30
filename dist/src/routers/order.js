'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _order_controller = require('../controllers/order_controller');

var _order_controller2 = _interopRequireDefault(_order_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerOrder = (0, _express.Router)();

routerOrder.post('/order', function (req, res) {
  var controller = new _order_controller2.default(req, res);
  return controller.create();
});

routerOrder.delete('/order/:id', function (req, res) {
  var controller = new _order_controller2.default(req, res);
  return controller.delete();
});

/* routerOrder.put('/order/:id', (req, res) => {
  const controller = new OrderController(req, res);
  return controller.update();
});

routerOrder.get('/order/:id', (req, res) => {
  const controller = new OrderController(req, res);
  return controller.getOne();
}); */

routerOrder.get('/order', function (req, res) {
  var controller = new _order_controller2.default(req, res);
  return controller.getAll();
});

exports.default = routerOrder;