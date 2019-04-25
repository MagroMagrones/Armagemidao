const appointmentModel = require('../models/appointment.model')

module.exports = {
  getAll: async () => {
    const appointments = await appointmentModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (appointments.length > 0) return appointments
    else return []
  },
  get: async payload => {
    const appointments = await appointmentModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (appointments.length > 0) return appointments
    else return []
  },
  set: async data => {
    console.log('\n[child.controller.js] - set')

    const resCreateAppointment = await appointmentModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })

    if (!resCreateAppointment.dataValues.id)
      return { err: 'Falha ao cadastrar Consulta' }
    else
      return {
        message: 'Consulta cadastrada com sucesso',
        id: resCreateAppointment.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
