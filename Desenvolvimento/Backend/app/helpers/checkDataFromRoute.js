module.exports = {
  checkSet: (data, ...options) => {
    let payload = {}
    let errMessage = null
    let missingList = []

    options.map(item => {
      let keyFound = Object.keys(data).find(key => {
        if (item === key) return true
        return false
      })
      if (!keyFound) missingList.push(item)
      else payload[item] = data[item]
    })
    if (missingList.length > 0)
      errMessage = { err: `missing data`, missingList }

    return { payload, errMessage }
  },
  checkUpdate: (data, id, ...options) => {
    let payload = {}
    let argumentInvalid = []
    let errMessage = null

    if (!id) {
      errMessage = { err: 'id required' }
      return { payload, errMessage }
    }

    if (isNaN(id)) {
      errMessage = { err: 'invalid id ' }
      return { payload, errMessage }
    }

    Object.keys(data).map(item => {
      let keyFound = options.find(key => {
        if (item === key) return true
        return false
      })
      if (!keyFound) argumentInvalid.push(item)
      else payload[item] = data[item]
    })

    if (argumentInvalid.length > 0)
      errMessage = { err: `invalid argument`, argumentInvalid }

    return { payload, errMessage, id }
  },
  checkGet: (data, ...options) => {
    let payload = {}
    let argumentInvalid = []
    let errMessage = null
    if (Object.keys(data).length <= 0) errMessage = { err: 'invalid request' }
    Object.keys(data).map(item => {
      let keyFound = options.find(key => {
        if (item === key) return true
        return false
      })
      if (!keyFound) argumentInvalid.push(item)
      else payload[item] = data[item]
    })
    if (argumentInvalid.length > 0)
      errMessage = { err: `invalid argument`, argumentInvalid }
    return { payload, errMessage }
  }
}
