const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Medicamento',
  {
    nome: { type: Sequelize.STRING },
    codigo: { type: Sequelize.STRING }
  },
  { tableName: 'Medicamento_teste' }
)

module.exports = user
