const Sequelize = require('sequelize')
const db = require('../../config/db')

const medicine = db.define(
  'Medicamento',
  {
    nome_comercial: { type: Sequelize.STRING },
    principio_ativo: { type: Sequelize.STRING },
    codigo: { type: Sequelize.STRING },
    quantidade: { type: Sequelize.DECIMAL }, // DECIMAL NOT NULL COMMENT '',
    medida: { type: Sequelize.STRING }, // VARCHAR(10) NOT NULL COMMENT '',
    tipo: { type: Sequelize.STRING }, // VARCHAR(45) NOT NULL COMMENT '',
    tarja: { type: Sequelize.STRING }, // VARCHAR(20) NULL COMMENT '',
    laboratorio: { type: Sequelize.STRING }, // VARCHAR(45) NULL COMMENT '',
    cnpj: { type: Sequelize.STRING } // VARCHAR(50) NULL COMMENT '',
  },
  { tableName: 'Medicamento_teste' }
)

module.exports = medicine
