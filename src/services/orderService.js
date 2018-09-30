import Products from '../models/products';

class OrderService {
  constructor(db) {
    this.db = db;
  }

  getAll() {
    return this.db.getAllData();
  }

  create(object) {
    const manipule = object;
    manipule.tot = 0;
    object.products.forEach((element, key) => {
      manipule.tot += (Products[element.id].price * element.count);
      manipule.products[key].totUnit = (Products[element.id].price * element.count);
      manipule.products[key].name = Products[element.id].name;
      manipule.products[key].price = Products[element.id].price;
    });
    manipule.date = new Date();
    return new Promise((resolve, reject) => {
      this.db.insert(manipule, (err, newDoc) => {
        if (err) {
          reject(err);
        }
        resolve(newDoc);
      });
    });
  }

  delete(id) {
    this.db.remove({ _id: id });
  }
}

export default OrderService;
