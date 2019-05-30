const notificationModel = require('../models/notification.model')

const db = require('../../config/db')

module.exports = {
  getAll: async () => {
    let not = []

    await notificationModel.findAll().then(res => {
      if (res.length > 0) not = [...not, ...res]
    })

    return not
  },
  get: async payload => {
    let not = []

    await db
      .query(
        `SELECT Notificacao.titulo, Notificacao.texto, Notificacao.id_exame,
        Notificacao_Subscription.id_usuario, Notificacao_Subscription.endpoint, Notificacao_Subscription.expirationTime, Notificacao_Subscription.p256dh, Notificacao_Subscription.auth
        FROM Notificacao
        JOIN  Exame on Notificacao.id_exame = Exame.id
        JOIN Vinculo ON Exame.id_crianca = Vinculo.id_crianca
        JOIN Notificacao_Subscription ON Notificacao_Subscription.id_usuario = Vinculo.id_usuario
        WHERE dia =:dia AND hora =:hora;`,
        {
          replacements: { dia: payload.dia, hora: payload.hora },
          type: db.QueryTypes.SELECT
        }
      )
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    await db
      .query(
        `SELECT Notificacao.titulo, Notificacao.texto, Notificacao.id_consulta,
        Notificacao_Subscription.id_usuario, Notificacao_Subscription.endpoint, Notificacao_Subscription.expirationTime, Notificacao_Subscription.p256dh, Notificacao_Subscription.auth
        FROM Notificacao
        JOIN  Consulta on Notificacao.id_consulta = Consulta.id
        JOIN Vinculo ON Consulta.id_crianca = Vinculo.id_crianca
        JOIN Notificacao_Subscription ON Notificacao_Subscription.id_usuario = Vinculo.id_usuario
        WHERE dia =:dia AND hora =:hora;`,
        {
          replacements: { dia: payload.dia, hora: payload.hora },
          type: db.QueryTypes.SELECT
        }
      )
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    await db
      .query(
        `SELECT Notificacao.titulo, Notificacao.texto, Notificacao.id_medicamento_crianca,
        Notificacao_Subscription.id_usuario, Notificacao_Subscription.endpoint, Notificacao_Subscription.expirationTime, Notificacao_Subscription.p256dh, Notificacao_Subscription.auth
        FROM Notificacao
        JOIN  Medicamento_Crianca on Notificacao.id_medicamento_crianca = Medicamento_Crianca.id
        JOIN Vinculo ON Medicamento_Crianca.id_crianca = Vinculo.id_crianca
        JOIN Notificacao_Subscription ON Notificacao_Subscription.id_usuario = Vinculo.id_usuario
        WHERE dia =:dia AND hora =:hora;`,
        {
          replacements: { dia: payload.dia, hora: payload.hora },
          type: db.QueryTypes.SELECT
        }
      )
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    await db
      .query(
        `SELECT Notificacao.titulo, Notificacao.texto, Notificacao.id_vacina_crianca,
        Notificacao_Subscription.id_usuario, Notificacao_Subscription.endpoint, Notificacao_Subscription.expirationTime, Notificacao_Subscription.p256dh, Notificacao_Subscription.auth
        FROM Notificacao
        JOIN  Vacina_Crianca on Notificacao.id_vacina_crianca = Vacina_Crianca.id
        JOIN Vinculo ON Vacina_Crianca.id_crianca = Vinculo.id_crianca
        JOIN Notificacao_Subscription ON Notificacao_Subscription.id_usuario = Vinculo.id_usuario
        WHERE dia =:dia AND hora =:hora;`,
        {
          replacements: { dia: payload.dia, hora: payload.hora },
          type: db.QueryTypes.SELECT
        }
      )
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    return not
  },
  set: async data => {
    const resCreateNot = await notificationModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateNot.dataValues.id)
      return { err: 'Falha ao cadastrar notificação' }
    else
      return {
        message: 'Notificação cadastrada com sucesso',
        id: resCreateNot.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
