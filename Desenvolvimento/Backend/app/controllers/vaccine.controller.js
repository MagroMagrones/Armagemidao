const vaccineModel = require('../models/vaccine.model')

module.exports = {
  getAll: async () => {
    const vaccine = await vaccineModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (vaccine.length > 0) return vaccine
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  },
  delete: async data => {
    const resDeleteVaccine = await vaccineModel
      .destroy({ where: { id: data.id } })
      .then()
      .catch(err => {
        console.log(err)
      })
    console.log({ resDeleteVaccine })

    if (!resDeleteVaccine) return { err: 'Falha ao deletar vacina' }
    else
      return {
        message: 'vacina deletada com sucesso'
      }
  }
}
