const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Usuario',
  {
    email: { type: Sequelize.STRING },
    nome: { type: Sequelize.STRING }
  },
  { tableName: 'Usuario_teste' }
)

module.exports = user
