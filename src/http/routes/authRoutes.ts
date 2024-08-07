import { Router } from 'express'
import * as controller from '../controllers/authControllers.js'
import {
  checkTeacherToken,
  checkStudentToken,
} from '../middleware/checkToken.js'

export const router = Router()

router.post('/student-register', controller.studentRegister)

router.get('/student-login', checkStudentToken, controller.studentLogin)

router.post('/teacher-register', controller.teacherRegister)

router.get('/teacher-login', checkTeacherToken, controller.studentLogin)
