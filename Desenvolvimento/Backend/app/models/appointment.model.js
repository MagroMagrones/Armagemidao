const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')
const child = require('./child.model')

const appointment = db.define(
  'Consulta',
  {
    data_consulta: { type: Sequelize.DATE },
    retorno: { type: Sequelize.TINYINT },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Consulta_teste' }
)

module.exports = appointment
