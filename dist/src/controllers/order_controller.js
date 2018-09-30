'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _orderService = require('../services/orderService');

var _orderService2 = _interopRequireDefault(_orderService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderController = function () {
  function OrderController(req, res) {
    _classCallCheck(this, OrderController);

    this.res = res;
    this.req = req;
    this.OderService = new _orderService2.default(this.req.app.db);
  }

  _createClass(OrderController, [{
    key: 'getAll',
    value: function getAll() {
      var all = this.OderService.getAll();
      if (all !== undefined) {
        return this.res.json(all);
      }
      return this.res.status(204).json();
    }

    /* getOne() {
      your code here.
    } */

    /* update() {
      your code here.
    } */

  }, {
    key: 'delete',
    value: function _delete() {
      console.log('chegou aqui');
      this.OderService.delete(this.req.params.id);
      return this.res.status(204).json();
    }
  }, {
    key: 'create',
    value: function create() {
      var _this = this;

      this.OderService.create(this.req.body).then(function (object) {
        _this.res.json(object);
      }).catch(function (err) {
        _this.res.status(400).json(err);
      });
    }
  }]);

  return OrderController;
}();

exports.default = OrderController;