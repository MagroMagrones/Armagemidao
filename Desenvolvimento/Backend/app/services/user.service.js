const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')

const userController = require('../controllers/user.controller')
const doctorController = require('../controllers/doctor.controller')

module.exports = {
  getAll: async () => {
    let res = await userController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'nome', 'email', 'id')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await userController.get(payload)
    return res
  },
  set: async data => {
    let checkedData = checkSet(data.user, 'email')
    if (checkedData.errMessage) return checkedData.errMessage
    let payloadUser = checkedData.payload
    payloadUser.ativo = true
    payloadUser.admin = false
    let user = await userController.set(payloadUser)

    let doctor
    if (data.doctor.isDoctor) {
      delete data.doctor.isDoctor
      let checkedDoctorData = checkSet(data.doctor, 'crm')
      if (checkedDoctorData.errMessage) return checkedDoctorData.errMessage
      let payloadDoctor = checkedDoctorData.payload
      payloadDoctor.validado_adm = false
      payloadDoctor.id_usuario = user.id
      doctor = await doctorController.set(payloadDoctor)
    }
    let res = { user, doctor }
    return res
  },
  update: async data => {
    let checkedData = checkUpdate(data.data, data.id, 'nome', 'email')
    if (checkedData.errMessage) return checkedData.errMessage
    let id = checkedData.id
    let payload = checkedData.payload
    let res = await userController.update(id, payload)
    return res
  }
}
