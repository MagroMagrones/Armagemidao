const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db')
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())

require('./app/routes')(app)
// require('./app/controllers')
// require('./app/services')

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    // db.sync()
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
if (process.argv[2] === 'production') {
  console.log('\x1b[36m', '*** PRODUCTION environment ***')
} else if (process.argv[2] === 'homolog') {
  console.log('\x1b[33m', '### HOMOLOG environment ###')
}
app.listen(3210, () => {
  console.log('\x1b[0m', 'Backend escutando e enviando na porta 3210')
})
