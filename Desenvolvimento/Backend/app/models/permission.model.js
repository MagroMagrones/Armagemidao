const Sequelize = require('sequelize')
const db = require('../../config/db')

const permission = db.define(
  'Permissao',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: { type: Sequelize.STRING }
  },
  { tableName: 'Permissao' }
)

module.exports = permission
