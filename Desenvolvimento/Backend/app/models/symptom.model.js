const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const symptom = db.define(
  'Sintoma',
  {
    tipo: { type: Sequelize.STRING },
    data: { type: Sequelize.DATE },
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
  { tableName: 'Sintoma_teste' }
)

module.exports = symptom
