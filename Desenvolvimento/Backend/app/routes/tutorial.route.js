const tutorialService = require('../services/tutorial.service')
module.exports = app => {
  app.get('/tutorial', async (req, res) => {
    console.log('\n[tutorial.routes.js] - get')
    res.send(await tutorialService.getAll(res.locals))
  })
  app.get('/tutorial/:id', async (req, res) => {
    console.log('\n[tutorial.routes.js] - get')
    res.send(await tutorialService.get(req.params))
  })
  app.post('/tutorial', async (req, res) => {
    console.log('\n[tutorial.routes.js] - post')
    console.log(req.body)

    res.send(await tutorialService.set(req.body))
  })
  app.put('/tutorial/', async (req, res) => {
    console.log('\n[tutorial.routes.js] - put')
    res.send(await tutorialService.update(req.body))
  })
}
