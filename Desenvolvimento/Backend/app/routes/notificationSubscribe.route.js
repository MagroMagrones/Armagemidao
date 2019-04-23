const notificationSubscribeService = require('../services/notificationSubscribe.service')
module.exports = app => {
  app.get('/notificationSubscribe', async (req, res) => {
    console.log('\n[notificationSubscribe.routes.js] - get')
    res.send(await notificationSubscribeService.getAll(res.locals))
  })
  app.get('/notificationSubscribe/:id', async (req, res) => {
    console.log('\n[notificationSubscribe.routes.js] - get')
    res.send(await notificationSubscribeService.get(req.params))
  })
  app.post('/notificationSubscribe', async (req, res) => {
    console.log('\n[notificationSubscribe.routes.js] - post')

    res.send(await notificationSubscribeService.set(req.body))
  })
  app.put('/notificationSubscribe/', async (req, res) => {
    console.log('\n[notificationSubscribe.routes.js] - put')
    res.send(await notificationSubscribeService.update(req.body))
  })
  app.post('/sendNotification', async (req, res) => {
    res.send(await notificationSubscribeService.sendToAll(req.body))
  })
}
