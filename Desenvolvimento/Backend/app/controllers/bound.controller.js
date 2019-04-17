const boundModel = require('../models/bound.model')

module.exports = {
  getAll: async () => {
    const bounds = await boundModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (bounds.length > 0) return bounds
    else return []
  },
  get: async payload => {
    const bounds = await boundModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (bounds.length > 0) return bounds
    else return []
  },
  set: async data => {
    const resCreatebound = await boundModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreatebound.dataValues.id)
      return { err: 'Falha ao cadastrar Vínculo' }
    else
      return {
        message: 'Vínculo cadastrado com sucesso',
        id: resCreatebound.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
