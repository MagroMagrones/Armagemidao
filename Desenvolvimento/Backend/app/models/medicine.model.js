const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Medicamento',
  {
    nome: { type: Sequelize.STRING },
    data_cadastro: { type: Sequelize.DATE },
    tipo: { type: Sequelize.STRING },
    id_usuario: { type: Sequelize.INTEGER }
  },
  { tableName: 'Medicamento_teste' }
)

module.exports = user
