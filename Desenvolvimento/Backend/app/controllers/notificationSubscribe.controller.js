const notificationSubscribeModel = require('../models/notificationSubscribe.model')

module.exports = {
  getAll: async () => {
    const notificationSubscribes = await notificationSubscribeModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (notificationSubscribes.length > 0) return notificationSubscribes
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    console.log('\n[subscription.controller.js] - set')
    const subscription = await notificationSubscribeModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!subscription['dataValues'].id) return { err: 'error on subscription' }
    else
      return {
        message: 'subscription',
        id: subscription.dataValues.id
      }
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
