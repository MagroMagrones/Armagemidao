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
    return 'not implemented yet'
  },
  set: async data => {
    let checkedData = checkSet(data, 'codigo', 'nome')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await medicineController.set(payload)
    return res
  },
  update: async data => {
    return 'not implemented yet'
  },
  delete: async data => {
    console.log({ data })

    if (!data.id) return { err: 'id required' }
    let res = await medicineController.delete(data)
    return res
  }
}
