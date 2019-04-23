const symptomService = require('../services/symptom.service')
module.exports = app => {
  app.get('/symptom', async (req, res) => {
    console.log('\n[symptom.routes.js] - get')
    res.send(await symptomService.getAll(res.locals))
  })
  app.get('/symptom/:id', async (req, res) => {
    console.log('\n[symptom.routes.js] - get')
    res.send(await symptomService.get(req.params))
  })
  app.post('/symptom', async (req, res) => {
    console.log('\n[symptom.routes.js] - post')

    res.send(await symptomService.set(req.body))
  })
  app.put('/symptom/', async (req, res) => {
    console.log('\n[symptom.routes.js] - put')
    res.send(await symptomService.update(req.body))
  })
}
