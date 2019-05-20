const Sequelize = require('sequelize')
const db = require('../../config/db')

const medicine = db.define(
  'Medicamento',
  {
    id_medicamento_registro: {
      type: Sequelize.INTEGER(50),
      allowNull: false,
      primaryKey: true,
    },
    nome_comercial: { type: Sequelize.STRING },
    tipo: { type: Sequelize.STRING }, // VARCHAR(45) NOT NULL COMMENT '',
    dimensao: {type: Sequelize.TEXT},
    tarja: { type: Sequelize.STRING }, // VARCHAR(20) NULL COMMENT '',
    principio_ativo: { type: Sequelize.STRING },
    laboratorio: { type: Sequelize.STRING }, // VARCHAR(45) NULL COMMENT '',
    cnpj: { type: Sequelize.STRING }, // VARCHAR(50) NULL COMMENT '',
    validado_adm: { type: Sequelize.TINYINT }
  },
  { tableName: 'Medicamento' }
)

module.exports = medicine
