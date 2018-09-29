import express from 'express';
import router from './src/routers/products'

const app = express();
const PORT = 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
