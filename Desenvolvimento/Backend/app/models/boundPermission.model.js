const Sequelize = require('sequelize')
const db = require('../../config/db')
const bound = require('./bound.model')
const permission = require('./permission.model')

const boundPermission = db.define(
  'Permissao_Vinculo',
  {
    id_vinculo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: bound,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '',
    id_permissao: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: permission,
        key: 'id'
      }
    }, // INT NOT NULL COMMENT '',
    tipo: { type: Sequelize.STRING } // VARCHAR(45) NULL COMMENT '',
  },
  { tableName: 'Permissao_Vinculo' }
)

module.exports = boundPermission
