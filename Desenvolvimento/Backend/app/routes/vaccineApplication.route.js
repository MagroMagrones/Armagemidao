const vaccineApplicationService = require('../services/vaccineApplication.service')
module.exports = app => {
  app.get('/vaccine-application', async (req, res) => {
    console.log('\n[vaccineApplication.routes.js] - get')
    res.send(await vaccineApplicationService.getAll(res.locals))
  })
  app.get('/vaccine-application/:id', async (req, res) => {
    console.log('\n[vaccineApplication.routes.js] - get')
    res.send(await vaccineApplicationService.get(req.params))
  })
  app.post('/vaccine-application', async (req, res) => {
    console.log('\n[vaccineApplication.routes.js] - post')
    console.log(req.body)

    res.send(await vaccineApplicationService.set(req.body))
  })
  app.put('/vaccine-application/', async (req, res) => {
    console.log('\n[vaccineApplication.routes.js] - put')
    res.send(await vaccineApplicationService.update(req.body))
  })
}
