const Sequelize = require('sequelize')
const db = require('../../config/db')

const vaccine = db.define(
  'Vacina',
  {
    nome: { type: Sequelize.STRING },
    idade: { type: Sequelize.STRING },
    dose: { type: Sequelize.TINYINT },
    doencas_evitadas: { type: Sequelize.STRING }
  },
  { tableName: 'Vacina' }
)

module.exports = vaccine
