import { Router } from 'express'
import { router as authRoutes } from './authRoutes.js'
import { router as studentRoutes } from './studentRoutes.js'

export const router = Router()

router.use('/auth', authRoutes)
router.use('/student', studentRoutes)
