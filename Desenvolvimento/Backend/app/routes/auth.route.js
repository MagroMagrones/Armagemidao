const authService = require('../services/auth.service')
module.exports = app => {
  app.post('/sign-in', async (req, res) => {
    console.log('\n[auth.routes.js] - sign-in')
    console.log(req.body)
    let teste = await authService.Login(req.body)
    console.log(teste)

    res.send(teste)
  })

  app.post('/sign-up', async (req, res) => {
    console.log('\n[auth.routes.js] - sign-up')
    console.log(req.body)

    res.send(await authService.RegisterUser(req.body))
  })

  app.post('/change-pass', async (req, res) => {
    console.log('\n[auth.routes.js] - change-pass')
    console.log(req.body)

    res.send(await authService.ChangePassword(req.body))
  })
}
