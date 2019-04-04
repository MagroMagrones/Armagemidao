const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Permissao',
  {
    nome: { type: Sequelize.STRING }
  },
  { tableName: 'Permissao_teste' }
)

module.exports = user
