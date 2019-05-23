const Sequelize = require('sequelize')
const db = require('../../config/db')

const allergy = db.define(
  'Alergia',
  {
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    },
    tipo: { type: Sequelize.STRING }, // VARCHAR(45) NOT NULL COMMENT '',
    data: {type: Sequelize.DATE}
  },
  { tableName: 'Medicamento' }
)

module.exports = allergy
