const contactService = require('../services/contact.service')
module.exports = app => {
  app.get('/contact', async (req, res) => {
    console.log('\n[contact.routes.js] - get')
    res.send(await contactService.getAll(res.locals))
  })
  app.get('/contact/:id', async (req, res) => {
    console.log('\n[contact.routes.js] - get')
    res.send(await contactService.get(req.params))
  })
  app.post('/contact', async (req, res) => {
    console.log('\n[contact.routes.js] - post')

    res.send(await contactService.set(req.body))
  })
  app.put('/contact/', async (req, res) => {
    console.log('\n[contact.routes.js] - put')
    res.send(await contactService.update(req.body))
  })
}
