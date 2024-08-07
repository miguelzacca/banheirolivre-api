import { CorsOptions } from 'cors'
import { config as dotEnvConfig } from 'dotenv'
import { CookieOptions } from 'express'

dotEnvConfig()

interface Env {
  PORT: number
  HOST: string
  ORIGIN_HOST: string
  SMTP_USER: string
  SMTP_PASS: string
  SECRET: string
}

export const config = {
  get env() {
    return {
      PORT: Number(process.env.PORT),
      HOST: process.env.HOST,
      ORIGIN_HOST: process.env.ORIGIN_HOST,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      SECRET: process.env.SECRET,
    } as Env
  },

  get cookie() {
    return {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    } as CookieOptions
  },

  get cors() {
    return {
      origin: this.env.ORIGIN_HOST,
    } as CorsOptions
  },
}
