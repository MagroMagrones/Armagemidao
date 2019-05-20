const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')

const medicineController = require('../controllers/medicine.controller')

module.exports = {
  getAll: async () => {
    let res = await medicineController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'nome', 'tipo')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await medicineController.get(payload)
    return res
  },
  set: async data => {
    let checkedData = checkSet(data, 'nome', 'tipo')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await medicineController.set(payload)
    return res
  },
  update: async data => {
    return 'not implemented yet'
  },
  delete: async data => {
    if (!data.id_medicamento_registro) return { err: 'id required' }
    let res = await medicineController.delete(data)
    return res
  }
}
