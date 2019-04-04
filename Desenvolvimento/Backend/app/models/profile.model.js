const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Perfil',
  {
    nome: { type: Sequelize.STRING }
  },
  { tableName: 'Perfil_teste' }
)

module.exports = user
