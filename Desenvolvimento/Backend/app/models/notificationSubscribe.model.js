const Sequelize = require('sequelize')
const db = require('../../config/db')

const user = require('./user.model')

const notSub = db.define(
  'NotificacaoSub',
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: 'id'
      }
    },
    endpoint: { type: Sequelize.STRING, unique: true },
    expirationTime: { type: Sequelize.STRING },
    p256dh: { type: Sequelize.STRING },
    auth: { type: Sequelize.STRING }
  },
  { tableName: 'Notificacao_Subscription' }
)

module.exports = notSub
