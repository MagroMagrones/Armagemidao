const notificationSubscribeController = require('../controllers/notificationSubscribe.controller')
const notificationService = require('./notification.service')
const webpush = require('web-push')
const moment = require('moment')
moment.locale('pt-br')
const PUBLIC_VAPID =
  'BCqegtcpZCh_OlZa2qupdwOFNDvUGjHkcMsfe5d65nl9Ohw5nKMJCR-wyGyH36AMWA_XjPdRf6vLcutjq6IzWKw'
const PRIVATE_VAPID = 'BMDU-Lax-MDbqmhTeFBvr-bXux8UyxKjGRU62Mqwuy8'
webpush.setVapidDetails('mailto:test@bbwatch.com', PUBLIC_VAPID, PRIVATE_VAPID)
module.exports = {
  getAll: async () => {
    let res = await notificationSubscribeController.getAll()
    return res
  },
  get: async data => {
    return 'not implemented yet'
  },
  set: async data => {
    let payload = {
      id_usuario: data.id_usuario,
      endpoint: data.sub.endpoint,
      expirationTime: data.sub.expirationTime,
      p256dh: data.sub.keys.p256dh,
      auth: data.sub.keys.auth
    }
    let subscription = await notificationSubscribeController.set(payload)
    return subscription
  },
  update: async data => {
    return 'not implemented yet'
  },
  sendToAll: async () => {
    const notificationPayload = {
      notification: {
        title: 'New Notification',
        body: 'This is the body of the notification',
        icon: 'assets/icons/icon-512x512.png',
        actions: [
          {
            action: 'explore',
            title: 'Explore this new world'
          },
          {
            action: 'close',
            title: 'Close notification'
          }
        ]
      }
    }
    let subscriptions = await notificationSubscribeController.getAll()
    console.log({ subscriptions })

    const promises = []
    subscriptions.forEach(subscription => {
      promises.push(
        webpush.sendNotification(
          {
            endpoint: subscription.endpoint,
            expirationTime: subscription.expirationTime,
            keys: {
              p256dh: subscription.p256dh,
              auth: subscription.auth
            }
          },
          JSON.stringify(notificationPayload)
        )
      )
    })
    return Promise.all(promises).then(res => res)
  },
  send: async () => {
    let day = moment().format('YYYY/MM/DD ')
    let time = moment().format('LT')
    time = time.toString() + ':00'

    const notifications = await notificationService.get({
      dia: day,
      hora: time
    })

    const promises = []
    notifications.map(res => {
      let notificationPayload = {
        
        notification: {
          title: res.titulo,
          body: res.texto,
          icon: 'assets/icons/icon-512x512.png'
          // actions: [
          //   {
          //     action: 'explore',
          //     title: 'Explore this new world'
          //   },
          //   {
          //     action: 'close',
          //     title: 'Close notification'
          //   }
          // ]
        }
      }

      promises.push(
        webpush.sendNotification(
          {
            endpoint: res.endpoint,
            expirationTime: res.expirationTime,
            keys: {
              p256dh: res.p256dh,
              auth: res.auth
            }
          },
          JSON.stringify(notificationPayload)
        )
      )
    })

    return Promise.all(promises).then(res => res)
  }
}
