import { DataTypes } from 'sequelize'
import { db } from '../sequelize.js'
import { Teacher } from './Teacher.js'
import { Student } from './Student.js'

export const Room = db.define('Room', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },

  roomName: {
    type: DataTypes.STRING(32),
    allowNull: false,
    unique: true,
  },
})

Teacher.hasMany(Room, { foreignKey: 'teacherId', onDelete: 'CASCADE' })
Room.belongsTo(Teacher, { foreignKey: 'teacherId' })

Room.hasMany(Student, { foreignKey: 'roomId', onDelete: 'CASCADE' })
Student.belongsTo(Room, { foreignKey: 'roomId' })
