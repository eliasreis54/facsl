import { Router } from 'express';
import OrderController from '../controllers/order_controller';

const routerOrder = Router();

routerOrder.post('/order', (req, res) => {
  const controller = new OrderController(req, res);
  return controller.create();
});

routerOrder.delete('/order/:id', (req, res) => {
  const controller = new OrderController(req, res);
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

routerOrder.get('/order', (req, res) => {
  const controller = new OrderController(req, res);
  return controller.getAll();
});

export default routerOrder;
