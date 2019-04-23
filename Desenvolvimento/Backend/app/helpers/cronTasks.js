const cron = require('node-cron')
const notService = require('../services/notificationSubscribe.service')

module.exports = {
  postNotificationToAll: () => {
    cron.schedule('1 * * * * *', async () => {
      notService.send()
    })
  }
}
