const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Tutorial',
  {
    titulo: { type: Sequelize.STRING },
    data_criacao: { type: Sequelize.DATE },
    instrucoes: { type: Sequelize.STRING }
  },
  { tableName: 'Tutorial_teste' }
)

module.exports = user
