const Sequelize = require('sequelize')
const db = require('../../config/db')

const allergy = db.define(
  'Historico_Alergia',
  {
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    alergia: { type: Sequelize.STRING }, // VARCHAR(45) NOT NULL COMMENT '',
	intensidade: { type: Sequelize.STRING },
    data_deteccao: {type: Sequelize.DATE },
	recorrente: { type: Sequelize.TINYINT(1) }
	
  },
  { tableName: 'Historico_Alergia' }
)

module.exports = allergy
