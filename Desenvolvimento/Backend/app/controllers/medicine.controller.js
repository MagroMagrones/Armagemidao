const medicineModel = require('../models/medicine.model')

module.exports = {
  getAll: async () => {
    const medicines = await medicineModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (medicines.length > 0) return medicines
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    const resCreateMedicine = await medicineModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateMedicine.dataValues.id)
      return { err: 'Falha ao cadastrar medicamento' }
    else
      return {
        message: 'medicamento cadastrado com sucesso',
        id: resCreateMedicine.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  },
  delete: async data => {
    const resDeleteMedicine = await medicineModel
      .destroy({ where: { id: data.id } })
      .then()
      .catch(err => {
        console.log(err)
      })
    console.log({ resDeleteMedicine })

    if (!resDeleteMedicine) return { err: 'Falha ao deletar medicamento' }
    else
      return {
        message: 'medicamento deletado com sucesso'
      }
  }
}
