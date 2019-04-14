const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const exam = db.define(
  'Exame',
  {
    pedido: { type: Sequelize.STRING },
    digitalizacao: { type: Sequelize.STRING },
    realizado: { type: Sequelize.TINYINT },
    data_pedido: { type: Sequelize.DATE },
    data_reaizado: { type: Sequelize.DATE },
    preparo: { type: Sequelize.STRING },
    observacao: { type: Sequelize.STRING },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Exame_teste' }
)

module.exports = exam
