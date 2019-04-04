const Sequelize = require('sequelize')
const db = require('../../config/db')

const vaccineApplication = db.define(
  'Aplicacao_Vacina',
  {
    id_vacina: { type: Sequelize.INTEGER },
    id_crianca: { type: Sequelize.INTEGER },
    data_aplicacao: { type: Sequelize.DATE },
    alergia: { type: Sequelize.INTEGER },
    dose_numero: { type: Sequelize.INTEGER }
  },
  { tableName: 'Aplicacao_Vacina_teste' }
)

module.exports = vaccineApplication
