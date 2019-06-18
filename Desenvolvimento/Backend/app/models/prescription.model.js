const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')
const medicine = require('./medicine.model')

const prescription = db.define(
  'Prescricao',
  {
	  id_pediatra: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: doctor,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '',
    id_medicamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: medicine,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '', 
	
    quantidade: { type: Sequelize.DECIMAL }, // DECIMAL NULL COMMENT '',
    medida: { type: Sequelize.STRING }, // VARCHAR(45) NULL COMMENT '',
    observacoes: { type: Sequelize.STRING },
	data_prescricao: { type: Sequelize.DATE }, // DATETIME NULL COMMENT '',
    recorrencia: { type: Sequelize.TINYINT(1) } // DATETIME NULL COMMENT '',
	
  },
  { tableName: 'Prescricao' }
)

module.exports = prescription
