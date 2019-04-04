const Sequelize = require('sequelize')
const db = require('../../config/db')

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
    id_consulta: { type: Sequelize.INTEGER },
    id_exame: { type: Sequelize.INTEGER },
    id_dose: { type: Sequelize.INTEGER },
    id_vacina: { type: Sequelize.INTEGER }
  },
  { tableName: 'Notificacao_teste' }
)

module.exports = user
