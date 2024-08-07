import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { db } from './database/sequelize.js'
import { config } from './config.js'
import { limiter } from './http/middleware/limiter.js'
import { notFound } from './http/middleware/notFound.js'
import { router as routes } from './http/routes/routersHandler.js'

const app = express()

app.use(cors(config.cors))
app.use(express.json())
app.use(cookieParser())
app.use(compression())
app.use(limiter)

app.get('/', (req, res) => {
  res.status(200).json('Hello, world!')
})

app.use('/api', routes)
app.use(notFound)

db.sync({ force: true })
  .then(() => {
    const { PORT, HOST } = config.env

    app.listen(PORT, () => {
      console.log(`Running... ${HOST}`)
    })
  })
  .catch((err) => console.error(err))
