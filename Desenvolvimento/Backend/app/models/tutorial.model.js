const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')

const tutorial = db.define(
  'Tutorial',
  {
    titulo: { type: Sequelize.STRING },
    instrucoes: { type: Sequelize.STRING },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    }
  },
  { tableName: 'Tutorial_teste' }
)

module.exports = tutorial
