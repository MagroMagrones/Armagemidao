const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')

const userController = require('../controllers/user.controller')

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
    let checkedData = checkSet(data, 'email')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await userController.set(payload)
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
