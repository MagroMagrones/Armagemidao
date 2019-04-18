const notificationService = require('../services/notification.service')
module.exports = app => {
  app.get('/notification', async (req, res) => {
    console.log('\n[notification.routes.js] - get')
    res.send(await notificationService.getAll(res.locals))
  })
  app.get('/notification/:id', async (req, res) => {
    console.log('\n[notification.routes.js] - get')
    res.send(await notificationService.get(req.params))
  })
  app.post('/notification', async (req, res) => {
    console.log('\n[notification.routes.js] - post')

    res.send(await notificationService.set(req.body))
  })
  app.put('/notification/', async (req, res) => {
    console.log('\n[notification.routes.js] - put')
    res.send(await notificationService.update(req.body))
  })
}
