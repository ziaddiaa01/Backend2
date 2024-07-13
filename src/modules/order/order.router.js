import { Router } from 'express';
import * as orderController from './order.controller.js';
<<<<<<< HEAD:src/modules/order/order.router.js
import { auth } from '../../middleware/auth.js';
=======
import { auth, roles } from '../../middleware/auth.js';
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/order/order.router.js

const router = Router();

router.post('/create-order',auth(),orderController.createOrder);
router.get('/getall',auth(),orderController.getUserOrders);
router.put('/status/:orderId',orderController.updateOrderStatus);
router.put('/cancel/:orderId',auth(),orderController.cancelOrder);
<<<<<<< HEAD:src/modules/order/order.router.js
router.get('/getbyid/:orderId',orderController.getOrderById);

export default router;
=======

export default router;
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/order/order.router.js
