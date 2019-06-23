const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Usuario',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: { type: Sequelize.STRING, unique: true },
    nome: { type: Sequelize.STRING },
    admin: { type: Sequelize.TINYINT(1), allowNull: false },
    ativo: { type: Sequelize.TINYINT(1), allowNull: false },
    rg: { type: Sequelize.STRING },
    cpf: { type: Sequelize.STRING },
    data_nascimento: { type: Sequelize.DATE }
  },
  { tableName: 'Usuario' }
)

module.exports = user
