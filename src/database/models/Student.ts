import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'
import { Room } from './Room.js'

export const Student = db.define(
  'Student',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    studentName: {
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

Room.hasMany(Student, { foreignKey: 'roomId', onDelete: 'CASCADE' })
Student.belongsTo(Room, { foreignKey: 'roomId' })
