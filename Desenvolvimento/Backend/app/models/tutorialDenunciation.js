const Sequelize = require('sequelize')
const db = require('../../config/db')

const tutorialDenunciation = db.define(
  'Crianca',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_tutorial: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    },
    data: { type: Sequelize.DATE, allowNull: false },
    motivo: { type: Sequelize.STRING, allowNull: false }
  },
  { tableName: 'Denuncia_Tutorial' }
)

module.exports = tutorialDenunciation
