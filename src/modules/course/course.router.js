import { Router } from 'express';
import {
    addCourse,
    updateCourse,
    deleteCourse,
    searchCourse,
    getCourseById,
    getAllCourses
} from './course.controller.js';

const router = Router();

<<<<<<< HEAD:src/modules/course/course.router.js
router.post('/add', addCourse);
router.put('/course/:courseId', updateCourse);
router.delete('/delete/:courseId', deleteCourse);
router.get('/course/search', searchCourse);
router.get('/getById/:courseId', getCourseById);
router.get('/allCourses', getAllCourses);
=======
router.post('/course', addCourse);
router.put('/course/:courseId', updateCourse);
router.delete('/course/:courseId', deleteCourse);
router.get('/course/search', searchCourse);
router.get('/course/:courseId', getCourseById);
router.get('/courses', getAllCourses);
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/course/course.router.js

export default router;
