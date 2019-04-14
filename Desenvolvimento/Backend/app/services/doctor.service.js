const doctorController = require('../controllers/doctor.controller')
const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')
module.exports = {
  getAll: async () => {
    let res = await doctorController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'id_usuario', 'crm', 'especialidade')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await doctorController.get(payload)
    return res
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
