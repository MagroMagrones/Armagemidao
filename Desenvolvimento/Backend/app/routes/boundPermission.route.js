const boundPermissionService = require('../services/boundPermission.service')
module.exports = app => {
  app.get('/bound-permission', async (req, res) => {
    console.log('\n[boundPermission.routes.js] - get')
    res.send(await boundPermissionService.getAll(res.locals))
  })
  app.get('/bound-permission/:id', async (req, res) => {
    console.log('\n[boundPermission.routes.js] - get')
    res.send(await boundPermissionService.get(req.params))
  })
  app.post('/bound-permission', async (req, res) => {
    console.log('\n[boundPermission.routes.js] - post')

    res.send(await boundPermissionService.set(req.body))
  })
  app.put('/bound-permission/', async (req, res) => {
    console.log('\n[boundPermission.routes.js] - put')
    res.send(await boundPermissionService.update(req.body))
  })
}
