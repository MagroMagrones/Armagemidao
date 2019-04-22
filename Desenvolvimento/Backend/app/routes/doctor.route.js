const doctorService = require('../services/doctor.service')
module.exports = app => {
  app.get('/doctor', async (req, res) => {
    console.log('\n[doctor.routes.js] - get')
    res.send(await doctorService.getAll(res.locals))
  })
  app.get('/doctor/:id', async (req, res) => {
    console.log('\n[doctor.routes.js] - get')
    res.send(await doctorService.get(req.params))
  })
  app.post('/doctor', async (req, res) => {
    console.log('\n[doctor.routes.js] - post')

    res.send(await doctorService.set(req.body))
  })
  app.put('/doctor/', async (req, res) => {
    console.log('\n[doctor.routes.js] - put')
    res.send(await doctorService.update(req.body))
  })
}
