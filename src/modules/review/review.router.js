import { Router } from "express";
import * as reviewController from './review.controller.js'
import { auth, roles } from "../../middleware/auth.js";

const router =Router()

router.post('/add',auth(),reviewController.addReview)

router.get('/getAll',auth(),reviewController.getUserReviews)

router.put('/update/:reviewId',auth(),reviewController.updateReview)

router.delete('/delete/:reviewId',auth(),reviewController.deleteReview)

export default router
<<<<<<< HEAD:src/modules/review/review.router.js
=======

>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/review/review.router.js
