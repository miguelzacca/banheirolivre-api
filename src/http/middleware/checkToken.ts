import { extractJwtPayload } from '../../services/jwtService'
import { Middleware } from '../../types/global'

export const checkStudentToken: Middleware = (req, res, next) => {
  try {
    const { token } = req.params || req.cookies

    if (!token) {
      res.sendStatus(403)
      return
    }

    const email = extractJwtPayload(token, 'email')
    const isStudentEmail = email.split('@')[1].split('.')[0] === 'estudante'

    if (!isStudentEmail) {
      res.sendStatus(403)
      return
    }

    next()
  } catch {
    res.status(401).json('Token invalido')
  }
}

export const checkTeacherToken: Middleware = (req, res, next) => {
  try {
    const { token } = req.params || req.cookies

    if (!token) {
      res.sendStatus(403)
      return
    }

    const email = extractJwtPayload(token, 'email')
    const isStudentEmail = email.split('@')[1].split('.')[0] === 'edu'

    if (!isStudentEmail) {
      res.sendStatus(403)
      return
    }

    next()
  } catch {
    res.status(401).json('Token invalido')
  }
}
