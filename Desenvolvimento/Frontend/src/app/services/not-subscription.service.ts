import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { SwPush } from '@angular/service-worker'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class NotSubscriptionService {
  readonly VAPID_PUBLIC_KEY =
    'BCqegtcpZCh_OlZa2qupdwOFNDvUGjHkcMsfe5d65nl9Ohw5nKMJCR-wyGyH36AMWA_XjPdRf6vLcutjq6IzWKw'
  constructor(
    private http: HttpClient,
    private swPush: SwPush,
    private authService: AuthService
  ) {}
  url = environment.api_url + '/notificationSubscribe'

  postSub(data) {
    console.log('sub service')

    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  subscribe() {
    if (this.swPush.isEnabled) {
      if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification')
      }
      if (
        Notification.permission === 'default' ||
        Notification.permission !== 'granted'
      ) {
        console.log('swPush')
        this.swPush
          .requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
          })
          .then(async sub => {
            let data = {}
            data['id_usuario'] = await this.authService.getId()
            data['sub'] = sub
            console.log(data)
            await this.postSub(data)
          })
          .catch(err =>
            console.error('Could not subscribe to notifications', err)
          )
      }
    }
  }
}
