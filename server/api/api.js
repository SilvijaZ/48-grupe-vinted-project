import express from 'express';


import { accountRouter } from './register/account.js';
import { itemsRouter } from './items/items.js';
import { cartRouter } from './cart/cart.js';
import { uploadRouter } from './upload/upload.js';


const apiRouter = express.Router();

apiRouter.use('/account', accountRouter);
apiRouter.use('/items', itemsRouter);
apiRouter.use('/upload', uploadRouter);
apiRouter.use('/cart', cartRouter);

export { apiRouter };