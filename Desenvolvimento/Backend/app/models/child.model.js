const Sequelize = require('sequelize')
const db = require('../../config/db')

const child = db.define(
  'Crianca',
  {
    nome: { type: Sequelize.STRING },
    data_nascimento: { type: Sequelize.DATE },
    genero: { type: Sequelize.STRING },
    peso: { type: Sequelize.DECIMAL },
    altura: { type: Sequelize.DECIMAL },
    tipo_sanguineo: { type: Sequelize.STRING },
    alergias: { type: Sequelize.STRING },
    rg: { type: Sequelize.STRING },
    raca: { type: Sequelize.STRING },
    cor_cabelo: { type: Sequelize.STRING }
  },
  { tableName: 'Crianca_teste' }
)

module.exports = child
