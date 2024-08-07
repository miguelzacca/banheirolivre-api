import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'

export const Teacher = db.define(
  'Teacher',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    teacherName: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  },
)
