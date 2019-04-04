const appointmentService = require('../services/appointment.service')
module.exports = app => {
  app.get('/appointment', async (req, res) => {
    console.log('\n[appointment.routes.js] - get')
    res.send(await appointmentService.getAll(res.locals))
  })
  app.get('/appointment/:id', async (req, res) => {
    console.log('\n[appointment.routes.js] - get')
    res.send(await appointmentService.get(req.params))
  })
  app.post('/appointment', async (req, res) => {
    console.log('\n[appointment.routes.js] - post')
    console.log(req.body)

    res.send(await appointmentService.set(req.body))
  })
  app.put('/appointment/', async (req, res) => {
    console.log('\n[appointment.routes.js] - put')
    res.send(await appointmentService.update(req.body))
  })
}
