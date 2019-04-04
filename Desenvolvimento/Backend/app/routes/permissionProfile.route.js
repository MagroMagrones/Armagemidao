const permissionProfileService = require('../services/permissionProfile.service')
module.exports = app => {
  app.get('/permission-profile', async (req, res) => {
    console.log('\n[permissionProfile.routes.js] - get')
    res.send(await permissionProfileService.getAll(res.locals))
  })
  app.get('/permission-profile/:id', async (req, res) => {
    console.log('\n[permissionProfile.routes.js] - get')
    res.send(await permissionProfileService.get(req.params))
  })
  app.post('/permission-profile', async (req, res) => {
    console.log('\n[permissionProfile.routes.js] - post')
    console.log(req.body)

    res.send(await permissionProfileService.set(req.body))
  })
  app.put('/permission-profile/', async (req, res) => {
    console.log('\n[permissionProfile.routes.js] - put')
    res.send(await permissionProfileService.update(req.body))
  })
}
