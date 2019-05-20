const tutorialService = require('../services/tutorial.service')
module.exports = app => {
  app.get('/tutorial', async (req, res) => {
    console.log('\n[tutorial.routes.js] - get')
    res.send(await tutorialService.getAll(res.locals))
  })
  app.get('/tutorial/find', async (req, res) => { //em dos q ta :id colocar find igualk aqui
    console.log('\n[tutorial.routes.js] - get')
    res.send(await tutorialService.get(req.params))
  })
  app.post('/tutorial', async (req, res) => {
    console.log('\n[tutorial.routes.js] - post')

    res.send(await tutorialService.set(req.body))
  })
  app.put('/tutorial/', async (req, res) => {
    console.log('\n[tutorial.routes.js] - put')
    res.send(await tutorialService.update(req.body))
  })
}
