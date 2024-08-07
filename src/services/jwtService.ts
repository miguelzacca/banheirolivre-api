import jwt, { JwtPayload } from 'jsonwebtoken'
import { config } from '../config'

export const extractJwtPayload = (token: string, payloadName: string) => {
  const payload = jwt.verify(token, config.env.SECRET) as JwtPayload
  return payload[payloadName]
}
