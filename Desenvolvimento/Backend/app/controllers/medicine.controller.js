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
  get: async id_medicamento_registro => {
    const medicine = await medicineModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (medicine.length > 0) return medicine
    else return []
  },
  set: async data => {
    const resCreateMedicine = await medicineModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateMedicine.dataValues.id_medicamento_registro)
      return { err: 'Falha ao cadastrar medicamento' }
    else
      return {
        message: 'medicamento cadastrado com sucesso',
        id_medicamento_registro: resCreateMedicine.dataValues.id_medicamento_registro
      }
  },
  update: async (id_medicamento_registro, data) => {
    return 'not implemented yet'
  },
  delete: async data => {
    const resDeleteMedicine = await medicineModel
      .destroy({ where: { id_medicamento_registro: data.id_medicamento_registro } })
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
