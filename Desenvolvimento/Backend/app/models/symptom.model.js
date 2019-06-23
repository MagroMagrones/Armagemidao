const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const symptom = db.define(
  'Sintoma',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
  { tableName: 'Sintoma' }
)

module.exports = symptom
