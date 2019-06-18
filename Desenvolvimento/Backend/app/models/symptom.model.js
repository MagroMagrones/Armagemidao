const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const symptom = db.define(
  'Historico_Sintoma',
  {
    tipo: { type: Sequelize.STRING },
    data: { type: Sequelize.DATE },
	intensidade: { type: Sequelize.STRING },
	recorrente: { type: Sequelize.TINYINT(1) },
    observacao: { type: Sequelize.STRING },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Historico_Sintoma' }
)

module.exports = symptom
