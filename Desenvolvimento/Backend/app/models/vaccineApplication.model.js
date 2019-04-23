const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')
const vaccine = require('./vaccine.model')

const vaccineApplication = db.define(
  'Vacina_Crianca',
  {
    id_vacina: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: vaccine,
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
    },
    data_aplicacao: { type: Sequelize.DATE }
  },
  { tableName: 'Vacina_Crianca' }
)

module.exports = vaccineApplication
