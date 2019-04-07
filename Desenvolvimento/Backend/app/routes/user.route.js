const userService = require('../services/user.service')
module.exports = app => {
  app.get('/user', async (req, res) => {
    console.log('\n[user.routes.js] - get')
    res.send(await userService.getAll(res.locals))
  })
  app.get('/user/find', async (req, res) => {
    console.log('\n[user.routes.js] - get')
    res.send(await userService.get(req.query))
  })
  app.post('/user', async (req, res) => {
    console.log('\n[user.routes.js] - post')
    res.send(await userService.set(req.body))
  })
  app.put('/user/', async (req, res) => {
    console.log('\n[user.routes.js] - put')
    res.send(await userService.update(req.body))
  })
}
