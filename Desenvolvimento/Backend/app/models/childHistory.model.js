const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const childHistory = db.define(
  'Historico_Fisico',
  {
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    peso: { type: Sequelize.DECIMAL },
    altura: { type: Sequelize.DECIMAL },
    pressao_arterial: { type: Sequelize.STRING },
    temperatura: { type: Sequelize.DECIMAL }, 
	data_medicao: { type: Sequelize.DATETIME}
  },
  { tableName: 'Historico_Fisico' }
)

module.exports = childHistory
