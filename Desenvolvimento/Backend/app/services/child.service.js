const childController = require('../controllers/child.controller')
const boundController = require('../controllers/bound.controller')
const {
  checkSet,
  checkUpdate,
  checkGet
} = require('../helpers/checkDataFromRoute')

module.exports = {
  getAll: async () => {
    let res = await childController.getAll()
    return res
  },
  get: async data => {
    let checkedData = checkGet(data, 'rg', 'id', 'id_usuario')
    if (checkedData.errMessage) return checkedData.errMessage
    let payload = checkedData.payload
    if (payload.id_usuario) {
      let bounds = await boundController.get(payload)
      console.log(bounds)
      if (bounds.length > 0) {
      } else return []
    }

    // let resChild = await childController.get(payload)
    console.log('[payload - checkedData get', checkedData)
    return checkedData
    // return res
  },
  set: async data => {
    console.log('\n[child.service.js] - set')
    console.log(data)

    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
