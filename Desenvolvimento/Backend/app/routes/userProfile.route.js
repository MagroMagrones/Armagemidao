const userProfileService = require('../services/userProfile.service')
module.exports = app => {
  app.get('/userProfile', async (req, res) => {
    console.log('\n[userProfile.routes.js] - get')
    res.send(await userProfileService.getAll(res.locals))
  })
  app.get('/userProfile/:id', async (req, res) => {
    console.log('\n[userProfile.routes.js] - get')
    res.send(await userProfileService.get(req.params))
  })
  app.post('/userProfile', async (req, res) => {
    console.log('\n[userProfile.routes.js] - post')
    console.log(req.body)

    res.send(await userProfileService.set(req.body))
  })
  app.put('/userProfile/', async (req, res) => {
    console.log('\n[userProfile.routes.js] - put')
    res.send(await userProfileService.update(req.body))
  })
}
