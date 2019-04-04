const profileService = require('../services/profile.service')
module.exports = app => {
  app.get('/profile', async (req, res) => {
    console.log('\n[profile.routes.js] - get')
    res.send(await profileService.getAll(res.locals))
  })
  app.get('/profile/:id', async (req, res) => {
    console.log('\n[profile.routes.js] - get')
    res.send(await profileService.get(req.params))
  })
  app.post('/profile', async (req, res) => {
    console.log('\n[profile.routes.js] - post')
    console.log(req.body)

    res.send(await profileService.set(req.body))
  })
  app.put('/profile/', async (req, res) => {
    console.log('\n[profile.routes.js] - put')
    res.send(await profileService.update(req.body))
  })
}
