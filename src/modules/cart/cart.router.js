import { Router } from 'express';
import *as cartController from './cart.controller.js';
<<<<<<< HEAD:src/modules/cart/cart.router.js
import { auth } from '../../middleware/auth.js';
=======
import { auth, roles } from '../../middleware/auth.js';
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/cart/cart.router.js

const router = Router();

router.post('/add',auth(), cartController.addItemToCart);
router.delete('/remove/:itemId',auth(),cartController.removeItemFromCart);
router.get('/getall',auth(), cartController.getCartItems);

<<<<<<< HEAD:src/modules/cart/cart.router.js
export default router;
=======
export default router;
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/cart/cart.router.js
