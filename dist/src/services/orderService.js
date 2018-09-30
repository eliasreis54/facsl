'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _products = require('../models/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderService = function () {
  function OrderService(db) {
    _classCallCheck(this, OrderService);

    this.db = db;
  }

  _createClass(OrderService, [{
    key: 'getAll',
    value: function getAll() {
      return this.db.getAllData();
    }
  }, {
    key: 'create',
    value: function create(object) {
      var _this = this;

      var manipule = object;
      manipule.tot = 0;
      object.products.forEach(function (element, key) {
        manipule.tot += _products2.default[element.id].price * element.count;
        manipule.products[key].totUnit = _products2.default[element.id].price * element.count;
        manipule.products[key].name = _products2.default[element.id].name;
        manipule.products[key].price = _products2.default[element.id].price;
      });
      manipule.date = new Date();
      return new Promise(function (resolve, reject) {
        _this.db.insert(manipule, function (err, newDoc) {
          if (err) {
            reject(err);
          }
          resolve(newDoc);
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      this.db.remove({ _id: id });
    }
  }]);

  return OrderService;
}();

exports.default = OrderService;