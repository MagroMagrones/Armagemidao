const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const childHistory = db.define(
  'Historico_crianca',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    peso: { type: Sequelize.DECIMAL },
    altura: { type: Sequelize.DECIMAL },
    pressao_arterial: { type: Sequelize.STRING },
    temperatura: { type: Sequelize.DECIMAL }
  },
  { tableName: 'Historico_crianca' }
)

module.exports = childHistory
