const examService = require('../services/exam.service')
module.exports = app => {
  app.get('/exam', async (req, res) => {
    console.log('\n[exam.routes.js] - get')
    res.send(await examService.getAll(res.locals))
  })
  app.get('/exam/:id', async (req, res) => {
    console.log('\n[exam.routes.js] - get')
    res.send(await examService.get(req.params))
  })
  app.post('/exam', async (req, res) => {
    console.log('\n[exam.routes.js] - post')

    res.send(await examService.set(req.body))
  })
  app.put('/exam/', async (req, res) => {
    console.log('\n[exam.routes.js] - put')
    res.send(await examService.update(req.body))
  })
}
