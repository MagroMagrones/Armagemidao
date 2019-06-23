const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')

const contact = db.define(
  'Contato',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    telefone_celular: { type: Sequelize.STRING },
    telefone_residencial: { type: Sequelize.STRING },
    telefone_comercial: { type: Sequelize.STRING },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    }
  },
  { tableName: 'Contato' }
)

module.exports = contact
