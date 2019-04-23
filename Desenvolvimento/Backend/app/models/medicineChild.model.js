const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')
const medicine = require('./medicine.model')

const medicine_child = db.define(
  'Medicamento_Crianca',
  {
    id_medicamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: medicine,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '',
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '',
    quantidade: { type: Sequelize.DECIMAL }, // DECIMAL NULL COMMENT '',
    medida: { type: Sequelize.STRING }, // VARCHAR(45) NULL COMMENT '',
    data_medicacao: { type: Sequelize.DATE } // DATETIME NULL COMMENT '',
  },
  { tableName: 'Medicamento_Crianca' }
)

module.exports = medicine_child
