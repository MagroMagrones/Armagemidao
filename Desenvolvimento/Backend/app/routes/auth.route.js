const authService = require('../services/auth.service')
module.exports = app => {
  app.post('/sign-in', async (req, res) => {
    console.log('\n[auth.routes.js] - sign-in')
    let teste = await authService.Login(req.body)
    console.log(teste)

    res.send(teste)
  })

  app.post('/sign-up', async (req, res) => {
    console.log('\n[auth.routes.js] - sign-up')

    res.send(await authService.RegisterUser(req.body))
  })
  app.post('/sign-out', async (req, res) => {
    console.log('\n[auth.routes.js] - sign-out')
    res.send(await authService.SignUserOut(req.body))
  })

  app.post('/change-pass', async (req, res) => {
    console.log('\n[auth.routes.js] - change-pass')
    console.log(req.body)

    res.send(await authService.ForgotenPassword(req.body))
  })

  app.post('/confirm-pass', async (req, res) => {
    console.log('\n[auth.routes.js] - change-pass')
    console.log(req.body)

    res.send(await authService.confirmPassword(req.body))
  })
}
