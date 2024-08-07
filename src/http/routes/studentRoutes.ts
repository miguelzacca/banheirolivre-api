import { Router } from 'express'
import { checkStudentToken } from '../middleware/checkToken.js'
import * as controller from '../controllers/studentControllers.js'

export const router = Router()

router.get('/', checkStudentToken, controller.getStudante)
