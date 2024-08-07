import { Student } from '../../database/models/Student'
import { extractJwtPayload } from '../../services/jwtService'
import { Controller } from '../../types/global'
import { handleHttpErrorResponse } from '../../utils/handleHttpErrorResponse'

export const getStudante: Controller = async (req, res) => {
  try {
    const { token } = req.params

    const email = extractJwtPayload(token, 'email')

    const studante = await Student.findOne({
      where: { email },
      attributes: {
        exclude: ['id'],
      },
    })

    res.status(200).json(studante)
  } catch (err) {
    handleHttpErrorResponse(res, err)
  }
}
