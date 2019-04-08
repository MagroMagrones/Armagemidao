const profileController = require('../controllers/profile.controller')
module.exports = {
  getAll: async () => {
    let res = await profileController.getAll()
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
