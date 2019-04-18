const notificationController = require('../controllers/notification.controller')

module.exports = {
  getAll: async () => {
    let notifications = await notificationController.getAll()

    return notifications
  },
  get: async data => {
    let notifications = await notificationController.get(data)

    return notifications
  },
  set: async data => {
    let notification = await notificationController.set(data)

    return notification
  },
  update: async data => {
    return 'not implemented yet'
  }
}
