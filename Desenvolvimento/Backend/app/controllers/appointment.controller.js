appointmentModel = require('../models/appointment.model')

module.exports = {
  getAll: async () => {
    appointments = await appointmentModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (appointments.length > 0) return appointments
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
