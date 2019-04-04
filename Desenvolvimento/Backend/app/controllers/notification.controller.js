notificationModel = require('../models/notification.model')

module.exports = {
  getAll: async () => {
    notifications = await notificationModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (notifications.length > 0) return notifications
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
