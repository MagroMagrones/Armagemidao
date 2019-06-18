const Sequelize = require('sequelize')
const db = require('../../config/db')
const user = require('./user.model')
const child = require('./child.model')

const boundPermission = db.define(
  'Vinculo_Permissao',
  {
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
    }, 
	
	tipo: { type: Sequelize.STRING },
	gerencia_crianca: { type: Sequelize.TINYINT(1) }, 
	gerencia_medicamento: { type: Sequelize.TINYINT(1) },
	gerencia_vacina: { type: Sequelize.TINYINT(1) },
	gerencia_consulta: { type: Sequelize.TINYINT(1) },
	gerencia_exame: { type: Sequelize.TINYINT(1) },
	gerencia_sintoma: { type: Sequelize.TINYINT(1) }
	
  },
  { tableName: 'Vinculo_Permissao' }
)

module.exports = boundPermission