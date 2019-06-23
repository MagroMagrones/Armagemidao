const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')

const doctor = db.define(
  'Pediatra',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    },
    crm: { type: Sequelize.STRING, allowNull: false }, // INT NOT NULL COMMENT '',
    subespecialidade: { type: Sequelize.STRING }, // VARCHAR(45) NULL COMMENT '',
    validado_adm: { type: Sequelize.TINYINT(1) } // TINYINT(1) NOT NULL COMMENT '',
  },
  { tableName: 'Pediatra' }
)

module.exports = doctor
