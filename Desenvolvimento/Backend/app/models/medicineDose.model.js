const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = db.define(
  'Dose_Medicamento',
  {
    quantidade: { type: Sequelize.DOUBLE },
    medida: { type: Sequelize.STRING },
    id_medicamento: { type: Sequelize.INTEGER },
    id_crianca: { type: Sequelize.INTEGER }
  },
  { tableName: 'Dose_Medicamento_teste' }
)

module.exports = user
