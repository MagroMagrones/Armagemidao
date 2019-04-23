const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const appointment = db.define(
  'Consulta',
  {
    data_consulta: { type: Sequelize.DATE },
    retorno: { type: Sequelize.TINYINT(1) },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Consulta' }
)

module.exports = appointment
