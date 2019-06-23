const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')
const child = require('./child.model')

const bound = db.define(
  'Vinculo',
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
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Vinculo' }
)

module.exports = bound
