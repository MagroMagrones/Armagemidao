const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')

const tutorial = db.define(
  'Tutorial',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: { type: Sequelize.STRING },
    instrucoes: { type: Sequelize.STRING }
    // id_usuario: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: user,
    //     key: 'id'
    //   }
    // }
  },
  { tableName: 'Tutorial' }
)

module.exports = tutorial
