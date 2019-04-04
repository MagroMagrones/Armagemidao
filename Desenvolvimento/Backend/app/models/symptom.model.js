const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Sintoma',
  {
    tipo: { type: Sequelize.STRING },
    data: { type: Sequelize.DATE },
    observacao: { type: Sequelize.STRING },
    id_crianca: { type: Sequelize.INTEGER }
  },
  { tableName: 'Sintoma_teste' }
)

module.exports = user
