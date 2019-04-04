const medicineDoseService = require('../services/medicineDose.service')
module.exports = app => {
  app.get('/medicine-dose', async (req, res) => {
    console.log('\n[medicineDose.routes.js] - get')
    res.send(await medicineDoseService.getAll(res.locals))
  })
  app.get('/medicine-dose/:id', async (req, res) => {
    console.log('\n[medicineDose.routes.js] - get')
    res.send(await medicineDoseService.get(req.params))
  })
  app.post('/medicine-dose', async (req, res) => {
    console.log('\n[medicineDose.routes.js] - post')
    console.log(req.body)

    res.send(await medicineDoseService.set(req.body))
  })
  app.put('/medicine-dose/', async (req, res) => {
    console.log('\n[medicineDose.routes.js] - put')
    res.send(await medicineDoseService.update(req.body))
  })
}
