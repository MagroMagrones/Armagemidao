const medicineChildService = require('../services/medicineChild.service')
module.exports = app => {
  app.get('/medicine-child', async (req, res) => {
    console.log('\n[medicineChild.routes.js] - get')
    res.send(await medicineChildService.getAll(res.locals))
  })
  app.get('/medicine-child/:id', async (req, res) => {
    console.log('\n[medicineChild.routes.js] - get')
    res.send(await medicineChildService.get(req.params))
  })
  app.post('/medicine-child', async (req, res) => {
    console.log('\n[medicineChild.routes.js] - post')
    console.log(req.body)

    res.send(await medicineChildService.set(req.body))
  })
  app.put('/medicine-child/', async (req, res) => {
    console.log('\n[medicineChild.routes.js] - put')
    res.send(await medicineChildService.update(req.body))
  })
}
