const vaccineService = require('../services/vaccine.service')
module.exports = app => {
  app.get('/vaccine', async (req, res) => {
    console.log('\n[vaccine.routes.js] - get')
    res.send(await vaccineService.getAll(res.locals))
  })
  app.get('/vaccine/:id', async (req, res) => {
    console.log('\n[vaccine.routes.js] - get')
    res.send(await vaccineService.get(req.params))
  })
  app.post('/vaccine', async (req, res) => {
    console.log('\n[vaccine.routes.js] - post')
    console.log(req.body)

    res.send(await vaccineService.set(req.body))
  })
  app.put('/vaccine/', async (req, res) => {
    console.log('\n[vaccine.routes.js] - put')
    res.send(await vaccineService.update(req.body))
  })
}
