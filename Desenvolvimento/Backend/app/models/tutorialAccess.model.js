const Sequelize = require('sequelize')
const db = require('../../config/db')

const tutorialAccess = db.define(
  'Acesso_Tutorial',
  {
    id_usuario: { type: Sequelize.INTEGER },
    tipo_acesso: { type: Sequelize.STRING },
    id_tutorial: { type: Sequelize.INTEGER }
  },
  { tableName: 'Acesso_Tutorial_teste' }
)

module.exports = tutorialAccess
