const Sequelize = require('sequelize')
const db = require('../../config/db')

const vaccine = require('./vaccineApplication.model')
const appointment = require('./appointment.model')
const dose = require('./medicineChild.model')
const exam = require('./exam.model')

const user = db.define(
  'Notificacao',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // tipo: { type: Sequelize.STRING },
    // data_inicio: { type: Sequelize.DATE },
    // data_fim: { type: Sequelize.DATE },
    intervalo_horas: { type: Sequelize.DECIMAL },
    intervalo_dias: { type: Sequelize.DECIMAL },
    intervalo_meses: { type: Sequelize.DECIMAL },
    intervalo_anos: { type: Sequelize.DECIMAL },
    titulo: { type: Sequelize.STRING },
    texto: { type: Sequelize.STRING },
    dia_semana: { type: Sequelize.INTEGER },
    dia_mes: { type: Sequelize.TINYINT },
    // ano: { type: Sequelize.INTEGER },
    dia: { type: Sequelize.DataTypes.DATEONLY },
    hora: { type: Sequelize.STRING },
    // minuto: { type: Sequelize.INTEGER },
    id_consulta: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: appointment,
        key: 'id'
      }
    },
    id_exame: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: exam,
        key: 'id'
      }
    },
    id_vacina_crianca: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: dose,
        key: 'id'
      }
    },
    id_medicamento_crianca: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: vaccine,
        key: 'id'
      }
    }
  },
  { tableName: 'Notificacao' }
)

module.exports = user
