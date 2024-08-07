import { config } from '../../config'
import { Middleware } from '../../types/global'

export const notFound: Middleware = (req, res) => {
  res.status(404).redirect(config.env.ORIGIN_HOST)
}
