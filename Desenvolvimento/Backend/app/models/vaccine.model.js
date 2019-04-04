const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Vacina',
  {
    nome: { type: Sequelize.STRING },
    idade_inicio: { type: Sequelize.TINYINT },
    idade_fim: { type: Sequelize.TINYINT },
    dose_multipla: { type: Sequelize.TINYINT },
    id_usuario: { type: Sequelize.INTEGER }
  },
  { tableName: 'Vacina_teste' }
)

module.exports = user
