import { db } from '../sequelize'
import { Room } from './Room.js'
import { Teacher } from './Teacher.js'

export const TeacherRoom = db.define('TeacherRoom', {}, { timestamps: false })

Teacher.belongsToMany(Room, { through: TeacherRoom, foreignKey: 'teacherId' })
Room.belongsToMany(Teacher, { through: TeacherRoom, foreignKey: 'roomId' })
