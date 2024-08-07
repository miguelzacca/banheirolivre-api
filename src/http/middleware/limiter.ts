import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({
  windowMs: 60_000,
  max: 100,
})
