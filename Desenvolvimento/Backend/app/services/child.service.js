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
    let resChild = []

    if (payload.id_usuario) {
      let bounds = await boundController.get(payload)
      if (bounds.length > 0) {
        let children = bounds.map(async bound => {
          let res = await childController.get({ id: bound.id_crianca })
          return res[0]
        })

        return Promise.all(children).then(res => {
          return res
        })
      } else return []
    } else {
      resChild = await childController.get(payload)
    }
    return resChild
  },
  set: async data => {
    let checkedData = checkSet(data.child, 'nome', 'data_nascimento', 'genero')
    if (checkedData.errMessage) return checkedData.errMessage
    let payloadChild = checkedData.payload
    console.log({ child: payloadChild })
    console.log({ childData: data.child })

    let child = await childController.set(payloadChild)

    let checkedBoundData = checkSet(data.bound, 'id_usuario')
    if (checkedBoundData.errMessage) return checkedBoundData.errMessage
    let payloadBound = checkedBoundData.payload
    payloadBound.id_crianca = child.id
    bound = await boundController.set(payloadBound)

    return child
  },
  update: async data => {
    let checkedData = checkUpdate(
      data.data,
      data.id,
      'nome',
      'data_nascimento',
      'genero',
      'tipo_sanguineo',
      'rg',
      'cor_pele',
      'cor_olhos',
      'cor_cabelo'
    )
    if (checkedData.errMessage) return checkedData.errMessage
    let id = checkedData.id
    let payload = checkedData.payload

    let res = await childController.update(id, payload)
    return res
  }
}
