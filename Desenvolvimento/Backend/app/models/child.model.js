const Sequelize = require('sequelize')
const db = require('../../config/db')

const child = db.define(
  'Crianca',
  {
    nome: { type: Sequelize.STRING, allowNull: false },
    data_nascimento: { type: Sequelize.DATE, allowNull: false },
    genero: { type: Sequelize.STRING, allowNull: false },
    tipo_sanguineo: { type: Sequelize.STRING },
    alergias: { type: Sequelize.STRING },
    rg: { type: Sequelize.STRING },
    cor_pele: { type: Sequelize.STRING },
    cor_olhos: { type: Sequelize.STRING },
    cor_cabelo: { type: Sequelize.STRING }
  },
  { tableName: 'Crianca_teste' }
)

module.exports = child
