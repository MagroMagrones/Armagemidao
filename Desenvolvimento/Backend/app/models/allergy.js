const Sequelize = require('sequelize')
const db = require('../../config/db')

const allergy = db.define(
  'Alergia',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    tipo: { type: Sequelize.STRING }, // VARCHAR(45) NOT NULL COMMENT '',
    data: { type: Sequelize.DATE }
  },
  { tableName: 'Medicamento' }
)

module.exports = allergy
