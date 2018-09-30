import express from 'express';
import Nedb from 'nedb';
import BodyParser from 'body-parser';
import routerProducts from './src/routers/products';
import routerOrder from './src/routers/order';

const app = express();
const PORT = 80;
const db = new Nedb();

app.use(BodyParser.json());
app.use(routerProducts);
app.use(routerOrder);
app.db = db;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
