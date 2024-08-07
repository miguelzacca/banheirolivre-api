import { Sequelize } from 'sequelize'

export const db = new Sequelize({
  storage: './.data/database.db',
  logging: false,
  dialect: 'sqlite',
})

db.authenticate()
  .then((res) => res)
  .catch((err) => console.error(err))
