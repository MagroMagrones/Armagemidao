const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Perfil_Permissao',
  {
    id_perfil: { type: Sequelize.INTEGER },
    id_permissao: { type: Sequelize.INTEGER }
  },
  { tableName: 'Perfil_Permissao_teste' }
)

module.exports = user
