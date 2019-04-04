const Sequelize = require('sequelize')
const db = require('../../config/db')

const bound = db.define(
  'Vinculo',
  {
    data_vinculo: { type: Sequelize.DATE },
    tipo_vinculo: { type: Sequelize.STRING },
    id_usuario: { type: Sequelize.INTEGER },
    id_crianca: { type: Sequelize.INTEGER }
  },
  { tableName: 'Vinculo_teste' }
)

module.exports = bound
