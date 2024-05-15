import express from 'express';
import { apiRegisterPost } from './apiRegisterPost.js';
import { apiLoginPost } from './apiLoginPost.js';
// import { apiLoginGet } from './apiLoginGet.js';

const accountRouter = express.Router();

accountRouter.post('/register', apiRegisterPost);
accountRouter.post('/login', apiLoginPost);
// accountRouter.get('/login', apiLoginGet);

export { accountRouter };