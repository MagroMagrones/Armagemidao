import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  constructor(private http: HttpClient) {}
  url = environment.api_url + '/child'
  getchildren() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        res => {
          console.log({ children: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  getchild(data) {
    console.log({ data })

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/find?${data.key}=${data.value}`).subscribe(
        res => {
          console.log({ childs: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  postchild(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(
        res => {
          console.log({ children: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  putchild(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url, data).subscribe(
        res => {
          console.log({ child: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
  deletechild(data) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url, data).subscribe(
        res => {
          console.log({ child: res })

          resolve(res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
