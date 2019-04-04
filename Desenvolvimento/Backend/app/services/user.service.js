const checkSet = require('../helpers/checkSetData')
const checkUpdate = require('../helpers/checkUpdateData')
const checkGet = require('../helpers/checkGetData')
module.exports = {
  getAll: async () => {
    let res = await userController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'nome', 'email', 'id')
    if (checkedData.errMessage) return checkedData.errMessage
    // if (!data.id || isNaN(data.id)) return { err: 'Id inválido' }
    let id = data.id
    let res = await userController.get(id)
    return res
  },
  set: async data => {
    let checkedData = checkSet(data, 'nome', 'email')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    let res = await userController.set(payload)
    return res
  },
  update: async data => {
    let checkedData = checkUpdate(data.data, data.id, 'nome', 'email')
    if (checkedData.errMessage) return checkedData.errMessage

    // if (!data.id) return { err: 'id é obrigatório' }
    // if (!data.data) return { err: 'update inválido' }

    let res = await userController.update(data.id, data.data)
    return res
  }
}
