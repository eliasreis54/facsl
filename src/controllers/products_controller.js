import Products from '../models/products';

class ProductController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  retunrProducts() {
    this.res.json(Products);
  }
}

export default ProductController;
