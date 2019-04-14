const Sequelize = require('sequelize')
const db = require('../../config/db')

const vaccine = require('./vaccineApplication.model')
const appointment = require('./appointment.model')
const dose = require('./medicineChild.model')
const exam = require('./exam.model')

const user = db.define(
  'Notificacao',
  {
    tipo: { type: Sequelize.STRING },
    data_inicio: { type: Sequelize.DATE },
    data_fim: { type: Sequelize.DATE },
    intervalo_horas: { type: Sequelize.DECIMAL },
    intervalo_dias: { type: Sequelize.DECIMAL },
    intervalo_meses: { type: Sequelize.DECIMAL },
    intervalo_anos: { type: Sequelize.DECIMAL },
    dia_semana: { type: Sequelize.STRING },
    dia_mes: { type: Sequelize.TINYINT },
    horas: { type: Sequelize.DECIMAL },
    id_consulta: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: appointment,
        key: 'id'
      }
    },
    id_exame: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: exam,
        key: 'id'
      }
    },
    id_dose: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: dose,
        key: 'id'
      }
    },
    id_vacina: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: vaccine,
        key: 'id'
      }
    }
  },
  { tableName: 'Notificacao_teste' }
)

module.exports = user
