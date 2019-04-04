const Sequelize = require('sequelize')

module.exports = new Sequelize('bbwatch', 'admin', 'Abc1234*', {
  host: 'bbwatch.cwmby72lddc8.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
})
