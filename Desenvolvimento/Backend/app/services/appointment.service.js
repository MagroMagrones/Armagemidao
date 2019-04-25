const appointmentController = require('../controllers/appointment.controller')
const notificationController = require('../controllers/notification.controller')
const boundController = require('../controllers/bound.controller')
const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')

const moment = require('moment')
const _ = require('lodash')
module.exports = {
  getAll: async () => {
    let res = await appointmentController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'id_crianca', 'id', 'id_usuario')
    if (checkedData.errMessage) return checkedData.errMessage

    let payload = checkedData.payload
    let res = []

    if (payload['id_usuario']) {
      let bounds = await boundController.get(payload)
      let promises = []
      bounds.map(async bound => {
        await promises.push(
          appointmentController.get({ id_crianca: bound.id_crianca })
        )
      })
      await Promise.all(promises).then(resolved => {
        resolved.map(array => {
          array.map(item => {
            res.push(item)
          })
        })

        return resolved
      })
    } else res = await appointmentController.get(payload)

    res = await _.orderBy(res, ['data_consulta'], ['desc'])

    moment.locale('pt-br')
    let appointments = { pastAppointmens: [], futureAppointments: [] }
    await res.map(i => {
      let apDate = moment(i.data_consulta).format('LLLL')
      let appointmentData = {
        createdAt: i.createdAt,
        data_consulta: apDate,
        id: i.id,
        id_crianca: i.id_crianca,
        retorno: i.retorno,
        updatedAt: i.updatedAt
      }
      if (moment(i.data_consulta).isAfter())
        appointments.futureAppointments.push(appointmentData)
      else appointments.pastAppointmens.push(appointmentData)
    })
    return appointments
  },
  set: async data => {
    let checkedData = checkSet(
      data.appointment,
      'data_consulta',
      'retorno',
      'id_crianca'
    )

    if (checkedData.errMessage) return checkedData.errMessage
    let formatedDate = moment(
      `${data.appointment.data_consulta}T${data.notifications.hour}`
    ).format('YYYY-MM-DD HH:mm:ss')

    let payloadAppointment = checkedData.payload
    payloadAppointment['data_consulta'] = formatedDate

    let appointment = await appointmentController.set(payloadAppointment)

    moment.locale('pt-br')
    let appointmentDate = moment(
      `${data.notifications.date}T${data.notifications.hour}`
    ).format('LLLL')

    if (data.notifications.rememberWeek) {
      let day = moment(data.notifications.date).add(-7, 'day')
      let time = moment(
        `2016-05-14T${data.notifications.hour}`,
        moment.defaultFormat
      )
        .add(-1, 'hour')
        .format('HH:mm:ss')

      await notificationController.set({
        titulo: 'Consulta',
        texto: appointmentDate,
        id_consulta: appointment.id,
        dia: day,
        hora: time
      })
    }
    if (data.notifications.rememberDay) {
      let day = moment(data.notifications.date).add(-1, 'day')
      let time = moment(
        `2016-05-14T${data.notifications.hour}`,
        moment.defaultFormat
      )
        .add(-1, 'hour')
        .format('HH:mm:ss')
      await notificationController.set({
        titulo: 'Consulta',
        texto: appointmentDate,
        id_consulta: appointment.id,
        dia: day,
        hora: time
      })
    }
    if (data.notifications.rememberHour) {
      let day = data.notifications.date
      let time = moment(
        `2016-05-14T${data.notifications.hour}`,
        moment.defaultFormat
      )
        .add(-1, 'hour')
        .format('HH:mm:ss')

      await notificationController.set({
        titulo: 'Consulta',
        texto: appointmentDate,
        id_consulta: appointment.id,
        dia: day,
        hora: time
      })
    }

    return appointment
  },
  update: async data => {
    return 'not implemented yet'
  }
}
