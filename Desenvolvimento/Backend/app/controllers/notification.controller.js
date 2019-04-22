const notificationModel = require('../models/notification.model')
const examModel = require('../models/exam.model')
const appointmentModel = require('../models/appointment.model')
const vaccineApplicationModel = require('../models/vaccineApplication.model')
const medicineChildModel = require('../models/medicineChild.model')
const boundModel = require('../models/bound.model')
const notSubsboundModel = require('../models/notificationSubscribe.model')

const { Op } = require('sequelize')
module.exports = {
  getAll: async () => {
    let not = []

    vaccineApplicationModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(vaccineApplicationModel, {
      foreignKey: 'id_vacina'
    })
    await notificationModel
      .findAll({
        where: { id_vacina: { [Op.not]: null } },
        include: [vaccineApplicationModel]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    medicineChildModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(medicineChildModel, { foreignKey: 'id_dose' })
    await notificationModel
      .findAll({
        where: { id_dose: { [Op.not]: null } },
        include: [medicineChildModel]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    examModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(examModel, { foreignKey: 'id_exame' })
    await notificationModel
      .findAll({
        where: { id_exame: { [Op.not]: null } },
        include: [examModel]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })
    appointmentModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(appointmentModel, { foreignKey: 'id_consulta' })
    await notificationModel
      .findAll({
        where: { id_consulta: { [Op.not]: null } },
        include: [appointmentModel]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    return not
  },
  get: async payload => {
    let not = []

    vaccineApplicationModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(vaccineApplicationModel, {
      foreignKey: 'id_vacina'
    })

    boundModel.hasMany(vaccineApplicationModel, { foreignKey: 'id' })
    vaccineApplicationModel.belongsTo(boundModel, { foreignKey: 'id_crianca' })

    await notificationModel
      .findAll({
        where: { ...payload, id_vacina: { [Op.not]: null } },

        include: [
          {
            model: vaccineApplicationModel,
            include: [boundModel]
          }
        ]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    medicineChildModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(medicineChildModel, { foreignKey: 'id_dose' })

    boundModel.hasMany(medicineChildModel, { foreignKey: 'id' })
    medicineChildModel.belongsTo(boundModel, { foreignKey: 'id_crianca' })

    await notificationModel
      .findAll({
        where: { ...payload, id_dose: { [Op.not]: null } },
        include: [
          {
            model: medicineChildModel,
            include: [boundModel]
          }
        ]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    examModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(examModel, { foreignKey: 'id_exame' })

    boundModel.hasMany(examModel, { foreignKey: 'id' })
    examModel.belongsTo(boundModel, { foreignKey: 'id_crianca' })

    await notificationModel
      .findAll({
        where: { ...payload, id_exame: { [Op.not]: null } },
        include: [
          {
            model: examModel,
            include: [boundModel]
          }
        ]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    appointmentModel.hasMany(notificationModel, { foreignKey: 'id' })
    notificationModel.belongsTo(appointmentModel, { foreignKey: 'id_consulta' })

    boundModel.hasMany(appointmentModel, { foreignKey: 'id' })
    appointmentModel.belongsTo(boundModel, { foreignKey: 'id_crianca' })

    await notificationModel
      .findAll({
        where: { ...payload, id_consulta: { [Op.not]: null } },
        include: [
          {
            model: appointmentModel,
            include: [boundModel]
          }
        ]
      })
      .then(res => {
        if (res.length > 0) not = [...not, ...res]
      })

    return not
  },
  set: async data => {
    const resCreateNot = await notificationModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateNot.dataValues.id)
      return { err: 'Falha ao cadastrar notificação' }
    else
      return {
        message: 'Notificação cadastrada com sucesso',
        id: resCreateNot.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
