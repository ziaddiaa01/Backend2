import { Router } from "express";
import * as couponRouter from './coupon.controller.js'
import { auth, roles } from "../../middleware/auth.js";

const router= Router()

router.post('/create',auth(),couponRouter.addCoupon)

export default router
<<<<<<< HEAD:src/modules/coupon/coupon.router.js
=======

>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/coupon/coupon.router.js
