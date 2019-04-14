const childHistoryService = require('../services/childHistory.service')
module.exports = app => {
  app.get('/child-history', async (req, res) => {
    console.log('\n[childHistory.routes.js] - get')
    res.send(await childHistoryService.getAll(res.locals))
  })
  app.get('/child-history/:id', async (req, res) => {
    console.log('\n[childHistory.routes.js] - get')
    res.send(await childHistoryService.get(req.params))
  })
  app.post('/child-history', async (req, res) => {
    console.log('\n[childHistory.routes.js] - post')
    console.log(req.body)

    res.send(await childHistoryService.set(req.body))
  })
  app.put('/child-history/', async (req, res) => {
    console.log('\n[childHistory.routes.js] - put')
    res.send(await childHistoryService.update(req.body))
  })
}
