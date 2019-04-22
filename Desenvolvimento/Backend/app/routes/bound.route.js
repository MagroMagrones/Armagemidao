const boundService = require('../services/bound.service')
module.exports = app => {
  app.get('/bound', async (req, res) => {
    console.log('\n[bound.routes.js] - get')
    res.send(await boundService.getAll(res.locals))
  })
  app.get('/bound/:id', async (req, res) => {
    console.log('\n[bound.routes.js] - get')
    res.send(await boundService.get(req.params))
  })
  app.post('/bound', async (req, res) => {
    console.log('\n[bound.routes.js] - post')

    res.send(await boundService.set(req.body))
  })
  app.put('/bound/', async (req, res) => {
    console.log('\n[bound.routes.js] - put')
    res.send(await boundService.update(req.body))
  })
}
