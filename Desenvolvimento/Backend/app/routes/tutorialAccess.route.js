const tutorialAccessService = require('../services/tutorialAccess.service')
module.exports = app => {
  app.get('/tutorial-access', async (req, res) => {
    console.log('\n[tutorialAccess.routes.js] - get')
    res.send(await tutorialAccessService.getAll(res.locals))
  })
  app.get('/tutorial-access/:id', async (req, res) => {
    console.log('\n[tutorialAccess.routes.js] - get')
    res.send(await tutorialAccessService.get(req.params))
  })
  app.post('/tutorial-access', async (req, res) => {
    console.log('\n[tutorialAccess.routes.js] - post')

    res.send(await tutorialAccessService.set(req.body))
  })
  app.put('/tutorial-access/', async (req, res) => {
    console.log('\n[tutorialAccess.routes.js] - put')
    res.send(await tutorialAccessService.update(req.body))
  })
}
