const doctorModel = require('../models/doctor.model')

module.exports = {
  getAll: async () => {
    const doctors = await doctorModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (doctors.length > 0) return doctors
    else return []
  },
  get: async payload => {
    const doctor = await doctorModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(doctor => console.log(err))

    if (doctor.length > 0) return doctor
    else return []
  },
  set: async data => {
    const resCreateDoctor = await doctorModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateDoctor.dataValues.id)
      return { err: 'Falha ao cadastrar Pediatra' }
    else
      return {
        message: 'Pediatra cadastrado com sucesso',
        id: resCreateDoctor.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
