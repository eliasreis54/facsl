'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.get('/products', function (req, res) {
  res.send('oi');
});

exports.default = router;