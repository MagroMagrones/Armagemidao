const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const childHistory = db.define(
  'Historico_crianca',
  {
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    peso: { type: Sequelize.DECIMAL },
    altura: { type: Sequelize.DECIMAL }
  },
  { tableName: 'Historico_crianca' }
)

module.exports = childHistory
