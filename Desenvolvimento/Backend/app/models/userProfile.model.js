const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Perfil_Usuario',
  {
    id_usuario: { type: Sequelize.INTEGER },
    id_perfil: { type: Sequelize.INTEGER }
  },
  { tableName: 'Perfil_Usuario_teste' }
)

module.exports = user
