import { config } from '../../config'
import { Student } from '../../database/models/Student'
import { sendLink } from '../../services/emailService'
import { extractJwtPayload } from '../../services/jwtService'
import { Controller } from '../../types/global'
import { handleHttpErrorResponse } from '../../utils/handleHttpErrorResponse'
import { zodValidator } from '../../utils/zodValidator.js'
import jwt from 'jsonwebtoken'
import { Teacher } from '../../database/models/Teacher'

export const studentLogin: Controller = async (req, res) => {
  try {
    const { token } = req.params
    const { room_id } = req.query

    const email = extractJwtPayload(token, 'email')
    const studentName = email.split('@')[0]

    await Student.create({
      studentName,
      email,
      roomId: room_id,
    })

    res.status(201).redirect(config.env.ORIGIN_HOST)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const studentRegister: Controller = async (req, res) => {
  try {
    const { email } = zodValidator(req.body)

    const isStudentEmail = email.split('@')[1].split('.')[0] === 'estudante'

    if (!isStudentEmail) {
      throw { custom: { code: 401, msg: 'Este não é um email de estudante.' } }
    }

    const paramToken = jwt.sign({ email }, config.env.SECRET)
    const link = `${config.env.HOST}/api/auth/student-login/${paramToken}`

    await sendLink({
      to: email,
      subject: 'Link de Verificação',
      link,
    })

    res.status(200).json({ msg: 'Verifique seu email.' })
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const teacherLogin: Controller = async (req, res) => {
  try {
    const { token } = req.params

    const email = extractJwtPayload(token, 'email')
    const teacherName = email.split('@')[0]

    await Teacher.create({
      teacherName,
      email,
    })

    res.status(201).redirect(config.env.ORIGIN_HOST)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}

export const teacherRegister: Controller = async (req, res) => {
  try {
    const { email } = zodValidator(req.body)

    const isTeacherEmail = email.split('@')[1].split('.')[0] === 'edu'

    if (!isTeacherEmail) {
      throw { custom: { code: 401, msg: 'Este não é um email de professor.' } }
    }

    const paramToken = jwt.sign({ email }, config.env.SECRET)
    const link = `${config.env.HOST}/api/auth/teacher-login/${paramToken}`

    await sendLink({
      to: email,
      subject: 'Link de Verificação',
      link,
    })

    res.status(200).json({ msg: 'Verifique seu email.' })
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}
