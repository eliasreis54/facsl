import OrderService from '../services/orderService';

class OrderController {
  constructor(req, res) {
    this.res = res;
    this.req = req;
    this.OderService = new OrderService(this.req.app.db);
  }

  getAll() {
    const all = this.OderService.getAll();
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

  delete() {
    this.OderService.delete(this.req.params.id);
    return this.res.status(204).json();
  }

  create() {
    this.OderService.create(this.req.body)
      .then((object) => {
        this.res.json(object);
      })
      .catch((err) => {
        this.res.status(400).json(err);
      });
  }
}

export default OrderController;
