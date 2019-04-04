const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db')
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())

require('./app/routes')(app)
require('./app/controllers')
require('./app/services')
require('./config/schema')

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    // db.sync()
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(3210, () => {
  console.log('Backend escutando e enviando na porta 3210')
})
