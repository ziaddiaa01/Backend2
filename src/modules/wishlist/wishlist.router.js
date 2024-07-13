import { Router } from "express"
import * as wishlistController from "./wishlist.controller.js"
<<<<<<< HEAD:src/modules/wishlist/wishlist.router.js
import { auth } from "../../middleware/auth.js"

const router = Router()

router.patch('/add-product-wishlist/:productId',auth(),wishlistController.addpPoductWishList)

router.patch('/add-book-wishlist/:bookId',auth(),wishlistController.addBookWishList)

router.patch('/add-course-wishlist/:courseId',auth(),wishlistController.addCourseWishList)

router.delete('/remove-product-wishlist/:productId',auth(),wishlistController.removeProductWishList)

router.delete('/remove-book-wishlist/:bookId',auth(),wishlistController.removeBookWishList)

router.delete('/remove-course-wishlist/:courseId',auth(),wishlistController.removeCourseWishList)

router.get('/getwishlist',auth(),wishlistController.getUserWishList)
=======
import { auth, roles } from "../../middleware/auth.js"

const router = Router()

router.patch('/add-product-wishlist/:productId',auth([roles.user]),wishlistController.addpPoductWishList)

router.patch('/add-book-wishlist/:bookId',auth([roles.user]),wishlistController.addBookWishList)

router.patch('/add-course-wishlist/:courseId',auth([roles.user]),wishlistController.addCourseWishList)

router.delete('/remove-product-wishlist/:productId',auth([roles.user]),wishlistController.removeProductWishList)

router.delete('/remove-book-wishlist/:bookId',auth([roles.user]),wishlistController.removeBookWishList)

router.delete('/remove-course-wishlist/:courseId',auth([roles.user]),wishlistController.removeCourseWishList)

router.get('/getwishlist',auth([roles.user]),wishlistController.getUserWishList)
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/wishlist/wishlist.router.js

export default router