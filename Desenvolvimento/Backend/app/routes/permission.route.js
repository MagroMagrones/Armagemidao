const permissionService = require('../services/permission.service')
module.exports = app => {
  app.get('/permission', async (req, res) => {
    console.log('\n[permission.routes.js] - get')
    res.send(await permissionService.getAll(res.locals))
  })
  app.get('/permission/:id', async (req, res) => {
    console.log('\n[permission.routes.js] - get')
    res.send(await permissionService.get(req.params))
  })
  app.post('/permission', async (req, res) => {
    console.log('\n[permission.routes.js] - post')
    console.log(req.body)

    res.send(await permissionService.set(req.body))
  })
  app.put('/permission/', async (req, res) => {
    console.log('\n[permission.routes.js] - put')
    res.send(await permissionService.update(req.body))
  })
}
