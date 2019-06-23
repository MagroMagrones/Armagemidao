const Sequelize = require('sequelize')
const db = require('../../config/db')

const vaccine = db.define(
  'Vacina',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: { type: Sequelize.STRING },
    idade_inicio: { type: Sequelize.STRING },
    idade_fim: { type: Sequelize.STRING },
    dose_multipla: { type: Sequelize.TINYINT },
    validado_adm: { type: Sequelize.TINYINT }
  },
  { tableName: 'Vacina' }
)

module.exports = vaccine
