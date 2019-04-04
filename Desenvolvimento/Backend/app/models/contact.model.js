const Sequelize = require('sequelize')
const db = require('../../config/db')

const contact = db.define(
  'Contato',
  {
    id_contato: { type: Sequelize.INTEGER },
    telefone_celular: { type: Sequelize.STRING },
    telefone_residencial: { type: Sequelize.STRING },
    telefone_comercial: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    id_usuario: { type: Sequelize.INTEGER }
  },
  { tableName: 'Contato_teste' }
)

module.exports = contact
