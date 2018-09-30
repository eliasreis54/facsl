import { Router } from 'express';
import Controller from '../controllers/products_controller';

const router = Router();

router.get('/products', (req, res) => {
  const controller = new Controller(req, res);
  return controller.retunrProducts();
});

export default router;
