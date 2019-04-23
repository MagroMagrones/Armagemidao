const childService = require('../services/child.service')
module.exports = app => {
  app.get('/child', async (req, res) => {
    console.log('\n[child.routes.js] - getAll')
    res.send(await childService.getAll(res.locals))
  })
  app.get('/child/find', async (req, res) => {
    console.log('\n[child.routes.js] - get')
    res.send(await childService.get(req.query))
  })
  app.post('/child', async (req, res) => {
    console.log('\n[child.routes.js] - post')

    res.send(await childService.set(req.body))
  })
  app.put('/child/', async (req, res) => {
    console.log('\n[child.routes.js] - put')
    res.send(await childService.update(req.body))
  })
}
