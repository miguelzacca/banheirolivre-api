import { Response } from 'express'

export const handleHttpErrorResponse = (res: Response, err: any) => {
  if (err.zod) {
    res.status(422).json(err)
    return
  }

  if (err.custom) {
    const { code, msg } = err.custom

    if (!msg) {
      res.sendStatus(code)
      return
    }

    res.status(code).json(msg)
    return
  }

  console.error(err)
  res
    .status(500)
    .json({
      msg: 'Ocurreu um erro no servidor. Por favor, tente novamente mais tarde.',
    })
}
