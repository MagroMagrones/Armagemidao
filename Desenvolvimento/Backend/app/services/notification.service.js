const notificationController = require('../controllers/notification.controller')
module.exports = {
  getAll: async () => {
    let res = await notificationController.getAll()
    return res
  },
  get: async data => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
